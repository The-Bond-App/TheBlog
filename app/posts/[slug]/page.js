// app/posts/[slug]/page.js
import MinimalLayout from '../../../src/components/articles/MinimalLayout';
import { fetchSinglePostBySlug, fetchAllPostSlugs } from '../../../src/services/fetchPosts';

// ISR - wont revalidate, single post content wont change
export const revalidate = false;

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  // Await the params promise
  const { slug } = await params;
  
  const post = await fetchSinglePostBySlug(slug);
  
  return {
    title: post?.title || 'Post Not Found',
    description: post?.description || 'Read this post on The Bond Blog',
    openGraph: {
      title: post?.title,
      description: post?.description,
      images: [post?.image || '/assets/logo.png'],
    },
  };
}

// Generate all post paths at build time
export async function generateStaticParams() {
  try {
    const slugs = await fetchAllPostSlugs();
    
    // STRICT FILTERING
    const validSlugs = slugs.filter(slug => {
      const isValid = slug && 
                     typeof slug === 'string' && 
                     slug.length > 0 && 
                     slug !== 'undefined' && 
                     slug !== 'null';
      
      if (!isValid) {
        console.log('❌ Filtering out invalid slug:', slug);
      }
      return isValid;
    });
    
    console.log('✅ Valid slugs for build:', validSlugs);
    return validSlugs.map((slug) => ({ slug }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export default async function PostPage({ params }) {
  // Await the params promise first!
  const { slug } = await params;
  
  // Add validation
  if (!slug || slug === 'undefined') {
    return <div>Invalid post</div>;
  }

  const post = await fetchSinglePostBySlug(slug);
  
  if (!post) {
    return <div>Post not found for slug: {slug}</div>;
  }
  
  return <MinimalLayout post={post} />;
}