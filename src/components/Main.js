"use client"
import { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight, ChevronLeft, Heart, Sparkles, Coffee } from 'lucide-react';

import Hero from './Hero'

const categories = [
  { uuid: 'growth', name: 'Growth', color: 'bg-emerald-500' },
  { uuid: 'reflection', name: 'Reflection', color: 'bg-blue-500' },
  { uuid: 'connection', name: 'Connection', color: 'bg-rose-500' },
  { uuid: 'healing', name: 'Healing', color: 'bg-amber-500' },
  { uuid: 'creativity', name: 'Creativity', color: 'bg-purple-500' },
  { uuid: 'mindfulness', name: 'Mindfulness', color: 'bg-teal-500' },
  { uuid: 'journey', name: 'Journey', color: 'bg-indigo-500' },
  { uuid: 'courage', name: 'Courage', color: 'bg-orange-500' },
];

const categoryMap = categories.reduce((acc, cat) => {
  acc[cat.uuid] = { name: cat.name, color: cat.color };
  return acc;
}, {});

const mockPosts = [
  {
    id: 1,
    title: "The Art of Letting Go",
    description: "Sometimes the hardest thing and the right thing are the same. Learning to release what no longer serves us.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    category: 'healing',
    readTime: '8 min',
    date: 'Nov 5, 2025',
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      bio: 'Writer and therapist exploring the intersection of psychology and everyday life.'
    },
  },
  {
    id: 2,
    title: "Finding Your Voice",
    description: "Your story matters. Here's how to start telling it with confidence and authenticity.",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800",
    category: 'growth',
    readTime: '6 min',
    date: 'Nov 4, 2025',
    author: {
      name: 'Marcus Webb',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    },
  },
  {
    id: 3,
    title: "The Power of Pause",
    description: "In a world that glorifies hustle, rest becomes a radical act of self-care.",
    image: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=800",
    category: 'mindfulness',
    readTime: '5 min',
    date: 'Nov 3, 2025',
    author: {
      name: 'Emma Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    },
  },
  {
    id: 4,
    title: "Building Deeper Connections",
    description: "Moving beyond small talk to create relationships that truly nourish the soul.",
    image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=800",
    category: 'connection',
    readTime: '7 min',
    date: 'Nov 2, 2025',
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    },
  },
  {
    id: 5,
    title: "Creative Courage",
    description: "What happens when you give yourself permission to create without judgment.",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800",
    category: 'creativity',
    readTime: '9 min',
    date: 'Nov 1, 2025',
    author: {
      name: 'Marcus Webb',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    },
  },
  {
    id: 6,
    title: "The Long Road Home",
    description: "Sometimes the journey to yourself takes a lifetime. And that's okay.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
    category: 'journey',
    readTime: '10 min',
    date: 'Oct 31, 2025',
    author: {
      name: 'Emma Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    },
  }
];



