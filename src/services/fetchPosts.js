import { 
  collection, 
  query, 
  orderBy, 
  startAfter, 
  limit, 
  getDocs 
} from "firebase/firestore";
import { db } from "../firebaseConfig"
import formatPostDate from "./dateHandler";

// Convert Firestore Timestamps to plain objects
const convertFirestoreData = (data) => {
  if (!data) return null;
  
  // Create a clean copy
  const cleanData = { ...data };
  
  // Convert Firestore Timestamp to ISO string
  if (cleanData.date && typeof cleanData.date.toDate === 'function') {
    cleanData.date = cleanData.date.toDate().toISOString();
  }
  
  // Convert any other Timestamp fields
  Object.keys(cleanData).forEach(key => {
    const value = cleanData[key];
    if (value && typeof value.toDate === 'function') {
      cleanData[key] = value.toDate().toISOString();
    }
  });
  
  return cleanData;
};

const transformPost = (post) => {
  const convertedPost = convertFirestoreData(post);
  return {
    id: convertedPost.id,
    title: convertedPost.title,
    author: convertedPost.author,
    slug: convertedPost.slug,
    description: convertedPost.description,
    content: convertedPost.content,
    date: convertedPost.date,
    dateFormatted: formatPostDate(convertedPost.date),
    category: convertedPost.category,
    highlight: convertedPost.highlight,
    related_articles: convertedPost.related_articles,
    instagramUrl: convertedPost.instagram_url,
    image: convertedPost.image || 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80'
  };
};


export const fetchInitialPosts = async (limitCount = 6) => {
  console.log('🚀 Starting fetchInitialPosts...');
  
  try {
    // Try without ordering first to see if we get any posts
    const q = query(
      collection(db, "posts"),
      limit(limitCount)  // Use limitCount to avoid naming conflict
    );

    console.log('📡 Executing Firestore query...');
    const snapshot = await getDocs(q);
    console.log('✅ Query completed, documents:', snapshot.size);

    const posts = snapshot.docs.map(doc => {
      const data = doc.data();
      console.log('📄 Document data:', data);
      
      let dateValue = data.date;
      
      // Handle different date formats
      if (dateValue && typeof dateValue.toDate === 'function') {
        // It's a Firestore Timestamp
        dateValue = dateValue.toDate().toISOString();
      } else if (typeof dateValue === 'string') {
        // It's already a string - keep it as is
      } else {
        // Fallback to current date
        dateValue = new Date().toISOString();
      }
      
      return {
        id: doc.id,
        title: data.title || 'Untitled',
        author: data.author || 'Unknown',
        slug: data.slug || doc.id,
        description: data.description || 'No description',
        content: data.content || '',
        date: dateValue,
        dateFormatted: formatDateForDisplay(dateValue),
        category: data.category || 'general',
        highlight: data.highlight || false,
        image: data.image || 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80',
        readTime: '5 min'
      };
    });
    
    console.log('🎉 Final posts array:', posts.length);
    return posts;
  } catch (error) {
    console.error('💥 CRITICAL ERROR in fetchInitialPosts:', error);
    console.error('Error details:', error.message);
    return [];
  }
};

// Simple date formatter
const formatDateForDisplay = (dateString) => {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch {
    return 'Recent';
  }
};


// Fetch latest 12 posts
export const fetchPosts = async (lastDoc = null, limitCount = 12) => {
  try {
    let q;
    
    if (lastDoc) {
      // Get posts AFTER the last document
      q = query(
        collection(db, "posts"),
        orderBy("date", "desc"),
        startAfter(lastDoc), // Pass the document snapshot, not just date
        limit(limitCount)
      );
    } else {
      // First page
      q = query(
        collection(db, "posts"),
        orderBy("date", "desc"),
        limit(limitCount)
      );
    }

    const snapshot = await getDocs(q);
    const posts = snapshot.docs.map(doc => transformPost({
      id: doc.id,
      ...doc.data()
    }));
    
    return {
      posts,
      lastDoc: snapshot.docs[snapshot.docs.length - 1], // Return the last document for pagination
      hasMore: posts.length === limitCount
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return { posts: [], lastDoc: null, hasMore: false };
  }
};


// Fetch single post by slug
export const fetchSinglePostBySlug = async (slug) => {
  if (!slug || slug === 'undefined' || slug === 'null') {
    console.log('❌ Invalid slug detected:', slug);
    return null;
  }

  try {
    const snapshot = await getDocs(
      query(
        collection(db, "posts"), 
        where("slug", "==", slug)
      )
    );
    
    const doc = snapshot.docs[0];
    if (!doc) {
      console.log('❌ No post found for slug:', slug);
      return null;
    }
    
    return transformPost({ id: doc.id, ...doc.data() });
  } catch (error) {
    console.error('Error fetching post:', error, 'Slug:', slug);
    return null;
  }
};

// Fetch all posts
export const fetchAllPosts = async () => {
  try {
    const q = query(
      collection(db, "posts"),
      orderBy("date", "desc")
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => transformPost({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error fetching all posts:', error);
    return [];
  }
};

// Fetch posts by category
export const fetchPostsByCategory = async (category) => {
  try {
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
  } catch (error) {
    console.error('Error fetching posts by category:', error);
    return [];
  }
};

// Get all slugs for static generation
export const fetchAllPostSlugs = async () => {
  try {
    const snapshot = await getDocs(collection(db, "posts"));
    const slugs = snapshot.docs
      .map(doc => {
        const data = doc.data();
        return data.slug;
      })
      .filter(slug => slug && slug !== 'undefined' && slug !== 'null' && typeof slug === 'string');
    
    console.log('✅ Valid slugs found:', slugs.length);
    return slugs;
  } catch (error) {
    console.error('Error fetching slugs:', error);
    return [];
  }
};

// Debug function to see all posts
export const debugAllPosts = async () => {
  try {
    const snapshot = await getDocs(collection(db, "posts"));
    const posts = snapshot.docs.map(doc => {
      const rawData = { id: doc.id, ...doc.data() };
      const convertedData = convertFirestoreData(rawData);
      return convertedData;
    });
    
    console.log('=== DEBUG ALL POSTS ===');
    posts.forEach(post => {
      console.log('ID:', post.id, 'Slug:', post.slug, 'Title:', post.title, 'Date:', post.date);
    });
    console.log('=== END DEBUG ===');
    
    return posts;
  } catch (error) {
    console.error('Debug error:', error);
    return [];
  }
};

// Find posts with bad slugs
export const findPostsWithBadSlugs = async () => {
  try {
    const snapshot = await getDocs(collection(db, "posts"));
    const badPosts = [];
    
    snapshot.docs.forEach(doc => {
      const data = doc.data();
      if (!data.slug || data.slug === 'undefined' || data.slug === 'null') {
        badPosts.push({
          id: doc.id,
          title: data.title,
          slug: data.slug
        });
      }
    });
    
    if (badPosts.length > 0) {
      console.log('🚨 POSTS WITH BAD SLUGS:', badPosts);
    } else {
      console.log('✅ No posts with bad slugs found');
    }
    
    return badPosts;
  } catch (error) {
    console.error('Error finding bad slugs:', error);
    return [];
  }
};