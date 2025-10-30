'use client';

import { useState } from 'react';
import { Menu, X, Home, Info, Mail, Map, ArrowRight, ChevronDown, Heart, Brain, Sparkles, Zap, Compass } from 'lucide-react';

export default function FullBlogShowcase() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [variant, setVariant] = useState(1);

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
    <div className="relative z-10 px-6 lg:px-8 max-w-7xl mx-auto pb-20">
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

function Navigation({ isMenuOpen, setIsMenuOpen }) {
  return (
    <nav className="relative z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 backdrop-blur-xl rounded-xl flex items-center justify-center border transition-all bg-white/10 border-white/20">
              <span className="text-xl">📝</span>
            </div>
            <span className="text-white font-light text-xl tracking-tight hidden sm:block">
              The Bond Blog
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {[
              { icon: Home, label: 'Home', href: '/' },
              { icon: Info, label: 'About', href: '/about' },
              { icon: Mail, label: 'Subscribe', href: '/subscribe' },
              { icon: Map, label: 'Sitemap', href: '/sitemap' }
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

function Footer() {
  return (
    <footer className="bg-black text-white relative">
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/10 backdrop-blur-xl">
                  <span className="text-2xl">📝</span>
                </div>
                <span className="font-light text-lg tracking-tight">
                  The Bond Blog
                </span>
              </div>
              <p className="text-sm font-light opacity-50 leading-relaxed">
                Sticky Notes for Your Soul's Refrigerator
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider mb-4 opacity-40">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {['Home', 'About', 'Subscribe', 'Sitemap'].map((link) => (
                  <li key={link}>
                    <a href={`/${link.toLowerCase()}`} className="text-sm font-light opacity-70 hover:opacity-100 transition-opacity">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider mb-4 opacity-40">
                Categories
              </h3>
              <ul className="space-y-3">
                {['Feelings', 'Mind Bug', 'When It\'s Hard', 'Finding Your Why'].map((cat) => (
                  <li key={cat}>
                    <a href={`/category/${cat.toLowerCase()}`} className="text-sm font-light opacity-70 hover:opacity-100 transition-opacity">
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider mb-4 opacity-40">
                Stay Updated
              </h3>
              <p className="text-sm font-light opacity-50 mb-4 leading-relaxed">
                Get weekly insights delivered to your inbox.
              </p>
              <a 
                href="/subscribe" 
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm transition-all bg-white text-black font-medium hover:bg-white/90"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs font-light opacity-40">
              © 2025 The Bond Blog. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {['Privacy', 'Terms', 'Contact'].map((link) => (
                <a 
                  key={link} 
                  href={`/${link.toLowerCase()}`} 
                  className="text-xs font-light opacity-40 hover:opacity-100 transition-opacity"
                >
                  {link}
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
              <a href="/subscribe" className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-rose-700 text-white rounded-full text-base font-semibold hover:shadow-sm hover:shadow-white/20 transition-all inline-flex items-center gap-2 shadow-[0_2px_8px_rgba(0,0,0,0.3)]" style={{textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>
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
      <CategoryFilter {...{categories, selectedCategory, setSelectedCategory, isCategoryOpen, setIsCategoryOpen, selectedCategoryInfo}} />
      <BlogGrid posts={filteredPosts} categories={categories} />
      <Footer />
    </div>
  );
}

