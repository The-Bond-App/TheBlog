'use client'

import React, {useState} from 'react'
import {  Instagram, ChevronRight, ExternalLink, Send, ChevronDown, Sticker, LayoutDashboard, IceCream, Palette, Home, Sparkles, PenTool, TrendingUp, SquareChevronRight, BookText, Smile, Link } from 'lucide-react';
import {categories, categoryMap} from '../constants/categories'

const trendingCategories = categories.slice(0,4);
const remainingCategories = categories.slice(4);

const morelinks = [
    { id: 1, name: 'Shop', icon: IceCream, bgColor: 'bg-stone-100', link: 'https://shop.thebond.company'},
    { id: 2, name: 'About Us', icon: IceCream, bgColor: 'bg-stone-100', link: 'https://thebond.company/about'},
    { id: 3, name: 'Say Hello', icon: IceCream, bgColor: 'bg-stone-100', link: 'https://support.thebond.company/?section=general'},
    { id: 5, name: 'Community', icon: IceCream, bgColor: 'bg-stone-100', link: '#'},
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

export default function WellbeingHero() {
    const [isOpen, setIsOpen] = useState(false);
     
  const [hoveredCat, setHoveredCat] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const selectedCat = categories.find(cat => cat.uuid === selectedCategory);

  return (
    <div className="pt-36 pb-12 px-8" style={{border: '5px solid red'}}>
      <div className="w-full mx-auto" >
        
          {/* grid: left = 2fr, middle = 1fr, right = 1fr */}
          <div className="grid grid-cols-[2fr_1.5fr_1.5fr] gap-9 items-stretch">
            {/* LEFT - big column (2x) - content anchored to bottom */}


            <div className="min-w-0 flex flex-col justify-end pb-1">
               <div className="mb-6">
                    <h1 className="text-6xl font-light gradient-text pb-2 mb-4 tracking-tight">
                       Sticky Notes for Your Soul's Fridge
                    </h1>
                    <div className="text-xl text-stone-500 space-y-1 ps-1">
                        <p>Deep stuff, explained like it's not</p>
                    </div>
                </div>

                {/* Dropdown Button */}
                <div className="relative">
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full bg-white rounded-2xl pl-5 pr-12 py-4 text-base text-stone-700 border border-stone-200 hover:border-stone-300 hover:cursor-pointer transition-all shadow-sm hover:shadow-md text-left flex items-center gap-3 font-medium"
                >
                    <LayoutDashboard className="w-5 h-5 text-stone-400" />
                    <span>{selectedCat ? selectedCat.name : 'Explore Categories'}</span>
                </button>
                
                <ChevronDown 
                    className={`absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400 pointer-events-none transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
                
                {/* Apple-Style Dropdown Menu */}
                {isOpen && (
                    <div className="absolute left-0 mt-2 w-full bg-white/95 backdrop-blur-2xl rounded-xl shadow-2xl border border-stone-200 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                    
                    {/* Categories - Single Row */}
                    <div className="p-6">
                        <div className="flex gap-3">
                        {categories.map((category) => (
                            <button
                            key={category.uuid}
                            onClick={() => {
                                setSelectedCat(category);
                                setIsOpen(false);
                            }}
                            onMouseEnter={() => setHoveredCat(category.uuid)}
                            onMouseLeave={() => setHoveredCat(null)}
                            className={`
                                relative border border-stone-200 hover:cursor-pointer flex-1 p-5 rounded-2xl text-left transition-all duration-300 overflow-hidden
                                ${hoveredCat === category.uuid 
                                ? 'bg-stone-900 shadow-lg scale-[1.02]' 
                                : 'bg-stone-50 hover:bg-stone-100 shadow-sm'
                                }
                            `}
                            >
                            {/* Animated gradient background */}
                            <div className={`
                                absolute inset-0 bg-gradient-to-br from-stone-800 to-stone-950
                                transition-opacity duration-300
                                ${hoveredCat === category.uuid ? 'opacity-100' : 'opacity-0'}
                            `} />
                            
                            <div className="relative z-10">
                                <div className={`
                                text-3xl mb-2 transition-all duration-300
                                ${hoveredCat === category.uuid ? 'scale-110 -rotate-6' : 'scale-100'}
                                `}>
                                {category.icon}
                                </div>
                                <div className={`
                                font-semibold text-base mb-1 transition-colors duration-300
                                ${hoveredCat === category.uuid ? 'text-white' : 'text-stone-900'}
                                `}>
                                {category.name}
                                </div>
                                <div className={`
                                text-sm transition-colors duration-300
                                ${hoveredCat === category.uuid ? 'text-stone-300' : 'text-stone-500'}
                                `}>
                                {category.description}
                                </div>
                            </div>
                            </button>
                        ))}
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent mx-6" />

                    {/* Social Links Section */}
                    <div className="px-8 py-6">
                        <p className="text-xs text-stone-500 font-medium uppercase tracking-wider mb-3">Bond Community Spaces</p>
                        <div className="flex items-center gap-3">
                        <a 
                            href="https://instagram.com/thebondcompany" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 to-rose-500 flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
                        >
                            <Instagram className="w-5 h-5 text-white" />
                        </a>
                        
                        <a 
                            href="https://tiktok.com/@thebondcompany" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-lg bg-stone-900 flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
                        >
                            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                            </svg>
                        </a>
                        
                        <a 
                            href="#" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-sky-600 flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
                        >
                            <Send className="w-5 h-5 text-white" />
                        </a>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent mx-6" />

                    {/* Quick Links Section */}
                    <div className="pt-6 pb-10 px-8">
                        <p className="text-xs text-stone-500 font-medium uppercase tracking-wider mb-4">More Resources</p>
                        <div className="flex items-center gap-3">
                        {morelinks.map((link, idx) => (
                            <React.Fragment key={link.id}>
                            <a
                                href={link.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs uppercase text-stone-600 hover:text-stone-900 transition-colors font-medium"
                            >
                                {link.name}
                            </a>
                            {idx < morelinks.length - 1 && (
                                <div className="w-1 h-1 rounded-full bg-stone-400" />
                            )}
                            </React.Fragment>
                        ))}
                        </div>
                    </div>
                    </div>
                )}
                </div>

                {/* Selected Category Display */}
                {selectedCat && (
                <div className="mt-6 p-5 bg-white rounded-2xl shadow-sm border border-stone-200">
                    <p className="text-sm text-stone-500 mb-2">Selected category</p>
                    <p className="text-lg font-semibold text-stone-900 flex items-center gap-3">
                    <span className="text-2xl">{selectedCat.icon}</span>
                    {selectedCat.name}
                    </p>
                </div>
                )}
            </div>

            {/* MIDDLE - Categories (1x) */}
            <div className="min-w-0">
                <div className="bg-white rounded-2xl h-full flex flex-col  border border-stone-200">
                    <div className="px-6 pt-4 pb-3 border-b border-stone-100">
                        <div className="flex items-center">
                            {/*<Sticker className="w-5 h-5 text-stone-600" />*/}
                            <h2 className="text-lg font-bold text-stone-600 tracking-tight">
                                Weekly's Must Read
                            </h2>
                        </div>
                        <p className="text-base text-stone-500">You need to read this, seriously</p>
                    </div>
                    <div className="overflow-visible flex-1 px-2 py-3">
                        {posts.slice(0,4).map((post, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-4 hover:bg-stone-100 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 group mb-1 last:mb-0"
                        >
                            {/* No background - just the icon */}
                            <span className="text-2xl text-stone-700 flex-shrink-0">
                            foto
                            </span>

                            <div className="flex-1 min-w-0">
                            <div className="font-medium text-stone-700 text-[15px]">{post.title}</div>
                            </div>

                            {/* Elegant, minimal arrow */}
                            <ChevronRight className="w-5 h-5 text-stone-300 group-hover:text-stone-600 group-hover:translate-x-2 transition-all duration-300" />
                        </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* RIGHT - Promo Card (1x) */}
            <div className="min-w-0">
              <div className="bg-blue-600 rounded-xl p-8 relative overflow-hidden h-full flex flex-col justify-between">
                {/* Illustration (decorative) */}
                <div className="absolute right-6 top-6 w-32 h-40 opacity-30 pointer-events-none">
                  <div className="absolute right-2 top-8 w-24 h-28 border-4 border-white/40 rounded-lg rotate-12"></div>
                  <div className="absolute right-8 top-16 w-12 h-8 bg-white/30 rounded"></div>
                </div>

                {/* Content group */}
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-8 leading-tight">
                    Your emotional clarity, everywhere.
                    <br />
                    <br />
                    bundalele
                  </h3>
                </div>

                {/* Footer action stays at bottom to help card fill height evenly */}
                <div className="relative z-10">
                  <button className="bg-white text-blue-600 px-5 py-3 rounded-lg font-medium hover:bg-stone-50 transition-colors w-full text-sm">
                    Read your first note
                  </button>
                </div>
              </div>
            </div>

        </div>
      </div>
    </div>
  );
}
