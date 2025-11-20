'use client';
import { useState, useEffect, useRef } from 'react';
import { Menu, Flame, Play, TrendingUp, Award, Heart, Star, Search, Sliders, Sparkles, ArrowRight, Calendar, Clock, BookOpen, Target, Compass, Map, Sticker, LifeBuoy, User } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

import BentoParallaxHero from '../ui/BentoParallaxHero'
import HeroVariations from '../ui/HeroVariations'

import RitualSelector from '../ui/RitualSelector'
import NewsletterBanner from './NewsletterBanner';
//import Footer from './Footer';
const posts = [
    {
      title: "The Emotional Basement",
      description: "Why unprocessed feelings pile up like forgotten storage boxes",
      image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80",
      category: "Understanding",
      readTime: "5 min"
    },
    {
      title: "Anxiety as Static",
      description: "When your nervous system can't find the signal",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
      category: "Processing",
      readTime: "4 min"
    },
    {
      title: "Boundaries as Fences",
      description: "Good neighbors make good emotional health",
      image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
      category: "Protection",
      readTime: "6 min"
    },
    {
      title: "Grief as Weather",
      description: "Some days it rains, some days it doesn't",
      image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=800&q=80",
      category: "Healing",
      readTime: "7 min"
    },
    {
      title: "Self-Talk as Radio",
      description: "Tuning into better frequencies",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
      category: "Practice",
      readTime: "5 min"
    }
  ];


  // Navigation Component
function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="relative">
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'} border-b border-slate-900`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            <a href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-slate-900 rounded-full" />
              <div>
                <div className="font-serif text-xl text-slate-900 tracking-tight">The Bond Blog</div>
                <div className="font-mono text-[10px] text-slate-500 tracking-wider">EST. 2025</div>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-6">
              <a href="#subscribe" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors tracking-wide">NEWSLETTER</a>
              <a href="https://shop.thebond.company" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors tracking-wide">SHOP</a>
              <a href="https://support.thebond.company/?section=general" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors tracking-wide">CONTACT</a>
              <button onClick={() => setIsStoryModalOpen(true)} className="px-6 py-2.5 bg-slate-900 text-white text-sm font-medium tracking-wide hover:bg-slate-800 transition-colors">
                SUBMIT STORY
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2" aria-label="Toggle menu">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-900">
            <div className="px-6 py-4 space-y-2">
              <a href="#subscribe" className="block px-4 py-3 text-slate-700 hover:bg-slate-50 font-medium tracking-wide" onClick={() => setIsMenuOpen(false)}>NEWSLETTER</a>
              <a href="https://shop.thebond.company" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-slate-700 hover:bg-slate-50 font-medium tracking-wide" onClick={() => setIsMenuOpen(false)}>SHOP</a>
              <a href="https://support.thebond.company/?section=general" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-slate-700 hover:bg-slate-50 font-medium tracking-wide" onClick={() => setIsMenuOpen(false)}>CONTACT</a>
              <button onClick={() => { setIsMenuOpen(false); setIsStoryModalOpen(true); }} className="w-full px-4 py-3 mt-2 bg-slate-900 text-white font-medium tracking-wide">
                SUBMIT STORY
              </button>
            </div>
          </div>
        )}
      </div>

      {isStoryModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setIsStoryModalOpen(false)}>
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsStoryModalOpen(false)} className="absolute top-6 right-6 w-9 h-9 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-100 z-10" aria-label="Close modal">
              <X className="w-5 h-5" strokeWidth={2} />
            </button>

            <div className="px-8 py-12 md:px-12 md:py-16">
              <div className="mb-8">
                <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-3">Your Story Matters</h2>
                <p className="text-lg text-slate-600">The hardest moments in your life might be the light someone else needs.</p>
              </div>

              <div className="space-y-6 mb-8 text-slate-700 leading-relaxed">
                <p>That raw, honest breakthrough, the time you faced pain, found clarity, or simply made it through—it carries more power than you realize.</p>
                <p>When you share your truth, you help others find theirs. When you share your light, you guide someone still searching.</p>
                <div className="bg-slate-50 px-6 py-5 my-8 border-l-4 border-slate-900">
                  <blockquote className="space-y-3">
                    <p className="text-slate-800 font-medium">"In the depths of winter, I finally learned that within me there lay an invincible summer" 🌻</p>
                    <footer className="text-sm text-slate-500">— Albert Camus</footer>
                  </blockquote>
                </div>
                <p>Have a story or lesson to share? <strong>We'd love to help amplify your voice</strong>.</p>
              </div>

              <a href="https://support.thebond.company/?section=blog" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold transition-all">
                <Send className="w-5 h-5" />
                Share Your Story
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

