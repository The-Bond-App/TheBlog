'use client'
import React, { useState, useEffect } from 'react';
import { ArrowRight, Send, Sparkles, Home, User, FileText, Instagram, Mail, Search, LifeBuoy, X, Bookmark, Clock, TrendingUp, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

export default function EmotionalWellbeingBlog() {
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [hoveredEmotion, setHoveredEmotion] = useState(null);
  const [activeTab, setActiveTab] = useState('All');
  const [savedPosts, setSavedPosts] = useState([]);
  const [sosModalOpen, setSosModalOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [hoveredNavItem, setHoveredNavItem] = useState(null);

  const toggleSave = (postTitle) => {
    setSavedPosts(prev => 
      prev.includes(postTitle) 
        ? prev.filter(t => t !== postTitle)
        : [...prev, postTitle]
    );
  };

  const coreEmotions = [
    { id: 1, emoji: '😊', label: 'Joy', slug: 'joy', color: 'from-yellow-400 to-orange-400' },
    { id: 2, emoji: '😢', label: 'Sad', slug: 'sad', color: 'from-blue-400 to-indigo-400' },
    { id: 3, emoji: '😠', label: 'Angry', slug: 'angry', color: 'from-red-400 to-pink-400' },
    { id: 4, emoji: '😰', label: 'Anxious', slug: 'anxious', color: 'from-purple-400 to-violet-400' },
    { id: 5, emoji: '😌', label: 'Calm', slug: 'calm', color: 'from-green-400 to-teal-400' },
    { id: 6, emoji: '😔', label: 'Lonely', slug: 'lonely', color: 'from-gray-400 to-slate-400' },
    { id: 7, emoji: '😤', label: 'Frustrated', slug: 'frustrated', color: 'from-orange-400 to-red-400' },
    { id: 8, emoji: '🥰', label: 'Loved', slug: 'loved', color: 'from-pink-400 to-rose-400' },
  ];

  const rituals = {
    joy: {
      title: 'Amplify Your Joy',
      description: 'Double down on this feeling. Share it, celebrate it, make it last.',
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=1000&fit=crop',
      ritual: 'Call someone you love. Write 3 things you\'re grateful for. Dance like nobody\'s watching.',
      action: 'Start Now'
    },
    sad: {
      title: 'Honor the Feeling',
      description: 'Sadness isn\'t weakness. It\'s your heart processing something real.',
      image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&h=1000&fit=crop',
      ritual: 'Make tea. Wrap in a blanket. Journal without judgment. Let yourself feel.',
      action: 'Begin Healing'
    },
    angry: {
      title: 'Channel the Fire',
      description: 'Your anger is energy. Use it. Don\'t let it use you.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=1000&fit=crop',
      ritual: 'Run it out. Hit a pillow. Write an angry letter (don\'t send it). Move your body.',
      action: 'Release It'
    },
    anxious: {
      title: 'Ground Yourself',
      description: 'You\'re safe right now. Come back to this moment.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=1000&fit=crop',
      ritual: '4-7-8 breathing. Name 5 things you see. Put your feet flat on the ground.',
      action: 'Find Peace'
    },
    calm: {
      title: 'Savor This',
      description: 'Peace is rare. Notice it. Remember it. Let it fill you up.',
      image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&h=1000&fit=crop',
      ritual: 'Meditate for 10 minutes. Walk slowly. Sit in nature. Just be.',
      action: 'Deepen It'
    },
    lonely: {
      title: 'Reach Out',
      description: 'You\'re not alone in feeling alone. Connection is one text away.',
      image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=1000&fit=crop',
      ritual: 'Message someone real. Join a group. Go to a coffee shop. Be around people.',
      action: 'Connect Now'
    },
    frustrated: {
      title: 'Reset & Breathe',
      description: 'Step back. The solution appears when you stop forcing it.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop',
      ritual: 'Take a break. Switch tasks. Talk it through. Come back fresh.',
      action: 'Step Away'
    },
    loved: {
      title: 'Let It In',
      description: 'You deserve this. Receive it fully. Give it back.',
      image: 'https://images.unsplash.com/photo-1522543558187-768b6df7c25c?w=800&h=1000&fit=crop',
      ritual: 'Say thank you. Write a note. Plan something special. Bask in it.',
      action: 'Celebrate Love'
    }
  };

  const posts = [
    { 
      title: "The Mirror Effect in Relationships",
      excerpt: "Why we're magnetically drawn to people who reflect our deepest selves back to us",
      img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=1000&fit=crop",
      category: "Relationships",
      label: "Deep Dive",
      author: "Sarah Chen",
      readTime: "8 min",
      trending: true
    },
    { 
      title: "Name It to Tame It", 
      excerpt: "The neuroscience of why labeling emotions literally calms your brain",
      img: "https://images.unsplash.com/photo-1499728603263-13726abce5fd?w=800&h=600&fit=crop",
      category: "Self-Awareness",
      label: "Quick Win",
      author: "Dr. James Liu",
      readTime: "5 min",
      trending: true
    },
    { 
      title: "Your Comfort Zone is Killing Your Growth", 
      excerpt: "The brutal truth about why staying comfortable keeps you stuck in the same patterns",
      img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1200&fit=crop",
      category: "Growth",
      label: "Wake Up Call",
      author: "Marcus Rivera",
      readTime: "7 min",
      trending: false
    },
    { 
      title: "Window of Tolerance", 
      excerpt: "Understanding your nervous system's sweet spot and how to stay in it during stress",
      img: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&h=700&fit=crop",
      category: "Self-Awareness",
      label: "Framework",
      author: "Dr. James Liu",
      readTime: "9 min",
      trending: false
    },
    { 
      title: "Attachment: The Hidden Blueprint", 
      excerpt: "How your childhood literally programs the way you connect in adult relationships",
      img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=900&fit=crop",
      category: "Relationships",
      label: "Essential",
      author: "Sarah Chen",
      readTime: "12 min",
      trending: true
    },
    { 
      title: "Stop Suppressing Emotions", 
      excerpt: "Why pushing feelings down only makes them explode later—and what to do instead",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
      category: "Mindfulness",
      label: "Practice",
      author: "Emma Thompson",
      readTime: "6 min",
      trending: false
    },
    { 
      title: "The Comparison Trap",
      excerpt: "How social media hijacks your happiness and what you can do about it",
      img: "https://images.unsplash.com/photo-1502657877623-f66bf489d236?w=800&h=1100&fit=crop",
      category: "Self-Awareness",
      label: "Reality Check",
      author: "Marcus Rivera",
      readTime: "7 min",
      trending: false
    },
    { 
      title: "Boundaries Without Guilt",
      excerpt: "The art of saying no while still being a good person",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=800&fit=crop",
      category: "Relationships",
      label: "Skill Builder",
      author: "Sarah Chen",
      readTime: "10 min",
      trending: true
    },
    { 
      title: "The Power of Micro-Moments",
      excerpt: "How 60-second practices can shift your entire day",
      img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=900&fit=crop",
      category: "Mindfulness",
      label: "Quick Win",
      author: "Emma Thompson",
      readTime: "4 min",
      trending: false
    },
  ];

  const tabs = ['All', 'Relationships', 'Self-Awareness', 'Growth', 'Mindfulness'];
  const filteredPosts = activeTab === 'All' ? posts : posts.filter(p => p.category === activeTab);

  const navItems = [
    { icon: Home, label: 'Home', href: '#' },
    { icon: User, label: 'About', href: '#' },
    { icon: LifeBuoy, label: 'Need Help Now?', href: '#' },
    { icon: Bookmark, label: 'Saved Posts', href: '#saved', badge: savedPosts.length },
  ];

  const socialItems = [
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Mail, label: 'Newsletter', href: '#' },
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Floating SOS Button */}
      <button
        onClick={() => setSosModalOpen(true)}
        className="fixed right-8 bottom-8 z-50 group"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-black rounded-full animate-ping opacity-20" />
          <div className="relative w-16 h-16 bg-black rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
            <Sparkles className="w-7 h-7 text-white" />
          </div>
          <div className="absolute -top-3 -right-3 w-7 h-7 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">SOS</span>
          </div>
        </div>
      </button>

      {/* SOS Modal */}
      {sosModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[95vh] overflow-hidden shadow-2xl">
            
            <button
              onClick={() => {
                setSosModalOpen(false);
                setSelectedEmotion(null);
              }}
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="grid lg:grid-cols-2 h-full">
              
              <div className="relative order-2 lg:order-1">
                <div className="relative h-full min-h-[600px]">
                  {selectedEmotion && rituals[selectedEmotion] ? (
                    <>
                      <img 
                        src={rituals[selectedEmotion].image}
                        alt={rituals[selectedEmotion].title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                      
                      <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6">
                          <Sparkles className="w-4 h-4" />
                          <span className="text-sm font-medium">Your Ritual</span>
                        </div>
                        
                        <h3 className="text-5xl font-bold mb-4 leading-tight">
                          {rituals[selectedEmotion].title}
                        </h3>
                        
                        <p className="text-xl text-white/90 mb-6 font-light">
                          {rituals[selectedEmotion].description}
                        </p>
                        
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-6">
                          <p className="text-base leading-relaxed">
                            {rituals[selectedEmotion].ritual}
                          </p>
                        </div>

                        <button className="w-full bg-white text-black px-8 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl">
                          {rituals[selectedEmotion].action} →
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center p-12 bg-gradient-to-br from-gray-100 to-gray-50">
                      <div className="text-center">
                        <div className="text-8xl mb-6">👈</div>
                        <h3 className="text-4xl font-bold mb-4 text-gray-900">Pick a feeling</h3>
                        <p className="text-xl text-gray-600">Get instant relief</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="order-1 lg:order-2 bg-white p-10 lg:p-16 overflow-y-auto">
                <div className="max-w-lg mx-auto">
                  <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">Right Now</p>
                  <h2 className="text-5xl font-bold text-black mb-3 leading-tight">
                    How do you feel?
                  </h2>
                  <p className="text-xl text-gray-600 mb-12">
                    Choose one. Get a ritual. Feel better in 5 minutes.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {coreEmotions.map((emotion) => (
                      <button
                        key={emotion.id}
                        onClick={() => setSelectedEmotion(emotion.slug)}
                        onMouseEnter={() => setHoveredEmotion(emotion.id)}
                        onMouseLeave={() => setHoveredEmotion(null)}
                        className="group relative"
                      >
                        <div className={`
                          relative overflow-hidden rounded-3xl p-6 transition-all duration-300
                          ${selectedEmotion === emotion.slug
                            ? `bg-gradient-to-br ${emotion.color} shadow-2xl scale-105` 
                            : hoveredEmotion === emotion.id 
                              ? 'bg-gray-100 shadow-lg scale-105' 
                              : 'bg-gray-50 shadow-sm'
                          }
                        `}>
                          <div className={`
                            text-5xl transition-all duration-300 text-center mb-3
                            ${(hoveredEmotion === emotion.id || selectedEmotion === emotion.slug) ? 'scale-125' : 'scale-100'}
                          `}>
                            {emotion.emoji}
                          </div>
                          <span className={`
                            text-base font-bold text-center block transition-all duration-300
                            ${selectedEmotion === emotion.slug ? 'text-white' : 'text-gray-900'}
                          `}>
                            {emotion.label}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>

                  <button className="w-full bg-black text-white rounded-2xl px-6 py-5 hover:bg-gray-900 transition-all duration-300 shadow-xl font-bold text-lg">
                    See All Emotions →
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
      
      {/* Collapsible Sidebar */}
      <aside className={`
        fixed h-screen bg-gray-50 border-r border-gray-200 flex flex-col transition-all duration-300 z-40
        ${sidebarCollapsed ? 'w-20' : 'w-72'}
      `}>
        
        {/* Logo & Toggle */}
        <div className="p-6 flex items-center justify-between border-b border-gray-200">
          {!sidebarCollapsed && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-white font-bold">
                SN
              </div>
              <div>
                <div className="font-bold text-black">Sticky Notes</div>
                <div className="text-xs text-gray-500">For Your Soul</div>
              </div>
            </div>
          )}
          {sidebarCollapsed && (
            <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-white font-bold mx-auto">
              SN
            </div>
          )}
          <button 
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className={`absolute -right-3 top-8 w-6 h-6 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-100 transition-all ${sidebarCollapsed ? '' : ''}`}
          >
            {sidebarCollapsed ? <ChevronRight className="w-3 h-3" /> : <ChevronLeft className="w-3 h-3" />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navItems.map((item, i) => (
            <div
              key={i}
              className="relative"
              onMouseEnter={() => setHoveredNavItem(i)}
              onMouseLeave={() => setHoveredNavItem(null)}
            >
              <a 
                href={item.href}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl transition-all
                  ${i === 0 ? 'bg-white shadow-sm text-black font-medium' : 'text-gray-600 hover:bg-white hover:text-black'}
                  ${sidebarCollapsed ? 'justify-center' : ''}
                `}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {!sidebarCollapsed && <span>{item.label}</span>}
                {!sidebarCollapsed && item.badge > 0 && (
                  <span className="ml-auto bg-black text-white text-xs px-2 py-1 rounded-full font-bold">
                    {item.badge}
                  </span>
                )}
              </a>
              
              {/* Tooltip for collapsed state */}
              {sidebarCollapsed && hoveredNavItem === i && (
                <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-xl z-50">
                  {item.label}
                  {item.badge > 0 && (
                    <span className="ml-2 bg-white text-black text-xs px-1.5 py-0.5 rounded-full font-bold">
                      {item.badge}
                    </span>
                  )}
                  <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-black" />
                </div>
              )}
            </div>
          ))}

          {/* Social Section */}
          <div className={`pt-6 ${sidebarCollapsed ? '' : 'border-t border-gray-200'}`}>
            {!sidebarCollapsed && (
              <div className="text-xs uppercase tracking-widest text-gray-400 mb-3 px-4 font-bold">
                Find Me
              </div>
            )}
            {socialItems.map((item, i) => (
              <div
                key={i}
                className="relative"
                onMouseEnter={() => setHoveredNavItem(navItems.length + i)}
                onMouseLeave={() => setHoveredNavItem(null)}
              >
                <a 
                  href={item.href}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-white hover:text-black transition-all group
                    ${sidebarCollapsed ? 'justify-center' : 'justify-between'}
                  `}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 flex-shrink-0" />
                    {!sidebarCollapsed && <span>{item.label}</span>}
                  </div>
                  {!sidebarCollapsed && (
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </a>
                
                {sidebarCollapsed && hoveredNavItem === navItems.length + i && (
                  <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-xl z-50">
                    {item.label}
                    <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-black" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* Quick Check-in */}
        {!sidebarCollapsed && (
          <div className="p-4 border-t border-gray-200">
            <div className="bg-gradient-to-br from-black to-gray-800 rounded-2xl p-5 text-white">
              <p className="text-sm font-bold mb-3">Quick Check-in</p>
              <div className="grid grid-cols-4 gap-2">
                {coreEmotions.slice(0, 4).map((emotion) => (
                  <button
                    key={emotion.id}
                    onClick={() => {
                      setSelectedEmotion(emotion.slug);
                      setSosModalOpen(true);
                    }}
                    className="text-2xl p-2 rounded-lg bg-white/10 hover:bg-white/20 hover:scale-110 transition-all"
                  >
                    {emotion.emoji}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <main className={`transition-all duration-300 ${sidebarCollapsed ? 'ml-20' : 'ml-72'}`}>
        
        {/* Magazine Header */}
        <header className="sticky top-0 bg-white/95 backdrop-blur-lg border-b border-gray-200 z-30">
          <div className="px-12 py-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-4xl font-bold text-black mb-1">Sticky Notes</h1>
                <p className="text-gray-600">Emotional wellbeing, explained simply</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-xl">
                  <Search className="w-4 h-4 text-gray-400" />
                  <input 
                    type="text"
                    placeholder="Search articles..."
                    className="bg-transparent text-sm focus:outline-none w-48"
                  />
                </div>
                <button className="px-6 py-3 bg-black text-white rounded-xl font-bold hover:bg-gray-900 transition-all">
                  Subscribe
                </button>
              </div>
            </div>
            
            {/* Category Tabs */}
            <div className="flex items-center gap-3">
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeTab === tab 
                      ? 'bg-black text-white' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Featured Hero Article */}
        <section className="px-12 py-8">
          <article className="relative h-[600px] rounded-3xl overflow-hidden group cursor-pointer">
            <img 
              src={posts[0].img}
              alt={posts[0].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md border border-white/30">
                  {posts[0].label}
                </span>
                <span className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-red-500 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> Trending
                </span>
              </div>
              
              <h2 className="text-6xl font-bold mb-4 leading-tight max-w-4xl">
                {posts[0].title}
              </h2>
              
              <p className="text-2xl text-white/90 mb-6 max-w-3xl font-light">
                {posts[0].excerpt}
              </p>
              
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center font-bold">
                    {posts[0].author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-bold">{posts[0].author}</div>
                    <div className="text-sm text-white/80">{posts[0].readTime} read</div>
                  </div>
                </div>
                
                <button className="ml-auto px-8 py-4 bg-white text-black rounded-xl font-bold hover:bg-gray-100 transition-all flex items-center gap-2">
                  Read Article
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <button 
              onClick={(e) => {
                e.stopPropagation();
                toggleSave(posts[0].title);
              }}
              className="absolute top-8 right-8 w-14 h-14 bg-white/90 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg hover:scale-110"
            >
              <Bookmark 
                className={`w-6 h-6 transition-all ${savedPosts.includes(posts[0].title) ? 'fill-black stroke-black' : 'stroke-black'}`}
              />
            </button>
          </article>
        </section>

        {/* Articles Grid */}
        <section className="px-12 py-8">
          <div className="grid grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, i) => (
              <article key={i} className="group cursor-pointer">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <img 
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider backdrop-blur-xl bg-white/90 text-black">
                      {post.label}
                    </span>
                    {post.trending && (
                      <span className="px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider backdrop-blur-xl bg-red-500 text-white flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                      </span>
                    )}
                  </div>

                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSave(post.title);
                    }}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg hover:scale-110"
                  >
                    <Bookmark 
                      className={`w-4 h-4 transition-all ${savedPosts.includes(post.title) ? 'fill-black stroke-black' : 'stroke-black'}`}
                    />
                  </button>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <button className="w-full px-6 py-3 bg-white text-black rounded-xl font-bold text-sm hover:bg-gray-100 transition-all shadow-xl flex items-center justify-center gap-2">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="px-1">
                  <h3 className="text-xl font-bold text-black mb-2 leading-tight group-hover:text-gray-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="font-medium text-black">{post.author}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="px-12 py-16">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-16 text-center text-white">
            <h2 className="text-5xl font-bold mb-4">Don't miss a story</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get insights on emotional wellbeing delivered to your inbox weekly
            </p>
            <div className="flex items-center gap-4 max-w-2xl mx-auto">
              <input 
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 backdrop-blur-sm"
              />
              <button className="px-8 py-4 bg-white text-black rounded-xl font-bold hover:bg-gray-100 transition-all whitespace-nowrap">
                Subscribe →
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">No spam. Unsubscribe anytime.</p>
          </div>
        </section>

        {/* More Articles */}
        <section className="px-12 py-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-black">More to Explore</h2>
            <button className="text-sm font-medium text-gray-600 hover:text-black flex items-center gap-2">
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-4 gap-6">
            {posts.slice(0, 4).map((post, i) => (
              <article key={i} className="group cursor-pointer">
                <div className="relative aspect-square rounded-xl overflow-hidden mb-3 bg-gray-200 hover:shadow-xl transition-all duration-300">
                  <img 
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="font-bold text-black mb-1 leading-snug group-hover:text-gray-700 transition-colors">
                  {post.title}
                </h4>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="px-12 py-12 border-t border-gray-200 bg-gray-50 mt-16">
          <div className="flex items-start justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-black" />
                <div>
                  <div className="font-bold text-black text-lg">Sticky Notes</div>
                  <div className="text-sm text-gray-500">For Your Soul</div>
                </div>
              </div>
              <p className="text-gray-600 max-w-md">
                Emotional wellbeing insights that actually make sense.<br />
                Complex psychology, explained simply.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-12">
              <div>
                <h4 className="font-bold text-black mb-4">Content</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="#" className="hover:text-black transition-colors">All Articles</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Relationships</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Self-Awareness</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Growth</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-black mb-4">Connect</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="#" className="hover:text-black transition-colors">Instagram</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Newsletter</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-black mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="#" className="hover:text-black transition-colors">Privacy</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Terms</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Disclaimer</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-200 flex items-center justify-between text-sm text-gray-500">
            <p>© 2024 Sticky Notes. Made with ❤️ for mental wellness</p>
            <p>Not a substitute for professional help</p>
          </div>
        </footer>

      </main>
        
    </div>
  );
}