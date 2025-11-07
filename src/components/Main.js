"use client"
import { useState, useEffect } from 'react';
import { categoryMap } from '../constants/categories';

import Hero from './Hero'
import Footer from './Footer'
import SubscribeBanner from '../ui/SubscribeBanner'
import CategoryFilter from '../ui/CategoryFilter'
import usePosts from '../hooks/usePosts'

// Beautiful Loading Component with Hero Skeleton
function PostsLoader() {
  return (
    <div className="py-10">
      {/* Animated Loading Bar with Glow */}
      <div className="max-w-3xl w-full mx-auto px-6 min-h-[60vh] flex items-center justify-center">
        <div className="w-full">
          <div className="relative h-2 bg-gradient-to-r from-amber-950/40 via-orange-950/40 to-rose-950/40 rounded-full overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-400 to-rose-500 rounded-full" 
                 style={{
                   width: '45%',
                   animation: 'shimmer 2s ease-in-out infinite',
                   boxShadow: '0 0 20px rgba(251, 191, 36, 0.5), 0 0 40px rgba(251, 146, 60, 0.3)'
                 }} />
          </div>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-2 h-2 rounded-full bg-orange-400 animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-2 h-2 rounded-full bg-rose-400 animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
          <p className="text-center text-amber-200/80 mt-4 text-sm tracking-wider">Curating your reading experience</p>
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
      
      {/* Hero Post Skeleton */}
      <div className="mb-20 animate-pulse mt-10">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-950/30 via-orange-950/30 to-rose-950/30 border border-amber-800/30 backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[400px] bg-gradient-to-br from-amber-900/20 via-orange-900/20 to-rose-900/20">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-950/60 via-orange-950/40 to-transparent animate-pulse" />
            </div>
            <div className="p-12 flex flex-col justify-center space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-3 bg-amber-800/40 rounded w-16" />
                <div className="w-1 h-1 rounded-full bg-amber-600/40" />
                <div className="h-3 bg-amber-800/40 rounded w-20" />
              </div>
              <div className="space-y-3">
                <div className="h-8 bg-amber-800/40 rounded w-full" />
                <div className="h-8 bg-amber-800/40 rounded w-5/6" />
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-amber-800/30 rounded w-full" />
                <div className="h-4 bg-amber-800/30 rounded w-full" />
                <div className="h-4 bg-amber-800/30 rounded w-3/4" />
              </div>
              <div className="h-4 bg-amber-800/40 rounded w-24" />
            </div>
          </div>
        </div>
      </div>

      {/* Skeleton Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="animate-pulse" style={{ animationDelay: `${i * 100}ms` }}>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-950/30 via-orange-950/30 to-rose-950/30 border border-amber-800/30 backdrop-blur-sm">
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-900/20 via-orange-900/20 to-rose-900/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-amber-950/60 via-orange-950/30 to-transparent" />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-3 bg-amber-800/40 rounded w-12" />
                  <div className="w-1 h-1 rounded-full bg-amber-600/40" />
                  <div className="h-3 bg-amber-800/40 rounded w-16" />
                </div>
                <div className="h-6 bg-amber-800/40 rounded w-full" />
                <div className="h-4 bg-amber-800/30 rounded w-full" />
                <div className="h-4 bg-amber-800/30 rounded w-4/5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Error Component
function PostsError({ error }) {
  return (
    <div className="py-20 text-center animate-[fadeIn_0.6s_ease-out]">
      <div className="max-w-md mx-auto">
        <div className="text-rose-400 text-6xl mb-4">⚠</div>
        <h3 className="text-2xl font-light mb-2 text-amber-100">Oops, something went wrong</h3>
        <p className="text-rose-400">{error}</p>
      </div>
    </div>
  );
}

export default function Main({posts}) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [minLoadingTime, setMinLoadingTime] = useState(true);
  const { blogPosts, loading, error } = usePosts(selectedCategory);

  // Ensure minimum 3 second loading time
  useEffect(() => {
    setMinLoadingTime(true);
    const timer = setTimeout(() => {
      setMinLoadingTime(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const isLoading = loading || minLoadingTime;

  const heroPost = blogPosts.find(p => p.featured) || blogPosts[0];
  const remainingPosts = blogPosts.filter(p => p.id !== heroPost?.id);

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
          onCategoryChange={setSelectedCategory}
        />

        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Show loader only in posts area */}
          {isLoading ? (
            <PostsLoader />
          ) : error ? (
            <PostsError error={error} />
          ) : blogPosts.length === 0 ? (
            <div className="text-center py-20 animate-[fadeIn_0.6s_ease-out]">
              <p className="text-amber-200 text-lg">No posts found in this category.</p>
            </div>
          ) : (
            <>
              {/* Hero Post with Fade In */}
              {heroPost && (
                <article className="mb-20 group cursor-pointer animate-[fadeIn_0.8s_ease-out]">
                  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-100 via-orange-50 to-rose-50 border border-amber-300/50 hover:border-amber-400 shadow-2xl shadow-amber-950/40 transition-all duration-500">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                        <img 
                          src={heroPost.image} 
                          alt={heroPost.title}
                          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
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
                            {categoryMap[heroPost.category].name}
                          </span>
                        </div>
                        <h2 className="text-4xl font-light mb-4 leading-tight tracking-tight text-slate-900 group-hover:text-amber-900 transition-colors">
                          {heroPost.title}
                        </h2>
                        <p className="text-lg text-slate-700 font-light leading-relaxed mb-6">
                          {heroPost.excerpt}
                        </p>
                        <div className="inline-flex items-center text-amber-800 group-hover:text-amber-900 transition-colors">
                          <span className="text-base font-medium">Read article</span>
                          <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              )}

              {/* Grid of Posts with Staggered Fade In */}
              {remainingPosts.length > 0 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {remainingPosts.map((post, index) => (
                    <article 
                      key={post.id} 
                      className="group cursor-pointer animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-100 via-orange-50 to-rose-50 transition-all duration-500 border border-amber-300/50 hover:border-amber-400 shadow-xl shadow-amber-950/40">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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
                              {categoryMap[post.category].name}
                            </span>
                          </div>
                          <h3 className="text-xl font-light mb-2 leading-snug text-slate-900 group-hover:text-amber-900 transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-sm text-slate-700 font-light leading-relaxed">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}

              {/* Subscribe section with Fade In */}
              <div className="animate-[fadeIn_1s_ease-out]" style={{ animationDelay: '600ms' }}>
                <SubscribeBanner />
              </div>
            </>
          )}
        </div>
        <Footer />
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}