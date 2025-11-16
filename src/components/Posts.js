'use client'

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Map, ChevronDown, AlertCircle, RefreshCw } from 'lucide-react';

// Mock categories - replace with your actual import
const categories = [
  { name: 'Healing', icon: '🌱', description: 'Stories of recovery and growth', uuid: 'healing' },
  { name: 'Growth', icon: '🌳', description: 'Personal development insights', uuid: 'growth' },
  { name: 'Mindfulness', icon: '🧘', description: 'Present moment awareness', uuid: 'mindfulness' },
  { name: 'Connection', icon: '💫', description: 'Building meaningful relationships', uuid: 'connection' },
  { name: 'Creativity', icon: '🎨', description: 'Unleashing creative potential', uuid: 'creativity' },
  { name: 'Journey', icon: '🗺️', description: 'Life\'s path and adventures', uuid: 'journey' },
];

const primaryCategories = categories.slice(0, 4);
const secondaryCategories = categories.slice(4);

// Skeleton Components
function PostCardSkeleton() {
  return (
    <article className="group">
      <div className="space-y-4">
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-stone-200 animate-pulse" />
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-16 h-5 bg-stone-200 rounded-full animate-pulse" />
            <div className="w-12 h-5 bg-stone-200 rounded animate-pulse" />
          </div>
          <div className="w-3/4 h-6 bg-stone-200 rounded animate-pulse" />
          <div className="space-y-2">
            <div className="w-full h-4 bg-stone-200 rounded animate-pulse" />
            <div className="w-5/6 h-4 bg-stone-200 rounded animate-pulse" />
          </div>
        </div>
      </div>
    </article>
  );
}

