// app/page/[page]/page.jsx
import FullPage from '../../../src/components/FullPage';
import { getAllPostsMeta } from '../../../src/data/FetchStaticPosts.server';

import { notFound } from 'next/navigation';

export const dynamic = 'force-static';
const POSTS_PER_PAGE = 9;

export async function generateStaticParams() {
  const all = getAllPostsMeta();
  const totalPages = Math.max(1, Math.ceil(all.length / POSTS_PER_PAGE));
  return Array.from({ length: totalPages }).map((_, i) => ({ page: String(i + 1) }));
}

// Make the component async and await params
export default async function PaginatedPage({ params }) {
  // unwrap params (params is a thenable in this Next.js version)
  const p = await params;
  const page = Math.max(1, Number(p.page || 1));

  const all = getAllPostsMeta();
  const totalPages = Math.max(1, Math.ceil(all.length / POSTS_PER_PAGE));

  if (page > totalPages || page < 1) return notFound();

  const posts = all.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  return (
    <FullPage
      key={`page-${page}`}
      initialPosts={posts}
      initialPage={page}
      totalPages={totalPages}
      postsPerPage={POSTS_PER_PAGE}
    />
  );
}