// Hero Component
function Hero() {
  const posts = [
    {
      title: "The Refrigerator Theory of Self-Care",
      description: "Why your emotional well-being works exactly like keeping groceries fresh",
      category: "Mental Models",
      readTime: "8 min",
      author: "Sarah Chen",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80"
    },
    {
      title: "Pressure Cooker Feelings",
      description: "Understanding emotional release through kitchen physics",
      category: "Emotion",
      readTime: "6 min",
      author: "Marcus Webb",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
    },
    {
      title: "The Battery Metaphor",
      description: "Why you can't pour from an empty cup",
      category: "Energy",
      readTime: "5 min",
      author: "Emma Taylor",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80"
    }
  ];

  return (
    <section className='px-6 md:px-12 py-28 max-w-7xl mx-auto bg-slate-50'>
      <div className="border-t-4 border-slate-900 pt-12 mb-16">
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-900 rounded-full" />
            <div>
              <div className="font-mono text-xs text-slate-500 tracking-wider">EMOTIONAL FUNDAMENTALS</div>
              <div className="font-serif text-sm text-slate-900">Est. 2025 · Daily</div>
            </div>
          </div>
          <div className="text-right font-mono text-xs text-slate-500">
            ISSUE №01<br/>
            NOV 2025
          </div>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-12 mb-16">
        <div className="lg:w-1/2">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-slate-900">
            Sticky notes for <span className="italic font-light">your soul's</span> fridge
          </h1>
        </div>
        
        <div className="lg:w-1/2 flex flex-col justify-center">
          <div className="border-l-2 border-slate-900 pl-8 mb-8">
            <p className="text-xl font-light text-slate-700 leading-relaxed mb-4">
              Emotional fundamentals, explained through analogies that stick.
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              A curated collection of mental models and frameworks for understanding yourself. 
              Updated daily. Read weekly. Remember forever.
            </p>
          </div>
          
          <div className="flex gap-4">
            <button className="flex-1 px-6 py-4 bg-slate-900 text-white text-sm font-medium tracking-wide hover:bg-slate-800 transition-colors">
              BEGIN READING →
            </button>
            <button className="px-6 py-4 border-2 border-slate-900 text-slate-900 text-sm font-medium tracking-wide hover:bg-slate-900 hover:text-white transition-all">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 relative group cursor-pointer">
          <div className="relative h-[550px] overflow-hidden mb-6">
            <img src={posts[0].image} alt={posts[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute top-6 left-6">
              <span className="px-4 py-2 bg-yellow-400 text-black text-xs font-black tracking-wider flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5" /> FEATURED STORY
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-sm text-slate-500 font-mono tracking-wider">
              <span>{posts[0].category.toUpperCase()}</span>
              <span>·</span>
              <span>{posts[0].readTime.toUpperCase()}</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl text-slate-900 leading-tight">{posts[0].title}</h2>
            <p className="text-lg text-slate-600 leading-relaxed">{posts[0].description}</p>
            <button className="inline-flex items-center gap-2 text-slate-900 font-medium hover:gap-4 transition-all group/btn">
              <span className="text-sm tracking-wide">READ ARTICLE</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="space-y-8">
          {posts.slice(1, 3).map((post, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative h-[240px] overflow-hidden mb-4">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="space-y-3">
                <div className="text-xs text-slate-500 font-mono tracking-wider">
                  {post.category.toUpperCase()}
                </div>
                <h3 className="font-serif text-2xl text-slate-900 leading-tight">{post.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Learning Paths Component
function LearningPaths() {
  const learningPaths = [
    {
      title: "Understanding Anxiety",
      subtitle: "From fight-or-flight to peace of mind",
      icon: "🧠",
      articles: "12",
      duration: "6 weeks",
      level: "Beginner Friendly",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
      gradient: "from-blue-900/80 to-blue-600/80"
    },
    {
      title: "Building Self-Compassion",
      subtitle: "Learning to be your own best friend",
      icon: "💚",
      articles: "10",
      duration: "4 weeks",
      level: "All Levels",
      image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80",
      gradient: "from-emerald-900/80 to-emerald-600/80"
    },
    {
      title: "Relationship Patterns",
      subtitle: "Breaking cycles, building connection",
      icon: "🤝",
      articles: "15",
      duration: "8 weeks",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80",
      gradient: "from-purple-900/80 to-purple-600/80"
    },
    {
      title: "Emotional Regulation",
      subtitle: "Mastering your nervous system",
      icon: "⚖️",
      articles: "14",
      duration: "7 weeks",
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
      gradient: "from-orange-900/80 to-orange-600/80"
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-white border-t-2 border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 border-b-2 border-slate-200 pb-8">
          <div className="flex items-center gap-3 mb-2">
            <Map className="w-7 h-7 text-slate-900" />
            <h2 className="font-serif text-4xl md:text-5xl text-slate-900">Learning Paths</h2>
          </div>
          <p className="text-lg text-slate-600 font-light">Structured journeys from confusion to clarity</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningPaths.map((path, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative h-80 overflow-hidden mb-4 border-2 border-slate-900 hover:border-slate-700 transition-colors">
                <img src={path.image} alt={path.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                <div className={`absolute inset-0 bg-gradient-to-t ${path.gradient} opacity-80`}></div>
                
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="text-6xl">{path.icon}</div>
                  
                  <div className="text-white">
                    <h3 className="font-serif text-2xl font-medium mb-2">{path.title}</h3>
                    <p className="text-sm text-white/90 mb-4 font-light">{path.subtitle}</p>
                    
                    <div className="space-y-1 text-xs text-white/80 font-mono tracking-wide">
                      <div>{path.articles} ARTICLES · {path.duration.toUpperCase()}</div>
                      <div>{path.level.toUpperCase()}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Rituals Component
function Rituals() {
  const coreEmotions = [
    { 
      emoji: '😰', 
      label: 'Anxious',
      story: "Heart racing. Mind spinning. Can't sit still.",
      postTitle: "The 5-4-3-2-1 Grounding Technique That Actually Works",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80"
    },
    { 
      emoji: '😤', 
      label: 'Angry',
      story: "Jaw clenched. Everything's annoying. Ready to snap.",
      postTitle: "How to Transform Anger Into Energy in Under 5 Minutes",
      image: "https://images.unsplash.com/photo-1483086431886-3590a88317fe?w=800&q=80"
    },
    { 
      emoji: '😢', 
      label: 'Sad',
      story: "Heavy chest. Eyes stinging. Everything feels hard.",
      postTitle: "Why Giving Yourself Permission to Feel Changes Everything",
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80"
    },
    { 
      emoji: '😵', 
      label: 'Overwhelmed',
      story: "Too much. Too many tabs open. Brain's fried.",
      postTitle: "The One Thing Protocol: From Chaos to Clarity",
      image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&q=80"
    }
  ];

  return (
    <section className="py-20 px-6 bg-slate-50 border-t-2 border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 border-b-2 border-slate-200 pb-6">
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-2">Quick Rituals for Every Feeling</h2>
          <p className="text-slate-600 font-light">Swipe to explore →</p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar">
          {coreEmotions.map((emotion) => (
            <div key={emotion.label} className="flex-shrink-0 w-80 snap-center">
              <div className="relative h-[500px] overflow-hidden border-2 border-slate-900 group">
                <img src={emotion.image} alt={emotion.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20" />
                
                <div className="absolute top-0 left-0 right-0 p-6">
                  <div className="flex items-start gap-3">
                    <div className="text-4xl">{emotion.emoji}</div>
                    <div>
                      <div className="text-white font-serif text-xl mb-1">{emotion.label}</div>
                      <p className="text-white/80 text-sm font-light leading-relaxed">{emotion.story}</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-serif text-lg mb-4 leading-tight">{emotion.postTitle}</h3>
                  <button className="w-full bg-white text-slate-900 px-4 py-3 hover:bg-slate-100 transition-all font-medium text-sm flex items-center justify-center gap-2 group/btn">
                    <span>READ ALL {emotion.label.toUpperCase()} RITUALS</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}

// Articles Grid Component
function ArticlesGrid() {
  const posts = [
    { 
      title: "The Mirror Effect in Relationships", 
      excerpt: "Why we're drawn to people who reflect parts of ourselves",
      cat: "Relationships", 
      date: "Nov 12, 2025",
      img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=1000&fit=crop", 
      h: 420,
      readTime: "5 min",
      author: "Sarah Chen"
    },
    { 
      title: "Emotional Granularity", 
      excerpt: "The power of naming your feelings with precision",
      cat: "Self-Awareness", 
      date: "Nov 10, 2025",
      img: "https://images.unsplash.com/photo-1499728603263-13726abce5fd?w=800&h=600&fit=crop", 
      h: 320,
      readTime: "6 min",
      author: "Marcus Webb"
    },
    { 
      title: "The Comfort Zone Paradox", 
      excerpt: "Why staying comfortable keeps you uncomfortable",
      cat: "Growth", 
      date: "Nov 8, 2025",
      img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1200&fit=crop", 
      h: 520,
      readTime: "4 min",
      author: "Emma Taylor"
    },
    { 
      title: "Window of Tolerance", 
      excerpt: "Understanding your nervous system's sweet spot",
      cat: "Self-Awareness", 
      date: "Nov 7, 2025",
      img: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&h=700&fit=crop", 
      h: 370,
      readTime: "7 min",
      author: "James Cole"
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12 border-b-2 border-slate-900 pb-6">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-2">
              All Articles
            </h2>
            <p className="text-slate-600 font-light">Latest insights and stories</p>
          </div>
          <button className="p-3 bg-rose-400 border-2 border-slate-900 hover:bg-rose-500 transition-colors shadow-lg hover:scale-110 transition-transform">
            <LifeBuoy className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {posts.map((post, i) => (
            <article key={i} className="break-inside-avoid mb-6 group cursor-pointer">
              <div className="relative overflow-hidden border-2 border-slate-900 hover:border-slate-700 transition-colors">
                <img src={post.img} alt={post.title} className="w-full transition-all duration-700 group-hover:scale-110" style={{ height: `${post.h}px`, objectFit: 'cover' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/100 via-slate-900/70 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="text-xs font-bold text-yellow-400 tracking-wider font-mono">{post.cat.toUpperCase()}</span>
                  </div>
                  
                  <h3 className="font-serif text-3xl text-white mb-2 leading-tight">{post.title}</h3>
                  <p className="text-white/90 text-base leading-relaxed mb-3 font-light">{post.excerpt}</p>
                  
                  <div className="text-white/70 text-xs font-mono tracking-wide flex items-center gap-2 flex-wrap">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime.toUpperCase()}
                    <span className="text-white/40">·</span>
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date.toUpperCase()}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// Newsletter Component
function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('success');
    setEmail('');
  };

  return (
    <section id="subscribe" className="border-t-2 border-slate-900 py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="font-serif text-5xl md:text-6xl text-slate-900 mb-4">Newsletter</h2>
        <p className="text-xl text-slate-600 mb-8 font-light">Posts that get you, weekly. Side effects may include feeling seen.</p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={status === 'success' ? "You're awesome 😎" : "Your email"}
            disabled={status === 'success'}
            className="flex-1 px-5 py-4 border-2 border-slate-900 text-base outline-none focus:border-slate-700 transition-colors bg-white"
          />
          <button
            type="submit"
            disabled={status === 'success'}
            className="px-8 py-4 bg-slate-900 text-white font-semibold text-base hover:bg-slate-800 transition-colors"
          >
            {status === 'success' ? 'ALL GOOD 🎉' : 'SUBSCRIBE'}
          </button>
        </form>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  const footerLinks = {
    explore: [
      { label: 'Subscribe', url: '#subscribe' },
      { label: 'Archive', url: '/archive' },
      { label: 'Gift Wellbeing', url: 'https://shop.thebond.company' },
    ],
    getInvolved: [
      { label: 'About Us', url: 'https://thebond.company/about' },
      { label: 'Write for Us', url: 'https://support.thebond.company/?section=business' },
      { label: 'Partner With Us', url: 'https://support.thebond.company/?section=business' },
    ],
    resources: [
      { label: 'Privacy Policy', url: '/privacy' },
      { label: 'Terms of Use', url: '/terms' },
      { label: 'FAQ', url: '/faq' },
    ],
  };

  return (
    <footer className="bg-slate-900 text-white border-t-4 border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 lg:gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full" />
              <span className="font-serif text-2xl tracking-tight">The Bond Blog</span>
            </div>
            <p className="text-base text-white/70 font-light leading-relaxed max-w-sm">
              Sticky notes for your soul's refrigerator.
            </p>
            
            <div className="flex items-center gap-4 pt-2">
              <a href="https://www.instagram.com/thebondcompany/" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a href="https://tiktok.com/@thebondcompany" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="TikTok">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </a>

              <a href="https://x.com/thebondco" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="X (Twitter)">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {['explore', 'getInvolved', 'resources'].map((section) => (
            <div key={section}>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-white/50 font-mono">
                {section === 'getInvolved' ? 'Get Involved' : section.charAt(0).toUpperCase() + section.slice(1)}
              </h3>
              <ul className="space-y-2.5">
                {footerLinks[section].map((item) => (
                  <li key={item.label}>
                    <a href={item.url} className="text-sm text-white/70 hover:text-white transition-colors block font-light">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60 font-light tracking-wide">
            {new Date().getFullYear()} © <a href="https://thebond.company" className="hover:text-white/80 transition-colors">The Bond Company.</a> Made with Intention.
          </p>
          <a href="https://support.thebond.company/?section=general" className="text-sm text-white/60 hover:text-white/80 transition-colors font-light tracking-wide">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}


export default function EmotionalWellbeingBlog() {
  const [selectedCover, setSelectedCover] = useState(0);
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [hoveredEmotion, setHoveredEmotion] = useState(null);
  

 

  // Rituals
  const rituals = {
    joy: {
      title: 'Share Your Joy',
      description: 'Amplify your happiness by sharing it with someone you care about',
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=1000&fit=crop',
      ritual: 'Call a friend, write in your gratitude journal, or dance to your favorite song'
    },
    sad: {
      title: 'Gentle Comfort',
      description: 'Honor your sadness with compassion and gentle care',
      image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&h=1000&fit=crop',
      ritual: 'Make yourself tea, wrap in a cozy blanket, and let yourself feel without judgment'
    },
    angry: {
      title: 'Release & Transform',
      description: 'Channel your anger into productive movement and expression',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=1000&fit=crop',
      ritual: 'Go for a run, punch a pillow, or write an unsent letter expressing everything you feel'
    },
    anxious: {
      title: 'Ground & Breathe',
      description: 'Return to your body and the present moment',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=1000&fit=crop',
      ritual: 'Practice 4-7-8 breathing, name 5 things you can see, or do a gentle body scan'
    },
    calm: {
      title: 'Savor the Peace',
      description: 'Deepen your sense of tranquility and presence',
      image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&h=1000&fit=crop',
      ritual: 'Meditate for 10 minutes, take a mindful walk, or sit in nature without distractions'
    },
    lonely: {
      title: 'Connect & Reach Out',
      description: 'Bridge the distance between yourself and others',
      image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=1000&fit=crop',
      ritual: 'Send a heartfelt message, join a community group, or visit a favorite public space'
    },
    frustrated: {
      title: 'Reset & Reframe',
      description: 'Step back and find a fresh perspective',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop',
      ritual: 'Take a break, work on a different task, or talk it out with someone you trust'
    },
    loved: {
      title: 'Receive & Give Back',
      description: 'Celebrate the love in your life',
      image: 'https://images.unsplash.com/photo-1522543558187-768b6df7c25c?w=800&h=1000&fit=crop',
      ritual: 'Write a thank you note, plan something special for someone, or simply bask in the feeling'
    }
  };

  // Featured carousel
  const featuredCarousel = [
    {
      title: "The Mirror Effect",
      description: "Why we're drawn to people who reflect parts of ourselves",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=1000&fit=crop",
      category: "Relationships",
      emotion: "😔 For when you're lonely",
      difficulty: "Beginner concepts",
      type: "Framework",
      readTime: "5 min"
    },
    {
      title: "Window of Tolerance",
      description: "Understanding your nervous system's sweet spot",
      image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&h=700&fit=crop",
      category: "Self-Awareness",
      emotion: "😰 For when you're anxious",
      difficulty: "Advanced psychology",
      type: "Framework",
      readTime: "7 min"
    },
    {
      title: "The Comfort Zone Paradox",
      description: "Why staying comfortable keeps you uncomfortable",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1200&fit=crop",
      category: "Growth",
      emotion: "😤 For when you're frustrated",
      difficulty: "Beginner concepts",
      type: "Story",
      readTime: "4 min"
    }
  ];

  // LEARNING PATHS - THE CORNERSTONE CONTENT
  const learningPaths = [
    {
      title: "Relationships 101",
      subtitle: "From anxious attachment to secure connection",
      articles: 12,
      duration: "~2 hours",
      level: "Beginner to Advanced",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=800&fit=crop",
      icon: "💑",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      title: "Anxiety Toolkit",
      subtitle: "Understand your nervous system and calm the storm",
      articles: 8,
      duration: "~1.5 hours",
      level: "Beginner friendly",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=800&fit=crop",
      icon: "😰",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "Self-Awareness Deep Dive",
      subtitle: "Know yourself, change your patterns",
      articles: 15,
      duration: "~3 hours",
      level: "All levels",
      image: "https://images.unsplash.com/photo-1499728603263-13726abce5fd?w=600&h=800&fit=crop",
      icon: "🧠",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      title: "Growth Mindset Journey",
      subtitle: "From stuck to unstoppable",
      articles: 10,
      duration: "~2 hours",
      level: "Beginner to Intermediate",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=800&fit=crop",
      icon: "🌱",
      gradient: "from-green-500 to-emerald-600"
    }
  ];

 
  // FRESHLY PUBLISHED - Latest content
  const freshlyPublished = [
    {
      title: "The Rubber Band Theory",
      excerpt: "Why suppressing feelings backfires",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=800&fit=crop",
      date: "Nov 3, 2025",
      readTime: "4 min",
      emotion: "😠 Angry",
      type: "Story",
      difficulty: "Beginner"
    },
    {
      title: "The Container Exercise",
      excerpt: "Managing overwhelming thoughts",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop",
      date: "Oct 30, 2025",
      readTime: "3 min",
      emotion: "😰 Anxious",
      type: "Exercise",
      difficulty: "Beginner"
    },
    {
      title: "Boundaries as Acts of Love",
      excerpt: "Why limits strengthen relationships",
      image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=600&h=800&fit=crop",
      date: "Oct 28, 2025",
      readTime: "5 min",
      emotion: "😤 Frustrated",
      type: "Framework",
      difficulty: "Beginner"
    }
  ];



  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedCover((prev) => (prev + 1) % featuredCarousel.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentRitual = selectedEmotion ? rituals[selectedEmotion] : null;

  return (
    <div className="bg-slate-50">
      <Navigation />
      <div className="pt-20">
        <Hero />
        <Rituals />
        <LearningPaths />
        <ArticlesGrid />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}