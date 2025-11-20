'use client'
import React, { useState, useEffect } from 'react';
import { ArrowRight, Send, Sparkles, Home, User, FileText, Instagram, Youtube, Mail, Search, LifeBuoy } from 'lucide-react';

import Footer from './Footer'

export default function EmotionalWellbeingBlog() {
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [hoveredEmotion, setHoveredEmotion] = useState(null);
  const [activeTab, setActiveTab] = useState('All');
  const [savedPosts, setSavedPosts] = useState([]);
  const [sosModalOpen, setSosModalOpen] = useState(false);

  const toggleSave = (postTitle) => {
    setSavedPosts(prev => 
      prev.includes(postTitle) 
        ? prev.filter(t => t !== postTitle)
        : [...prev, postTitle]
    );
  };

  const handleEmotionClick = (slug) => {
    setSelectedEmotion(slug);
  };

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

  const posts = [
    { 
      title: "The Mirror Effect in Relationships",
      excerpt: "Why we're drawn to people who reflect parts of ourselves",
      img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=1000&fit=crop",
      category: "Relationships",
      label: "Analogy",
      author: "Sarah Chen",
      readTime: "8 min"
    },
    { 
      title: "Emotional Granularity", 
      excerpt: "The power of naming your feelings with precision",
      img: "https://images.unsplash.com/photo-1499728603263-13726abce5fd?w=800&h=600&fit=crop",
      category: "Self-Awareness",
      label: "Exercise",
      author: "Marcus Rivera",
      readTime: "6 min"
    },
    { 
      title: "The Comfort Zone Paradox", 
      excerpt: "Why staying comfortable keeps you uncomfortable",
      img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1200&fit=crop",
      category: "Growth",
      label: "Story",
      author: "Emma Thompson",
      readTime: "7 min"
    },
    { 
      title: "Window of Tolerance", 
      excerpt: "Understanding your nervous system's sweet spot",
      img: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&h=700&fit=crop",
      category: "Self-Awareness",
      label: "Analogy",
      author: "Dr. James Liu",
      readTime: "9 min"
    },
    { 
      title: "Attachment Styles Explained", 
      excerpt: "How childhood shapes connection",
      img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=900&fit=crop",
      category: "Relationships",
      label: "Analogy",
      author: "Sarah Chen",
      readTime: "10 min"
    },
    { 
      title: "The Rubber Band Theory", 
      excerpt: "Why suppressing feelings backfires",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
      category: "Mindfulness",
      label: "Exercise",
      author: "Marcus Rivera",
      readTime: "5 min"
    },
    { 
      title: "Cognitive Distortions", 
      excerpt: "Mental traps that distort reality",
      img: "https://images.unsplash.com/photo-1502657877623-f66bf489d236?w=800&h=1100&fit=crop",
      category: "Self-Awareness",
      label: "Analogy",
      author: "Dr. James Liu",
      readTime: "8 min"
    },
    { 
      title: "The Container Exercise", 
      excerpt: "Managing overwhelming thoughts",
      img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=650&fit=crop",
      category: "Mindfulness",
      label: "Exercise",
      author: "Emma Thompson",
      readTime: "6 min"
    }
  ];

  const tabs = ['All', 'Relationships', 'Self-Awareness', 'Growth', 'Mindfulness'];
  const filteredPosts = activeTab === 'All' ? posts : posts.filter(p => p.category === activeTab);
  const currentRitual = selectedEmotion ? rituals[selectedEmotion] : null;

  return (
    <div className="flex min-h-screen  bg-gradient-to-br from-gray-100 to-[#F3F0EE]" style={{border: '2px solid yellow'}}>
      
      {/* SOS Floating Button */}
      <button
        onClick={() => setSosModalOpen(true)}
        className="fixed right-8 top-1/2 -translate-y-1/2 z-50 group"
      >
        <div className="relative">
          {/* Pulsing Ring */}
          <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75" />
          
          {/* Main Button */}
          <div className="relative w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-stone-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-xl">
              Need help right now?
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-stone-900" />
            </div>
          </div>
        </div>
      </button>

      {/* SOS Modal */}
      {sosModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={() => {
                setSosModalOpen(false);
                setSelectedEmotion(null);
              }}
              className="absolute top-6 right-6 z-10 w-10 h-10 bg-stone-900/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-stone-900 transition-colors"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid lg:grid-cols-2">
              
              {/* Left Side - Image with Ritual Info */}
              <div className="order-2 lg:order-2 relative">
                <div className="relative h-[600px]">
                  {selectedEmotion && rituals[selectedEmotion] ? (
                    <>
                      <img 
                        src={rituals[selectedEmotion].image}
                        alt={rituals[selectedEmotion].title}
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
                          {rituals[selectedEmotion].title}
                        </h3>
                        
                        <p className="text-lg text-white/90 mb-4">
                          {rituals[selectedEmotion].description}
                        </p>
                        
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                          <p className="text-sm text-white/95 leading-relaxed">
                            {rituals[selectedEmotion].ritual}
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
              <div className="order-1 lg:order-1 bg-white p-12 lg:p-16">
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
        </div>
      )}
      
      {/* Left Sidebar */}
      <aside className="w-64 bg-[#EDEAE7] border-r border-stone-200 p-6 flex flex-col fixed h-screen overflow-y-auto">
        
        {/* Profile */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center text-white font-semibold">
            SN
          </div>
          <div>
            <div className="font-semibold text-stone-900">Sticky Notes</div>
            <div className="text-xs text-stone-600">Emotional Wellbeing</div>
          </div>
        </div>

        {/* Main Nav */}
        <nav className="space-y-1 mb-8">
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-stone-900 hover:bg-stone-200 transition-colors">
            <Home className="w-5 h-5" />
            <span className="text-sm">Home</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-stone-600 hover:bg-stone-200 transition-colors">
            <User className="w-5 h-5" />
            <span className="text-sm">About</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-stone-600 hover:bg-stone-200 transition-colors">
            <LifeBuoy className="w-5 h-5" />
            <span className="text-sm"> Need Help Now? (rituals)</span>
          </a>
          
          <a href="#saved" className="flex items-center gap-3 px-3 py-2 rounded-lg text-stone-600 hover:bg-stone-200 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            <span className="text-sm">Saved Posts</span>
            <span className="ml-auto text-xs bg-stone-200 px-2 py-0.5 rounded">3</span>
          </a>
        </nav>

        {/* Find Me */}
        <div className="mb-8">
          <div className="text-xs uppercase tracking-wider text-stone-500 mb-3 px-3">Bite Sized Content</div>
          <div className="space-y-1">
            <a href="#" className="flex items-center justify-between px-3 py-2 rounded-lg text-stone-600 hover:bg-stone-200 transition-colors">
              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5" />
                <span className="text-sm">Instagram</span>
              </div>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#" className="flex items-center justify-between px-3 py-2 rounded-lg text-stone-600 hover:bg-stone-200 transition-colors">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                            </svg>
                <span className="text-sm">Tiktok</span>
              </div>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#" className="flex items-center justify-between px-3 py-2 rounded-lg text-stone-600 hover:bg-stone-200 transition-colors">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span className="text-sm">Email</span>
              </div>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Community */}
        <div className="mb-8">
          <div className="text-xs uppercase tracking-wider text-stone-500 mb-3 px-3">Community</div>
          <div className="space-y-1">
           
            <a href="#" className="flex items-center justify-between px-3 py-2 rounded-lg text-stone-600 hover:bg-stone-200 transition-colors">
              <div className="flex items-center gap-3">
                <Send className="w-5 h-5" />
                <span className="text-sm">Do Rituals Together</span>
              </div>
              <ArrowRight className="w-4 h-4" />
            </a>
            
          </div>
        </div>
        {/* Pinned - Feeling Selector */}
        <div className="mt-auto">
          <div className="text-xs uppercase tracking-wider text-stone-500 mb-3 px-3">Quick Check-in</div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-stone-200">
            <div className="text-sm font-medium mb-3">How do you feel?</div>
            <div className="grid grid-cols-4 gap-2 mb-3">
              {coreEmotions.slice(0, 4).map((emotion) => (
                <button
                  key={emotion.id}
                  onClick={() => setSelectedEmotion(emotion.slug)}
                  className={`text-2xl p-2 rounded-lg transition-all ${
                    selectedEmotion === emotion.slug 
                      ? 'bg-stone-900 scale-110' 
                      : 'bg-stone-50 hover:bg-stone-100'
                  }`}
                >
                  {emotion.emoji}
                </button>
              ))}
            </div>
            {currentRitual && (
              <div className="text-xs text-stone-600 leading-relaxed">
                {currentRitual.title}
              </div>
            )}
          </div>
        </div>

        
        

      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64">
        
        {/* Hero Section */}
        <section className="px-12 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-lg text-stone-500 mb-3">Complex Stuff, Explained Simply</div>
            <h1 className="font-geist text-6xl md:text-7xl gradient-text font-light mb-8 tracking-tighter pb-2">
              Sticky notes for your <br />
               <span className="italic font-serif">soul's fridge</span>.
            </h1>

            <div className="flex items-center justify-center gap-3 max-w-xl mx-auto mb-4">
              <input 
                type="email"
                placeholder="Your email"
                className="flex-1 px-6 py-4 rounded-full bg-white border border-stone-200 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-400"
              />
              <button className="px-8 py-4 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-800 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-stone-500">No spam, unsubscribe anytime.</p>
          </div>
        </section>

        {/* Tabs 
        <section className="sticky top-0 bg-stone-50/95 backdrop-blur-lg border-b border-stone-200 z-40">
          <div className="px-12 py-4 flex items-center justify-between">
            <div className="flex items-center gap-6">
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-sm font-medium pb-1 transition-colors ${
                    activeTab === tab 
                      ? 'text-stone-900 border-b-2 border-stone-900' 
                      : 'text-stone-500 hover:text-stone-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-stone-200">
              <Search className="w-4 h-4 text-stone-400" />
              <input 
                type="text"
                placeholder="Search"
                className="bg-transparent text-sm focus:outline-none w-32"
              />
            </div>
          </div>
        </section>*/}
{/* Featured Cornerstone Series - Add this RIGHT AFTER tabs, BEFORE Posts Grid 
<section className="px-12 py-8 bg-gradient-to-br from-amber-50 to-orange-50 border-b border-stone-200">
  <div className="max-w-7xl mx-auto">
    <div className="flex items-center justify-between mb-6">
      <div>
        <h2 className="text-2xl font-bold text-stone-900 mb-1">Start Here</h2>
        <p className="text-sm text-stone-600">Essential frameworks to understand yourself</p>
      </div>
      <button className="text-sm font-medium text-stone-900 hover:text-stone-700 flex items-center gap-2">
        View all series <ArrowRight className="w-4 h-4" />
      </button>
    </div>
    
    <div className="grid grid-cols-3 gap-6">
      
      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all cursor-pointer border-2 border-amber-200">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">3-Part Series</span>
          <span className="text-xs text-stone-500">• 24 min total</span>
        </div>
        <h3 className="text-lg font-bold text-stone-900 mb-2">The Attachment Style Foundation</h3>
        <p className="text-sm text-stone-600 mb-4">Understand why you connect the way you do in relationships</p>
        <div className="flex items-center gap-2 text-xs text-stone-500">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-[10px] font-semibold">1</div>
            <div className="w-6 h-6 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-[10px] font-semibold">2</div>
            <div className="w-6 h-6 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-[10px] font-semibold">3</div>
          </div>
          <span>3 articles</span>
        </div>
      </div>

      
      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all cursor-pointer border-2 border-emerald-200">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">4-Part Series</span>
          <span className="text-xs text-stone-500">• 32 min total</span>
        </div>
        <h3 className="text-lg font-bold text-stone-900 mb-2">Your Nervous System Guide</h3>
        <p className="text-sm text-stone-600 mb-4">Learn to recognize and regulate your body's stress responses</p>
        <div className="flex items-center gap-2 text-xs text-stone-500">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center text-[10px] font-semibold">1</div>
            <div className="w-6 h-6 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center text-[10px] font-semibold">2</div>
            <div className="w-6 h-6 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center text-[10px] font-semibold">3</div>
            <div className="w-6 h-6 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center text-[10px] font-semibold">4</div>
          </div>
          <span>4 articles</span>
        </div>
      </div>

      
      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all cursor-pointer border-2 border-purple-200">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">5-Part Series</span>
          <span className="text-xs text-stone-500">• 40 min total</span>
        </div>
        <h3 className="text-lg font-bold text-stone-900 mb-2">Cognitive Patterns Decoded</h3>
        <p className="text-sm text-stone-600 mb-4">Identify and shift the thinking traps keeping you stuck</p>
        <div className="flex items-center gap-2 text-xs text-stone-500">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-[10px] font-semibold">1</div>
            <div className="w-6 h-6 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-[10px] font-semibold">2</div>
            <div className="w-6 h-6 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-[10px] font-semibold">3</div>
            <div className="w-6 h-6 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-[10px] font-semibold">4</div>
            <div className="w-6 h-6 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-[10px] font-semibold">5</div>
          </div>
          <span>5 articles</span>
        </div>
      </div>
    </div>
  </div>
</section>*/}


        {/* Posts Grid */}
        <section className="px-12 py-12">
          <div className="grid grid-cols-3 gap-8">
            {filteredPosts.map((post, i) => (
            <article key={i} className="group cursor-pointer relative">
  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-stone-200 shadow-lg hover:shadow-2xl transition-all duration-500">
    <img 
      src={post.img}
      alt={post.title}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    
    {/* Label Badge */}
    <div className="absolute top-4 left-4">
      <span className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider backdrop-blur-md border ${
        post.label === 'Understand' ? 'bg-blue-500/90 border-blue-400/50 text-white' :
        post.label === 'Practice' ? 'bg-emerald-500/90 border-emerald-400/50 text-white' :
        'bg-amber-500/90 border-amber-400/50 text-white'
      }`}>
        {post.label}
      </span>
    </div>

    {/* Bookmark Button */}
    <button 
      onClick={(e) => {
        e.stopPropagation();
        toggleSave(post.title);
      }}
      className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg hover:scale-110"
    >
      <svg 
        className={`w-5 h-5 transition-all ${savedPosts.includes(post.title) ? 'fill-stone-900' : 'fill-none'}`}
        stroke="currentColor" 
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
      </svg>
    </button>
    
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    {/* Hover CTA */}
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
      <button className="px-8 py-4 bg-white text-stone-900 rounded-full font-semibold text-sm hover:bg-stone-100 transition-all transform scale-90 group-hover:scale-100 shadow-2xl flex items-center gap-2">
        Read Now
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>

    {/* Bottom Info Bar on Hover */}
    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
      <div className="flex items-center gap-2 text-xs mb-2">
        <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center font-semibold">
          {post.author.split(' ').map(n => n[0]).join('')}
        </div>
        <span className="font-medium">{post.author}</span>
        <span className="opacity-60">•</span>
        <span className="opacity-80">{post.readTime}</span>
      </div>
    </div>
  </div>

  {/* Card Text Content */}
  <div className="px-1">
    <h3 className="text-xl font-semibold text-stone-900 mb-2 leading-tight group-hover:text-stone-700 transition-colors">
      {post.title}
    </h3>
    <p className="text-sm text-stone-600 leading-relaxed mb-3">
      {post.excerpt}
    </p>
    
    {/* Author Info Below Card */}
    <div className="flex items-center gap-2 text-xs text-stone-500">
      <div className="w-5 h-5 rounded-full bg-stone-200 flex items-center justify-center font-semibold text-stone-700">
        {post.author.split(' ').map(n => n[0]).join('')}
      </div>
      <span>{post.author}</span>
      <span>•</span>
      <span>{post.readTime}</span>
    </div>
  </div>
</article>
            ))}
          </div>
        </section>

        {/* Ritual Section - Full Width Card */}
        {currentRitual && (
          <section className="px-12 py-12">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-96 lg:h-auto">
                  <img 
                    src={currentRitual.image}
                    alt={currentRitual.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-amber-500" />
                    <span className="text-xs uppercase tracking-widest text-stone-500">Your Ritual</span>
                  </div>
                  
                  <h2 className="text-4xl font-light mb-4">
                    {currentRitual.title}
                  </h2>
                  
                  <p className="text-lg text-stone-600 mb-6">
                    {currentRitual.description}
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-6 mb-6 border border-stone-200">
                    <p className="text-sm text-stone-700 leading-relaxed">
                      {currentRitual.ritual}
                    </p>
                  </div>

                  <button className="self-start px-6 py-3 bg-stone-900 text-white rounded-xl font-medium hover:bg-stone-800 transition-colors flex items-center gap-2">
                    Read Full Guide
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
<Footer />
      </main>
        
    </div>
  );
}