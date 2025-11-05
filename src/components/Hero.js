'use client';

import { ArrowRight, Heart, Brain, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation'

export default function Hero() {
  return (
     <div className="max-w-6xl min-h-screen mx-auto pt-8" >
          <Navigation />

          <div className="grid lg:grid-cols-[1.0fr_0.3fr] gap-2 items-center min-h-[calc(100vh-14rem)]">
            {/* Left: Title */}
            <div className="space-y-10">
              <h1 className="text-7xl lg:text-8xl xl:text-8xl font-light leading-[0.92] tracking-tight">
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
                  Sticky Notes
                </span>
                <br />
                <span className="text-white">for Your Soul's</span>
                <br />
                <span className="text-white/40">Refrigerator</span>
              </h1>
              
              <p className="text-xl lg:text-2xl !font-extralight text-white/60 tracking-wide max-w-2xl leading-snug">
                The stuff you need to hear when you're spiraling at 2am. <br />Or just existing on a Tuesday afternoon. We don't judge.
              </p>

              <div className="flex gap-4">
                <a
                  href="#posts"
                  className="px-8 py-3.5 bg-white text-slate-900 rounded-full text-base font-medium hover:bg-white/90 transition-all inline-flex items-center gap-2"
                >
                  Start Reading
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#subscribe"
                  className="px-8 py-3.5 bg-white/10  border border-white/20 text-white rounded-full text-base font-medium hover:bg-white/15 transition-all"
                >
                  Subscribe
                </a>
              </div>
            </div>

            {/* Right: Vertical Orb Stack */}
            <div className="flex flex-col gap-6 items-center justify-center">
              <div
                className="w-28 h-28 rounded-full bg-amber-500/30  border-2 border-amber-400/50 flex items-center justify-center animate-pulse shadow-2xl shadow-amber-500/50"
                style={{ animationDuration: '3s' }}
              >
                <Heart className="w-14 h-14 text-amber-400" strokeWidth={1.5} />
              </div>

              <div
                className="w-32 h-32 rounded-full bg-orange-500/30  border-2 border-orange-400/50 flex items-center justify-center animate-pulse shadow-2xl shadow-orange-500/50"
                style={{ animationDuration: '4s', animationDelay: '0.5s' }}
              >
                <Brain className="w-16 h-16 text-orange-400" strokeWidth={1.5} />
              </div>

              <div
                className="w-28 h-28 rounded-full bg-rose-500/30 border-2 border-rose-400/50 flex items-center justify-center animate-pulse shadow-2xl shadow-rose-500/50"
                style={{ animationDuration: '3.5s', animationDelay: '1s' }}
              >
                <Sparkles className="w-14 h-14 text-rose-400" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
  );
}
