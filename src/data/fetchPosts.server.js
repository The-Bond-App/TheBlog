// src/services/fetchPosts.js
import { getAdminDb } from '../firebase/adminConfig';

export async function fetchInitialPosts(limitCount = 9) {
  const db = await getAdminDb();
  const snap = await db.collection('posts').orderBy('date', 'desc').limit(limitCount).get();

  return snap.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      title: data.title || "",
      author: data.author || "",
      slug: data.slug || "",
      description: data.description || "",
      content: data.content || "",
      category: data.category || "General",
      instagram_url: data.instagram_url || "",
      date: data.date?.toDate ? data.date.toDate().toISOString().slice(0,10) : data.date || null,
    };
  });
}
