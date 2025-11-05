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

// Custom hook to load posts
export default function usePosts(selectedCategory) {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
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
  }, [selectedCategory]);

  return { blogPosts, loading, error };
}