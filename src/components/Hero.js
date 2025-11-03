'use client';

import { ArrowRight, Heart, Brain, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative z-10 pt-6 pb-6 px-6 lg:px-8 w-full mx-auto">
      <div className="grid lg:grid-cols-[1.2fr_0.3fr] gap-16 min-h-[calc(100vh-8rem)] items-center">
        
        {/* Left: Title */}
        <div className="space-y-8">
          <h1 className="text-7xl lg:text-8xl xl:text-8xl font-light leading-[0.92] tracking-tight">
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
              Sticky Notes
            </span>
            <br />
            <span className="text-white">for Your Soul&apos;s</span>
            <br />
            <span className="text-white/40">Refrigerator</span>
          </h1>
          
          <p className="text-xl lg:text-2xl font-light text-white/60 tracking-wide max-w-2xl leading-relaxed">
            The stuff you need to hear when you&apos;re spiraling at 2am. <br />Or just existing on a Tuesday afternoon. We don&apos;t judge.
          </p>

          <div className="flex gap-4">
            <a
              href="/subscribe"
              className="px-8 py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white rounded-full text-lg font-normal hover:shadow-sm hover:shadow-white/20 transition-all inline-flex items-center gap-2 shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
            >
              Start Reading
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="/about"
              className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-full text-lg font-light hover:bg-white/20 transition-all"
            >
              Explore
            </a>
          </div>
        </div>

        {/* Right: Vertical Orb Stack */}
        <div className="flex flex-col gap-8 items-center justify-center">
          <div
            className="w-28 h-28 rounded-full bg-amber-500/30 backdrop-blur-xl border-2 border-amber-400/50 flex items-center justify-center animate-pulse shadow-2xl shadow-amber-500/50"
            style={{ animationDuration: '3s' }}
          >
            <Heart className="w-14 h-14 text-amber-400" strokeWidth={1.5} />
          </div>

          <div
            className="w-32 h-32 rounded-full bg-orange-500/30 backdrop-blur-xl border-2 border-orange-400/50 flex items-center justify-center animate-pulse shadow-2xl shadow-orange-500/50"
            style={{ animationDuration: '4s', animationDelay: '0.5s' }}
          >
            <Brain className="w-16 h-16 text-orange-400" strokeWidth={1.5} />
          </div>

          <div
            className="w-28 h-28 rounded-full bg-rose-500/30 backdrop-blur-xl border-2 border-rose-400/50 flex items-center justify-center animate-pulse shadow-2xl shadow-rose-500/50"
            style={{ animationDuration: '3.5s', animationDelay: '1s' }}
          >
            <Sparkles className="w-14 h-14 text-rose-400" strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </div>
  );
}
