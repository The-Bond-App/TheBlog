'use client';
import { useState } from 'react';
import { Search, Sliders } from 'lucide-react';
import HeroHero from './HeroHero'
import {categories, categoryMap } from '../constants/categories'

export default function EmotionalWellbeingBlog() {
  const [activeCategory, setActiveCategory] = useState('Featured');

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

  const featuredPost = posts[0]
  const cats = ['Featured', 'Relationships', 'Self-Awareness', 'Growth', 'Mindfulness'];
  const filtered = activeCategory === 'Featured' ? posts : posts.filter(p => p.cat === activeCategory);

  return (
    <div className="bg-white px-16" style={{border: '3px solid pink'}}>
      {/* Hero */}
      
        
      <HeroHero />

      {/* Masonry Grid */}
      <main className="w-full mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
            {filtered.map((post, i) => (
              <div
                key={i}
                className="break-inside-avoid mb-5 group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg">
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
            ))}
          </div>
        
      </main>

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