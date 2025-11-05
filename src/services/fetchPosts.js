import { 
  collection, getDocs, query, where, orderBy 
} from "firebase/firestore";
import { db } from "../firebaseConfig"
import formatPostDate from "./dateHandler";

const transformPost = (post) => ({
  id: post.id,
  title: post.title,
  author: post.author,
  slug: post.slug,
  description: post.description,
  content: post.content,
  date: post.date,
  dateFormatted: formatPostDate(post.date),
  category: post.category,
  highlight: post.highlight,
  related_articles: post.related_articles,
  instagramUrl: post.instagram_url,
  image: post.image || 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80'
});

// Fetch highlighted posts (your existing function)
export const fetchCurrentPosts = async () => {
  const q = query(
    collection(db, "posts"),
    where("highlight", "==", true),
    orderBy("date", "desc")
  );

  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => transformPost({
    id: doc.id,
    ...doc.data()
  }));
};

// Fetch single post by slug (your existing function)
export const fetchSinglePostBySlug = async (slug) => {
  const q = query(
    collection(db, "posts"),
    where("slug", "==", slug)
  );

  const snapshot = await getDocs(q);
  return snapshot.docs.length > 0 
    ? transformPost({
        id: snapshot.docs[0].id,
        ...snapshot.docs[0].data()
      })
    : null;
};

// NEW: Fetch all posts (for blog list page with ISR)
export const fetchAllPosts = async () => {
  const q = query(
    collection(db, "posts"),
    orderBy("date", "desc")
  );

  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => transformPost({
    id: doc.id,
    ...doc.data()
  }));
};

// NEW: Fetch posts by category (for filtering)
export const fetchPostsByCategory = async (category) => {
  if (category === 'all') {
    return fetchAllPosts();
  }

  const q = query(
    collection(db, "posts"),
    where("category", "==", category),
    orderBy("date", "desc")
  );

  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => transformPost({
    id: doc.id,
    ...doc.data()
  }));
};

// NEW: Get all slugs (for static generation)
export const fetchAllPostSlugs = async () => {
  const snapshot = await getDocs(collection(db, "posts"));
  return snapshot.docs
    .map(doc => doc.data().slug)
    .filter(Boolean);
};