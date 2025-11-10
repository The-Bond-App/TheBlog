'use client'
import { useState } from 'react';
import { Heart, BookOpen, Wrench, Users, ArrowLeft, Sparkles, ChevronRight } from 'lucide-react';

// Mock data
const categories = {
  feelings: { icon: '😵‍💫', name: 'Feelings I Didn\'t Ask For' },
  identitycrisis: { icon: '🫠', name: 'Identity in Crisis' },
  science: { icon: '🧠', name: 'The Science of Feeling' },
  questionsthatstick: { icon: '🌀', name: 'Questions That Stick' },
  habits: { icon: '🌱', name: 'Habits in Action' },
  whenitshard: { icon: '😤', name: 'When It\'s Hard' },
  lifeunfiltered: { icon: '🌅', name: 'Life, Unfiltered' },
  virtualyou: { icon: '🧑‍💻', name: 'Performing Online' },
  notyoueveryone: { icon: '🌍', name: 'We\'re All Struggling' },
  boundaries: { icon: '✋', name: 'Boundaries & Burnout' }
};

const mockPost = {
  id: 1,
  title: "The Weight of Being 'Fine'",
  category: 'feelings',
  path: 'understand',
  readTime: '8 min',
  date: 'Nov 5, 2025',
  author: {
    name: 'Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
  },
  content: `You know that feeling when someone asks "How are you?" and you automatically say "I'm fine" even though you're not?

That's what this is about. The invisible weight of performing okayness when everything inside feels like a tornado.

## The Fine Facade

We've all been there. Standing in line at the coffee shop, smile plastered on, saying "I'm good, thanks" when really, we're barely holding it together. It's become such a reflex that we don't even notice we're doing it anymore.

But here's the thing: that weight? It accumulates. Every "I'm fine" when you're not adds another brick to an invisible backpack you're carrying around.

## Why We Do It

There are a million reasons. We don't want to burden people. We think our feelings aren't "valid enough." We're afraid of being seen as weak, or dramatic, or too much.

Society has trained us beautifully to package our feelings into neat, digestible responses. Anything more feels like oversharing.

## The Cost

But what does it cost us? That constant performance takes energy. Energy we could use for, you know, actually dealing with what we're feeling.

And the weird paradox? The more we say "I'm fine," the more isolated we feel. Because we're convinced everyone else actually IS fine, and we're the only ones struggling.

## What Actually Helps

I'm not saying you need to trauma-dump on the barista. But maybe, with someone safe, try saying "Actually, I'm having a rough day."

Watch what happens. Usually? They get it. Because they've been there too.

The weight doesn't disappear overnight. But acknowledging it? That's the first step to putting it down.`
};

const relatedPosts = [
  { id: 2, title: "When 'Self-Care' Feels Like Another Chore", category: 'habits', path: 'practice' },
  { id: 3, title: "My Therapist Fired Me (And It Was the Best Thing)", category: 'lifeunfiltered', path: 'yourenotalone' },
  { id: 4, title: "The Neuroscience of Emotional Numbness", category: 'science', path: 'understand' }
];

  const pathConfig = {
    understand: {
      icon: BookOpen,
      title: 'Understand It',
      subtitle: 'Psychology, science, why you feel this way',
      color: 'from-[#667eea] to-[#764ba2]',
      badge: '🧠 Understanding',
      categories: ['feelings', 'identitycrisis', 'science', 'questionsthatstick', 'lifeunfiltered', 'virtualyou', 'notyoueveryone']
    },
    practice: {
      icon: Wrench,
      title: 'Practice It',
      subtitle: 'Habits, boundaries, what to do about it',
      color: 'from-[#f093fb] to-[#f5576c]',
      badge: '🌱 Practicing',
      categories: ['habits', 'whenitshard', 'boundaries']
    },
    yourenotalone: {
      icon: Users,
      title: "You're Not Alone",
      subtitle: 'Real stories from real people',
      color: 'from-[#4facfe] to-[#00f2fe]',
      badge: '💙 Connected',
      categories: ['notyoueveryone', 'lifeunfiltered', 'whenitshard']
    }
  };


export default function MinimalLayout() {
    const currentPath = pathConfig[mockPost.path];
    const currentCategory = categories[mockPost.category];
     const [view, setView] = useState('home'); // 'home' or 'single'
    const [selectedPath, setSelectedPath] = useState(null);

   


    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <nav className="border-b border-black/5 sticky top-0 bg-white/80 backdrop-blur-xl z-50">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            <button 
              onClick={() => setView('home')}
              className="flex items-center gap-2 text-black/70 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back</span>
            </button>
            
            <a href="/" className="flex items-center gap-2 text-[17px] font-semibold text-black tracking-tight">
              <Heart className="w-5 h-5 opacity-90" />
              Stories
            </a>
            
            <div className="w-20" /> {/* Spacer for centering */}
          </div>
        </nav>

        {/* Article */}
        <article className="max-w-3xl mx-auto px-6 py-16">
          {/* Path Badge */}
          <div className="flex items-center gap-3 mb-8">
            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${currentPath.color} rounded-full`}>
              <span className="text-sm font-medium text-white">{currentPath.badge}</span>
            </div>
            
            <div className="flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full">
              <span className="text-base">{currentCategory.icon}</span>
              <span className="text-sm font-medium text-black/70">{currentCategory.name}</span>
            </div>
          </div>

          {/* Title & Meta */}
          <h1 className="text-5xl font-semibold tracking-tight text-black leading-tight mb-6">
            {mockPost.title}
          </h1>
          
          <div className="flex items-center gap-4 mb-12 pb-8 border-b border-black/10">
            <img 
              src={mockPost.author.avatar}
              alt={mockPost.author.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <div className="text-base font-medium text-black">{mockPost.author.name}</div>
              <div className="text-sm text-black/50">
                {mockPost.date} · {mockPost.readTime}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {mockPost.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={idx} className="text-2xl font-semibold tracking-tight text-black mt-12 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              return (
                <p key={idx} className="text-lg text-black/70 leading-relaxed mb-6">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Continue Your Journey */}
          <div className="mt-16 pt-12 border-t border-black/10">
            <h3 className="text-2xl font-semibold tracking-tight text-black mb-8">
              Continue your journey
            </h3>
            
            <div className="grid gap-4 mb-8">
              <button className="group p-6 bg-gradient-to-br from-black/5 to-black/10 hover:from-black/10 hover:to-black/15 rounded-2xl text-left transition-all">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{currentCategory.icon}</span>
                    <span className="text-base font-medium text-black">Explore the Category: <em>{currentCategory.name}</em></span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-black/40 group-hover:text-black/70 transition-colors" />
                </div>
                <p className="text-sm text-black/60">
                  Explore similar topics and deepen your understanding
                </p>
              </button>

              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(pathConfig).filter(([key]) => key !== mockPost.path).map(([key, config]) => {
                  const Icon = config.icon;
                  return (
                    <button 
                      key={key}
                      onClick={() => handlePathSelect(key)}
                      className="group p-6 bg-white border border-black/10 hover:border-black/20 rounded-2xl text-left transition-all"
                    >
                      <Icon className="w-6 h-6 text-black/60 mb-3 group-hover:text-black transition-colors" />
                      <div className="font-medium text-black mb-1">{config.title}</div>
                      <p className="text-sm text-black/60">{config.subtitle}</p>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        </article>
      </div>
    )
}

