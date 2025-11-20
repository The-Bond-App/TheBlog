'use client';
import { useState, useEffect, useRef } from 'react';
import { Zap, Flame, Play, TrendingUp, Award, Heart, Star, Search, Sliders, Sparkles, ArrowRight, Calendar, Clock, BookOpen, Target, Compass, Map, Sticker, LifeBuoy, User } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

import BentoParallaxHero from '../ui/BentoParallaxHero'
import HeroVariations from '../ui/HeroVariations'

import RitualSelector from '../ui/RitualSelector'
import NewsletterBanner from './NewsletterBanner';
import Footer from './Footer';
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
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100 pt-16">
      {/* Hero Section - Compact */}
{/*
<BentoParallaxHero />
*/}

<HeroVariations />



     <section className='px-6 md:px-12 py-20 max-w-7xl mx-auto'>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.05] gradient-text pb-3">
                Sticky notes for your soul's fridge
              </h1>
              <p className="text-xl text-slate-500">
                Emotional fundamentals, explained through analogies that stick
              </p>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-3 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-all">
                View All Articles
              </button>
              <button className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:border-slate-900 transition-all">
                Practice Rituals
              </button>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 relative h-[450px] rounded-2xl overflow-hidden group cursor-pointer">
          <img src={posts[0].image} alt={posts[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute top-6 left-6">
            <span className="px-3 py-1.5 bg-yellow-400 text-black text-xs font-bold rounded-full flex items-center gap-1">
              <Flame className="w-3 h-3" /> Featured
            </span>
          </div>
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <div className="text-sm text-white/70 mb-2">{posts[0].category} · {posts[0].readTime} read</div>
            <h2 className="text-4xl font-bold mb-3">{posts[0].title}</h2>
            <p className="text-lg text-white/90 mb-5">{posts[0].description}</p>
            <button className="px-6 py-3 bg-white text-slate-900 rounded-full font-medium hover:bg-slate-100 transition-colors inline-flex items-center gap-2">
              Read Now <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="space-y-6">
          {posts.slice(1, 3).map((post, idx) => (
            <div key={idx} className="relative h-[210px] rounded-2xl overflow-hidden group cursor-pointer">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="text-xs text-white/70 mb-1">{post.category}</div>
                <h3 className="text-lg font-bold mb-1">{post.title}</h3>
                <p className="text-xs text-white/80">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
        </section>

       


      {/* ALL ARTICLES - MASONRY GRID */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-2">
                <strong className="font-bold">ALL</strong>ARTICLES
              </h2>
            </div>
            <div className="flex gap-3">
              <button className="p-3 rounded-full bg-rose-400 border-2 border-white hover:cursor-pointer transition-colors shadow-xl hover:scale-110">
                <LifeBuoy className="w-6 h-6 text-white" />
              </button>
             
            </div>
          </div>

          {/* MASONRY GRID */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
            {[
              { 
                title: "The Mirror Effect in Relationships", 
                excerpt: "Why we're drawn to people who reflect parts of ourselves",
                cat: "Relationships", 
                date: "Nov 12, 2025",
                img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=1000&fit=crop", 
                h: 420,
                emotion: "😔 Lonely",
                difficulty: "Beginner",
                type: "Framework",
                readTime: "5 min"
              },
              { 
                title: "Emotional Granularity", 
                excerpt: "The power of naming your feelings with precision",
                cat: "Self-Awareness", 
                date: "Nov 10, 2025",
                img: "https://images.unsplash.com/photo-1499728603263-13726abce5fd?w=800&h=600&fit=crop", 
                h: 320,
                emotion: "😰 Anxious",
                difficulty: "Advanced",
                type: "Framework",
                readTime: "6 min"
              },
              { 
                title: "The Comfort Zone Paradox", 
                excerpt: "Why staying comfortable keeps you uncomfortable",
                cat: "Growth", 
                date: "Nov 8, 2025",
                img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1200&fit=crop", 
                h: 520,
                emotion: "😤 Frustrated",
                difficulty: "Beginner",
                type: "Story",
                readTime: "4 min"
              },
              { 
                title: "Window of Tolerance", 
                excerpt: "Understanding your nervous system's sweet spot",
                cat: "Self-Awareness", 
                date: "Nov 7, 2025",
                img: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&h=700&fit=crop", 
                h: 370,
                emotion: "😰 Anxious",
                difficulty: "Advanced",
                type: "Framework",
                readTime: "7 min"
              },
              { 
                title: "Attachment Styles Explained", 
                excerpt: "How childhood shapes connection",
                cat: "Relationships", 
                date: "Nov 5, 2025",
                img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=900&fit=crop", 
                h: 400,
                emotion: "😔 Lonely",
                difficulty: "Advanced",
                type: "Framework",
                readTime: "8 min"
              },
              { 
                title: "The Rubber Band Theory", 
                excerpt: "Why suppressing feelings backfires",
                cat: "Mindfulness", 
                date: "Nov 3, 2025",
                img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop", 
                h: 300,
                emotion: "😠 Angry",
                difficulty: "Beginner",
                type: "Story",
                readTime: "4 min"
              },
              { 
                title: "Cognitive Distortions", 
                excerpt: "Mental traps that distort reality",
                cat: "Self-Awareness", 
                date: "Nov 1, 2025",
                img: "https://images.unsplash.com/photo-1502657877623-f66bf489d236?w=800&h=1100&fit=crop", 
                h: 500,
                emotion: "😰 Anxious",
                difficulty: "Advanced",
                type: "Framework",
                readTime: "9 min"
              },
              { 
                title: "The Container Exercise", 
                excerpt: "Managing overwhelming thoughts",
                cat: "Mindfulness", 
                date: "Oct 30, 2025",
                img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=650&fit=crop", 
                h: 340,
                emotion: "😰 Anxious",
                difficulty: "Beginner",
                type: "Exercise",
                readTime: "3 min"
              },
              { 
                title: "Boundaries as Acts of Love", 
                excerpt: "Why limits strengthen relationships",
                cat: "Relationships", 
                date: "Oct 28, 2025",
                img: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800&h=800&fit=crop", 
                h: 380,
                emotion: "😤 Frustrated",
                difficulty: "Beginner",
                type: "Framework",
                readTime: "5 min"
              },
              { 
                title: "The Growth Mindset Shift", 
                excerpt: "From 'I can't' to 'I can't yet'",
                cat: "Growth", 
                date: "Oct 26, 2025",
                img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=1000&fit=crop", 
                h: 440,
                emotion: "😤 Frustrated",
                difficulty: "Beginner",
                type: "Story",
                readTime: "6 min"
              },
              { 
                title: "Emotional Flooding", 
                excerpt: "When your nervous system maxes out",
                cat: "Self-Awareness", 
                date: "Oct 24, 2025",
                img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=700&fit=crop", 
                h: 360,
                emotion: "😠 Angry",
                difficulty: "Advanced",
                type: "Framework",
                readTime: "7 min"
              },
              { 
                title: "The Self-Compassion Formula", 
                excerpt: "Three ingredients for self-kindness",
                cat: "Mindfulness", 
                date: "Oct 22, 2025",
                img: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800&h=900&fit=crop", 
                h: 400,
                emotion: "😢 Sad",
                difficulty: "Beginner",
                type: "Exercise",
                readTime: "5 min"
              }
            ].map((post, i) => (
              <article key={i} className="break-inside-avoid mb-6 group cursor-pointer">
                        <div className="relative overflow-hidden rounded-2xl">
                          <img src={post.img} alt={post.title} className="w-full transition-all duration-700 group-hover:scale-110 group-hover:brightness-110" style={{ height: `${post.h}px`, objectFit: 'cover' }} />
                          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/100 via-stone-900/70 to-transparent" />
                          
                          <div className="absolute bottom-0 left-0 right-0 p-8">
                            {/* Tags inline with category */}
                            <div className="flex items-center gap-2 mb-4 flex-wrap">
                              <span className="text-sm font-bold text-amber-400 tracking-[0.025em] uppercase">{post.cat}</span>
                              <span className="text-white/40">•</span>
                              <span className="text-sm text-white/50">{post.type}</span>
                            </div>
                            
                            <h3 className="text-4xl font-bold text-white mb-3 leading-[1.2]">{post.title}</h3>
                            <p className="text-white text-lg leading-[1.8] mb-3 font-semibold">{post.excerpt}</p>
                            
                            <span className="text-white/70 text-sm font-medium flex items-center gap-2">
                              <Clock className="w-3.5 h-3.5" />
                              {post.readTime}
                              <Calendar className="w-3.5 h-3.5 ml-4" />
                              {post.date}
                              <User className="w-3.5 h-3.5 ml-4" />
                              {post.author}
                            </span>
                            
                          </div>
                        </div>
                      </article>
            ))}
          </div>
        </div>
      </section>

<RitualSelector />
      

      {/* LEARNING PATHS - The Cornerstone */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Map className="w-8 h-8 text-stone-800" />
              <h2 className="text-4xl md:text-5xl font-light text-stone-900">Learning Paths</h2>
            </div>
            <p className="text-xl text-stone-600">Structured journeys from confusion to clarity</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningPaths.map((path, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative h-80 rounded-2xl overflow-hidden mb-4 shadow-lg hover:shadow-2xl transition-shadow">
                  <img src={path.image} alt={path.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${path.gradient} opacity-80`}></div>
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className="text-6xl">{path.icon}</div>
                    
                    <div className="text-white">
                      <h3 className="text-2xl font-medium mb-2">{path.title}</h3>
                      <p className="text-sm text-white/90 mb-4">{path.subtitle}</p>
                      
                      <div className="space-y-1 text-xs text-white/80">
                        <div>{path.articles} articles • {path.duration}</div>
                        <div>{path.level}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    

   


      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}