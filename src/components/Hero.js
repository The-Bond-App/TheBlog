'use client';

import { useState } from 'react';
import { Menu, X, Home, Info, Mail, Map, ArrowRight, ChevronDown, Heart, Brain, Sparkles, MicVocal, ShoppingBagIcon } from 'lucide-react';

export default function FullBlogShowcase() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  

  const categories = [
    { id: 'all', icon: '✨', name: 'All Posts', description: 'Everything we write' },
    { id: 'feelings', icon: '🎭', name: 'Feelings I Didn\'t Ask For', description: 'Emotional surprises, internal chaos' },
    { id: 'why', icon: '🔍', name: 'Finding Your Why', description: 'Life purpose, identity loss' },
    { id: 'science', icon: '🧠', name: 'Science Says', description: 'Psychology & neuroscience' },
    { id: 'mindbug', icon: '🤯', name: 'Mind Bug', description: 'Question, idea, or provocation' },
    { id: 'habits', icon: '🌱', name: 'Small Wins & Tiny Habits', description: 'Practical rituals, grounding actions' },
    { id: 'whenitshard', icon: '🛤️', name: 'When It\'s Hard', description: 'Deeper support, bridge between blog and nudge' },
    { id: 'meaning', icon: '💡', name: 'Life, Then Meaning', description: 'Late epiphanies, emotional clarity' },
    { id: 'virtualyou', icon: '📱', name: 'The Virtual You', description: 'Digital overwhelm, online identity' },
    { id: 'notyoueveryone', icon: '👥', name: 'It\'s Not Just You, It\'s Everyone', description: 'Human connection, relational chaos' },
    { id: 'boundaries', icon: '🛡️', name: 'Boundaries & Burnout', description: 'Emotional labor, people-pleasing' }
  ];

  const highlights = [
    {
      id: 1,
      title: "The Art of Mindful Rebellion",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
      readTime: "5 min",
      category: "mindbug"
    },
    {
      id: 2,
      title: "Why Silence Speaks Louder",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      readTime: "7 min",
      category: "feelings"
    },
    {
      id: 3,
      title: "Finding Light in Dark Corners",
      image: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800&q=80",
      readTime: "6 min",
      category: "whenitshard"
    }
  ];

  const blogPosts = [
    {
      id: 4,
      title: "The Weight of Unspoken Words",
      excerpt: "Sometimes what we don't say carries more meaning than a thousand conversations.",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
      readTime: "4 min",
      category: "feelings",
      date: "Oct 28, 2025",
      tall: true
    },
    {
      id: 5,
      title: "Breaking Patterns",
      excerpt: "How to recognize the loops you're stuck in and find the exit.",
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=80",
      readTime: "6 min",
      category: "habits",
      date: "Oct 27, 2025"
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
      title: "Finding Your Frequency",
      excerpt: "When you operate at your natural frequency, everything else falls into place.",
      image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=800&q=80",
      readTime: "8 min",
      category: "why",
      date: "Oct 25, 2025",
      tall: true
    },
    {
      id: 8,
      title: "The Power of Pause",
      excerpt: "In the space between action and reaction, wisdom lives.",
      image: "https://images.unsplash.com/photo-1528892677828-8862216f3665?w=800&q=80",
      readTime: "3 min",
      category: "habits",
      date: "Oct 24, 2025"
    },
    {
      id: 9,
      title: "Rewriting Your Story",
      excerpt: "You're not stuck with the narrative you've been telling yourself.",
      image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&q=80",
      readTime: "7 min",
      category: "meaning",
      date: "Oct 23, 2025"
    },
    {
      id: 10,
      title: "The Quiet Revolution",
      excerpt: "Real change doesn't announce itself. It whispers and transforms.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      readTime: "6 min",
      category: "mindbug",
      date: "Oct 22, 2025",
      tall: true
    },
    {
      id: 11,
      title: "Between Chaos and Calm",
      excerpt: "Finding equilibrium in a world that never stops moving.",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
      readTime: "5 min",
      category: "whenitshard",
      date: "Oct 21, 2025"
    },
    {
      id: 12,
      title: "Your Digital Shadow Self",
      excerpt: "The person you are online isn't always who you want to be.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      readTime: "6 min",
      category: "virtualyou",
      date: "Oct 20, 2025"
    },
    {
      id: 13,
      title: "The Science of Overthinking",
      excerpt: "Why your brain won't shut up and what you can do about it.",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
      readTime: "8 min",
      category: "science",
      date: "Oct 19, 2025",
      tall: true
    },
    {
      id: 14,
      title: "When No Feels Impossible",
      excerpt: "Learning to set boundaries without guilt or fear.",
      image: "https://images.unsplash.com/photo-1523365237953-94b3cd414884?w=800&q=80",
      readTime: "5 min",
      category: "boundaries",
      date: "Oct 18, 2025"
    },
    {
      id: 15,
      title: "We're All Just Winging It",
      excerpt: "The comforting truth that nobody really has it figured out.",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80",
      readTime: "4 min",
      category: "notyoueveryone",
      date: "Oct 17, 2025"
    }
  ];



  return (
    <div className="min-h-screen bg-slate-900">
      <Variant2 {...{highlights, blogPosts, categories, selectedCategory, setSelectedCategory, isCategoryOpen, setIsCategoryOpen, isMenuOpen, setIsMenuOpen}} />
    </div>
  );
}




