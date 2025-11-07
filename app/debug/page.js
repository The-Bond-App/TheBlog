// app/debug/page.js
'use client'
import { debugAllPosts, fetchAllPostSlugs } from '../../src/services/fetchPosts';

export default async function DebugPage() {
  const allPosts = await debugAllPosts();
  const slugs = await fetchAllPostSlugs();
  
  return (
    <div>
      <h1>Debug Posts</h1>
      <h2>All Posts:</h2>
      <pre>{JSON.stringify(allPosts, null, 2)}</pre>
      <h2>Slugs:</h2>
      <pre>{JSON.stringify(slugs, null, 2)}</pre>
    </div>
  );
}