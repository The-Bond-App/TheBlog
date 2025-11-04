"use client"
import { useState, useRef, useEffect } from 'react';
import { ArrowRight, Heart, Brain, Sparkles, ChevronDown } from 'lucide-react';

import Navigation from './Navigation'

export default function StevesBlog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
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

  const topCategories = [
    { id: 'all', icon: '✨', name: 'All Articles', description: 'Everything we write' },
    { id: 'feelings', icon: '💭', name: 'Feelings I Didn\'t Ask For', description: 'Emotional surprises, internal chaos' },
    { id: 'habits', icon: '🌱', name: 'Small Wins & Tiny Habits', description: 'Practical rituals, grounding actions' },
    { id: 'whenitshard', icon: '🌧️', name: 'When It\'s Hard', description: 'Deeper support, bridge between blog and nudge' },
    { id: 'notyoueveryone', icon: '🤝', name: 'It\'s Not Just You, It\'s Everyone', description: 'Human connection, relational chaos' },
  ];


  // More categories in dropdown
  const moreCategories = [
    { id: 'why', icon: '🧭', name: 'Finding Your Why', description: 'Life purpose, identity loss' },
    { id: 'science', icon: '🧠', name: 'Science Says', description: 'Psychology & neuroscience' },
    { id: 'mindbug', icon: '🤯', name: 'Mind Bug', description: 'Question, idea, or provocation' },
    { id: 'meaning', icon: '✨', name: 'Life, Then Meaning', description: 'Late epiphanies, emotional clarity' },
    { id: 'virtualyou', icon: '💻', name: 'The Virtual You', description: 'Digital overwhelm, online identity' },
    { id: 'boundaries', icon: '🚧', name: 'Boundaries & Burnout', description: 'Emotional labor, people-pleasing' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Weight of Unspoken Words",
      excerpt: "Sometimes what we don't say carries more meaning than a thousand conversations. Exploring the silent language of emotion.",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80",
      readTime: "4 min",
      category: "feelings",
      date: "Oct 28, 2025",
      featured: true
    },
    {
      id: 2,
      title: "Breaking Patterns",
      excerpt: "How to recognize the loops you're stuck in and find the exit.",
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=80",
      readTime: "6 min",
      category: "living",
      date: "Oct 27, 2025"
    },
    {
      id: 3,
      title: "The Science of Overthinking",
      excerpt: "Why your brain won't shut up and what you can do about it.",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
      readTime: "8 min",
      category: "science",
      date: "Oct 19, 2025"
    },
    {
      id: 4,
      title: "We're All Just Winging It",
      excerpt: "The comforting truth that nobody really has it figured out.",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80",
      readTime: "4 min",
      category: "connection",
      date: "Oct 17, 2025"
    },
    {
      id: 5,
      title: "Finding Your Frequency",
      excerpt: "When you operate at your natural frequency, everything falls into place.",
      image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=800&q=80",
      readTime: "8 min",
      category: "feelings",
      date: "Oct 25, 2025"
    },
    {
      id: 6,
      title: "The Art of Letting Go",
      excerpt: "Release isn't about forgetting. It's about choosing what to carry forward.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      readTime: "5 min",
      category: "meaning",
      date: "Oct 26, 2025"
    },
    {
      id: 7,
      title: "Your Digital Shadow Self",
      excerpt: "The person you are online isn't always who you want to be.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      readTime: "6 min",
      category: "connection",
      date: "Oct 20, 2025"
    },
    {
      id: 8,
      title: "When No Feels Impossible",
      excerpt: "Learning to set boundaries without guilt or fear.",
      image: "https://images.unsplash.com/photo-1523365237953-94b3cd414884?w=800&q=80",
      readTime: "5 min",
      category: "living",
      date: "Oct 18, 2025"
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);
    console.log(blogPosts)

  const heroPost = filteredPosts.find(p => p.featured) || filteredPosts[0];
  const remainingPosts = filteredPosts.filter(p => p.id !== heroPost.id);

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-600/20 via-orange-600/20 to-rose-600/20" />
      </div>
      
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="max-w-6xl min-h-screen mx-auto pt-8" >
          <Navigation />

          <div className="grid lg:grid-cols-[1.0fr_0.3fr] gap-2 items-center min-h-[calc(100vh-14rem)]">
            {/* Left: Title */}
            <div className="space-y-10">
              <h1 className="text-7xl lg:text-8xl xl:text-8xl font-light leading-[0.92] tracking-tight">
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
                  Sticky Notes
                </span>
                <br />
                <span className="text-white">for Your Soul's</span>
                <br />
                <span className="text-white/40">Refrigerator</span>
              </h1>
              
              <p className="text-xl lg:text-2xl !font-extralight text-white/60 tracking-wide max-w-2xl leading-snug">
                The stuff you need to hear when you're spiraling at 2am. <br />Or just existing on a Tuesday afternoon. We don't judge.
              </p>

              <div className="flex gap-4">
                <a
                  href="#posts"
                  className="px-8 py-3.5 bg-white text-slate-900 rounded-full text-base font-medium hover:bg-white/90 transition-all inline-flex items-center gap-2"
                >
                  Start Reading
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#subscribe"
                  className="px-8 py-3.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-base font-medium hover:bg-white/15 transition-all"
                >
                  Subscribe
                </a>
              </div>
            </div>

            {/* Right: Vertical Orb Stack */}
            <div className="flex flex-col gap-6 items-center justify-center">
              <div
                className="w-28 h-28 rounded-full bg-amber-500/30 backdrop-blur-xl border-2 border-amber-400/50 flex items-center justify-center animate-pulse shadow-2xl shadow-amber-500/50"
                style={{ animationDuration: '3s' }}
              >
                <Heart className="w-14 h-14 text-amber-400" strokeWidth={1.5} />
              </div>

              <div
                className="w-32 h-32 rounded-full bg-orange-500/30 backdrop-blur-xl border-2 border-orange-400/50 flex items-center justify-center animate-pulse shadow-2xl shadow-orange-500/50"
                style={{ animationDuration: '4s', animationDelay: '0.5s' }}
              >
                <Brain className="w-16 h-16 text-orange-400" strokeWidth={1.5} />
              </div>

              <div
                className="w-28 h-28 rounded-full bg-rose-500/30 backdrop-blur-xl border-2 border-rose-400/50 flex items-center justify-center animate-pulse shadow-2xl shadow-rose-500/50"
                style={{ animationDuration: '3.5s', animationDelay: '1s' }}
              >
                <Sparkles className="w-14 h-14 text-rose-400" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>

        <div id="posts" className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-8">
            {/* Filter label */}
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="text-[11px] uppercase tracking-[0.15em] text-white/50 font-semibold">
                Explore Topics
              </div>
              <div className="h-3 w-px bg-white/[0.12]"></div>
              <a
                href="/sitemap"
                className="text-[11px] uppercase tracking-[0.15em] text-white/40 hover:text-white/70 transition-colors duration-200 font-semibold"
              >
                Site Map
              </a>
            </div>
            
            {/* Category buttons */}
            <div className="flex flex-wrap gap-2 justify-center items-center pb-1">
              {/* Top categories always visible */}
              {topCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`cursor-pointer flex-shrink-0 px-4 py-2 rounded-full text-sm tracking-tight transition-all duration-200 ${
                    selectedCategory === cat.id
                      ? 'bg-white text-slate-900 font-medium'
                      : 'bg-transparent text-white/60 hover:text-white hover:bg-white/5 border border-white/20'
                  }`}
                >
                  <span className="mr-2">{cat.icon}</span>
                  {cat.name}
                </button>
              ))}

              {/* Subtle divider */}
              <div className="h-6 w-px bg-white/10 mx-1"></div>

              {/* More dropdown */}
              {moreCategories.length > 0 && (
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className={`cursor-pointer flex-shrink-0 px-4 py-2 rounded-full text-sm transition-all duration-200 flex items-center gap-2 ${
                      moreCategories.some(cat => cat.id === selectedCategory)
                        ? 'bg-white text-slate-900 font-medium'
                        : 'bg-transparent text-white/60 hover:text-white hover:bg-white/5 border border-white/20'
                    }`}
                  >
                    <span>More</span>
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
                  </button>

                  {showDropdown && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white backdrop-blur-xl rounded-2xl shadow-2xl z-50 min-w-[200px]">
                      <div className="p-2">
                        {moreCategories.map((cat) => (
                          <button
                            key={cat.id}
                            onClick={() => {
                              setSelectedCategory(cat.id);
                              setShowDropdown(false);
                            }}
                            className={`cursor-pointer w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                              selectedCategory === cat.id
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

        {/* Refined filter with divider and highlights 
        <div id="posts" className="border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="text-sm uppercase tracking-widest text-white/70 mb-4 text-center font-semibold">
              Explore Topics
            </div>
            <div className="flex flex-wrap gap-2 justify-center items-center pb-1">
              {topCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`cursor-pointer flex-shrink-0 px-4 py-2 rounded-full text-sm tracking-wide transition-all duration-200 border ${
                    selectedCategory === cat.id
                      ? 'bg-white/10 text-white border-white shadow-lg shadow-white/5'
                      : 'text-white/80 hover:text-white/80 border-white hover:border-white'
                  }`}
                >
                  <span className="mr-2 opacity-90">{cat.icon}</span>
                  {cat.name}
                </button>
              ))}

              <div className="h-6 w-px bg-white/10 mx-1"></div>

              {moreCategories.length > 0 && (
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className={`cursor-pointer flex-shrink-0 px-4 py-2 rounded-full text-sm transition-all duration-200 border flex items-center gap-2 ${
                      moreCategories.some(cat => cat.id === selectedCategory)
                        ? 'bg-white/10 text-white border-white/30 shadow-lg shadow-white/5'
                        : 'text-white/70 hover:text-white border-white hover:border-white'
                    }`}
                  >
                    <span>More</span>
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
                  </button>

                  {showDropdown && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-slate-800/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-50 min-w-[200px]">
                      <div className="p-2">
                        {moreCategories.map((cat) => (
                          <button
                            key={cat.id}
                            onClick={() => {
                              setSelectedCategory(cat.id);
                              setShowDropdown(false);
                            }}
                            className={`cursor-pointer w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                              selectedCategory === cat.id
                                ? 'bg-white/10 text-white'
                                : 'text-white hover:text-white hover:bg-white/5'
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
        </div>*/}

        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Hero Post */}
          {heroPost && 
          <article className="mb-20 group cursor-pointer">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-100 via-orange-50 to-rose-50 backdrop-blur-xl border border-amber-300/50 hover:border-amber-400 shadow-2xl shadow-amber-950/40 transition-all duration-500">
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
          }

          {/* Clean grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {remainingPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-100 via-orange-50 to-rose-50 backdrop-blur-xl transition-all duration-500 border border-amber-300/50 hover:border-amber-400 shadow-xl shadow-amber-950/40">
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

          {/* Subscribe section */}
          <div id="subscribe" className="mt-32 mb-20">
            <div className="max-w-4xl mx-auto text-center p-16 rounded-3xl bg-gradient-to-br from-amber-900/20 via-orange-900/20 to-rose-900/20 backdrop-blur-xl border border-orange-500/20">
              <h2 className="text-5xl font-light mb-6 bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
                Stay Connected
              </h2>
              <p className="text-xl text-white/60 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
                Posts that get you, weekly.  Side effects may include feeling seen.
              </p>
              <div className="flex gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-6 py-4 text-lg rounded-full bg-white/5 border border-white/10 focus:border-orange-500/50 focus:outline-none text-white placeholder:text-white/30"
                />
                <button className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 text-white text-lg font-medium hover:shadow-lg hover:shadow-orange-500/30 transition-all whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-white/10 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              <div>
                <h3 className="text-lg font-light mb-4 bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent">
                  Soul Sticky Notes
                </h3>
                <p className="text-sm text-white/50 font-light leading-relaxed">
                  Emotional support in bite-sized pieces. Because sometimes the smallest reminders make the biggest difference.
                </p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-4 text-white/80">Explore</h4>
                <ul className="space-y-2 text-sm text-white/50">
                  <li><a href="#" className="hover:text-white transition-colors">All Posts</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Categories</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-4 text-white/80">Connect</h4>
                <ul className="space-y-2 text-sm text-white/50">
                  <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">RSS Feed</a></li>
                </ul>
              </div>
            </div>
            
            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
              <p>© 2025 Soul Sticky Notes. Made with intention.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white/60 transition-colors">Privacy</a>
                <a href="#" className="hover:text-white/60 transition-colors">Terms</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}