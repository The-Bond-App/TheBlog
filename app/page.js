// app/page.jsx
import { getAllPosts } from '../src/data/FetchStaticPosts';
import FullPage from '../src/components/FullPage';

// This tells Next.js to generate this page at BUILD TIME
export const dynamic = 'force-static';

// Enhanced metadata for homepage
export const metadata = {
  title: 'Blog Home | The Bond Company',
  description: 'Explore our latest posts on mindfulness, wellness, and personal growth. Discover practical guides for intentional living.',
  openGraph: {
    title: 'The Bond Company| Latest Articles',
    description: 'Explore our latest posts on mindfulness, wellness, and personal growth.',
    url: 'https://blog.thebond.company',
    type: 'website',
    images: [
      {
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'The Bond Company Homepage',
      },
    ],
  },
  alternates: {
    canonical: 'https://blog.thebond.company',
  },
};

export default function HomePage() {
  // This runs at BUILD TIME on the server
  const posts = getAllPosts();
  
  return <FullPage initialPosts={posts} />;
}

