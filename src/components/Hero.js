'use client';
import { useState } from 'react'
import { ArrowRight, Sticker } from 'lucide-react';

import Navigation from './Navigation'

const featuredCarousel = [
  {
    id: 1,
    title: "The Art of Letting Go",
    subtitle: "What happens when you finally release what no longer serves you",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
    color: "from-amber-500/20 to-orange-500/20"
  },
  {
    id: 2,
    title: "Finding Your Voice",
    subtitle: "Every story you tell makes the world a little more honest",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    id: 3,
    title: "The Power of Pause",
    subtitle: "Sometimes the bravest thing you can do is rest",
    image: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=1200",
    color: "from-blue-500/20 to-indigo-500/20"
  }
];

export default function Hero() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  return (
    <section className='bg-gradient-to-b from-gray-50 to-white'>
    {/* Navigation */}
      
      <Navigation />
      
    
      {/* Hero Carousel - Split Layout with Overlay Content */}
      <div className="relative overflow-hidden lg:mx-20 mx-2" >
        <div className="px-10 py-12 lg:py-18" >
          <div className="grid md:grid-cols-2 gap-12 items-center ">
            {/* Left Side - Your Message */}
            <div className="space-y-6 max-w-4xl -mt-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-100 text-stone-700 rounded-full">
                <img src="/assets/logo.png" className="w-5 h-5" alt="Logo" />
                <span className="text-base font-medium">The Bond Blog</span>
              </div>
              <div>
                <p className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-stone-700 leading-[1.05]">
                  Sticky notes for your{" "}
                  <span className="text-stone-800 font-normal">soul's fridge</span>
                </p>
              </div>

              <p className="text-lg md:text-xl text-stone-500 leading-relaxed max-w-lg">
                The stuff you need to hear when you're spiraling at 2am. Or just existing on a Tuesday afternoon. We don't judge.
              </p>
            </div>

            {/* Right Side - Carousel with Side Dots */}
            <div className="relative">
              {featuredCarousel.map((item, idx) => (
                <div
                  key={item.id}
                  className={`carousel-transition ${idx === carouselIndex ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none shadow-md'}`}
                >
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover "
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                          Featured Story
                        </div>
                        <div className="text-sm text-white/80">{item.date}</div>
                      </div>
                      
                      <h3 className="hover:cursor-pointer text-2xl font-bold mb-3 leading-tight">
                        {item.title}
                      </h3>
                      
                      <p className="hover:cursor-pointer text-white/90 leading-relaxed mb-6 text-base">
                        {item.subtitle}
                      </p>
                      
                      <button className="hover:cursor-pointer px-5 py-2.5 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-all flex items-center gap-2 text-sm">
                        Read Story
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Carousel Dots - Right Side */}
                    <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
                      {featuredCarousel.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCarouselIndex(i)}
                          className={`w-2 h-2 rounded-full transition-all hover:cursor-pointer ${
                            i === carouselIndex ? 'h-8 bg-white' : 'h-2 bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>    
          </div>
        </div>
      </div>
    </section>
  );
}