export default function Main() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  
  
  const postsPerPage = 12;
  
  const displayPosts = selectedCategory === 'all' 
    ? mockPosts 
    : mockPosts.filter(p => p.category === selectedCategory);
  
  const totalPages = Math.ceil(displayPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = displayPosts.slice(startIndex, startIndex + postsPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % featuredCarousel.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReadPost = (post) => {
    console.log('Reading:', post.title);
  };

  return (
    <div className="min-h-screen bg-white" style={{border: '2px solid red'}}>
      <style jsx>{`
        
        
        @keyframes fadeUp {
          from { 
            opacity: 0; 
            transform: translateY(20px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: translateX(40px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .fade-up { 
          animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .slide-in {
          animation: slideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        
        
        
        
        
      `}</style>

      <Hero />



      {/* Categories - Always Visible with Color */}
      <div className="bg-gray-100 border-y border-gray-200 sticky top-[73px] z-40">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="flex items-center gap-3 overflow-x-auto py-5 scrollbar-hide">
            <button
              onClick={() => handleCategoryClick('all')}
              className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              All Stories
            </button>
            {categories.map((cat) => (
              <button
                key={cat.uuid}
                onClick={() => handleCategoryClick(cat.uuid)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat.uuid
                    ? `${cat.color} text-white shadow-lg`
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content - Better Contrast */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-6 py-20 max-w-[1400px]">
          <div className="grid grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="col-span-12 lg:col-span-8">
              {/* Course Promotion with Soul */}
              <div className="mb-16 p-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white rounded-3xl relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                    <Sparkles className="w-4 h-4" />
                    <span>New Course Available</span>
                  </div>
                  <h3 className="text-4xl font-bold mb-4">Emotional Wellbeing 101</h3>
                  <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                    Think of your emotions like a garden. This course teaches you how to tend to it—what to water, what to prune, and how to let things grow naturally.
                  </p>
                  <div className="flex flex-wrap items-center gap-6 mb-8 text-white/80 text-sm">
                    <span className="flex items-center gap-2">
                      <Coffee className="w-4 h-4" />
                      6 weeks
                    </span>
                    <span>Self-paced</span>
                    <span>Certificate included</span>
                  </div>
                  <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-xl">
                    Start Your Journey
                  </button>
                </div>
              </div>

              {/* Posts Grid */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">
                <h2 className="text-3xl font-bold tracking-tight text-black mb-8">
                  {selectedCategory === 'all' ? 'Latest Stories' : categoryMap[selectedCategory]?.name}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {currentPosts.map((post, idx) => (
                    <div 
                      key={post.id}
                      className="post-card fade-up cursor-pointer"
                      style={{ animationDelay: `${idx * 0.05}s` }}
                      onClick={() => handleReadPost(post)}
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                        <img 
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute top-4 left-4 px-3 py-1.5 ${categoryMap[post.category]?.color} text-white rounded-full text-xs font-semibold`}>
                          {categoryMap[post.category]?.name}
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3 text-xs text-gray-500">
                          <span>{post.date}</span>
                          <span>·</span>
                          <span>{post.readTime}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-black leading-tight mb-3 hover:text-gray-600 transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed mb-5 text-sm">
                          {post.description}
                        </p>
                        
                        <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                          <img 
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <span className="text-sm font-medium text-gray-900">{post.author.name}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center pt-8">
                  <nav className="inline-flex items-center gap-2 bg-gray-50 px-2 py-2 rounded-2xl border border-gray-200">
                    <button
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className="p-2.5 rounded-xl hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    
                    {[...Array(Math.min(3, totalPages))].map((_, idx) => {
                      const pageNum = idx + 1;
                      return (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`min-w-[44px] h-11 rounded-xl font-semibold transition-all text-sm ${
                            currentPage === pageNum
                              ? 'bg-black text-white shadow-lg'
                              : 'text-gray-600 hover:bg-white'
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                    
                    <button
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className="p-2.5 rounded-xl hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </nav>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-span-12 lg:col-span-4 space-y-6">
              {/* Welcome Home Card */}
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-3xl border border-rose-100 shadow-sm">
                <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl mb-6 flex items-center justify-center shadow-lg">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Welcome Home</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  This is your space. A place where your thoughts matter, your stories connect, and your voice creates ripples.
                </p>
                <button className="w-full px-6 py-3.5 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-2xl font-semibold hover:shadow-xl transition-all hover:scale-105">
                  Join Community
                </button>
              </div>

              {/* Newsletter */}
              <div className="bg-black text-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold mb-2">Sunday Letters</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  A weekly dose of perspective. Delivered with care, every Sunday morning.
                </p>
                <input 
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-5 py-3.5 rounded-2xl mb-3 bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
                />
                <button className="w-full px-6 py-3.5 bg-white text-black rounded-2xl font-semibold hover:bg-gray-100 transition-all hover:scale-105">
                  Subscribe
                </button>
              </div>

              {/* Featured Mini Posts */}
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6">Must Read</h3>
                
                <div className="space-y-6">
                  {mockPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="group cursor-pointer" onClick={() => handleReadPost(post)}>
                      <div className="flex gap-4">
                        <div className="relative w-24 h-24 flex-shrink-0 rounded-2xl overflow-hidden bg-gray-100">
                          <img 
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className={`inline-block px-2 py-1 ${categoryMap[post.category]?.color} text-white rounded-lg text-xs font-semibold mb-2`}>
                            {categoryMap[post.category]?.name}
                          </div>
                          <h4 className="text-sm font-bold text-black leading-snug line-clamp-2 group-hover:text-gray-600 transition-colors">
                            {post.title}
                          </h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-300 bg-gray-100 py-16">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="text-center">
            <div className="text-2xl font-bold mb-3">Stories</div>
            <p className="text-gray-600 mb-6">Where thoughts become words, and words become connections.</p>
            <p className="text-sm text-gray-500">© 2025 Stories. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}