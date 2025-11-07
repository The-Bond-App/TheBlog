// app/page.js
import Main from '../src/components/Main'
import { fetchCurrentPosts } from '../src/services/fetchPosts'

export const revalidate = 3600 // 1 hour

export default async function Home() {
  const posts = await fetchCurrentPosts();
  
  return <Main posts={posts} />; // Pass server-fetched posts
}