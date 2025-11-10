"use client"
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown, ChevronRight, ChevronLeft, Heart, Sparkles, Coffee, Home, X, Menu, ShoppingBag, PersonStanding, MicVocal, Map, Send, Check, SmilePlus, Frown, Meh, Smile, Laugh } from 'lucide-react';

// Mock category data
const categoryMap = {
  healing: { name: 'Healing', color: 'bg-emerald-500', icon: '🌱' },
  growth: { name: 'Growth', color: 'bg-blue-500', icon: '🌟' },
  mindfulness: { name: 'Mindfulness', color: 'bg-purple-500', icon: '🧘' },
  connection: { name: 'Connection', color: 'bg-pink-500', icon: '💝' },
  creativity: { name: 'Creativity', color: 'bg-orange-500', icon: '🎨' },
  journey: { name: 'Journey', color: 'bg-indigo-500', icon: '🗺️' }
};

const categories = [
  { uuid: 'healing', icon: '🌱', name: 'Healing' },
  { uuid: 'growth', icon: '🌟', name: 'Growth' },
  { uuid: 'mindfulness', icon: '🧘', name: 'Mindfulness' },
  { uuid: 'connection', icon: '💝', name: 'Connection' },
  { uuid: 'creativity', icon: '🎨', name: 'Creativity' },
  { uuid: 'journey', icon: '🗺️', name: 'Journey' }
];

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
  },
  {
    id: 2,
    title: "Finding Your Voice",
    subtitle: "Every story you tell makes the world a little more honest",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200",
  },
  {
    id: 3,
    title: "The Power of Pause",
    subtitle: "Sometimes the bravest thing you can do is rest",
    image: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=1200",
  }
];

const moodEmojis = [
  { id: 'happy', icon: Laugh, label: 'Happy', color: 'from-[#667eea] to-[#764ba2]' },
  { id: 'calm', icon: Smile, label: 'Calm', color: 'from-[#667eea] to-[#4ecdc4]' },
  { id: 'neutral', icon: Meh, label: 'Meh', color: 'from-gray-400 to-gray-500' },
  { id: 'anxious', icon: Frown, label: 'Anxious', color: 'from-[#ff4545] to-[#ff6b6b]' },
  { id: 'overwhelmed', icon: SmilePlus, label: 'Overwhelmed', color: 'from-[#ff4545] to-[#c92a2a]' },
];

