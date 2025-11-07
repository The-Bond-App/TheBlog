// app/debug/connection-test/page.js
import { fetchAllPosts } from '../../src/services/fetchPosts';

export default async function ConnectionTest() {
  const posts = await fetchAllPosts();
  
  return (
    <div>
      <h1>Connection Test</h1>
      <h2>Environment Variables:</h2>
      <ul>
        <li>Project ID: {process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}</li>
        <li>API Key Set: {process.env.NEXT_PUBLIC_FIREBASE_API_KEY ? '✅ YES' : '❌ NO'}</li>
        <li>Node Environment: {process.env.NODE_ENV}</li>
      </ul>
      
      <h2>Firebase Results:</h2>
      <p>Posts found: {posts.length}</p>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
}