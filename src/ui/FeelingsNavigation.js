'use client'

import React, { useState } from 'react'
import { ChevronRight, ChevronDown, LayoutDashboard, Instagram } from 'lucide-react'

// Emotions data
const coreEmotions = [
  { id: 1, emoji: '😰', label: 'Anxious', slug: 'anxious' },
  { id: 2, emoji: '😔', label: 'Overwhelmed', slug: 'overwhelmed' },
  { id: 3, emoji: '🤔', label: 'Lost', slug: 'lost' },
  { id: 4, emoji: '😞', label: 'Lonely', slug: 'lonely' },
  { id: 5, emoji: '😤', label: 'Stressed', slug: 'stressed' },
  { id: 6, emoji: '🙏', label: 'Grateful', slug: 'grateful' }
];

const allEmotions = [
  ...coreEmotions,
  { id: 7, emoji: '😢', label: 'Sad', slug: 'sad' },
  { id: 8, emoji: '😊', label: 'Joyful', slug: 'joyful' },
  { id: 9, emoji: '😡', label: 'Angry', slug: 'angry' },
  { id: 10, emoji: '😨', label: 'Fearful', slug: 'fearful' },
  { id: 11, emoji: '😌', label: 'Calm', slug: 'calm' },
  { id: 12, emoji: '😕', label: 'Confused', slug: 'confused' },
  { id: 13, emoji: '😩', label: 'Frustrated', slug: 'frustrated' },
  { id: 14, emoji: '🥺', label: 'Vulnerable', slug: 'vulnerable' },
  { id: 15, emoji: '😴', label: 'Exhausted', slug: 'exhausted' },
  { id: 16, emoji: '😬', label: 'Uncomfortable', slug: 'uncomfortable' },
  { id: 17, emoji: '🤗', label: 'Hopeful', slug: 'hopeful' },
  { id: 18, emoji: '😐', label: 'Numb', slug: 'numb' },
  { id: 19, emoji: '🥰', label: 'Content', slug: 'content' },
  { id: 20, emoji: '😓', label: 'Guilty', slug: 'guilty' },
  { id: 21, emoji: '😳', label: 'Embarrassed', slug: 'embarrassed' },
  { id: 22, emoji: '🤯', label: 'Burnout', slug: 'burnout' },
  { id: 23, emoji: '😌', label: 'Peaceful', slug: 'peaceful' },
  { id: 24, emoji: '🥹', label: 'Moved', slug: 'moved' }
];

// Categories data
const categories = [
  { uuid: '1', name: 'Self-Awareness', icon: '🧠', description: 'Know yourself better' },
  { uuid: '2', name: 'Relationships', icon: '🤝', description: 'Connect deeply' },
  { uuid: '3', name: 'Growth', icon: '🌱', description: 'Evolve and expand' },
  { uuid: '4', name: 'Mindfulness', icon: '🧘', description: 'Be present' },
  { uuid: '5', name: 'Boundaries', icon: '🚪', description: 'Protect your peace' },
  { uuid: '6', name: 'Healing', icon: '💚', description: 'Restore yourself' },
];

// Posts data
const posts = [
  { 
    title: "The Mirror Effect in Relationships", 
    excerpt: "Why we're drawn to people who reflect parts of ourselves",
    cat: "Relationships", 
    date: "Nov 12, 2025",
    img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=1000&fit=crop", 
  },
  { 
    title: "Emotional Granularity", 
    excerpt: "The power of naming your feelings with precision",
    cat: "Self-Awareness", 
    date: "Nov 10, 2025",
    img: "https://images.unsplash.com/photo-1499728603263-13726abce5fd?w=800&h=600&fit=crop", 
  },
  { 
    title: "The Comfort Zone Paradox", 
    excerpt: "Why staying comfortable keeps you uncomfortable",
    cat: "Growth", 
    date: "Nov 8, 2025",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1200&fit=crop", 
  },
];

