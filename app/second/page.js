"use client"
import { useState, useEffect, useRef } from 'react';
import { Mic, ChevronDown, ChevronRight, ChevronLeft, Heart, Sparkles, Coffee, Home, X, Menu, ShoppingBag, PersonStanding, MicVocal, Map, Send, Check, SmilePlus, Frown, Meh, Smile, Laugh, Sticker, House } from 'lucide-react';

import CourseAd from '../../src/ui/CourseAd';
import Footer from '../../src/components/Footer';
import Hero from '../../src/components/Hero';
import Navigation from '../../src/components/Navigation';
import CategoryFilter from '../../src/ui/CategoryFilter';


 const categoryMap = [
    { uuid: 'feelings', icon:'😵‍💫', name: 'Feelings I didn\'t ask for' },
    { uuid: 'habits', icon:'🌱', name: 'Habits in Action' },
    { uuid: 'lifeunfiltered', icon:'🌅', name: 'Life, Unfiltered' },
    { uuid: 'virtualyou', icon:'🧑‍💻', name: 'Performing Online'},
    { uuid: 'notyoueveryone', icon:'🌍', name: 'We\'re All Struggling'},
    { uuid: 'science', icon:'🧠', name: 'The Science of Feeling' },
    { uuid: 'identitiycrisis', icon:'🫠', name: 'Identity in Crisis' },
    { uuid: 'questionsthatstick', icon: '🌀', name:'Questions That Stick' },
    { uuid: 'whenitshard', icon:'😤', name: 'When It\'s Hard' },
    { uuid: 'boundaries', icon:'✋', name: 'Boundaries & Burnout'}
  ];


 const categories = [
    { uuid: 'feelings', icon:'😵‍💫', name: 'Feelings I didn\'t ask for' },
    { uuid: 'habits', icon:'🌱', name: 'Habits in Action' },
    { uuid: 'lifeunfiltered', icon:'🌅', name: 'Life, Unfiltered' },
    { uuid: 'virtualyou', icon:'🧑‍💻', name: 'Performing Online'},
    { uuid: 'notyoueveryone', icon:'🌍', name: 'We\'re All Struggling'},
    { uuid: 'science', icon:'🧠', name: 'The Science of Feeling' },
    { uuid: 'identitiycrisis', icon:'🫠', name: 'Identity in Crisis' },
    { uuid: 'questionsthatstick', icon: '🌀', name:'Questions That Stick' },
    { uuid: 'whenitshard', icon:'😤', name: 'When It\'s Hard' },
    { uuid: 'boundaries', icon:'✋', name: 'Boundaries & Burnout'}
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
  
  // Navigation
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);

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

  
  
  
  const postsPerPage = 12;
  
  const displayPosts = selectedCategory === 'all' 
    ? mockPosts 
    : mockPosts.filter(p => p.category === selectedCategory);
  
  const totalPages = Math.ceil(displayPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = displayPosts.slice(startIndex, startIndex + postsPerPage);

  

  const handleReadPost = (post) => {
    console.log('Reading:', post.title);
  };



  return (
    <>
     <Navigation />
     <Hero />
      
     <CategoryFilter />

      {/* Component E: How are you feeling?
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
      </div>*/}

      <div className="bg-white">
        <div className="container mx-auto px-6 py-20 max-w-[1400px]" style={{border: '3px solid red'}}>
          
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
            <CourseAd />
            
            {/* Posts Grid */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 mt-12">
                <h2 className="text-3xl font-bold tracking-tight text-black mb-8">
                  {selectedCategory === 'all' ? 'Latest Stories' : categoryMap[selectedCategory]?.name}
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-12">
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
        </div>
      </div>


    {/* Footer AREA */}

    {/** Dynamic Shenanigans */}
    <Footer />

  
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