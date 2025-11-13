// app/featured/[slug]/page.js
import MinimalLayout from '../../../src/components/articles/MinimalLayout';
import { getHighlightedPostMetadata, HIGHLIGHTED_SLUGS } from '../../../src/data/highlightedPosts';
import { loadMarkdownPost } from '../../../src/services/loadMarkdownPost';

// ISR configuration
export const revalidate = false;

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  // Load from markdown file
  const post = await loadMarkdownPost(slug);
  
  // Fallback to metadata if markdown fails
  const metadata = post || getHighlightedPostMetadata(slug);
  
  return {
    title: metadata?.title || 'Featured Post Not Found',
    description: metadata?.description || 'Read this featured post',
    openGraph: {
      title: metadata?.title,
      description: metadata?.description,
      images: [metadata?.image || '/assets/logo.png'],
    },
  };
}

// Generate all featured post paths at build time
export async function generateStaticParams() {
  console.log('📌 Building featured posts:', HIGHLIGHTED_SLUGS);
  
  return HIGHLIGHTED_SLUGS.map((slug) => ({ slug }));
}

export default async function FeaturedPostPage({ params }) {
  const { slug } = await params;
  
  // Validate slug
  if (!slug || slug === 'undefined') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Invalid post</h1>
          <a href="/" className="text-blue-600 hover:underline mt-4 inline-block">
            Return to home
          </a>
        </div>
      </div>
    );
  }

  console.log(`📌 Loading featured post from markdown: ${slug}`);
  
  // Load from markdown file
  const post = await loadMarkdownPost(slug);
  
  // Handle not found
  if (!post) {
    console.error(`❌ Featured post not found: ${slug}`);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Featured post not found</h1>
          <p className="text-gray-600">The post "{slug}" could not be found.</p>
          <a href="/" className="text-blue-600 hover:underline mt-4 inline-block">
            Return to home
          </a>
        </div>
      </div>
    );
  }
  
  // Log for debugging
  console.log(`✅ Successfully loaded featured post: ${slug}`);
  
  return <MinimalLayout post={post} />;
}