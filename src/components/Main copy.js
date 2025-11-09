


"use client"
import { useState, useEffect } from 'react';
import { Heart, ArrowRight, X } from 'lucide-react';

// Import these from your actual files
import { categories, categoryMap } from '../constants/categories';
import usePosts from '../hooks/usePosts';
import Hero from './Hero';



// Loading component
function PostsLoader() {
  return (
    <div className="py-10">
      <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 min-h-[60vh] flex items-center justify-center">
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

export default function Main({ posts: initialPosts = [] }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showStickyNav, setShowStickyNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isFiltering, setIsFiltering] = useState(false);
  
  const { blogPosts, loading, error } = usePosts(selectedCategory);

  // Use server-provided posts as initial data, or blogPosts if available
  const displayPosts = blogPosts.length > 0 ? blogPosts : initialPosts;

  // Sticky nav scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = 200;
      setShowStickyNav(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (showDropdown && !e.target.closest('.dropdown-container')) {
        setShowDropdown(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showDropdown]);

  // Reset filtering state when posts are loaded
  useEffect(() => {
    if (!loading && blogPosts.length > 0) {
      setIsFiltering(false);
    }
  }, [loading, blogPosts.length]);

  // Category click handler with loading state
  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    setShowDropdown(false);
    setIsFiltering(true);
    
    // Smooth scroll to stories
    setTimeout(() => {
      const storiesSection = document.getElementById('stories-section');
      if (storiesSection) {
        storiesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const clearCategory = () => {
    setSelectedCategory('all');
    setIsFiltering(true);
  };

  const heroPost = displayPosts.find(p => p.featured) || displayPosts[0];
  const remainingPosts = displayPosts.filter(p => p.id !== heroPost?.id);

  

  return (
    <div className="min-h-screen bg-slate-700 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full transition-all duration-1000 bg-gradient-to-br from-amber-500/25 via-orange-500/30 to-rose-500/28" />
      </div>
     

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
          
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes slide-down {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(400%); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes dropdown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in { animation: fade-in 0.8s ease-out; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-scale-in { animation: scale-in 0.6s ease-out; }
        .animate-slide-down { animation: slide-down 0.3s ease-out; }
        .animate-dropdown { animation: dropdown 0.2s ease-out; }

        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="relative z-10">
        <Hero />

        {/* Sticky Navigation */}
        {showStickyNav && (
          <div className="fixed top-0 left-0 right-0 z-50 animate-slide-down">
            <div className="bg-slate-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl">
              <div className="max-w-7xl mx-auto px-6 py-3">
                <div className="flex items-center gap-3">
                  {/* All Stories button */}
                  <button
                    onClick={() => handleCategoryClick('all')}
                    className={`flex-shrink-0 px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap text-sm font-light flex items-center gap-2 ${
                      selectedCategory === 'all'
                        ? 'bg-white text-slate-900 shadow-lg scale-105'
                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}
                  >
                    <span className="text-base">✨</span>
                    <span className="hidden sm:inline">All Stories</span>
                  </button>

                  {/* First 4 categories */}
                  {categories.slice(0, 4).map((category) => (
                    <button
                      key={category.uuid}
                      onClick={() => handleCategoryClick(category.uuid)}
                      className={`flex-shrink-0 px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap text-sm font-light flex items-center gap-2 ${
                        selectedCategory === category.uuid
                          ? 'bg-white text-slate-900 shadow-lg scale-105'
                          : 'bg-white/10 text-white/70 hover:bg-white/20'
                      }`}
                    >
                      <span className="text-base">{category.icon}</span>
                      <span className="hidden sm:inline">{category.name}</span>
                    </button>
                  ))}

                  {/* More dropdown */}
                  <div className="relative dropdown-container">
                    <button
                      onClick={() => setShowDropdown(!showDropdown)}
                      className={`flex-shrink-0 px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap text-sm font-light flex items-center gap-2 ${
                        showDropdown || (selectedCategory !== 'all' && !categories.slice(0, 4).find(c => c.uuid === selectedCategory))
                          ? 'bg-white text-slate-900 shadow-lg'
                          : 'bg-white/10 text-white/70 hover:bg-white/20'
                      }`}
                    >
                      <span>More</span>
                      <svg 
                        className={`w-4 h-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {showDropdown && (
                      <div className="absolute top-full right-0 mt-2 w-64 bg-slate-900/98 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-dropdown">
                        <div className="py-2">
                          {categories.slice(4).map((category) => (
                            <button
                              key={category.uuid}
                              onClick={() => handleCategoryClick(category.uuid)}
                              className={`w-full px-4 py-3 text-left text-sm font-light flex items-center gap-3 transition-colors ${
                                selectedCategory === category.uuid
                                  ? 'bg-white/20 text-white'
                                  : 'text-white/70 hover:bg-white/10 hover:text-white'
                              }`}
                            >
                              <span className="text-xl">{category.icon}</span>
                              <span>{category.name}</span>
                              {selectedCategory === category.uuid && (
                                <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stories Section */}
        <div id="stories-section" className="relative py-12 px-6 animate-scale-in" style={{ paddingTop: '3rem' }}>
          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Active Category Badge */}
            {selectedCategory !== 'all' && categoryMap[selectedCategory] && (
              <div className="mb-12 md:mb-16 text-center">
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-4 md:px-6 py-3 border border-white/20">
                  <span className="text-2xl md:text-3xl">{categoryMap[selectedCategory].emoji}</span>
                  <div className="text-left">
                    <p className="text-xs font-light text-white/60">Reading</p>
                    <p className="text-sm md:text-base font-light text-white">{categoryMap[selectedCategory].name}</p>
                  </div>
                  <button 
                    onClick={clearCategory}
                    className="ml-2 text-white/50 hover:text-white transition-colors p-1"
                  >
                    <X className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Show loader ONLY during client-side filtering */}
            {isFiltering && loading ? (
              <PostsLoader />
            ) : error ? (
              <PostsError error={error} />
            ) : displayPosts.length === 0 ? (
              <div className="col-span-2 text-center py-20">
                <div className="text-7xl mb-8 opacity-50">🌱</div>
                <h3 className="text-3xl font-extralight text-white mb-4">
                  No stories in {categoryMap[selectedCategory]?.name || 'this category'} yet
                </h3>
                <p className="text-white/60 font-light mb-10 text-lg">
                  Try viewing all stories or choose a different category
                </p>
                <button 
                  onClick={clearCategory}
                  className="px-10 py-4 bg-white text-slate-900 rounded-full hover:bg-white/90 transition-all font-light shadow-xl"
                >
                  Show all stories
                </button>
              </div>
            ) : (
              <>
               {/* Hero Story */}
              {heroPost && (
                <article className="mb-16 md:mb-24 group cursor-pointer">
                  <div className="relative overflow-hidden rounded-3xl transition-all duration-700 hover:shadow-2xl hover:shadow-black/30">
                    <div className="absolute inset-0">
                      <img 
                        src={heroPost.image} 
                        alt=""
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[3000ms]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent" />
                    </div>
                    
                    <div className="relative min-h-[500px] md:min-h-[600px] flex items-end p-8 md:p-16 lg:p-20">
                      <div className="max-w-3xl">
                        <div className="flex items-center gap-2 md:gap-3 text-white/60 mb-4 md:mb-6 font-light text-sm">
                          <span className="text-xl md:text-2xl">{categoryMap[heroPost.category]?.emoji}</span>
                          <span className="hidden sm:inline">{categoryMap[heroPost.category]?.name}</span>
                        </div>
                        
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extralight mb-4 md:mb-6 leading-[1.1] tracking-tight text-white">
                          {heroPost.title}
                        </h1>
                        
                        <p className="text-base md:text-xl text-white/80 font-light leading-relaxed mb-6 md:mb-10 max-w-2xl">
                          {heroPost.description} 
                        </p>
                        
                        <button className="px-8 md:px-10 py-3 md:py-4 bg-white text-slate-900 rounded-full hover:bg-white/90 transition-all duration-300 font-light text-sm md:text-base inline-flex items-center gap-3 shadow-xl">
                          Read this story
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              )}

              {/* Story Grid with Native Ads */}
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {remainingPosts.length > 0 ? (
                  remainingPosts.map((post, index) => (
                    <div key={index}>
                      {/* Native Ad Block - After 3rd post 
                      {index === 2 && (
                        <div 
                          key="ad-block"
                          className="md:col-span-2"
                          style={{
                            opacity: 0,
                            animation: `fade-in 0.6s ease-out ${index * 0.1}s forwards`
                          }}
                        >
                          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 hover:shadow-2xl transition-all duration-500 group cursor-pointer">
                            <div className="p-8 md:p-12 lg:p-16 text-center">
                              <div className="mb-6">
                                <span className="text-5xl">📚</span>
                              </div>
                              
                              <div className="max-w-2xl mx-auto">
                                <p className="text-white/70 text-sm font-light mb-3 uppercase tracking-wider">
                                  Pause here for a moment
                                </p>
                                
                                <h3 className="text-3xl md:text-4xl font-extralight mb-4 text-white leading-tight">
                                  Learn to Speak Your Emotions
                                </h3>
                                
                                <p className="text-lg text-white/80 font-light leading-relaxed mb-8">
                                  A 5-week course on emotional literacy. Not therapy. Not self-help. Just tools that actually work.
                                </p>
                                
                                <button className="px-8 py-4 bg-white text-purple-900 rounded-full hover:bg-white/90 transition-all duration-300 font-light shadow-xl group-hover:scale-105">
                                  Learn more
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}*/}
                      
                      {/* Regular Post */}
                    <article 
                      key={post.id}
                      className="group cursor-pointer"
                      style={{
                        opacity: 0,
                        animation: `fade-in 0.6s ease-out ${index * 0.1}s forwards`
                      }}
                    >
                      <div className="relative overflow-hidden rounded-3xl bg-white hover:shadow-2xl transition-all duration-500">
                        <div className="aspect-[16/10] relative overflow-hidden">
                          <img 
                            src={post.image} 
                            alt=""
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[3000ms]"
                          />
                        </div>
                        
                        <div className="p-6 md:p-8">
                          <div className="flex items-center gap-2 text-slate-500 mb-3 text-sm">
                            <span className="text-xl">{categoryMap[post.category]?.emoji}</span>
                            <span className="font-light">{categoryMap[post.category]?.name}</span>
                          </div>
                          
                          <h3 className="text-xl md:text-2xl font-light leading-tight text-slate-900 mb-3 group-hover:text-slate-600 transition-colors">
                            {post.title}
                          </h3>
                          
                          <p className="text-slate-600 leading-relaxed font-light mb-4 line-clamp-3 text-sm md:text-base">
                            {post.description}
                          </p>
                          
                          <div className="flex items-center text-slate-400 group-hover:text-slate-700 transition-colors font-light text-sm">
                            <span>Read story</span>
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </article>
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 text-center py-20">
                    <div className="text-7xl mb-8 opacity-50">🌱</div>
                    <h3 className="text-3xl font-extralight text-white mb-4">
                      {selectedCategory 
                        ? `No stories in ${categoryMap[selectedCategory]?.name} yet`
                        : "We're still gathering stories for this feeling"
                      }
                    </h3>
                    <p className="text-white/60 font-light mb-10 text-lg">
                      {selectedCategory 
                        ? "Try viewing all stories in this mood"
                        : "Try another mood, or explore everything"
                      }
                    </p>
                    {selectedCategory ? (
                      <button 
                        onClick={() => setSelectedCategory(null)}
                        className="px-10 py-4 bg-white text-slate-900 rounded-full hover:bg-white/90 transition-all font-light shadow-xl"
                      >
                        Show all {journeyMoments.find(m => m.id === selectedMood)?.name.toLowerCase()} stories
                      </button>
                    ) : (
                      <button 
                        onClick={clearMood}
                        className="px-10 py-4 bg-white text-slate-900 rounded-full hover:bg-white/90 transition-all font-light shadow-xl"
                      >
                        Choose different mood
                      </button>
                    )}
                  </div>
                )}
              </div>
              </>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="relative py-24 md:py-32 px-6">
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="mb-8 md:mb-12">
              <Heart className="w-12 h-12 md:w-16 md:h-16 mx-auto text-rose-400/60 animate-float" />
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extralight mb-6 md:mb-8 tracking-tight text-white leading-[1.1]">
              You're becoming
            </h2>
            
            <p className="text-lg md:text-2xl text-white/60 font-extralight leading-relaxed mb-12 md:mb-16 max-w-2xl mx-auto">
              Every story you read, every moment you pause—it's all part of the process
            </p>
            
            <button className="px-8 md:px-12 py-4 md:py-5 bg-white text-slate-900 rounded-full hover:scale-105 transition-all duration-300 font-light text-base md:text-lg shadow-2xl">
              Get weekly reflections
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
