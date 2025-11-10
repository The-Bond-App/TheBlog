"use client"
import { useState, useEffect, useRef } from 'react';
import { ArrowRight,SquareArrowOutUpRight, ChevronDown,ChevronRight, ChevronLeft, Heart, Sparkles, Coffee, Home, X, Menu, ShoppingBag,PersonStanding, MicVocal, Map, Send } from 'lucide-react';
import { categoryMap, categories } from '../constants/categories'


//import Hero from './Hero'
//import CategoryFilter from '../ui/CategoryFilter'




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

const featuredCarousel = [
  {
    id: 1,
    title: "The Art of Letting Go",
    subtitle: "What happens when you finally release what no longer serves you",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
    color: "from-amber-500/20 to-orange-500/20"
  },
  {
    id: 2,
    title: "Finding Your Voice",
    subtitle: "Every story you tell makes the world a little more honest",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    id: 3,
    title: "The Power of Pause",
    subtitle: "Sometimes the bravest thing you can do is rest",
    image: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=1200",
    color: "from-blue-500/20 to-indigo-500/20"
  }
];

export default function Main() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  
  //category filters
   const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
  
    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
          setShowDropdown(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
  
    // "All Articles" category
    const allCategory = { 
      id: 'all', 
      icon: '✨', 
      name: 'All Articles'
    };
  
    // Get first 4 categories for top display
    const topCategories = [allCategory, ...categories.slice(0, 4)];
    
    // Get remaining categories for dropdown
    const moreCategories = categories.slice(4);

  // navigation 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);

  //hero
  const [carouselIndex, setCarouselIndex] = useState(0);
  
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


  const handleReadPost = (post) => {
    console.log('Reading:', post.title);
  };

  return (
    <>
      <nav className="relative">
      <div className="w-full mx-auto border-b border-gray-200 py-2 bg-stone-800 backdrop-blur-2xl sticky top-0 z-50">
        <div className="flex items-center justify-center">
          <div className="hidden md:flex items-center gap-x-2">
            {[
              { icon: Home, label: 'Home', href: '/' },
              { icon: null, img: '/assets/logo.png', label: 'The Bond Company', href: 'https://thebond.company' },
              { icon: ShoppingBag, label: 'Shop', href: 'https://shop.thebond.company' },
              //{ icon: MicVocal, label: 'Your Story', href: '#', onClick: () => setIsStoryModalOpen(true) },
              //{ icon: Map, label: 'Sitemap', href: '/sitemap'},
              { icon: PersonStanding, label: 'Join Community', href: '/sitemap'},
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (item.onClick) {
                    e.preventDefault();
                    item.onClick();
                  }
                }}
                className={` px-4 py-2 text-white opacity-90 hover:opacity-100  rounded-lg transition-all flex items-center gap-2 text-[16px] hover:bg-white/[0.08] !tracking-normal font-medium`}
              >
                {item.img ? (
                  <img src={item.img} alt={item.label} className="w-5 h-5 object-contain" />
                ) : (
                  <item.icon className="w-5 h-5" />
                )}
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white opacity-70 hover:opacity-100 hover:bg-white/10 rounded-lg transition-all"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden my-4 rounded-2xl border overflow-hidden bg-white/5 border-white/10">
            {[
              { icon: Home, label: 'Home', href: '/' },
              { icon: null, img: '/assets/logo.png', label: 'The Bond Company', href: 'https://thebond.company' },
              { icon: ShoppingBag, label: 'Shop', href: 'https://shop.thebond.company' },
              //{ icon: MicVocal, label: 'Your Story', href: '#', onClick: () => setIsStoryModalOpen(true) },
              //{ icon: Map, label: 'Sitemap', href: '/sitemap'},
              { icon: PersonStanding, label: 'Join Community', href: '/sitemap'},
            ].map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (item.onClick) {
                    e.preventDefault();
                    item.onClick();
                  } else {
                    setIsMenuOpen(false);
                  }
                }}
                className={`flex items-center gap-3 px-6 py-4 text-white opacity-70 hover:opacity-100 hover:bg-white/10 transition-all border-b border-white/20`}
              >
                {item.img ? (
                  <img src={item.img} alt={item.label} className="w-5 h-5 object-contain" />
                ) : (
                  <item.icon className="w-5 h-5" />
                )}
                <span className="font-light">{item.label}</span>
              </a>
            ))}
          </div>
        )}
      </div>

    
      {/* Story Modal */}
      {isStoryModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 animate-in fade-in duration-300" 
          onClick={() => setIsStoryModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white/95 rounded-3xl shadow-2xl animate-in zoom-in-95 duration-300" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsStoryModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-stone-400 hover:text-stone-600 hover:bg-stone-100  hover:cursor-pointer rounded-full transition-all duration-200 z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" strokeWidth={2} />
            </button>

            <div className="px-8 py-12 md:px-12 md:py-16">
              {/* Header */}
              <div className="mb-10">
                <h2 className="text-4xl md:text-5xl font-semibold text-stone-900 tracking-tight mb-1">
                  Your Story Matters
                </h2>
              </div>

              {/* Content */}
              <div className="space-y-6 mb-6 text-stone-600 text-base leading-relaxed">
                <p>
                  The hardest moments in your life might be the light someone else needs to find their way.
                </p>
                
                <p>
                  That raw, honest breakthrough, the time you faced pain, found clarity, or simply made it through, carries more power than you realize.
                </p>

                <p>
                  When you share your truth, you help others find theirs. When you share your light, you guide someone still searching.
                </p>

                {/* Quote Box */}
                <div className="bg-amber-50/80 rounded-2xl px-6 py-4 my-8 shadow-md border border-stone-200/50">
                  <blockquote className="space-y-3">
                    <p className="text-stone-700 font-medium leading-relaxed">
                      "In the depths of winter, I finally learned that within me there lay an invincible summer"
                    </p>
                    <footer className="text-sm text-stone-500">
                      — Albert Camus
                    </footer>
                  </blockquote>
                </div>

                <p className="text-stone-600">
                  Have a story or lesson to share? <strong>We'd love to help amplify your voice</strong>. You can be featured on our blog or social channels, or stay anonymous if you prefer.
                </p>

                <p className="text-stone-500 text-sm">
                  Click below to share your story idea, and we'll be in touch.
                </p>
              </div>
              
              {/* CTA Button */}
              <a
                href="https://support.thebond.company/?section=blog"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-stone-900 hover:bg-stone-800 text-white font-medium rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <Send className="w-4 h-4" />
                Share Your Story
              </a>

              <p className="text-sm text-center text-stone-400 mt-4">
                Opens in a new tab
              </p>
            </div>
          </div>
        </div>
      )}

      </nav>
      <section className='bg-gradient-to-b from-gray-50 to-white'>
        {/* Hero Carousel - Split Layout with Overlay Content */}
        <div className="relative overflow-hidden lg:mx-20 mx-2" >
          <div className="px-16 py-12">
            <div className="grid md:grid-cols-2 gap-12 items-center ">
              {/* Left Side - Your Message */}
              <div className="space-y-6 max-w-4xl -mt-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-100 text-stone-700 shadow-md rounded-full">
                  <img src="/assets/logo.png" className="w-5 h-5" alt="Logo" />
                  <span className="text-base font-medium">The Bond Blog</span>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-stone-700 leading-[1.05]">
                    Sticky notes for your{" "}
                    <span className="text-stone-800 font-normal">soul's fridge</span>
                  </p>
                </div>

                <p className="text-lg md:text-xl text-stone-500 leading-relaxed max-w-lg">
                  The stuff you need to hear when you're spiraling at 2am. Or just existing on a Tuesday afternoon. We don't judge.
                </p>
              </div>

              {/* Right Side - Carousel with Side Dots */}
              <div className="relative py-8">
                {featuredCarousel.map((item, idx) => (
                  <div
                    key={item.id}
                    className={`carousel-transition ${idx === carouselIndex ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none shadow-md'}`}
                  >
                    <div className="relative aspect-[4/3] h-[400px] rounded-3xl overflow-hidden shadow-2xl group">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover "
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      
                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                            Featured Story
                          </div>
                          <div className="text-sm text-white/80">{item.date}</div>
                        </div>
                        
                        <h3 className="hover:cursor-pointer text-2xl font-bold mb-3 leading-tight">
                          {item.title}
                        </h3>
                        
                        <p className="hover:cursor-pointer text-white/90 leading-relaxed mb-6 text-base">
                          {item.subtitle}
                        </p>
                        
                        <button className="hover:cursor-pointer px-5 py-2.5 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-all flex items-center gap-2 text-sm">
                          Read Story
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Carousel Dots - Right Side */}
                      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
                        {featuredCarousel.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setCarouselIndex(i)}
                            className={`w-2 h-2 rounded-full transition-all hover:cursor-pointer ${
                              i === carouselIndex ? 'h-8 bg-white' : 'h-2 bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>    
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-200 border-y border-gray-200 z-40">
        <div className="w-full mx-auto px-6 py-4">
          {/* Filter label */}
          <div className="flex items-center justify-center text-xs gap-6 mb-6">
            <div className="uppercase tracking-[0.05em] text-slate-800/70 font-semibold">
              Explore Topics
            </div>
            <div className="h-3 w-px bg-slate-800/20"></div>
            <a
              href="/sitemap"
              className="flex items-center gap-1.5 uppercase tracking-tight text-slate-800/50 hover:text-slate-800/70 transition-colors duration-200 font-semibold"
            >
              Site Map <SquareArrowOutUpRight size={12} strokeWidth={1.75} />
            </a>
          </div>

          {/* Category buttons */}
          <div className="flex flex-wrap gap-3 justify-center items-center">
            {/* Top categories always visible */}
            {topCategories.map((cat) => (
              <button
                key={cat.id || cat.uuid}
                onClick={() => onCategoryChange(cat.id || cat.uuid)}
                className={`cursor-pointer flex-shrink-0 px-2 py-2.5 rounded-lg text-base font-normal tracking-normal transition-all duration-300 relative ${
                  selectedCategory === (cat.id || cat.uuid)
                    ? 'text-stone-800 bg-white/[0.08]'
                    : 'bg-white text-stone-800 hover:bg-gray-50 border border-stone-200'
                }`}
              >
                <span className="mr-2">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
            
            <div className="h-5 w-px bg-stone-800/20 mx-2"></div>

            {/* More dropdown */}
            {moreCategories.length > 0 && (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className={`cursor-pointer flex-shrink-0 px-4 py-2.5 rounded-lg text-sm tracking-normal transition-all duration-300 flex items-center gap-2 relative text-slate-800/70 font-medium hover:bg-white/50
                  
                  }`}
                >
                  <span>More</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
                </button>

                {showDropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white rounded-2xl shadow-2xl z-50 min-w-[220px]">
                    <div className="p-2">
                      {moreCategories.map((cat) => (
                        <button
                          key={cat.uuid}
                          onClick={() => {
                            onCategoryChange(cat.uuid);
                            setShowDropdown(false);
                          }}
                          className={`cursor-pointer w-full flex items-center gap-2 px-2 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                            selectedCategory === cat.uuid
                              ? 'bg-slate-200 text-slate-900 font-medium'
                              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                          }`}
                        >
                          <span className="text-base">{cat.icon}</span>
                          <span className="flex-1 text-left">{cat.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
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

    </>
  );
}