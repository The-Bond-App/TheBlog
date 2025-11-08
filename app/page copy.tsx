// app/page.js
import Main from '../src/components/Main'
import { fetchPosts } from '../src/services/fetchPosts'

// Update twice daily (every 12 hours)
export const revalidate = 43200 // 12 hours in seconds

export default async function Home() {
  const posts = await fetchPosts();
  
  return <Main posts={posts} />; // Pass server-fetched posts
}