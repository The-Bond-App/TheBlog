import { useState, useEffect } from 'react';
import { fetchPostsByCategory } from '../services/fetchPosts';

// Helper function to calculate read time from content
const calculateReadTime = (content) => {
  if (!content) return '5 min';
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min`;
};

// Custom hook to load posts - ONLY for client-side filtering
export default function usePosts(selectedCategory) {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(false); // Start as false, only true when filtering
  const [error, setError] = useState(null);

  useEffect(() => {
    // Only fetch if category is NOT 'all' (meaning user is filtering)
    if (selectedCategory !== 'all') {
      const loadPosts = async () => {
        try {
          setLoading(true);
          console.log('🔄 Client-side fetching for category:', selectedCategory);
          
          const posts = await fetchPostsByCategory(selectedCategory);
          
          // Transform posts to match your component's expected format
          const transformedPosts = posts.map(post => ({
            id: post.id,
            title: post.title,
            excerpt: post.description,
            image: post.image,
            readTime: calculateReadTime(post.content),
            category: post.category,
            date: post.dateFormatted,
            featured: post.highlight,
            slug: post.slug
          }));
          
          setBlogPosts(transformedPosts);
          setError(null);
        } catch (err) {
          console.error('Error loading posts:', err);
          setError('Failed to load posts. Please try again later.');
        } finally {
          setLoading(false);
        }
      };

      loadPosts();
    } else {
      // When category is 'all', clear client-side posts to use server data
      setBlogPosts([]);
      setLoading(false);
    }
  }, [selectedCategory]);

  return { blogPosts, loading, error };
}