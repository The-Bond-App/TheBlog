// app/page.jsx
import FullPage from '../src/components/FullPage';
import { getAllPostsMeta } from '../src/data/FetchStaticPosts.server';

export const dynamic = 'force-static'; // force SSG (build-time)

// Enhanced homepage metadata (Next.js App Router)
export const metadata = {
  title: 'Blog Home | The Bond Company',
  description: 'Explore our latest posts on mindfulness, wellness, and personal growth. Discover practical guides for intentional living.',
  openGraph: {
    title: 'The Bond Company | Latest Articles',
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


const POSTS_PER_PAGE = 9;

export default function HomePage() {
  const all = getAllPostsMeta();
  const totalPages = Math.max(1, Math.ceil(all.length / POSTS_PER_PAGE));
  const posts = all.slice(0, POSTS_PER_PAGE);

  return (
    <FullPage
      key="page-1"
      initialPosts={posts}
      initialPage={1}
      totalPages={totalPages}
      postsPerPage={POSTS_PER_PAGE}
    />
  );
}
