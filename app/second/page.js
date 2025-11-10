"use client"
import { useState, useEffect, useRef } from 'react';
import { Mic, ChevronDown, ChevronRight, ChevronLeft, Heart, Sparkles, Coffee, Home, X, Menu, ShoppingBag, PersonStanding, MicVocal, Map, Send, Check, SmilePlus, Frown, Meh, Smile, Laugh, Sticker, House } from 'lucide-react';

import CourseAd from '../../src/ui/CourseAd';
import Footer from '../../src/components/Footer';


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
             <a
                href="https://thebond.company"
                className="flex items-center gap-2 text-[14px] text-black/70 hover:text-black transition-colors font-normal"
              >
                {/*<House className='w-3 h-3'/>*/}
                The Bond Company
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
               <button
                  onClick={() => setIsStoryModalOpen(true)}
                  className="hidden md:flex items-center text-[14px] text-black/70 hover:text-black transition-colors hover:cursor-pointer"
                >
                  <Mic className="mr-2 w-4 h-4" /> Your Story 
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
                { label: 'Your Voice', href: '#' },
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

        {/* Story Modal */}
        {isStoryModalOpen && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 animate-in fade-in duration-300" 
            onClick={() => setIsStoryModalOpen(false)}
          >
            <div 
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl animate-in zoom-in-95 duration-300" 
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsStoryModalOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-stone-800 hover:text-stone-600 hover:bg-stone-100  hover:cursor-pointer rounded-full transition-all duration-200 z-10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" strokeWidth={2} />
              </button>

              <div className="px-8 py-12 md:px-12 md:py-16">
                {/* Header */}
                <div className="mb-10">
                  <h2 className="text-4xl md:text-5xl font-semibold text-stone-800 tracking-tight mb-1">
                    Your Story Matters
                  </h2>
                </div>

                {/* Content */}
                <div className="space-y-6 mb-6 text-stone-700 text-lg leading-relaxed">
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
                  <div className="bg-stone-100/80 rounded-2xl px-6 py-4 my-8 shadow-md border border-stone-200/50">
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

      <section className='bg-white'>
        <div className="relative overflow-hidden">
          <div className="px-6 py-12 max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-8 max-w-2xl -mt-8">
             
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-slate-700 leading-[1.05]">
                  Sticky notes for your <span className='gradient-text'>soul's fridge</span>
                </h1>

                <p className="text-[21px] text-black/60 leading-relaxed max-w-xl">
                  To quiet the ruminating-before-sleep moments and fuel the trying-to-grow-on-purpose ones. Emotional fundamentals nobody taught us, explained through analogies.
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
      
      {/* Hierarchical Category Navigation */}
      <div className="bg-gradient-to-br from-purple-50 via-white to-rose-50">
        <div className="max-w-[1400px] mx-auto px-6 py-20">
          {/* Main Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-black mb-4">
              What do you need today?
            </h2>
            <p className="text-lg text-black/60 max-w-2xl mx-auto">
              Choose your path, find your story
            </p>
          </div>

          {/* Three Main Paths - Card Style */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Understand */}
            <div 
              className={`group cursor-pointer bg-white rounded-3xl p-8 border-2 transition-all duration-300 ${
                selectedMood === 'understand' 
                  ? 'border-purple-500 shadow-xl shadow-purple-100 scale-105' 
                  : 'border-transparent hover:border-purple-200 hover:shadow-lg'
              }`}
              onClick={() => setSelectedMood(selectedMood === 'understand' ? null : 'understand')}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-4xl mb-3">🧠</div>
                  <h3 className="text-2xl font-semibold text-black mb-2">Understand</h3>
                  <p className="text-sm text-black/60">Make sense of what you're feeling</p>
                </div>
                <ChevronDown className={`w-5 h-5 text-black/40 transition-transform duration-300 ${
                  selectedMood === 'understand' ? 'rotate-180' : ''
                }`} />
              </div>
              
              {selectedMood === 'understand' && (
                <div className="space-y-2 pt-4 border-t border-black/5 animate-in fade-in slide-in-from-top-2 duration-300">
                  {['feelings', 'identitiycrisis', 'science', 'questionsthatstick', 'virtualyou'].map((uuid) => {
                    const cat = categories.find(c => c.uuid === uuid);
                    return (
                      <button
                        key={cat.uuid}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCategory(cat.uuid);
                        }}
                        className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all ${
                          selectedCategory === cat.uuid
                            ? 'bg-purple-500 text-white font-medium'
                            : 'bg-purple-50 text-black/70 hover:bg-purple-100'
                        }`}
                      >
                        <span className="mr-2">{cat.icon}</span>
                        {cat.name}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Practice */}
            <div 
              className={`group cursor-pointer bg-white rounded-3xl p-8 border-2 transition-all duration-300 ${
                selectedMood === 'practice' 
                  ? 'border-emerald-500 shadow-xl shadow-emerald-100 scale-105' 
                  : 'border-transparent hover:border-emerald-200 hover:shadow-lg'
              }`}
              onClick={() => setSelectedMood(selectedMood === 'practice' ? null : 'practice')}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-4xl mb-3">🌱</div>
                  <h3 className="text-2xl font-semibold text-black mb-2">Practice</h3>
                  <p className="text-sm text-black/60">Tools and habits that work</p>
                </div>
                <ChevronDown className={`w-5 h-5 text-black/40 transition-transform duration-300 ${
                  selectedMood === 'practice' ? 'rotate-180' : ''
                }`} />
              </div>
              
              {selectedMood === 'practice' && (
                <div className="space-y-2 pt-4 border-t border-black/5 animate-in fade-in slide-in-from-top-2 duration-300">
                  {['habits', 'boundaries', 'whenitshard'].map((uuid) => {
                    const cat = categories.find(c => c.uuid === uuid);
                    return (
                      <button
                        key={cat.uuid}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCategory(cat.uuid);
                        }}
                        className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all ${
                          selectedCategory === cat.uuid
                            ? 'bg-emerald-500 text-white font-medium'
                            : 'bg-emerald-50 text-black/70 hover:bg-emerald-100'
                        }`}
                      >
                        <span className="mr-2">{cat.icon}</span>
                        {cat.name}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Not Alone */}
            <div 
              className={`group cursor-pointer bg-white rounded-3xl p-8 border-2 transition-all duration-300 ${
                selectedMood === 'not-alone' 
                  ? 'border-rose-500 shadow-xl shadow-rose-100 scale-105' 
                  : 'border-transparent hover:border-rose-200 hover:shadow-lg'
              }`}
              onClick={() => setSelectedMood(selectedMood === 'not-alone' ? null : 'not-alone')}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-4xl mb-3">🌍</div>
                  <h3 className="text-2xl font-semibold text-black mb-2">Not Alone</h3>
                  <p className="text-sm text-black/60">Real stories, real people</p>
                </div>
                <ChevronDown className={`w-5 h-5 text-black/40 transition-transform duration-300 ${
                  selectedMood === 'not-alone' ? 'rotate-180' : ''
                }`} />
              </div>
              
              {selectedMood === 'not-alone' && (
                <div className="space-y-2 pt-4 border-t border-black/5 animate-in fade-in slide-in-from-top-2 duration-300">
                  {['lifeunfiltered', 'notyoueveryone'].map((uuid) => {
                    const cat = categories.find(c => c.uuid === uuid);
                    return (
                      <button
                        key={cat.uuid}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCategory(cat.uuid);
                        }}
                        className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all ${
                          selectedCategory === cat.uuid
                            ? 'bg-rose-500 text-white font-medium'
                            : 'bg-rose-50 text-black/70 hover:bg-rose-100'
                        }`}
                      >
                        <span className="mr-2">{cat.icon}</span>
                        {cat.name}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Quick Access - All Categories */}
          <div className="text-center">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-black/10 text-sm text-black/70 hover:text-black hover:border-black/20 transition-all"
            >
              <span>Browse all categories</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
            </button>

            {showDropdown && (
              <div className="mt-4 inline-block bg-white rounded-2xl shadow-xl border border-black/10 p-4 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-w-2xl">
                  {categories.map((cat) => (
                    <button
                      key={cat.uuid}
                      onClick={() => {
                        setSelectedCategory(cat.uuid);
                        setShowDropdown(false);
                      }}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm text-left transition-all ${
                        selectedCategory === cat.uuid
                          ? 'bg-black text-white font-medium'
                          : 'text-black/70 hover:bg-black/5'
                      }`}
                    >
                      <span>{cat.icon}</span>
                      <span className="text-xs">{cat.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

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