// Shared Components
function FeaturedGrid({ highlights, categories }) {
  const getCategoryInfo = (catId) => categories.find(c => c.id === catId) || categories[0];
  
  return (
    <div className="relative z-10 px-6 lg:px-8 max-w-7xl mx-auto pb-6">
      <h2 className="text-sm font-light text-white/50 mb-6 uppercase tracking-widest">Featured Stories</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {highlights.map((post, idx) => {
          const catInfo = getCategoryInfo(post.category);
          return (
            <a
              key={post.id}
              href={`/post/${post.id}`}
              className="group relative overflow-hidden rounded-3xl max-h-[400px] hover:scale-[1.02] transition-all duration-500"
            >
              <img src={post.image} alt={post.title} className="w-full h-full object-cover brightness-75 group-hover:brightness-90 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/40 to-transparent" />
              
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center text-sm font-medium">
                {idx + 1}
              </div>
              
              <div className="absolute inset-0 p-7 flex flex-col justify-end">
                <div className="text-xs text-purple-300 mb-2 font-medium flex items-center gap-2">
                  <span>{catInfo.icon}</span>
                  <span>{catInfo.name}</span>
                </div>
                <h3 className="text-2xl font-light mb-2 leading-tight">{post.title}</h3>
                <div className="text-sm text-white/60">{post.readTime}</div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

function CategoryFilter({ categories, selectedCategory, setSelectedCategory, isCategoryOpen, setIsCategoryOpen, selectedCategoryInfo }) {
  return (
    <div className="relative z-10 py-12 px-6 lg:px-8 max-w-[1600px] mx-auto border-t border-white/5">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
        <div>
          <h2 className="text-2xl mb-2 font-light">Explore Stories</h2>
          <p className="text-sm font-light opacity-40">Browse by category or view all</p>
        </div>

        <div className="relative">
          <button
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            className="flex items-center gap-3 px-6 py-3 rounded-full transition-all bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-white/10"
          >
            <span className="text-xl">{selectedCategoryInfo.icon}</span>
            <span className="font-light">{selectedCategoryInfo.name}</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
          </button>

          {isCategoryOpen && (
            <div className="absolute top-full right-0 mt-2 w-80 rounded-2xl overflow-hidden shadow-2xl max-h-96 overflow-y-auto bg-slate-900/95 backdrop-blur-2xl border border-white/10 shadow-purple-500/10">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setIsCategoryOpen(false);
                  }}
                  className={`w-full text-left px-5 py-4 transition-all border-b border-white/5 last:border-0 hover:bg-white/5 ${selectedCategory === cat.id ? 'bg-white/10' : ''}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl mt-1">{cat.icon}</span>
                    <div className="flex-1">
                      <div className="font-light text-white mb-1">{cat.name}</div>
                      <div className="text-xs font-light opacity-40">{cat.description}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {selectedCategory !== 'all' && (
        <div className="mb-8 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
          <div className="flex items-start gap-4">
            <span className="text-4xl">{selectedCategoryInfo.icon}</span>
            <div className="flex-1">
              <h3 className="text-xl mb-1 font-light">{selectedCategoryInfo.name}</h3>
              <p className="text-sm font-light opacity-50">{selectedCategoryInfo.description}</p>
            </div>
            <button
              onClick={() => setSelectedCategory('all')}
              className="text-xs transition-colors font-light opacity-40 hover:opacity-100"
            >
              Clear filter
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function BlogGrid({ posts, categories }) {
  const getCategoryInfo = (catId) => categories.find(c => c.id === catId) || categories[0];
  
  return (
    <div className="relative z-10 py-20 px-6 lg:px-8 max-w-[1600px] mx-auto">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {posts.map((post) => {
          const catInfo = getCategoryInfo(post.category);
          return (
            <a
              key={post.id}
              href={`/post/${post.id}`}
              className="group block break-inside-avoid mb-6"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-500">
                <div className={`relative overflow-hidden ${post.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/30 to-transparent" />
                  
                  <div className="absolute top-4 left-4 px-3 py-1 bg-purple-500/30 backdrop-blur-xl border border-purple-400/40 rounded-full text-purple-200 text-xs font-medium flex items-center gap-2">
                    <span>{catInfo.icon}</span>
                    <span>{catInfo.name}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-light mb-2 leading-tight group-hover:text-pink-300 transition-colors">{post.title}</h3>
                  <p className="text-sm text-white/50 font-light leading-relaxed mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center gap-3 text-xs text-white/40">
                    <span>{post.readTime}</span>
                    <span className="w-1 h-1 rounded-full bg-white/40" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

function EmailCaptureBanner() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Your email service integration here
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <div id="subscribe" className="relative z-10 px-6 lg:px-8 max-w-7xl mx-auto py-12">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-orange-900/30 backdrop-blur-xl border border-white/10 px-8 py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-xl lg:text-2xl font-light mb-1">
              Weekly reminders that you're doing better than you think.
            </h3>
            <p className="text-base font-light text-white/50">
              Retention rate: suspiciously high.
            </p>
          </div>
          
          {status === 'success' ? (
            <div className="text-green-400 font-light text-sm">
              ✓ You're in. Check your email.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex-shrink-0">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-84 px-5 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-all"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-6 py-3 bg-white text-slate-900 rounded-full text-sm font-medium hover:bg-white/90 transition-all disabled:opacity-50 whitespace-nowrap"
                >
                  {status === 'loading' ? '...' : 'Subscribe'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function Navigation({ isMenuOpen, setIsMenuOpen }) {
  return (
    <nav className="relative z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-4 group">
            <img src="/assets/logo.png" className='w-8 h-8'/>
            <span className="font-title text-white font-light text-2xl tracking-wide hidden sm:block">
              The Bond Blog
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {[
              { icon: Home, label: 'Home', href: '/' },
              { icon: Info, label: 'The Bond Company', href: 'https://thebond.company' },
              { icon: ShoppingBagIcon, label: 'Shop', href: 'https://shop.thebond.company' },
              { icon: MicVocal, label: 'Your Story', href: '/yourstory' }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-white opacity-70 hover:opacity-100 hover:bg-white/10 rounded-lg transition-all flex items-center gap-2 text-sm font-light"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white opacity-70 hover:opacity-100 hover:bg-white/10 rounded-lg transition-all"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 backdrop-blur-xl rounded-2xl border overflow-hidden bg-white/5 border-white/10">
            {[
              { icon: Home, label: 'Home', href: '/' },
              { icon: Info, label: 'About', href: '/about' },
              { icon: Mail, label: 'Subscribe', href: '/subscribe' },
              { icon: Map, label: 'Sitemap', href: '/sitemap' }
            ].map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-3 px-6 py-4 text-white opacity-70 hover:opacity-100 hover:bg-white/10 transition-all ${
                  idx !== 3 ? 'border-b border-white/20' : ''
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-light">{item.label}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}




const footerLinks = {
  explore: [
    { label: 'Subscribe', url: '#subscribe' },
    { label: 'SiteMap', url: '/sitemap' },
    { label: 'Gift Wellbeing', url: 'https://shop.thebond.company'}

  ],
  getInvolved: [
    { label: 'The Bond Company', url: '/about' },
    { label: 'Get in Touch', url: '/contact' },
    { label: 'Partner With Us', url: '/partners' },
  ],
  popular: [
    { label: "Feelings I Didn't Ask For", url: '' },
    { label: 'Tiny Habits', url: '' },
    { label: "When It's Hard", url: '' },
    { label: 'Boundaries & Burnout', url: '' },
  ],
  bottom: [
    { label: 'Privacy', url: '/privacy' },
    { label: 'Contact', url: '/contact' },
  ],
};

function Footer() {
  return (
    <footer className="bg-black text-white relative">
      <div className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-8 md:gap-x-8">
            
            {/* Brand */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <img src="/assets/logo.png" className="w-8 h-8" alt="Logo" />
                <span className="font-light text-xl tracking-tight">
                  The Bond Blog
                </span>
              </div>
              <p className="text-base font-light opacity-40 leading-relaxed max-w-xs">
                Sticky notes for your soul's refrigerator. 
              </p>
              
                {/* Social Media */}
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.instagram.com/thebondcompany/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="opacity-40 hover:opacity-100 transition-opacity"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://tiktok.com/@thebondcompany" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="opacity-40 hover:opacity-100 transition-opacity"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://x.com/thebondco" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="opacity-40 hover:opacity-100 transition-opacity"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://t.me/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="opacity-40 hover:opacity-100 transition-opacity"
                  aria-label="Telegram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Footer sections */}
            {['explore', 'getInvolved', 'popular'].map((section) => (
              <div key={section}>
                <h3 className="text-xs font-medium uppercase tracking-wider mb-6 opacity-30">
                  {section === 'getInvolved' ? 'Get Involved' : section.charAt(0).toUpperCase() + section.slice(1)}
                </h3>
                <ul className="space-y-3">
                  {footerLinks[section].map((item) => (
                    <li key={item.label}>
                      <a href={item.url} className="text-sm font-light opacity-60 hover:opacity-100 transition-opacity">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Bottom bar */}
          <div className="mt-12 pt-2 px-2 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm font-light opacity-30">
              © 2025 <a href="https://thebond.company"> The Bond Company. </a>
            </p>
            <div className="flex items-center gap-8 ">
              {footerLinks.bottom.map((item) => (
                <a key={item.label} href={item.url} className="text-sm font-light opacity-30 hover:opacity-100 transition-opacity">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


// VARIANT 2: Side Emotion - Title left, vertical orb stack right
function Variant2({ highlights, blogPosts, categories, selectedCategory, setSelectedCategory, isCategoryOpen, setIsCategoryOpen, isMenuOpen, setIsMenuOpen }) {
  const filteredPosts = selectedCategory === 'all' ? blogPosts : blogPosts.filter(post => post.category === selectedCategory);
  const getCategoryInfo = (catId) => categories.find(c => c.id === catId) || categories[0];
  const selectedCategoryInfo = getCategoryInfo(selectedCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-600/20 via-orange-600/20 to-rose-600/20" />
        <div className="absolute inset-0 backdrop-blur-3xl" />
      </div>

      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <div className="relative z-10 pt-24 pb-20 px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1.2fr_0.3fr] gap-16 min-h-[calc(100vh-8rem)] items-center">
          
          {/* Left: Title */}
          <div className="space-y-8">
            <h1 className="text-7xl lg:text-8xl xl:text-9xl font-light leading-[0.92] tracking-tight">
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
                Sticky Notes
              </span>
              <br />
              <span className="text-white">for Your Soul's</span>
              <br />
              <span className="text-white/40">Refrigerator</span>
            </h1>
            
            <p className="text-xl lg:text-2xl font-light text-white/60 max-w-xl leading-relaxed">
              The stuff you need to hear when you're spiraling at 2am. Or just existing on a Tuesday afternoon. We don't judge.
            </p>

            <div className="flex gap-4">
              <a href="/subscribe" className="px-8 py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white rounded-full text-base font-semibold hover:shadow-sm hover:shadow-white/20 transition-all inline-flex items-center gap-2 shadow-[0_2px_8px_rgba(0,0,0,0.3)]" style={{textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>
                Start Reading
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <a href="/about" className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-full text-base font-light hover:bg-white/20 transition-all">
                Explore
              </a>
            </div>
          </div>

          {/* Right: Vertical Orb Stack */}
          <div className="flex flex-col gap-8 items-center justify-center">
            <div className="w-28 h-28 rounded-full bg-amber-500/30 backdrop-blur-xl border-2 border-amber-400/50 flex items-center justify-center animate-pulse shadow-2xl shadow-amber-500/50" style={{animationDuration: '3s'}}>
              <Heart className="w-14 h-14 text-amber-400" strokeWidth={1.5} />
            </div>
            <div className="w-32 h-32 rounded-full bg-orange-500/30 backdrop-blur-xl border-2 border-orange-400/50 flex items-center justify-center animate-pulse shadow-2xl shadow-orange-500/50" style={{animationDuration: '4s', animationDelay: '0.5s'}}>
              <Brain className="w-16 h-16 text-orange-400" strokeWidth={1.5} />
            </div>
            <div className="w-28 h-28 rounded-full bg-rose-500/30 backdrop-blur-xl border-2 border-rose-400/50 flex items-center justify-center animate-pulse shadow-2xl shadow-rose-500/50" style={{animationDuration: '3.5s', animationDelay: '1s'}}>
              <Sparkles className="w-14 h-14 text-rose-400" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>

      <FeaturedGrid highlights={highlights} categories={categories} />
      <EmailCaptureBanner />
      <CategoryFilter {...{categories, selectedCategory, setSelectedCategory, isCategoryOpen, setIsCategoryOpen, selectedCategoryInfo}} />
      <BlogGrid posts={filteredPosts} categories={categories} />
      <Footer />
    </div>
  );
}