export default function FeelingNavigator() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hoveredEmotion, setHoveredEmotion] = useState(null);
  const [hoveredCat, setHoveredCat] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedCat = categories.find(cat => cat.uuid === selectedCategory);

  const handleEmotionClick = (slug) => {
    window.open(`/feelings/${slug}`, '_blank');
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-stone-50">
      {/* PHASE 1: EMOTIONAL ENTRY POINT */}
      <section className="pt-24 pb-20 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-sm uppercase tracking-widest text-stone-500 mb-4">Start here</p>
            <h1 className="text-5xl sm:text-6xl font-light text-stone-900 mb-6 leading-tight">
              How do you feel<br />right now?
            </h1>
            <p className="text-lg text-stone-600 font-light">
              Name your feeling. Find your ritual.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            {coreEmotions.map((emotion) => (
              <button
                key={emotion.id}
                onClick={() => handleEmotionClick(emotion.slug)}
                onMouseEnter={() => setHoveredEmotion(emotion.id)}
                onMouseLeave={() => setHoveredEmotion(null)}
                className="group relative"
              >
                <div className={`
                  relative overflow-hidden rounded-2xl p-6 transition-all duration-300
                  ${hoveredEmotion === emotion.id 
                    ? 'bg-white shadow-2xl scale-105' 
                    : 'bg-white shadow-sm'
                  }
                  border border-stone-200
                `}>
                  <div className={`
                    absolute inset-0 bg-gradient-to-br from-stone-50 to-transparent
                    transition-opacity duration-300
                    ${hoveredEmotion === emotion.id ? 'opacity-100' : 'opacity-0'}
                  `} />

                  <div className="relative flex flex-col items-center text-center gap-3">
                    <div className={`
                      text-5xl transition-all duration-300
                      ${hoveredEmotion === emotion.id ? 'scale-110 -rotate-12' : 'scale-100'}
                    `}>
                      {emotion.emoji}
                    </div>
                    <span className="text-base font-medium text-stone-900">
                      {emotion.label}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-stone-900 text-white rounded-2xl px-6 py-4 hover:bg-stone-800 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group font-medium"
          >
            <span>Explore all feelings</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* PHASE 2: DISCOVERY */}
      <section className="pb-20 px-6 sm:px-8 border-t border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-20">

            {/* LEFT: Categories */}
            <div className="lg:col-span-1">
              <div className="mb-8">
                <p className="text-xs uppercase tracking-widest text-stone-500 mb-3">Explore by topic</p>
                <h2 className="text-2xl font-light text-stone-900">
                  Deep stuff,<br />explained simply
                </h2>
              </div>

              <div className="relative">
                <button 
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full bg-white rounded-2xl pl-6 pr-12 py-4 text-base text-stone-600 border-2 border-stone-200 hover:border-stone-300 transition-all shadow-sm hover:shadow-lg text-left flex items-center gap-3 font-medium"
                >
                  <LayoutDashboard className="w-5 h-5 text-stone-500" />
                  <span className="truncate">
                    {selectedCat ? selectedCat.name : 'Choose a topic'}
                  </span>
                </button>
                
                <ChevronDown 
                  className={`absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400 pointer-events-none transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
                
                {isOpen && (
                  <div className="absolute left-0 mt-3 w-full bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border-2 border-stone-200 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-3">
                        {categories.map((category) => (
                          <button
                            key={category.uuid}
                            onClick={() => {
                              setSelectedCategory(category.uuid);
                              setIsOpen(false);
                            }}
                            onMouseEnter={() => setHoveredCat(category.uuid)}
                            onMouseLeave={() => setHoveredCat(null)}
                            className={`
                              relative border-2 p-4 rounded-xl text-left transition-all duration-300
                              ${hoveredCat === category.uuid 
                                ? 'bg-stone-100 border-stone-300 shadow-lg scale-[1.02]' 
                                : 'bg-stone-50 border-stone-200 hover:bg-stone-100 shadow-sm'
                              }
                            `}
                          >
                            <div className="relative z-10">
                              <div className={`
                                text-3xl mb-2 transition-all duration-300
                                ${hoveredCat === category.uuid ? 'scale-110 -rotate-6' : 'scale-100'}
                              `}>
                                {category.icon}
                              </div>
                              <div className='font-semibold text-sm mb-1 text-stone-800'>
                                {category.name}
                              </div>
                              <div className='text-xs text-stone-600'>
                                {category.description}
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {selectedCat && (
                <div className="mt-6 p-5 bg-gradient-to-br from-stone-50 to-white rounded-2xl shadow-sm border-2 border-stone-200">
                  <p className="text-xs text-stone-500 mb-2 uppercase tracking-wide">Now exploring</p>
                  <p className="text-lg font-semibold text-stone-900 flex items-center gap-2">
                    <span className="text-2xl">{selectedCat.icon}</span>
                    {selectedCat.name}
                  </p>
                </div>
              )}
            </div>

            {/* RIGHT: Featured Posts */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <p className="text-xs uppercase tracking-widest text-stone-500 mb-3">Popular this week</p>
                <h2 className="text-2xl font-light text-stone-900">Must reads</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {posts.map((post, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="group relative overflow-hidden rounded-2xl bg-stone-900 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] h-48"
                  >
                    <img 
                      src={post.img} 
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <span className="text-[10px] uppercase tracking-wider font-semibold bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full inline-block mb-2">
                        {post.cat}
                      </span>
                      <h3 className="text-base font-semibold group-hover:text-stone-200 transition-colors leading-tight line-clamp-2">
                        {post.title}
                      </h3>
                    </div>
                  </a>
                ))}
              </div>

              <button className="w-full mt-4 px-5 py-3 bg-stone-900 text-white rounded-2xl hover:bg-stone-800 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group text-sm font-medium">
                <span>View all articles</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-6"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[85vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8 border-b border-stone-200">
              <h2 className="text-3xl font-light text-stone-900 mb-2">All feelings</h2>
              <p className="text-stone-600">Pick where you're at right now</p>
            </div>

            <div className="p-8 overflow-y-auto max-h-[calc(85vh-140px)]">
              <div className="grid grid-cols-4 gap-3">
                {allEmotions.map((emotion) => (
                  <button
                    key={emotion.id}
                    onClick={() => handleEmotionClick(emotion.slug)}
                    className="bg-stone-50 hover:bg-stone-100 rounded-xl p-5 border border-stone-200 hover:border-stone-300 transition-all duration-200 text-left group hover:shadow-md"
                  >
                    <div className="flex flex-col items-start gap-2">
                      <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                        {emotion.emoji}
                      </span>
                      <span className="text-sm font-medium text-stone-900">
                        {emotion.label}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
