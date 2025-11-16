'use client';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isTransformed, setIsTransformed] = useState(false);

  const featuredCarousel = [
    {
      title: "The Fridge Light Theory",
      description: "Why we only see our flaws when we look for them",
      image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&h=800&fit=crop",
      slug: "fridge-light-theory"
    },
    {
      title: "Emotional Dishwashers",
      description: "Some feelings just need time to process",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=800&fit=crop",
      slug: "emotional-dishwashers"
    },
    {
      title: "The Thermostat Method",
      description: "Setting your emotional baseline, not chasing peaks",
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=600&h=800&fit=crop",
      slug: "thermostat-method"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % featuredCarousel.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-[60vh] bg-gradient-to-br from-stone-50/50 to-white pt-36 pb-8">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* LEFT - Main Message (5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-stone-100 border border-stone-200 rounded-full">
              <span className="text-xs font-medium text-stone-600">🌱 Emotional Growth • Explained Simply</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-light text-stone-900 tracking-tight leading-[1.1]">
              Sticky notes for your soul's fridge
            </h1>

            <p className="text-base text-stone-600 leading-relaxed max-w-lg">
              To quiet the ruminating-before-sleep moments and fuel the trying-to-grow-on-purpose ones. Emotional fundamentals nobody taught us, explained through analogies.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button className="px-5 py-2.5 bg-stone-900 text-white rounded-full text-sm font-medium hover:bg-stone-800 transition-all shadow-sm">
                Start Reading
              </button>
              <button className="px-5 py-2.5 bg-white text-stone-900 border-2 border-stone-200 rounded-full text-sm font-medium hover:border-stone-300 transition-all">
                Browse Topics
              </button>
            </div>
          </div>

          {/* MIDDLE - Featured Carousel (4 columns) */}
          <div className="lg:col-span-4 relative">
            <div className="relative h-[420px]">
              {featuredCarousel.map((item, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    idx === carouselIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <div className="relative h-full rounded-xl overflow-hidden group shadow-lg">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <div className="inline-block px-2.5 py-1 bg-white/15 backdrop-blur-sm rounded-full text-xs font-medium mb-2">
                        Must Read
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-1.5 leading-tight">
                        {item.title}
                      </h3>
                      
                      <p className="text-xs text-white/90 leading-relaxed mb-3">
                        {item.description}
                      </p>
                      
                      <button className="px-4 py-2 bg-white text-stone-900 rounded-full text-xs font-medium hover:bg-white/90 transition-all">
                        Read Story
                      </button>
                    </div>

                    {/* Carousel indicators */}
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-1.5">
                      {featuredCarousel.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCarouselIndex(i)}
                          className={`w-1 rounded-full transition-all ${
                            i === carouselIndex ? 'h-6 bg-white' : 'h-1 bg-white/40 hover:bg-white/60'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - Emotions 101 KILLER AD (3 columns) */}
          <div className="lg:col-span-3">
            <div 
              className="relative h-[420px] rounded-xl overflow-hidden cursor-pointer shadow-2xl group"
              onMouseEnter={() => setIsTransformed(true)}
              onMouseLeave={() => setIsTransformed(false)}
            >
              {/* BEFORE STATE - The Pain */}
              <div className={`absolute inset-0 bg-black transition-all duration-1000 ${
                isTransformed ? 'opacity-0 scale-125' : 'opacity-100 scale-100'
              }`}>
                <div className="absolute inset-0 flex flex-col p-8">
                  {/* Chaotic visual noise */}
                  <div className="absolute inset-0 opacity-20">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute bg-red-500 blur-xl animate-pulse"
                        style={{
                          width: `${Math.random() * 100 + 50}px`,
                          height: `${Math.random() * 100 + 50}px`,
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 2}s`,
                          animationDuration: `${Math.random() * 3 + 2}s`
                        }}
                      />
                    ))}
                  </div>

                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <div className="text-red-400 text-xs uppercase tracking-widest font-bold mb-6">
                        Right Now
                      </div>
                      
                      <div className="space-y-3">
                        <div className="text-white/60 text-sm line-through">Why do I feel this way?</div>
                        <div className="text-white/60 text-sm line-through">Why do I always react like this?</div>
                        <div className="text-white/60 text-sm line-through">Why can't I just get over it?</div>
                        <div className="text-white/60 text-sm line-through">Why am I stuck in the same loop?</div>
                      </div>

                      <div className="mt-8 text-white font-bold text-2xl leading-tight">
                        Lost in your<br />own mind.
                      </div>
                    </div>

                    <div className="text-white/40 text-xs uppercase tracking-wider">
                      Hover to transform →
                    </div>
                  </div>
                </div>
              </div>

              {/* AFTER STATE - The Transformation */}
              <div className={`absolute inset-0 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 transition-all duration-1000 ${
                isTransformed ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}>
                <div className="absolute inset-0 flex flex-col p-8">
                  {/* Clean, organized visual */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_white_1px,_transparent_1px)] bg-[length:30px_30px]" />
                  </div>

                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wider mb-6 text-white">
                        After Understanding Emotions
                      </div>
                      
                      <div className="space-y-2.5">
                        <div className="flex items-start gap-2 text-white text-sm font-medium">
                          <span className="text-xl">✓</span>
                          <span>I understand my patterns</span>
                        </div>
                        <div className="flex items-start gap-2 text-white text-sm font-medium">
                          <span className="text-xl">✓</span>
                          <span>I have frameworks that work</span>
                        </div>
                        <div className="flex items-start gap-2 text-white text-sm font-medium">
                          <span className="text-xl">✓</span>
                          <span>I know what to do next</span>
                        </div>
                      </div>

                      <div className="mt-8 text-white font-bold text-2xl leading-tight">
                        Finally making<br />sense.
                      </div>
                    </div>

                    <div>
                      <div className="text-white/90 text-xs font-semibold mb-3">
                        FALL 2026 • LIMITED SPOTS
                      </div>
                      <button className="w-full bg-white text-emerald-700 py-3.5 font-bold text-sm hover:bg-stone-100 transition-all rounded-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]">
                        Join Waitlist Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle pulse effect on the entire card */}
              <div className={`absolute inset-0 border-4 rounded-xl transition-all duration-1000 pointer-events-none ${
                isTransformed 
                  ? 'border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.5)]' 
                  : 'border-transparent'
              }`} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}