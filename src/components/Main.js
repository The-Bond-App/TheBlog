"use client"
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, SquareArrowOutUpRight } from 'lucide-react';


import Hero from './Hero'
import Footer from './Footer'
import SubscribeBanner from '../ui/SubscribeBanner'
import CategoryFilter from '../ui/CategoryFilter'

import usePosts from '../hooks/usePosts'

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Load posts using the custom hook
  const { blogPosts, loading, error } = usePosts(selectedCategory);

    // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-600/20 via-orange-600/20 to-rose-600/20" />
        </div>
        <div className="relative z-10 text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-amber-500 border-t-transparent mb-4"></div>
          <p className="text-amber-200 text-lg">Loading posts...</p>
        </div>
      </div>
    );
  }

    // Show error state
  if (error) {
    return (
      <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-600/20 via-orange-600/20 to-rose-600/20" />
        </div>
        <div className="relative z-10 text-center max-w-md mx-auto px-6">
          <div className="text-rose-400 text-6xl mb-4">⚠</div>
          <h2 className="text-2xl font-light mb-2 text-amber-100">Oops, something went wrong</h2>
          <p className="text-rose-400">{error}</p>
        </div>
      </div>
    );
  }

  {/*const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);*/}
    

  const heroPost = blogPosts.find(p => p.featured) || blogPosts[0];
  const remainingPosts = blogPosts.filter(p => p.id !== heroPost?.id);

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-600/20 via-orange-600/20 to-rose-600/20" />
      </div>
      
      <div className="relative z-10">
        {/* Hero Section */}
        <Hero />
        {/* Category Filter */}
        <CategoryFilter 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Hero Post */}
          {heroPost && (
            <article className="mb-20 group cursor-pointer">
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
                    <div className="text-xs text-amber-800 mb-4 flex items-center gap-3 tracking-wide uppercase font-medium">
                      <span>{heroPost.readTime}</span>
                      <span className="w-1 h-1 rounded-full bg-amber-600" />
                      <span>{heroPost.date}</span>
                    </div>
                    <h2 className="text-4xl font-light mb-4 leading-tight tracking-tight text-slate-900 group-hover:text-amber-900 transition-colors">
                      {heroPost.title}
                    </h2>
                    <p className="text-lg text-slate-700 font-light leading-relaxed mb-6">
                      {heroPost.excerpt}
                    </p>
                    <div className="inline-flex items-center text-amber-800 group-hover:text-amber-900 transition-colors">
                      <span className="text-sm font-medium">Read article</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
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
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-amber-950/80 via-amber-950/30 to-transparent" />
                    </div>
                    
                    <div className="p-6">
                      <div className="text-xs text-amber-800 mb-3 flex items-center gap-2 font-medium">
                        <span>{post.readTime}</span>
                        <span className="w-1 h-1 rounded-full bg-amber-600" />
                        <span>{post.date}</span>
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
          
          {/* Subscribe section */}
          <SubscribeBanner />
        </div>
        <Footer />
      </div>
    </div>
  );
}