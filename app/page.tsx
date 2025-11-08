// Keep this as your final page.js
import Main from '../src/components/Main'
import { fetchInitialPosts } from '../src/services/fetchPosts'

export const revalidate = 43200

export default async function Home() {
  const posts = await fetchInitialPosts(6);
  return <Main posts={posts} />;
}