// app/posts/[slug]/page.js
import MinimalLayout from '../../../src/components/articles/MinimalLayout';
import { fetchSinglePostBySlug, fetchAllPostSlugs } from '../../../src/services/fetchPosts';

// ISR - wont revalidate, single post content wont change
export const revalidate = false;

// Generate metadata for SEO
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
  // Add validation
  if (!params.slug || params.slug === 'undefined') {
    return <div>Invalid post</div>;
  }

  const post = await fetchSinglePostBySlug(params.slug);
  
  if (!post) {
    return <div>Post not found</div>;
  }
  
  return <MinimalLayout post={post} />;
}