export default function Main() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMood, setSelectedMood] = useState(null);
  
  // Category filters
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Course poll state
  const [pollAnswer, setPollAnswer] = useState(null);
  const [showCourseForm, setShowCourseForm] = useState(false);
  const [courseEmail, setCourseEmail] = useState('');
  const [courseSubmitted, setCourseSubmitted] = useState(false);

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

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

  const allCategory = { 
    id: 'all', 
    icon: '✨', 
    name: 'All Articles'
  };

  const topCategories = [allCategory, ...categories.slice(0, 4)];
  const moreCategories = categories.slice(4);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const handlePollAnswer = (answer) => {
    setPollAnswer(answer);
    if (answer === 'yes') {
      setShowCourseForm(true);
    }
  };

  const handleCourseSubmit = (e) => {
    e.preventDefault();
    setCourseSubmitted(true);
    console.log('Course interest:', courseEmail);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setNewsletterSubmitted(true);
    console.log('Newsletter signup:', newsletterEmail);
  };

  return (
    <>
      <nav className="relative">
        <div className="w-full mx-auto bg-white/80 backdrop-blur-xl sticky top-0 z-50 border-b border-black/5">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="flex items-center justify-between h-11">
              <a href="/" className="flex items-center gap-2 text-[17px] font-semibold text-black tracking-tight">
                <Heart className="w-5 h-5 opacity-90" />
                Stories
              </a>

              <div className="hidden md:flex items-center gap-8">
                {[
                  { label: 'Home', href: '/' },
                  { label: 'Shop', href: '#' },
                  { label: 'Community', href: '#' },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-[14px] text-black/70 hover:text-black transition-colors font-normal"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <button className="hidden md:block text-[14px] text-black/70 hover:text-black transition-colors">
                  Sign In
                </button>
                
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden p-1 text-black/70 hover:text-black transition-colors"
                  aria-label="Menu"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-[60] bg-white" style={{ top: '44px' }}>
            <div className="p-6 space-y-1">
              {[
                { label: 'Home', href: '/' },
                { label: 'Shop', href: '#' },
                { label: 'Community', href: '#' },
                { label: 'Sign In', href: '#' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-[17px] text-black/80 hover:text-black hover:bg-black/5 rounded-lg transition-all"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section className='bg-white'>
        <div className="relative overflow-hidden">
          <div className="px-6 py-20 max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 max-w-2xl">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-gradient-to-r from-[#667eea]/10 to-[#ff4545]/10 rounded-full">
                  <Heart className="w-4 h-4 text-[#ff4545]" />
                  <span className="text-[13px] font-medium text-black/70 tracking-wide">THE BOND BLOG</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-black leading-[1.05]">
                  Sticky notes for your soul's fridge
                </h1>

                <p className="text-[19px] text-black/60 leading-relaxed max-w-xl">
                  The stuff you need to hear when you're spiraling at 2am. Or just existing on a Tuesday afternoon.
                </p>
              </div>

              <div className="relative">
                {featuredCarousel.map((item, idx) => (
                  <div
                    key={item.id}
                    className={`carousel-transition ${idx === carouselIndex ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'}`}
                  >
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <div className="text-[13px] font-medium mb-3 text-white/80 tracking-wide">
                          FEATURED
                        </div>
                        
                        <h3 className="text-[28px] font-semibold mb-2 leading-tight tracking-tight">
                          {item.title}
                        </h3>
                        
                        <p className="text-[15px] text-white/90 leading-relaxed mb-5">
                          {item.subtitle}
                        </p>
                        
                        <button className="px-5 py-2.5 bg-white text-black rounded-full text-[14px] font-medium hover:bg-white/90 transition-all">
                          Read Story
                        </button>
                      </div>

                      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                        {featuredCarousel.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setCarouselIndex(i)}
                            className={`w-1.5 rounded-full transition-all ${
                              i === carouselIndex ? 'h-8 bg-white' : 'h-1.5 bg-white/40 hover:bg-white/60'
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

      {/* Component E: How are you feeling? */}
      <div className="bg-gradient-to-br from-[#667eea]/5 to-[#ff4545]/5 border-y border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <h2 className="text-[32px] font-semibold tracking-tight text-black mb-3">
              How are you feeling today?
            </h2>
            <p className="text-[15px] text-black/60">
              Let us guide you to the right story
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {moodEmojis.map((mood) => {
              const Icon = mood.icon;
              return (
                <button
                  key={mood.id}
                  onClick={() => setSelectedMood(mood.id)}
                  className={`group relative px-6 py-4 rounded-2xl transition-all duration-300 ${
                    selectedMood === mood.id
                      ? 'bg-gradient-to-r ' + mood.color + ' text-white shadow-lg scale-105'
                      : 'bg-white text-black/70 hover:text-black border border-black/10 hover:border-black/20'
                  }`}
                >
                  <Icon className="w-6 h-6 mb-2 mx-auto" />
                  <span className="text-[14px] font-medium">{mood.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 py-6">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="text-[13px] text-black/50 font-medium tracking-wide">
              EXPLORE
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center items-center">
            {topCategories.map((cat) => (
              <button
                key={cat.id || cat.uuid}
                onClick={() => setSelectedCategory(cat.id || cat.uuid)}
                className={`px-5 py-2 rounded-full text-[14px] font-normal transition-all duration-200 ${
                  selectedCategory === (cat.id || cat.uuid)
                    ? 'bg-black text-white'
                    : 'bg-black/5 text-black/70 hover:bg-black/10 hover:text-black'
                }`}
              >
                {cat.name}
              </button>
            ))}
            
            {moreCategories.length > 0 && (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="px-5 py-2 rounded-full text-[14px] bg-black/5 text-black/70 hover:bg-black/10 hover:text-black transition-all flex items-center gap-1.5"
                >
                  More
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
                </button>

                {showDropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-2xl shadow-2xl border border-black/10 z-50 min-w-[200px] overflow-hidden">
                    {moreCategories.map((cat) => (
                      <button
                        key={cat.uuid}
                        onClick={() => {
                          setSelectedCategory(cat.uuid);
                          setShowDropdown(false);
                        }}
                        className={`w-full flex items-center gap-3 px-5 py-3 text-[14px] transition-all ${
                          selectedCategory === cat.uuid
                            ? 'bg-black/5 text-black font-medium'
                            : 'text-black/70 hover:bg-black/5 hover:text-black'
                        }`}
                      >
                        <span>{cat.icon}</span>
                        <span>{cat.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container mx-auto px-6 py-20 max-w-[1400px]">
          
          {/* Featured Hero Post - Full Width */}
          <div className="mb-20">
            <h2 className="text-[48px] font-semibold tracking-tight text-black mb-12 leading-none">
              {selectedCategory === 'all' ? 'Latest Stories' : categoryMap[selectedCategory]?.name}
            </h2>
            
            {currentPosts[0] && (
              <div 
                className="group cursor-pointer mb-20"
                onClick={() => handleReadPost(currentPosts[0])}
              >
                <div className="relative aspect-[21/9] overflow-hidden rounded-3xl bg-black/5 mb-6">
                  <img 
                    src={currentPosts[0].image}
                    alt={currentPosts[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <div className="max-w-4xl">
                  <div className="flex items-center gap-3 mb-4 text-[13px] text-black/50 font-medium">
                    <span className="uppercase tracking-wide">{categoryMap[currentPosts[0].category]?.name}</span>
                    <span>·</span>
                    <span>{currentPosts[0].date}</span>
                    <span>·</span>
                    <span>{currentPosts[0].readTime}</span>
                  </div>
                  
                  <h3 className="text-[40px] font-semibold tracking-tight text-black leading-tight mb-4 group-hover:text-black/70 transition-colors">
                    {currentPosts[0].title}
                  </h3>
                  
                  <p className="text-[19px] text-black/60 leading-relaxed mb-6">
                    {currentPosts[0].description}
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <img 
                      src={currentPosts[0].author.avatar}
                      alt={currentPosts[0].author.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <span className="text-[15px] font-medium text-black">{currentPosts[0].author.name}</span>
                  </div>
                </div>
              </div>
            )}

            {/* 3-Column Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-20">
              {currentPosts.slice(1, 4).map((post, idx) => (
                <div 
                  key={post.id}
                  className="group cursor-pointer fade-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                  onClick={() => handleReadPost(post)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-black/5 mb-4">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  
                  <div className="text-[11px] font-medium text-black/40 uppercase tracking-wide mb-2">
                    {categoryMap[post.category]?.name}
                  </div>
                  
                  <h3 className="text-[20px] font-semibold tracking-tight text-black leading-tight mb-2 group-hover:text-black/70 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-[14px] text-black/60 leading-relaxed mb-3 line-clamp-2">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-[13px] text-black/50">
                    <span>{post.readTime}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Course Poll - Full Width */}
            <div className="mb-20 p-12 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-3xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
              <div className="relative max-w-3xl mx-auto text-center">
                <div className="inline-block px-3 py-1.5 bg-white/20 rounded-full text-[13px] font-medium mb-6 backdrop-blur-sm">
                  NEW COURSE
                </div>
                
                <h3 className="text-[36px] font-semibold mb-4 tracking-tight leading-tight">
                  Emotions 101: Understanding Yourself
                </h3>
                
                <p className="text-[17px] text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
                  Think of emotions like weather patterns. This course teaches you to read the forecast, prepare for storms, and enjoy the sunshine.
                </p>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
                  <p className="text-[15px] mb-3 font-medium">Quick example:</p>
                  <p className="text-[15px] italic text-white/90 leading-relaxed">
                    "Anxiety isn't your enemy. It's like a smoke detector—annoying when it goes off for burnt toast, but crucial when there's actual fire."
                  </p>
                </div>

                {!courseSubmitted ? (
                  <>
                    {!showCourseForm ? (
                      <div>
                        <p className="text-[17px] font-medium mb-6">
                          Would you take this course for $9.99?
                        </p>
                        <div className="flex gap-3 justify-center">
                          <button
                            onClick={() => handlePollAnswer('yes')}
                            className={`px-8 py-4 rounded-xl text-[15px] font-medium transition-all ${
                              pollAnswer === 'yes'
                                ? 'bg-white text-[#667eea]'
                                : 'bg-white/20 hover:bg-white/30'
                            }`}
                          >
                            Yes, I'm interested
                          </button>
                          <button
                            onClick={() => handlePollAnswer('no')}
                            className={`px-8 py-4 rounded-xl text-[15px] font-medium transition-all ${
                              pollAnswer === 'no'
                                ? 'bg-white text-[#667eea]'
                                : 'bg-white/20 hover:bg-white/30'
                            }`}
                          >
                            Maybe later
                          </button>
                        </div>
                      </div>
                    ) : (
                      <form onSubmit={handleCourseSubmit} className="max-w-md mx-auto">
                        <p className="text-[15px] mb-4">
                          Great! Leave your email and we'll notify you when it launches:
                        </p>
                        <div className="flex gap-3">
                          <input
                            type="email"
                            value={courseEmail}
                            onChange={(e) => setCourseEmail(e.target.value)}
                            placeholder="your@email.com"
                            required
                            className="flex-1 px-5 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:bg-white/30 transition-all"
                          />
                          <button
                            type="submit"
                            className="px-6 py-3 bg-white text-[#667eea] rounded-xl font-medium hover:bg-white/90 transition-all whitespace-nowrap"
                          >
                            Notify Me
                          </button>
                        </div>
                      </form>
                    )}
                  </>
                ) : (
                  <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-xl p-4">
                    <Check className="w-5 h-5" />
                    <span className="text-[15px] font-medium">Thanks! We'll reach out soon.</span>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="border-t border-black/5 bg-white py-12">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="text-center">
            <div className="text-[17px] font-semibold mb-2 text-black tracking-tight">Stories</div>
            <p className="text-[13px] text-black/50">© 2025 Stories. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeUp {
          from { 
            opacity: 0; 
            transform: translateY(30px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0);
          }
        }
        
        .fade-up { 
          animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .carousel-transition {
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </>
  );
}