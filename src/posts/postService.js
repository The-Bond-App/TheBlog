import { 
  collection, getDocs, query, where, orderBy 
} from "firebase/firestore";
import { db } from "../firebaseConfig";
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
  instagramUrl: post.instagram_url
});

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