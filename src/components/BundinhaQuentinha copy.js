'use client'
import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Sparkles, ArrowRight, Calendar, Clock } from 'lucide-react';
import Navigation from './Navigation'


import EmotionalWellbeingBlog from './EmotionalWellbeingBlog';

export default function ArticleXTemplate() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
 const [selectedEmotion, setSelectedEmotion] = useState(null);
  
const [activeCategory, setActiveCategory] = useState('Featured');
  const [hoveredEmotion, setHoveredEmotion] = useState(null);

  const coreEmotions = [
    { id: 1, emoji: '😊', label: 'Joy', slug: 'joy' },
    { id: 2, emoji: '😢', label: 'Sad', slug: 'sad' },
    { id: 3, emoji: '😠', label: 'Angry', slug: 'angry' },
    { id: 4, emoji: '😰', label: 'Anxious', slug: 'anxious' },
    { id: 5, emoji: '😌', label: 'Calm', slug: 'calm' },
    { id: 6, emoji: '😔', label: 'Lonely', slug: 'lonely' },
    { id: 7, emoji: '😤', label: 'Frustrated', slug: 'frustrated' },
    { id: 8, emoji: '🥰', label: 'Loved', slug: 'loved' },
  ];

  const posts = [
    { 
      title: "The Mirror Effect in Relationships", 
      excerpt: "Why we're drawn to people who reflect parts of ourselves",
      cat: "Relationships", 
      date: "Nov 12, 2025",
      img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=1000&fit=crop", 
      h: 400 
    },
    { 
      title: "Emotional Granularity", 
      excerpt: "The power of naming your feelings with precision",
      cat: "Self-Awareness", 
      date: "Nov 10, 2025",
      img: "https://images.unsplash.com/photo-1499728603263-13726abce5fd?w=800&h=600&fit=crop", 
      h: 300 
    },
    { 
      title: "The Comfort Zone Paradox", 
      excerpt: "Why staying comfortable keeps you uncomfortable",
      cat: "Growth", 
      date: "Nov 8, 2025",
      img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1200&fit=crop", 
      h: 500 
    },
    { 
      title: "Window of Tolerance", 
      excerpt: "Understanding your nervous system's sweet spot",
      cat: "Self-Awareness", 
      date: "Nov 7, 2025",
      img: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&h=700&fit=crop", 
      h: 350 
    },
    { 
      title: "Attachment Styles Explained", 
      excerpt: "How childhood shapes connection",
      cat: "Relationships", 
      date: "Nov 5, 2025",
      img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=900&fit=crop", 
      h: 380 
    },
    { 
      title: "The Rubber Band Theory", 
      excerpt: "Why suppressing feelings backfires",
      cat: "Mindfulness", 
      date: "Nov 3, 2025",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop", 
      h: 280 
    },
    { 
      title: "Cognitive Distortions", 
      excerpt: "Mental traps that distort reality",
      cat: "Self-Awareness", 
      date: "Nov 1, 2025",
      img: "https://images.unsplash.com/photo-1502657877623-f66bf489d236?w=800&h=1100&fit=crop", 
      h: 480 
    },
    { 
      title: "The Container Exercise", 
      excerpt: "Managing overwhelming thoughts",
      cat: "Mindfulness", 
      date: "Oct 30, 2025",
      img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=650&fit=crop", 
      h: 320 
    },
    { 
      title: "Boundaries as Acts of Love", 
      excerpt: "Why limits strengthen relationships",
      cat: "Relationships", 
      date: "Oct 28, 2025",
      img: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800&h=800&fit=crop", 
      h: 360 
    },
    { 
      title: "The Growth Mindset Shift", 
      excerpt: "From 'I can't' to 'I can't yet'",
      cat: "Growth", 
      date: "Oct 26, 2025",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=1000&fit=crop", 
      h: 420 
    },
    { 
      title: "Emotional Flooding", 
      excerpt: "When your nervous system maxes out",
      cat: "Self-Awareness", 
      date: "Oct 24, 2025",
      img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=700&fit=crop", 
      h: 340 
    },
    { 
      title: "The Self-Compassion Formula", 
      excerpt: "Three ingredients for self-kindness",
      cat: "Mindfulness", 
      date: "Oct 22, 2025",
      img: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800&h=900&fit=crop", 
      h: 380 
    }
  ];

  const cats = ['Featured', 'Relationships', 'Self-Awareness', 'Growth', 'Mindfulness'];
  const filtered = activeCategory === 'Featured' ? posts : posts.filter(p => p.cat === activeCategory);





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

  const handleEmotionClick = (slug) => {
    setSelectedEmotion(slug);
  };

  const currentRitual = selectedEmotion ? rituals[selectedEmotion] : null;

  // Sample featured posts data
  const featuredPosts = [
    {
      id: 1,
      title: "The Benefits of Influencer Marketing",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=800&fit=crop",
      date: "Oct 13, 2024",
      readTime: "6 min read",
      category: "News"
    },
    {
      id: 2,
      title: "The Impact of Mobile Optimization",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=800&fit=crop",
      date: "Oct 11, 2024",
      readTime: "6 min read",
      category: "Health & Wellness"
    },
    {
      id: 3,
      title: "Leveraging Data for Marketing Success",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=800&fit=crop",
      date: "Oct 15, 2024",
      readTime: "6 min read",
      category: "News"
    }
  ];

  const freshlyPublished = [
    {
      title: "Understanding Framer CMS",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=800&fit=crop",
      date: "Oct 1, 2024",
      readTime: "5 min read",
      category: "Lifestyle"
    },
    {
      title: "SEO Strategies for 2024",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=800&fit=crop",
      date: "Oct 3, 2024",
      readTime: "3 min read",
      category: "Health & Wellness"
    },
    {
      title: "Content Marketing Strategies",
      image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=600&h=800&fit=crop",
      date: "Oct 3, 2024",
      readTime: "3 min read",
      category: "Technology"
    }
  ];

  const featuredCategories = [
    {
      title: "Lifestyle",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=600&fit=crop",
      color: "from-red-900/80 to-red-700/80"
    },
    {
      title: "Health & Wellness",
      image: "https://images.unsplash.com/photo-1536147116438-62679a5e01f2?w=800&h=600&fit=crop",
      color: "from-green-900/80 to-green-700/80"
    },
    {
      title: "Technology",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop",
      color: "from-gray-900/80 to-gray-700/80"
    },
    {
      title: "Travel",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
      color: "from-red-800/80 to-orange-600/80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % featuredPosts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredPosts.length]);

  return (
    <div className="min-h-screen  bg-gradient-to-br from-stone-50 to-stone-100">
      {/* Navigation */}
 
      {/* Hero Section - Adapted to your structure */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <div className="space-y-6 max-w-2xl">
                <h1 className="text-5xl md:text-6xl lg:text-6xl font-light  gradient-text  pb-1 tracking-tight leading-[1.05]">
                    Sticky notes for your <br />soul's fridge
                </h1>

                <p className="text-lg md:text-xl text-stone-500 leading-snug max-w-xl" >
                    To quiet the ruminating-before-sleep moments and fuel the trying-to-grow-on-purpose ones. Emotional fundamentals nobody taught us, explained through analogies.
                </p>
              <button className="px-8 py-3 bg-slate-800 text-white rounded-xl font-medium hover:bg-slate-700 hover:cursor-pointer transition-colors">
                View all articles
              </button>
            </div>

            {/* Featured Posts Carousel */}
            <div className="relative h-[400px]">
              {featuredPosts.map((post, idx) => {
                const offset = (featuredPosts.length - 1 - idx) * 20;
                const isSelected = idx === carouselIndex;
                
                return (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-all duration-700 cursor-pointer ${
                      isSelected ? 'z-20 scale-100' : 'z-10'
                    }`}
                    style={{
                      transform: isSelected 
                        ? 'translateY(0) rotate(0deg)' 
                        : `translateY(${offset}px) rotate(${offset * 0.1}deg)`,
                    }}
                    onClick={() => setCarouselIndex(idx)}
                  >
                    <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-2xl">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                      
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="flex items-center space-x-4 text-white/80 text-xs mb-4">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        
                        <h2 className="text-3xl font-light text-white mb-4 leading-tight">
                          {post.title}
                        </h2>
                        
                        <div className="flex items-center justify-between">
                          <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-semibold text-gray-900">
                            {post.category}
                          </span>
                          <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                            <ArrowRight className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Freshly Published Section */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl md:text-5xl font-light">
              <strong className='font-bold'>FRESHLY</strong><br />PUBLISHED
            </h2>
            
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {freshlyPublished.map((article, index) => (
              <article key={index} className="group cursor-pointer">
                <div className="relative h-96 rounded-2xl overflow-hidden mb-4">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-black text-white rounded-lg text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <ArrowRight className="w-5 h-5 text-gray-900" />
                  </button>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">
                  {article.title}
                </h3>
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Large Featured Article */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-[600px] rounded-3xl overflow-hidden group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1600&h=1000&fit=crop"
              alt="Featured Article"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="absolute top-8 left-8">
              <div className="flex items-center space-x-4 text-white/80 text-sm mb-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>Oct 15, 2024</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>6 min read</span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-12">
              <h2 className="text-5xl md:text-6xl font-light text-white mb-6 leading-tight max-w-3xl">
                Leveraging Data for Marketing Success
              </h2>
              
              <div className="flex items-center justify-between">
                <span className="px-6 py-3 bg-white/90 backdrop-blur-sm rounded-xl text-sm font-semibold text-gray-900">
                  News
                </span>
                <button className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

     <section className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image with Ritual Info */}
          <div className="order-2 lg:order-2 relative">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              {currentRitual ? (
                <>
                  <img 
                    src={currentRitual.image}
                    alt={currentRitual.title}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Ritual Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="flex items-center space-x-2 mb-4">
                      <Sparkles className="w-5 h-5 text-yellow-300" />
                      <span className="text-xs uppercase tracking-widest text-yellow-300">Your Ritual</span>
                    </div>
                    
                    <h3 className="text-4xl font-light mb-3 leading-tight">
                      {currentRitual.title}
                    </h3>
                    
                    <p className="text-lg text-white/90 mb-4">
                      {currentRitual.description}
                    </p>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                      <p className="text-sm text-white/95 leading-relaxed">
                        {currentRitual.ritual}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <img 
                    src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&h=1000&fit=crop"
                    alt="Choose your feeling"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-4">✨</div>
                      <h3 className="text-3xl font-light mb-2">Select a feeling</h3>
                      <p className="text-lg text-white/80">to discover your personalized ritual</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right Side - Feeling Selector */}
          <div className="order-1 lg:order-1 bg-white rounded-3xl p-12 lg:p-16 shadow-xl">
            <div className="relative z-10">
              {/* Header */}
              <div className="mb-8">
                <p className="text-xs uppercase tracking-widest text-stone-500 mb-2">How do you feel?</p>
                <h2 className="text-4xl lg:text-5xl font-light text-stone-900 mb-2 leading-tight">
                  Name it to tame it
                </h2>
                <p className="text-lg text-stone-600">
                  Find a Practice to improve your right now state
                </p>
              </div>

              {/* Core Emotions Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {coreEmotions.map((emotion) => (
                  <button
                    key={emotion.id}
                    onClick={() => handleEmotionClick(emotion.slug)}
                    onMouseEnter={() => setHoveredEmotion(emotion.id)}
                    onMouseLeave={() => setHoveredEmotion(null)}
                    className="group relative"
                  >
                    <div className={`
                      relative overflow-hidden rounded-2xl p-4 transition-all duration-300
                      ${selectedEmotion === emotion.slug
                        ? 'bg-gradient-to-br from-stone-900 to-stone-800 shadow-xl scale-105' 
                        : hoveredEmotion === emotion.id 
                          ? 'bg-gradient-to-br from-stone-100 to-stone-50 shadow-lg scale-105' 
                          : 'bg-stone-50 shadow-sm'
                      }
                      border-2 ${selectedEmotion === emotion.slug ? 'border-stone-900' : 'border-stone-200'}
                    `}>
                      <div className={`
                        text-4xl transition-all duration-300 text-center
                        ${hoveredEmotion === emotion.id || selectedEmotion === emotion.slug ? 'scale-125 -rotate-12' : 'scale-100'}
                      `}>
                        {emotion.emoji}
                      </div>
                      <span className={`
                        text-sm font-medium text-center block mt-2 transition-all duration-300
                        ${selectedEmotion === emotion.slug 
                          ? 'text-white opacity-100' 
                          : 'text-stone-700 opacity-70'
                        }
                      `}>
                        {emotion.label}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* CTA Button */}
              <button className="w-full bg-stone-900 text-white rounded-xl px-6 py-4 hover:bg-stone-800 transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-base">
                Explore all feelings
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>

      {/* Featured Categories */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-light">
              FEATURED<span className="font-normal">CATEGORIES</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map((category, index) => (
              <div 
                key={index}
                className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
              >
                <img 
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${category.color}`}></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <h3 className="text-white text-2xl font-light">{category.title}</h3>
                  <button className="w-12 h-12 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white group-hover:bg-black/60 transition-colors ml-auto">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-3xl p-12 lg:p-16 text-white">
              <div className="mb-8">
                <span className="px-4 py-2 border border-white/30 rounded-lg text-sm font-medium inline-block">
                  Subscribe
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-light mb-12">
                GET WEEKLY UPDATES
              </h2>
              <div className="mb-8">
                <div className="flex items-center bg-black/30 rounded-xl overflow-hidden border border-white/10">
                  <input 
                    type="email"
                    placeholder="E-mail"
                    className="flex-1 bg-transparent py-4 px-6 text-white placeholder-gray-400 focus:outline-none"
                  />
                  <button className="px-8 py-4 bg-white text-black font-medium rounded-lg m-1 hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
              <label className="flex items-center space-x-3 text-sm text-gray-300 mb-8 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-white/30" />
                <span>I agree to the Terms & Conditions</span>
              </label>
              <p className="text-sm text-gray-400">
                *We'll never share your details.
              </p>
            </div>
            <div className="relative h-[500px] lg:h-[600px]">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"
                alt="Laptop"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

        {/* Post's Masonry Grid */}
      <section className="max-w-7xl mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
          {filtered.map((post, i) => (
            <div key={i}>
              

              {/* Regular Post */}
              <div
                key={i}
                className="break-inside-avoid mb-5 group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full transition-transform duration-700 group-hover:scale-110"
                    style={{ height: `${post.h}px`, objectFit: 'cover' }}
                  />
                  
                  {/* Always Visible Gradient + Text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <div className="flex items-center gap-2 text-xs mb-2 opacity-90">
                        <span>{post.cat}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                      <h3 className="text-lg font-medium leading-tight mb-1.5">
                        {post.title}
                      </h3>
                      <p className="text-sm opacity-90 leading-snug">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Hover Overlay with CTA */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="px-6 py-3 bg-white text-black rounded-lg text-sm font-medium transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      Read Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-2xl font-bold mb-4">Article</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your destination for insights on technology, design, business, and lifestyle.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Categories</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Lifestyle</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Health & Wellness</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Technology</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Travel</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2024 Article. All rights reserved.</p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}