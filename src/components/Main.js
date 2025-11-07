"use client"
import { useState, useEffect } from 'react';
import { categoryMap } from '../constants/categories';
import Hero from './Hero'
import Footer from './Footer'
import SubscribeBanner from '../ui/SubscribeBanner'
import CategoryFilter from '../ui/CategoryFilter'
import usePosts from '../hooks/usePosts'

// Loading component (only shows during client-side filtering)
function PostsLoader() {
  return (
    <div className="py-10">
      <div className="max-w-3xl w-full mx-auto px-6 min-h-[60vh] flex items-center justify-center">
        <div className="w-full">
          <div className="relative h-2 bg-gradient-to-r from-amber-950/40 via-orange-950/40 to-rose-950/40 rounded-full overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-400 to-rose-500 rounded-full" 
                 style={{
                   width: '45%',
                   animation: 'shimmer 2s ease-in-out infinite',
                 }} />
          </div>
          <p className="text-center text-amber-200/80 mt-4 text-sm">Loading posts...</p>
        </div>
      </div>
    </div>
  );
}

// Error Component
function PostsError({ error }) {
  return (
    <div className="py-20 text-center">
      <div className="max-w-md mx-auto">
        <div className="text-rose-400 text-6xl mb-4">⚠</div>
        <h3 className="text-2xl font-light mb-2 text-amber-100">Something went wrong</h3>
        <p className="text-rose-400">{error}</p>
      </div>
    </div>
  );
}

export default function Main({ posts: initialPosts }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isFiltering, setIsFiltering] = useState(false);
  const { blogPosts, loading, error } = usePosts(selectedCategory);

  // Use server-provided posts as initial data
  const displayPosts = blogPosts.length > 0 ? blogPosts : initialPosts;
  
  // Handle category changes with loading state
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setIsFiltering(true);
  };

  // Reset filtering state when posts are loaded
  useEffect(() => {
    if (!loading && blogPosts.length > 0) {
      setIsFiltering(false);
    }
  }, [loading, blogPosts.length]);

  const heroPost = displayPosts.find(p => p.featured) || displayPosts[0];
  const remainingPosts = displayPosts.filter(p => p.id !== heroPost?.id);

  return (
    <div className="min-h-screen bg-slate-700 text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-500/25 via-orange-500/30 to-rose-500/28" />
      </div>

      <div className="relative z-10">
        {/* Hero Section - Always visible */}
        <Hero />
        
        {/* Category Filter - Always visible */}
        <CategoryFilter 
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />

        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Show loader ONLY during client-side filtering */}
          {isFiltering && loading ? (
            <PostsLoader />
          ) : error ? (
            <PostsError error={error} />
          ) : displayPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-amber-200 text-lg">No posts found in this category.</p>
            </div>
          ) : (
            <>
              {/* Hero Post - Server rendered, no loading state */}
              {heroPost && (
                <article className="mb-20 group cursor-pointer">
                  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-100 via-orange-50 to-rose-50 border border-amber-300/50 hover:border-amber-400 shadow-2xl shadow-amber-950/40 transition-all duration-500">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                        <img 
                          src={heroPost.image} 
                          alt={heroPost.title}
                          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                          loading="eager" // Important for above-fold image
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-950/80 via-amber-950/40 to-transparent" />
                      </div>
                      <div className="p-12 flex flex-col justify-center bg-gradient-to-br from-amber-50 to-orange-50">
                        <div className="text-sm text-amber-800 mb-4 flex items-center gap-3 tracking-wide uppercase font-medium">
                          <span>{heroPost.readTime}</span>
                          <span className="w-1 h-1 rounded-full bg-rose-800" />
                          <span>{heroPost.date}</span>
                          <span className="w-1 h-1 rounded-full bg-rose-800" />
                          <span className="px-3 py-1 bg-stone-200 text-rose-600 rounded-full text-[12px]">
                            {categoryMap[heroPost.category]?.name || heroPost.category}
                          </span>
                        </div>
                        <h1 className="text-4xl font-light mb-4 leading-tight tracking-tight text-slate-900 group-hover:text-amber-900 transition-colors">
                          {heroPost.title}
                        </h1>
                        <p className="text-lg text-slate-700 font-light leading-relaxed mb-6">
                          {heroPost.excerpt}
                        </p>
                        <a 
                          href={`/posts/${heroPost.slug}`}
                          className="inline-flex items-center text-amber-800 group-hover:text-amber-900 transition-colors"
                          aria-label={`Read article: ${heroPost.title}`}
                        >
                          <span className="text-base font-medium">Read article</span>
                          <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              )}

              {/* Grid of Posts */}
              {remainingPosts.length > 0 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {remainingPosts.map((post) => (
                    <article key={post.id} className="group cursor-pointer">
                      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-100 via-orange-50 to-rose-50 transition-all duration-500 border border-amber-300/50 hover:border-amber-400 shadow-xl shadow-amber-950/40">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            loading="lazy" // Lazy load below-fold images
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-amber-950/80 via-amber-950/30 to-transparent" />
                        </div>
                        
                        <div className="p-6">
                          <div className="text-xs text-amber-800 mb-3 flex items-center gap-2 font-medium">
                            <span>{post.readTime}</span>
                            <span className="w-1 h-1 rounded-full bg-amber-600" />
                            <span>{post.date}</span>
                            <span className="w-1 h-1 rounded-full bg-amber-600" />
                            <span className="px-2 py-1 bg-amber-200 text-amber-900 rounded-full text-[11px]">
                              {categoryMap[post.category]?.name || post.category}
                            </span>
                          </div>
                          <h2 className="text-xl font-light mb-2 leading-snug text-slate-900 group-hover:text-amber-900 transition-colors">
                            {post.title}
                          </h2>
                          <p className="text-sm text-slate-700 font-light leading-relaxed">
                            {post.excerpt}
                          </p>
                          <a 
                            href={`/posts/${post.slug}`}
                            className="mt-4 inline-block text-amber-700 hover:text-amber-800 text-sm font-medium"
                            aria-label={`Read article: ${post.title}`}
                          >
                            Read more →
                          </a>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}

              {/* Subscribe section */}
              <SubscribeBanner />
            </>
          )}
        </div>
        <Footer />
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(400%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}