function HeroSkeleton() {
  return (
    <div className="h-[60vh] relative overflow-hidden bg-stone-900">
      <div className="absolute inset-0 bg-stone-800 animate-pulse" />
      <div className="relative h-full flex items-end">
        <div className="max-w-6xl mx-auto px-6 pb-16 w-full">
          <div className="max-w-2xl space-y-4">
            <div className="w-24 h-8 bg-white/20 rounded-full animate-pulse" />
            <div className="w-3/4 h-12 bg-white/20 rounded animate-pulse" />
            <div className="w-full h-6 bg-white/20 rounded animate-pulse" />
            <div className="w-5/6 h-6 bg-white/20 rounded animate-pulse" />
            <div className="w-32 h-12 bg-white/20 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Error Component
function ErrorState({ onRetry }) {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20 text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
        <AlertCircle className="w-8 h-8 text-red-600" />
      </div>
      <h2 className="text-2xl font-bold text-stone-900 mb-3">
        Unable to Load Posts
      </h2>
      <p className="text-stone-600 mb-8 leading-relaxed">
        We're having trouble loading the blog posts right now. This could be a temporary connection issue.
      </p>
      <button
        onClick={onRetry}
        className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-800 transition-all"
      >
        <RefreshCw className="w-4 h-4" />
        Try Again
      </button>
    </div>
  );
}

// Empty State Component
function EmptyState({ category, onViewAll }) {
  return (
    <div className="text-center py-20">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-stone-100 rounded-full mb-6">
        <span className="text-3xl">📝</span>
      </div>
      <h3 className="text-xl font-semibold text-stone-900 mb-2">
        No Stories Found
      </h3>
      <p className="text-stone-600 mb-6">
        {category === 'All' 
          ? "We haven't published any stories yet. Check back soon!"
          : `No stories in ${category} yet.`
        }
      </p>
      {category !== 'All' && (
        <button
          onClick={onViewAll}
          className="px-6 py-2 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-800 transition-colors"
        >
          View All Posts
        </button>
      )}
    </div>
  );
}

// Post Card Component
function PostCard({ post, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article 
      onClick={onClick}
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="space-y-4">
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-stone-100">
          <img
            src={post.image || "https://images.unsplash.com/photo-1761839257046-84e95464cc52?q=80&w=1738&auto=format&fit=crop"}
            alt={post.title}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? 'scale-105' : 'scale-100'
            }`}
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1761839257046-84e95464cc52?q=80&w=1738&auto=format&fit=crop";
            }}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-stone-500">
            <span className="px-2 py-1 bg-stone-100 rounded-full">{post.category}</span>
            <span>{post.readTime || 5} min</span>
          </div>

          <h3 className="text-xl font-semibold text-stone-900 leading-tight group-hover:text-stone-600 transition-colors">
            {post.title}
          </h3>

          <p className="text-stone-600 text-sm leading-relaxed line-clamp-2">
            {post.description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [heroCategory, setHeroCategory] = useState('All');
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);
  const [isMounted, setIsMounted] = useState(false);




  // Wait for mount to avoid hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Fetch posts
  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Replace this with your actual fetch function
      // const data = await fetchInitialPosts(12);
      
      // Simulated API call - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock data - this will be replaced by your actual Firebase data
      const mockData = [
        {
          id: '1',
          title: "The Art of Letting Go",
          description: "Sometimes the hardest thing and the right thing are the same. Learning to release what no longer serves us opens doors to unexpected growth.",
          category: 'Healing',
          readTime: 8,
          date: '2025-11-05',
        },
        {
          id: '2',
          title: "Finding Your Voice",
          description: "Your story matters. Here's how to start telling it with confidence and authenticity.",
          category: 'Growth',
          readTime: 6,
          date: '2025-11-04',
        },
        {
          id: '3',
          title: "The Power of Pause",
          description: "In a world that glorifies hustle, rest becomes a radical act of self-care.",
          category: 'Mindfulness',
          readTime: 5,
          date: '2025-11-03',
        },
      ];
      
      setPosts(mockData);
    } catch (err) {
      console.error('Error fetching posts:', err);
      setError(err.message || 'Failed to load posts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const heroPost = posts.find(p => p.category === heroCategory) || posts[0];
  
  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(p => p.category === selectedCategory);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setHeroCategory(category === 'All' ? 'Healing' : category);
  };

  const handlePostClick = (post) => {
    setSelectedCategory(post.category);
    setHeroCategory(post.category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show error state
  if (error && !loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="h-[60vh] bg-stone-900" />
        <ErrorState onRetry={fetchPosts} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        {loading && !heroPost ? (
          <HeroSkeleton />
        ) : heroPost ? (
          <div  className="h-[60vh] relative overflow-hidden bg-stone-900">
            <motion.div 
              key={heroPost.id} 
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
             
            >
              <motion.img
                src={heroPost.image || "https://images.unsplash.com/photo-1761258772385-66e51635cf84?q=80&w=774&auto=format&fit=crop"}
                alt={heroPost.title}
                className="w-full h-full object-cover"
                
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1761258772385-66e51635cf84?q=80&w=774&auto=format&fit=crop";
                }}
              />
            </motion.div>
            <div className="relative h-full flex items-end">
              <div className="max-w-6xl mx-auto px-6 pb-16 w-full">
                <motion.div 
                  key={heroPost.id} 
                  className="max-w-2xl space-y-4"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <motion.span 
                    className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-base font-medium"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {heroPost.category}
                  </motion.span>
                  
                  <motion.h1 
                    className="text-5xl font-bold text-white leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {heroPost.title}
                  </motion.h1>
                  
                  <motion.p 
                    className="text-xl text-white/90 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  > 
                    {heroPost.description}
                  </motion.p>
                  
                  <motion.button 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-stone-900 rounded-full font-medium hover:bg-stone-100 transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read story
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>
        ) : null}

        {/* Category Tabs */}
        <div className="bg-stone-900 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between py-4">
              <button
                onClick={() => {
                  setHeroCategory('All');
                  setSelectedCategory('All');
                }}
                className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  heroCategory === 'All'
                    ? 'bg-white text-stone-900'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                All Posts
              </button>
 
              <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                {primaryCategories.map((cat) => (
                  <button
                    key={cat.uuid}
                    onClick={() => {
                      setHeroCategory(cat.name);
                      setSelectedCategory(cat.name);
                    }}
                    className={`px-5 py-2 rounded-full text-base font-medium whitespace-nowrap transition-all ${
                      heroCategory === cat.name
                        ? 'bg-white/90 text-stone-900'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
                
                <button
                  onClick={() => setShowMoreDropdown(!showMoreDropdown)}
                  className="pl-3 text-sm text-white/70 hover:text-white font-medium whitespace-nowrap transition-all flex items-center"
                >
                  More
                  <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${showMoreDropdown ? 'rotate-180' : ''}`} />
                </button>

                {showMoreDropdown && (
                  <>
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setShowMoreDropdown(false)}
                    />
                    
                    <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-stone-200 py-3 z-20">
                      {secondaryCategories.map((cat) => (
                        <button
                          key={cat.uuid}
                          onClick={() => {
                            setSelectedCategory(cat.name);
                            setHeroCategory(cat.name);
                            setShowMoreDropdown(false);
                          }}
                          className="w-full text-left px-4 py-3 hover:bg-stone-100 transition-colors flex items-start gap-3"
                        >
                          <span className="text-xl">{cat.icon}</span>
                          <div>
                            <div className="text-sm font-semibold text-stone-900">
                              {cat.name}
                            </div>
                            <div className="text-sm text-stone-500 mt-0.5">
                              {cat.description}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {[...Array(6)].map((_, i) => (
              <PostCardSkeleton key={i} />
            ))}
          </div>
        ) : filteredPosts.length === 0 ? (
          <EmptyState 
            category={selectedCategory}
            onViewAll={() => handleCategoryChange('All')}
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filteredPosts.map((post) => (
              <PostCard 
                key={post.id} 
                post={post} 
                onClick={() => handlePostClick(post)}
              />
            ))}
          </div>
        )}
      </section>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}