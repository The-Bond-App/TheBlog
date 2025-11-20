'use client'
import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Play, BookOpen, Heart } from 'lucide-react';

const HeroOptions = () => {
  const [activeOption, setActiveOption] = useState(1);
  const [selectedCover, setSelectedCover] = useState(0);

  const featuredCarousel = [
    {
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=1000&fit=crop",
      title: "The Mirror Effect",
      description: "Why we're drawn to people who reflect parts of ourselves",
      slug: "mirror-effect"
    },
    {
      image: "https://images.unsplash.com/photo-1499728603263-13726abce5fd?w=800&h=600&fit=crop",
      title: "Emotional Granularity",
      description: "The power of naming your feelings with precision",
      slug: "emotional-granularity"
    },
    {
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1200&fit=crop",
      title: "The Comfort Zone",
      description: "Why staying comfortable keeps you uncomfortable",
      slug: "comfort-zone"
    }
  ];

  // Option 1: Split Screen Minimalist
  const HeroOption1 = () => (
    <section className='px-6 md:px-12 py-20 max-w-[1400px] mx-auto'>
      <div className="grid md:grid-cols-2 gap-16 items-center min-h-[600px]">
        <div className="space-y-8">
          <div className="inline-block px-4 py-2 bg-yellow-400/10 rounded-full">
            <span className="text-sm font-medium text-yellow-700">Emotional intelligence, simplified</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-light tracking-tight leading-[0.95]">
            Sticky notes<br/>
            <span className="font-semibold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">for your soul's</span><br/>
            <span className="font-semibold">fridge</span>
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed max-w-lg">
            To quiet the ruminating-before-sleep moments and fuel the trying-to-grow-on-purpose ones.
          </p>
          <button className="group px-8 py-4 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-800 transition-all inline-flex items-center gap-2">
            Start exploring
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="relative h-[500px]">
          {featuredCarousel.map((item, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-all duration-700 cursor-pointer ${
                idx === selectedCover ? 'z-20 opacity-100' : 'z-10 opacity-0'
              }`}
              onClick={() => setSelectedCover(idx)}
            >
              <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/90">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {featuredCarousel.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCover(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === selectedCover ? 'w-8 bg-stone-900' : 'w-2 bg-stone-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  // Option 2: Floating Cards with Depth
  const HeroOption2 = () => (
    <section className='px-6 md:px-12 py-20 max-w-[1400px] mx-auto'>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 max-w-xl">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight leading-tight">
            Sticky notes for your{' '}
            <span className="relative inline-block">
              <span className="relative z-10 font-semibold">soul's fridge</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-400/40 -rotate-1"></span>
            </span>
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed">
            Emotional fundamentals nobody taught us, explained through analogies that stick.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="px-6 py-3 bg-stone-900 text-white rounded-xl font-medium hover:scale-105 transition-transform">
              Explore stories
            </button>
            <button className="px-6 py-3 border-2 border-stone-200 rounded-xl font-medium hover:border-stone-900 transition-colors">
              Take quiz
            </button>
          </div>
        </div>
        
        <div className="relative h-[450px]">
          {featuredCarousel.map((item, idx) => {
            const offset = idx * 30;
            const rotation = idx * 3;
            return (
              <div
                key={idx}
                className="absolute top-0 left-0 right-0 transition-all duration-500 cursor-pointer hover:scale-105"
                style={{
                  transform: `translateY(${offset}px) rotate(${rotation}deg)`,
                  zIndex: featuredCarousel.length - idx
                }}
                onClick={() => setSelectedCover(idx)}
              >
                <div className="relative h-[350px] bg-white rounded-2xl overflow-hidden shadow-xl">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-white/80">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );

  // Option 3: Magazine Spread Layout
  const HeroOption3 = () => (
    <section className='px-6 md:px-12 py-16 max-w-[1400px] mx-auto'>
      <div className="grid md:grid-cols-5 gap-8 items-start">
        <div className="md:col-span-2 space-y-6 md:sticky md:top-24">
          <div className="space-y-2">
            <div className="text-xs uppercase tracking-widest text-stone-400">The Bond • Issue 01</div>
            <h1 className="text-5xl md:text-6xl font-light leading-tight">
              Sticky notes<br/>
              <span className="font-bold">for your soul's<br/>fridge</span>
            </h1>
          </div>
          <p className="text-lg text-stone-600 leading-relaxed border-l-2 border-yellow-400 pl-4">
            To quiet the ruminating-before-sleep moments and fuel the trying-to-grow-on-purpose ones.
          </p>
          <button className="group px-6 py-3 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300 transition-all inline-flex items-center gap-2">
            Read latest issue
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="md:col-span-3 space-y-4">
          {featuredCarousel.map((item, idx) => (
            <div
              key={idx}
              className="group cursor-pointer hover:scale-[1.02] transition-all duration-300"
              onClick={() => setSelectedCover(idx)}
            >
              <div className="relative h-64 rounded-2xl overflow-hidden bg-white shadow-lg">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="text-xs text-white/60">Chapter {idx + 1}</div>
                  <div className="text-white">
                    <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/90">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Option 4: Centered Hero with Background Image
  const HeroOption4 = () => (
    <section className='relative min-h-[600px] flex items-center justify-center overflow-hidden'>
      <div className="absolute inset-0 z-0">
        <img 
          src={featuredCarousel[selectedCover].image}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center text-white">
        <h1 className="text-6xl md:text-8xl font-light mb-6 leading-tight">
          Sticky notes for<br/>
          <span className="font-bold bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
            your soul's fridge
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Emotional fundamentals nobody taught us, explained through analogies that stick.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform">
            Start reading
          </button>
          <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-medium border border-white/30 hover:bg-white/20 transition-all">
            Browse library
          </button>
        </div>
        
        <div className="flex gap-3 justify-center mt-12">
          {featuredCarousel.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCover(idx)}
              className={`h-1 rounded-full transition-all ${
                idx === selectedCover ? 'w-12 bg-yellow-400' : 'w-8 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );

  // Option 5: Bento Grid Style
  const HeroOption5 = () => (
    <section className='px-6 md:px-12 py-20 max-w-[1400px] mx-auto'>
      <div className="mb-12 w-full text-left">
        <h1 className="text-5xl md:text-6xl lg:text-6xl font-light  gradient-text  pb-1 tracking-tight leading-[1.05]">
          Sticky notes for your soul's fridge
        </h1>
        <p className="text-2xl text-stone-500">
          Emotional fundamentals, explained through analogies that stick.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2 relative h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-xl">
          <img src={featuredCarousel[0].image} alt={featuredCarousel[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <span className="px-3 py-1 bg-yellow-400 text-black text-xs font-bold rounded-full">Featured</span>
            <h3 className="text-4xl font-bold mt-4 mb-2">{featuredCarousel[0].title}</h3>
            <p className="text-lg text-white/90">{featuredCarousel[0].description}</p>
          </div>
        </div>
        
        <div className="space-y-4">
          {featuredCarousel.slice(1).map((item, idx) => (
            <div key={idx} className="relative h-[192px] rounded-2xl overflow-hidden group cursor-pointer shadow-lg">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                <p className="text-sm text-white/80 line-clamp-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Option 6: Asymmetric Split
  const HeroOption6 = () => (
    <section className='px-6 md:px-12 py-20 max-w-[1400px] mx-auto'>
      <div className="grid md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-1 space-y-6">
          <div className="w-16 h-1 bg-yellow-400 rounded-full"></div>
          <h1 className="text-5xl md:text-6xl font-light leading-tight">
            Sticky notes for your{' '}
            <span className="font-bold block mt-2">soul's fridge</span>
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed">
            To quiet the ruminating-before-sleep moments and fuel the trying-to-grow-on-purpose ones.
          </p>
          <div className="space-y-3">
            <button className="w-full px-6 py-3 bg-stone-900 text-white rounded-xl font-medium hover:bg-stone-800 transition-colors text-left flex items-center justify-between group">
              Explore stories
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full px-6 py-3 border-2 border-stone-200 rounded-xl font-medium hover:border-stone-900 transition-colors text-left">
              Browse by feeling
            </button>
          </div>
        </div>
        
        <div className="md:col-span-2 relative h-[550px]">
          <div className="absolute inset-0 grid grid-cols-2 gap-4">
            {featuredCarousel.map((item, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl overflow-hidden shadow-xl cursor-pointer hover:scale-105 transition-all duration-300 ${
                  idx === 0 ? 'row-span-2' : ''
                }`}
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className={`font-bold mb-2 ${idx === 0 ? 'text-3xl' : 'text-xl'}`}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/80 line-clamp-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  // Option 7: Carousel with Text Overlay
  const HeroOption7 = () => (
    <section className='px-6 md:px-12 py-20 max-w-[1400px] mx-auto'>
      <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
        {featuredCarousel.map((item, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === selectedCover ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          </div>
        ))}
        
        <div className="relative h-full flex items-center">
          <div className="max-w-2xl px-12 md:px-20 text-white space-y-6">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
              Issue {selectedCover + 1} of {featuredCarousel.length}
            </div>
            <h1 className="text-5xl md:text-7xl font-light leading-tight">
              Sticky notes<br/>
              <span className="font-bold">for your soul's<br/>fridge</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {featuredCarousel[selectedCover].description}
            </p>
            <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform inline-flex items-center gap-2">
              Read this story
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 right-8 flex gap-3">
          {featuredCarousel.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCover(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === selectedCover ? 'w-12 bg-white' : 'w-8 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );

  // Option 8: Stacked Cards Peek
  const HeroOption8 = () => (
    <section className='px-6 md:px-12 py-20 max-w-[1400px] mx-auto'>
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
          Sticky notes for<br/>
          <span className="relative inline-block">
            <span className="font-bold">your soul's fridge</span>
            <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12">
              <path d="M0,8 Q150,0 300,8" fill="none" stroke="#facc15" strokeWidth="8"/>
            </svg>
          </span>
        </h1>
        <p className="text-xl text-stone-600 mb-8">
          Emotional fundamentals nobody taught us, explained through analogies.
        </p>
      </div>
      
      <div className="relative h-[450px] max-w-2xl mx-auto">
        {featuredCarousel.map((item, idx) => {
          const isActive = idx === selectedCover;
          const offset = (featuredCarousel.length - 1 - idx) * 25;
          
          return (
            <div
              key={idx}
              className={`absolute left-1/2 -translate-x-1/2 transition-all duration-500 cursor-pointer ${
                isActive ? 'z-30' : 'z-10'
              }`}
              style={{
                transform: isActive 
                  ? 'translateX(-50%) translateY(0) scale(1)' 
                  : `translateX(-50%) translateY(${offset}px) scale(${1 - idx * 0.05})`,
                width: '90%'
              }}
              onClick={() => setSelectedCover(idx)}
            >
              <div className="relative h-[400px] bg-white rounded-3xl overflow-hidden shadow-2xl">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="text-xs text-white/60 mb-2">Story {idx + 1}</div>
                  <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/90">{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );

  // Option 9: Side-by-Side Editorial
  const HeroOption9 = () => (
    <section className='px-6 md:px-12 py-20 max-w-[1400px] mx-auto'>
      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        <div className="bg-stone-900 rounded-3xl p-12 md:p-16 flex flex-col justify-center text-white">
          <div className="space-y-6">
            <div className="w-12 h-1 bg-yellow-400"></div>
            <h1 className="text-5xl md:text-6xl font-light leading-tight">
              Sticky notes<br/>
              <span className="font-bold">for your<br/>soul's fridge</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              To quiet the ruminating-before-sleep moments and fuel the trying-to-grow-on-purpose ones.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-6 py-3 bg-yellow-400 text-black rounded-xl font-bold hover:bg-yellow-300 transition-colors">
                Start reading
              </button>
              <button className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-medium hover:bg-white/20 transition-colors">
                View all stories
              </button>
            </div>
          </div>
        </div>
        
        <div className="relative min-h-[500px] rounded-3xl overflow-hidden shadow-xl">
          {featuredCarousel.map((item, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-700 ${
                idx === selectedCover ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <span className="px-3 py-1 bg-yellow-400 text-black text-xs font-bold rounded-full">
                  Featured
                </span>
                <h3 className="text-3xl font-bold mt-4 mb-2">{item.title}</h3>
                <p className="text-white/90 mb-4">{item.description}</p>
                <button className="text-sm font-medium underline hover:no-underline">
                  Read story →
                </button>
              </div>
            </div>
          ))}
          
          <div className="absolute top-8 right-8 flex gap-2">
            {featuredCarousel.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCover(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === selectedCover ? 'bg-white scale-125' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  const options = [
    { name: 'Split Screen Minimalist', component: HeroOption1 },
    { name: 'Floating Cards', component: HeroOption2 },
    { name: 'Magazine Spread', component: HeroOption3 },
    { name: 'Centered Immersive', component: HeroOption4 },
    { name: 'Bento Grid', component: HeroOption5 },
    { name: 'Asymmetric Split', component: HeroOption6 },
    { name: 'Full Carousel', component: HeroOption7 },
    { name: 'Stacked Cards', component: HeroOption8 },
    { name: 'Editorial Split', component: HeroOption9 }
  ];

  const CurrentHero = options[activeOption - 1].component;

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Option Selector */}
      <div className="sticky top-0 z-50 bg-white border-b border-stone-200 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-stone-900">Choose Your Hero Style</h2>
            <span className="text-sm text-stone-500">Option {activeOption} of 9</span>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => setActiveOption(idx + 1)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeOption === idx + 1
                    ? 'bg-stone-900 text-white'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {idx + 1}. {option.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Hero */}
      <CurrentHero />

      {/* Info Panel */}
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-4">{options[activeOption - 1].name}</h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="font-semibold text-stone-900 mb-2">Best For:</div>
              <p className="text-stone-600">
                {activeOption === 1 && "Clean, professional look with equal weight on text and image"}
                {activeOption === 2 && "Playful, dynamic feel with depth perception"}
                {activeOption === 3 && "Editorial, blog-style content with multiple entry points"}
                {activeOption === 4 && "Maximum emotional impact with full-screen imagery"}
                {activeOption === 5 && "Modern, dashboard-like layout showcasing multiple stories"}
                {activeOption === 6 && "Unique layout that breaks traditional grid patterns"}
                {activeOption === 7 && "Storytelling with rotating featured content"}
                {activeOption === 8 && "Interactive card stack with clear hierarchy"}
                {activeOption === 9 && "Bold, magazine-inspired editorial design"}
              </p>
            </div>
            <div>
              <div className="font-semibold text-stone-900 mb-2">Style:</div>
              <p className="text-stone-600">
                {activeOption === 1 && "Minimalist, balanced, sophisticated"}
                {activeOption === 2 && "Playful, layered, dimensional"}
                {activeOption === 3 && "Editorial, structured, content-rich"}
                {activeOption === 4 && "Immersive, bold, cinematic"}
                {activeOption === 5 && "Modern, modular, visual-first"}
                {activeOption === 6 && "Asymmetric, dynamic, contemporary"}
                {activeOption === 7 && "Cinematic, immersive, narrative"}
                {activeOption === 8 && "Interactive, layered, engaging"}
                {activeOption === 9 && "Editorial, bold, split-screen"}
              </p>
            </div>
            <div>
              <div className="font-semibold text-stone-900 mb-2">Mobile Friendly:</div>
              <p className="text-stone-600">
                {activeOption === 1 && "✅ Excellent - stacks naturally"}
                {activeOption === 2 && "✅ Good - cards stack vertically"}
                {activeOption === 3 && "✅ Excellent - scrollable list"}
                {activeOption === 4 && "⚠️ Good - needs text size adjustment"}
                {activeOption === 5 && "✅ Excellent - grid adapts well"}
                {activeOption === 6 && "✅ Good - reflows to single column"}
                {activeOption === 7 && "✅ Excellent - full-width works great"}
                {activeOption === 8 && "✅ Good - cards center and stack"}
                {activeOption === 9 && "✅ Excellent - splits into vertical"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOptions;