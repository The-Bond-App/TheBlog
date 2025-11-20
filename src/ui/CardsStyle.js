import React, { useState } from 'react';
import { Clock, LifeBuoy } from 'lucide-react';

export default function ReadableArticles() {
  const [activeDesign, setActiveDesign] = useState(1);

  const articles = [
    { 
      title: "The Mirror Effect in Relationships", 
      excerpt: "Why we're drawn to people who reflect parts of ourselves",
      cat: "Relationships", 
      img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=1000&fit=crop", 
      h: 420,
      emotion: "Lonely",
      difficulty: "Beginner",
      type: "Framework",
      readTime: "5 min"
    },
    { 
      title: "Emotional Granularity", 
      excerpt: "The power of naming your feelings with precision",
      cat: "Self-Awareness", 
      img: "https://images.unsplash.com/photo-1499728603263-13726abce5fd?w=800&h=600&fit=crop", 
      h: 320,
      emotion: "Anxious",
      difficulty: "Advanced",
      type: "Framework",
      readTime: "6 min"
    },
    { 
      title: "The Comfort Zone Paradox", 
      excerpt: "Why staying comfortable keeps you uncomfortable",
      cat: "Growth", 
      img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1200&fit=crop", 
      h: 520,
      emotion: "Frustrated",
      difficulty: "Beginner",
      type: "Story",
      readTime: "4 min"
    },
    { 
      title: "Window of Tolerance", 
      excerpt: "Understanding your nervous system's sweet spot",
      cat: "Self-Awareness", 
      img: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&h=700&fit=crop", 
      h: 370,
      emotion: "Anxious",
      difficulty: "Advanced",
      type: "Framework",
      readTime: "7 min"
    },
    { 
      title: "Attachment Styles Explained", 
      excerpt: "How childhood shapes connection",
      cat: "Relationships", 
      img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=900&fit=crop", 
      h: 400,
      emotion: "Lonely",
      difficulty: "Advanced",
      type: "Framework",
      readTime: "8 min"
    },
    { 
      title: "The Rubber Band Theory", 
      excerpt: "Why suppressing feelings backfires",
      cat: "Mindfulness", 
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop", 
      h: 300,
      emotion: "Angry",
      difficulty: "Beginner",
      type: "Story",
      readTime: "4 min"
    }
  ];

  // OPTION 1: Content Below - No Reading Issues
  const Design1 = () => (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-12">
      {articles.map((post, i) => (
        <div key={i} className="break-inside-avoid mb-16 group cursor-pointer">
          <div className="overflow-hidden rounded-3xl mb-8 shadow-xl">
            <img src={post.img} alt={post.title} className="w-full transition-transform duration-700 group-hover:scale-105" style={{ height: `${post.h}px`, objectFit: 'cover' }} />
          </div>
          
          <div className="px-2">
            <div className="flex gap-4 mb-8">
              <span className="px-4 py-2 bg-rose-50 text-rose-600 rounded-full text-xs font-semibold">
                {post.emotion}
              </span>
              <span className="px-4 py-2 bg-stone-100 text-stone-600 rounded-full text-xs font-medium">
                {post.type}
              </span>
              <span className="px-4 py-2 bg-stone-100 text-stone-600 rounded-full text-xs font-medium">
                {post.difficulty}
              </span>
            </div>

            <div className="mb-6">
              <span className="text-xs text-stone-500 uppercase tracking-[0.3em] font-semibold">{post.cat}</span>
            </div>
            
            <h3 className="text-4xl font-semibold text-stone-900 mb-8 leading-[1.3]">
              {post.title}
            </h3>
            
            <p className="text-stone-600 text-lg leading-[1.8] mb-8 font-normal">
              {post.excerpt}
            </p>

            <div className="text-sm text-stone-500 flex items-center gap-2 font-medium">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // OPTION 2: Dark Gradient with BOLD Text
  const Design2 = () => (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-10">
      {articles.map((post, i) => (
        <div key={i} className="break-inside-avoid mb-14 group cursor-pointer">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img src={post.img} alt={post.title} className="w-full transition-transform duration-700 group-hover:scale-105" style={{ height: `${post.h}px`, objectFit: 'cover' }} />
            
            {/* DARKER gradient for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-12">
              <div className="flex gap-4 mb-8">
                <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">{post.emotion}</span>
                <span className="text-white/40">·</span>
                <span className="text-xs text-white/80 font-semibold">{post.type}</span>
                <span className="text-white/40">·</span>
                <span className="text-xs text-white/80 font-semibold">{post.difficulty}</span>
              </div>

              <div className="mb-7">
                <span className="text-[10px] text-amber-400 uppercase tracking-[0.3em] font-bold">{post.cat}</span>
              </div>
              
              {/* BOLD title - readable */}
              <h3 className="text-4xl font-bold text-white mb-8 leading-[1.2]">
                {post.title}
              </h3>
              
              {/* SEMIBOLD excerpt */}
              <p className="text-white text-lg leading-[1.8] mb-6 font-semibold">
                {post.excerpt}
              </p>

              <span className="text-white/70 text-sm font-medium">{post.readTime}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // OPTION 3: Solid Background Box Over Image
  const Design3 = () => (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-10">
      {articles.map((post, i) => (
        <div key={i} className="break-inside-avoid mb-14 group cursor-pointer">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img src={post.img} alt={post.title} className="w-full transition-transform duration-700 group-hover:scale-105" style={{ height: `${post.h}px`, objectFit: 'cover' }} />
            
            {/* Solid black box at bottom - perfect readability */}
            <div className="absolute bottom-0 left-0 right-0 bg-black p-10">
              <div className="flex gap-4 mb-6">
                <span className="text-xs text-amber-400 font-bold uppercase">{post.emotion}</span>
                <span className="text-white/40">·</span>
                <span className="text-xs text-white font-semibold">{post.type}</span>
                <span className="text-white/40">·</span>
                <span className="text-xs text-white font-semibold">{post.difficulty}</span>
              </div>

              <div className="mb-5">
                <span className="text-[10px] text-amber-400 uppercase tracking-[0.3em] font-bold">{post.cat}</span>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-6 leading-[1.25]">
                {post.title}
              </h3>
              
              <p className="text-white text-base leading-[1.7] mb-5 font-medium">
                {post.excerpt}
              </p>

              <span className="text-white/60 text-sm font-medium">{post.readTime}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // OPTION 4: White Card Over Image
  const Design4 = () => (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-10">
      {articles.map((post, i) => (
        <div key={i} className="break-inside-avoid mb-14 group cursor-pointer">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img src={post.img} alt={post.title} className="w-full transition-transform duration-700 group-hover:scale-105" style={{ height: `${post.h}px`, objectFit: 'cover' }} />
            
            {/* White card floating over image */}
            <div className="absolute bottom-8 left-8 right-8 bg-white rounded-2xl p-8 shadow-2xl">
              <div className="flex gap-3 mb-6">
                <span className="text-xs text-rose-600 font-bold uppercase">{post.emotion}</span>
                <span className="text-stone-300">·</span>
                <span className="text-xs text-stone-600 font-semibold">{post.type}</span>
                <span className="text-stone-300">·</span>
                <span className="text-xs text-stone-600 font-semibold">{post.difficulty}</span>
              </div>

              <div className="mb-5">
                <span className="text-[10px] text-stone-500 uppercase tracking-[0.3em] font-bold">{post.cat}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-stone-900 mb-5 leading-[1.25]">
                {post.title}
              </h3>
              
              <p className="text-stone-700 text-base leading-[1.7] mb-4 font-medium">
                {post.excerpt}
              </p>

              <span className="text-stone-500 text-sm font-medium">{post.readTime}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // OPTION 5: Magazine Style - Text Below
  const Design5 = () => (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-14">
      {articles.map((post, i) => (
        <div key={i} className="break-inside-avoid mb-16 group cursor-pointer">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
            <div className="overflow-hidden">
              <img src={post.img} alt={post.title} className="w-full transition-transform duration-700 group-hover:scale-105" style={{ height: `${post.h}px`, objectFit: 'cover' }} />
            </div>
            
            <div className="p-10">
              <div className="flex gap-4 mb-7">
                <span className="text-xs text-rose-600 font-bold uppercase tracking-wider">{post.emotion}</span>
                <span className="text-xs text-stone-500 font-semibold uppercase tracking-wider">{post.type}</span>
                <span className="text-xs text-stone-500 font-semibold uppercase tracking-wider">{post.difficulty}</span>
              </div>

              <div className="mb-6">
                <span className="text-[10px] text-stone-500 uppercase tracking-[0.35em] font-bold">{post.cat}</span>
              </div>
              
              <h3 className="text-3xl font-bold text-stone-900 mb-7 leading-[1.25]">
                {post.title}
              </h3>
              
              <p className="text-stone-700 text-lg leading-[1.8] mb-7 font-normal">
                {post.excerpt}
              </p>

              <div className="h-px bg-stone-200 mb-5" />

              <span className="text-sm text-stone-500 flex items-center gap-2 font-medium">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // OPTION 6: Heavy Overlay + Bold Text
  const Design6 = () => (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-10">
      {articles.map((post, i) => (
        <div key={i} className="break-inside-avoid mb-14 group cursor-pointer">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img src={post.img} alt={post.title} className="w-full transition-transform duration-700 group-hover:scale-105" style={{ height: `${post.h}px`, objectFit: 'cover' }} />
            
            {/* HEAVY dark overlay */}
            <div className="absolute inset-0 bg-black/75" />
            
            <div className="absolute bottom-0 left-0 right-0 p-10">
              <div className="flex gap-3 mb-7">
                <span className="px-4 py-2 bg-amber-400 text-black rounded-lg text-xs font-black uppercase">
                  {post.emotion}
                </span>
                <span className="px-4 py-2 bg-white/20 backdrop-blur text-white rounded-lg text-xs font-bold">
                  {post.type}
                </span>
                <span className="px-4 py-2 bg-white/20 backdrop-blur text-white rounded-lg text-xs font-bold">
                  {post.difficulty}
                </span>
              </div>

              <div className="mb-6">
                <span className="text-[10px] text-amber-400 uppercase tracking-[0.3em] font-black">{post.cat}</span>
              </div>
              
              <h3 className="text-4xl font-black text-white mb-7 leading-[1.2]">
                {post.title}
              </h3>
              
              <p className="text-white text-lg leading-[1.75] mb-6 font-bold">
                {post.excerpt}
              </p>

              <span className="text-white/80 text-sm font-semibold">{post.readTime}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // OPTION 7: Split Card Design
  const Design7 = () => (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-10">
      {articles.map((post, i) => (
        <div key={i} className="break-inside-avoid mb-14 group cursor-pointer">
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
            <div className="overflow-hidden" style={{ height: `${Math.floor(post.h * 0.6)}px` }}>
              <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            
            <div className="p-8 bg-stone-900">
              <div className="flex gap-3 mb-6">
                <span className="px-3 py-1.5 bg-amber-400 text-black rounded-full text-xs font-black uppercase">{post.emotion}</span>
                <span className="px-3 py-1.5 bg-white/10 text-white rounded-full text-xs font-bold">{post.type}</span>
                <span className="px-3 py-1.5 bg-white/10 text-white rounded-full text-xs font-bold">{post.difficulty}</span>
              </div>

              <div className="mb-5">
                <span className="text-[10px] text-amber-400 uppercase tracking-[0.3em] font-bold">{post.cat}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-5 leading-[1.3]">
                {post.title}
              </h3>
              
              <p className="text-white/90 text-base leading-[1.7] mb-5 font-medium">
                {post.excerpt}
              </p>

              <span className="text-white/60 text-sm font-medium">{post.readTime}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const designs = [
    { name: "Content Below", desc: "Zero readability issues", component: Design1 },
    { name: "Dark + Bold", desc: "Heavy gradient, bold text", component: Design2 },
    { name: "Solid Black Box", desc: "100% contrast, perfect reading", component: Design3 },
    { name: "White Card Float", desc: "Floating white card over image", component: Design4 },
    { name: "Magazine Clean", desc: "All text below image", component: Design5 },
    { name: "Heavy Overlay", desc: "75% dark + extra bold", component: Design6 },
    { name: "Split Card", desc: "Image top, dark content bottom", component: Design7 }
  ];

  const ActiveDesign = designs[activeDesign - 1].component;

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-1">Readable Designs</h2>
              <p className="text-xs text-stone-500">Bold fonts • Strong contrast • Easy to read</p>
            </div>
            <button className="p-2 rounded-full bg-rose-400 hover:bg-rose-500 transition-colors">
              <LifeBuoy className="w-5 h-5 text-white" />
            </button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {designs.map((design, i) => (
              <button
                key={i}
                onClick={() => setActiveDesign(i + 1)}
                className={`flex-shrink-0 px-5 py-3 rounded-xl transition-all duration-300 ${
                  activeDesign === i + 1
                    ? 'bg-stone-900 text-white shadow-lg scale-105'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                <div className="text-sm font-semibold mb-1">{design.name}</div>
                <div className="text-xs opacity-80">{design.desc}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <ActiveDesign />
        </div>
      </section>
    </div>
  );
}