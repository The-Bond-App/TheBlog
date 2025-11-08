'use client';
import { ArrowRight, Heart, Brain } from 'lucide-react';

import Navigation from './Navigation'

export default function Hero() {
  return (
    <div className="w-full mb-12 min-h-screen" style={{border: '5px solid lightblue'}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Navigation />
        
        <div className="mt-18 grid lg:grid-cols-[1.0fr_0.3fr] gap-2 lg:gap-12 items-center">
          {/* Left: Title */}
          <div className="space-y-8 sm:space-y-8 lg:space-y-10 text-center lg:text-left">
            <h1 className="font-title text-6xl sm:text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-light leading-[1.1] sm:leading-[1] lg:leading-[0.92] tracking-tighter">
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
                Sticky Notes
              </span>
              <br />
              <span className="text-white">for Your Soul's</span>
              <br />
              <span className="text-white/50">Refrigerator</span>
            </h1>
             
            <p className="font-geist text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-extralight text-white/50 tracking-wide max-w-2xl leading-relaxed sm:leading-snug mx-auto lg:mx-0">
              The stuff you need to hear when you're spiraling at 2am. <br className="hidden sm:inline" />
              Or just existing on a Tuesday afternoon. We don't judge.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="#posts"
                className="px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-slate-900 rounded-full text-sm sm:text-base font-medium hover:bg-white/90 transition-all inline-flex items-center justify-center gap-2"
              >
                Start Reading
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#subscribe"
                className="px-6 sm:px-8 py-3 sm:py-3.5 bg-white/10 border border-white/20 text-white rounded-full text-sm sm:text-base font-medium hover:bg-white/15 transition-all"
              >
                Subscribe
              </a>
            </div>
          </div>
          
          {/* Right: Vertical Orb Stack */}
          <div className="flex lg:flex-col flex-row gap-4 sm:gap-6 items-center justify-center mt-8 lg:mt-0">
            <div
              className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full bg-amber-500/30 border-2 border-amber-400/50 flex items-center justify-center animate-pulse shadow-2xl shadow-amber-500/50"
              style={{ animationDuration: '3s' }}
            >
              <Heart className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-amber-400" strokeWidth={1.5} />
            </div>
            
            <div
              className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-orange-500/30 border-2 border-orange-400/50 flex items-center justify-center animate-pulse shadow-2xl shadow-orange-500/50"
              style={{ animationDuration: '4s', animationDelay: '0.5s' }}
            >
              <Brain className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-orange-400" strokeWidth={1.5} />
            </div>
            
            <div
              className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full bg-rose-500/30 border-2 border-rose-400/50 flex items-center justify-center animate-pulse shadow-2xl shadow-rose-500/50"
              style={{ animationDuration: '3.5s', animationDelay: '1s' }}
            >
              <img src="/assets/logo.png" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-rose-400" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}