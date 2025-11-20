import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';

const posts = [
  {
    title: "The Refrigerator Theory of Self-Care",
    description: "Why your emotional well-being works exactly like keeping groceries fresh",
    category: "Mental Models",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80"
  },
  {
    title: "Pressure Cooker Feelings",
    description: "Understanding emotional release through kitchen physics",
    category: "Emotion",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
  },
  {
    title: "The Battery Metaphor",
    description: "Why you can't pour from an empty cup",
    category: "Energy",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80"
  }
];

export default function HeroEditorialStatement() {
  return (
    <section className='px-6 md:px-12 py-28 max-w-7xl mx-auto bg-slate-50'>
      <div className="border-t-4 border-slate-900 pt-12 mb-16">
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-900 rounded-full" />
            <div>
              <div className="font-mono text-xs text-slate-500 tracking-wider">EMOTIONAL FUNDAMENTALS</div>
              <div className="font-serif text-sm text-slate-900">Est. 2025 · Daily</div>
            </div>
          </div>
          <div className="text-right font-mono text-xs text-slate-500">
            ISSUE №01<br/>
            NOV 2025
          </div>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-12 mb-16">
        <div className="lg:w-1/2">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-slate-900">
            Sticky notes for <span className="italic font-light">your soul's</span> fridge
          </h1>
        </div>
        
        <div className="lg:w-1/2 flex flex-col justify-center">
          <div className="border-l-2 border-slate-900 pl-8 mb-8">
            <p className="text-xl font-light text-slate-700 leading-relaxed mb-4">
              Emotional fundamentals, explained through analogies that stick.
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              A curated collection of mental models and frameworks for understanding yourself. 
              Updated daily. Read weekly. Remember forever.
            </p>
          </div>
          
          <div className="flex gap-4">
            <button className="flex-1 px-6 py-4 bg-slate-900 text-white text-sm font-medium tracking-wide hover:bg-slate-800 transition-colors">
              BEGIN READING →
            </button>
            <button className="px-6 py-4 border-2 border-slate-900 text-slate-900 text-sm font-medium tracking-wide hover:bg-slate-900 hover:text-white transition-all">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 relative group cursor-pointer">
          <div className="relative h-[550px] overflow-hidden mb-6">
            <img src={posts[0].image} alt={posts[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute top-6 left-6">
              <span className="px-4 py-2 bg-yellow-400 text-black text-xs font-black tracking-wider flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5" /> FEATURED STORY
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-sm text-slate-500 font-mono tracking-wider">
              <span>{posts[0].category.toUpperCase()}</span>
              <span>·</span>
              <span>{posts[0].readTime.toUpperCase()}</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl text-slate-900 leading-tight">{posts[0].title}</h2>
            <p className="text-lg text-slate-600 leading-relaxed">{posts[0].description}</p>
            <button className="inline-flex items-center gap-2 text-slate-900 font-medium hover:gap-4 transition-all group/btn">
              <span className="text-sm tracking-wide">READ ARTICLE</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="space-y-8">
          {posts.slice(1, 3).map((post, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative h-[240px] overflow-hidden mb-4">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="space-y-3">
                <div className="text-xs text-slate-500 font-mono tracking-wider">
                  {post.category.toUpperCase()}
                </div>
                <h3 className="font-serif text-2xl text-slate-900 leading-tight">{post.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}