// app/page.tsx
import Main from '../src/components/Main'
import { fetchCurrentPosts } from '../src/services/fetchPosts'

// NEXTJS ISR - This is already perfect!
export const revalidate = 86400; // 24 hours ✅

// ADD THIS FUNCTION:
export async function generateMetadata() {
  return {
    title: "The Bond Blog | Sticky Notes for Your Soul's Refrigerator",
    description: "The Bond Blog is a cozy corner of the internet for your late-night thoughts and Tuesday blues.",
  }
}

// ADD THIS FUNCTION TO FETCH DATA:
async function getPosts() {
  const posts = await fetchCurrentPosts();
  return posts;
}

export default async function Home() {
  const posts = await getPosts(); // Server-side fetch!
  
  return (
    <>
      <Main posts={posts} /> {/* Pass data to your component */}
    </>
  );
}