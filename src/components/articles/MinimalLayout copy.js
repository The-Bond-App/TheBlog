"use client"
import { useState } from 'react';
import { Heart, ArrowLeft, Clock, Share2, Bookmark, ChevronRight } from 'lucide-react';

const categoryMap = {
  feelings: { 
    name: 'Feelings I Didn\'t Ask For', 
    emoji: '😵‍💫',
    description: 'Emotional surprises, internal chaos'
  },
  identitycrisis: { 
    name: 'Identity in Crisis', 
    emoji: '🫠',
    description: 'Life purpose, identity loss'
  },
  science: { 
    name: 'The Science of Feeling', 
    emoji: '🧠',
    description: 'Psychology & neuroscience'
  },
  questionsthatstick: { 
    name: 'Questions That Stick', 
    emoji: '🌀',
    description: 'question, idea, or provocation'
  },
  habits: { 
    name: 'Habits in Action', 
    emoji: '🌱',
    description: 'Practical rituals, grounding actions'
  },
  whenitshard: { 
    name: 'When It\'s Hard', 
    emoji: '😤',
    description: 'Deeper support, bridge between blog and nudge'
  },
  lifeunfiltered: { 
    name: 'Life, Unfiltered', 
    emoji: '🌅',
    description: 'Late epiphanies, emotional clarity'
  },
  virtualyou: { 
    name: 'Performing Online', 
    emoji: '🧑‍💻',
    description: 'Digital overwhelm, online identity'
  },
  notyoueveryone: { 
    name: 'We\'re All Struggling', 
    emoji: '🌍',
    description: 'Human connection, relational chaos'
  },
  boundaries: { 
    name: 'Boundaries & Burnout', 
    emoji: '✋',
    description: 'Emotional labor, people-pleasing'
  }
};

// Mock post data
const post = {
  id: 1,
  title: "You're Not Falling Behind, You're Just On Your Own Timeline",
  excerpt: "Every Instagram post makes it seem like everyone's got it together except you. Here's why that's complete bullshit.",
  category: 'notyoueveryone',
  image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80',
  readTime: '8 min read',
  publishedDate: 'November 5, 2025',
  content: `
It's 2am and you're scrolling. Again.

Your college roommate just got promoted. Your high school friend bought a house. Someone you barely remember from freshman orientation is getting married. And you? You're eating cereal in bed wondering if you'll ever figure out what you're doing with your life.

## The Comparison Trap is Real

Here's what nobody tells you: everyone is on a different timeline, and that's not just okay—it's the whole point.

Your brain wasn't designed for this. For all of human history, we compared ourselves to maybe 150 people in our immediate vicinity. Now we're comparing ourselves to millions of carefully curated highlight reels. No wonder you feel behind.

### The Science of "Falling Behind"

Research from Stanford shows that we consistently overestimate others' happiness and underestimate their struggles. We see their wins. We don't see:

- The rejection emails they don't post about
- The therapy appointments between the vacation photos
- The credit card debt behind the new car
- The anxiety attacks that nobody mentions

You're not seeing the full picture. You're never seeing the full picture.

## What "On Time" Even Means

Society has this weird checklist:
- Graduate by 22
- Career by 25
- Partner by 28
- House by 30
- Kids by 32

But walk into any room of successful, happy people and ask them if they followed that timeline. Spoiler: most didn't.

Some people:
- Started their dream career at 40
- Found their person at 45
- Had kids at 25 or never
- Bought a house at 50 or decided not to

All of them are living full, meaningful lives.

## Your Timeline is Yours

What if instead of "falling behind," you're just:
- Taking time to figure out what you actually want
- Healing from things that needed healing
- Building foundations that will matter later
- Learning lessons that required this exact timing

The race you think you're losing? It doesn't exist. There's no finish line where everyone collectively wins at life.

## What To Do With This Information

1. **Unfollow ruthlessly.** If someone's posts consistently make you feel like shit, unfollow. It's not personal. It's self-preservation.

2. **Remember the iceberg principle.** You see 10% of someone's reality. That's it. The other 90% is underwater, messy, complicated, and very human.

3. **Define your own metrics.** What does "success" mean to you? Not your parents. Not Instagram. You.

4. **Zoom out.** Five years from now, will it matter that you hit some arbitrary milestone at 27 instead of 25? Ten years from now?

## The Real Truth

You're not falling behind. You're exactly where you need to be to become who you're meant to be.

And that person? They're going to be pretty fucking amazing.

*Take your time. There's no rush. The only timeline that matters is yours.*
  `
};

// Related posts
const relatedPosts = [
  {
    id: 2,
    title: "The Science Behind Why You Feel Like Shit for No Reason",
    category: 'science',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80'
  },
  {
    id: 3,
    title: "When 'Self-Care' Feels Like Another Chore",
    category: 'boundaries',
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80'
  },
  {
    id: 4,
    title: "Your Online Self vs. Your Real Self",
    category: 'virtualyou',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80'
  }
];

const Navigation = () => (
  <nav className="flex justify-between items-center mb-8 py-4">
    <a href="/" className="text-2xl font-light text-white hover:opacity-80 transition-opacity">
      <span className="bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent">
        Soul Notes
      </span>
    </a>
    <div className="flex gap-6 text-white/60 text-sm font-light">
      <a href="/about" className="hover:text-white transition-colors">About</a>
      <a href="/archive" className="hover:text-white transition-colors">Archive</a>
    </div>
  </nav>
);

export default function SinglePost() {
  const [saved, setSaved] = useState(false);

  return (
    <div className="min-h-screen bg-slate-700 text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-500/20 via-orange-500/25 to-rose-500/23" />
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
        
        /* Custom prose styles */
        .prose h2 {
          font-size: 2rem;
          font-weight: 300;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }
        .prose h3 {
          font-size: 1.5rem;
          font-weight: 300;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
        }
        .prose p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
          font-weight: 300;
        }
        .prose ul, .prose ol {
          margin: 1.5rem 0;
          padding-left: 1.5rem;
        }
        .prose li {
          margin-bottom: 0.75rem;
          line-height: 1.7;
          font-weight: 300;
        }
        .prose strong {
          font-weight: 400;
        }
        .prose em {
          font-style: italic;
          color: rgba(255, 255, 255, 0.7);
        }
      `}</style>

      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Navigation />
          
          {/* Back button */}
          <a 
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors font-light text-sm mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to all stories
          </a>
        </div>

        {/* Hero Image */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden animate-fade-in">
            <img 
              src={post.image}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12">
            {/* Article */}
            <article className="animate-fade-in">
              {/* Meta */}
              <div className="flex items-center gap-3 text-white/60 mb-6 font-light text-sm">
                <span className="text-2xl">{categoryMap[post.category]?.emoji}</span>
                <span>{categoryMap[post.category]?.name}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight mb-6 leading-[1.1] tracking-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed mb-8 border-l-2 border-white/20 pl-6">
                {post.excerpt}
              </p>

              {/* Actions */}
              <div className="flex items-center gap-4 mb-12 pb-8 border-b border-white/10">
                <button 
                  onClick={() => setSaved(!saved)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-light transition-all ${
                    saved 
                      ? 'bg-white text-slate-900' 
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  <Bookmark className="w-4 h-4" fill={saved ? "currentColor" : "none"} />
                  {saved ? 'Saved' : 'Save'}
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/70 hover:bg-white/20 text-sm font-light transition-all">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>

              {/* Content */}
              <div className="prose prose-lg prose-invert max-w-none text-white/90">
                {post.content.split('\n').map((paragraph, i) => {
                  if (paragraph.startsWith('## ')) {
                    return <h2 key={i}>{paragraph.replace('## ', '')}</h2>;
                  } else if (paragraph.startsWith('### ')) {
                    return <h3 key={i}>{paragraph.replace('### ', '')}</h3>;
                  } else if (paragraph.startsWith('- ')) {
                    return <li key={i}>{paragraph.replace('- ', '')}</li>;
                  } else if (paragraph.trim()) {
                    return <p key={i}>{paragraph}</p>;
                  }
                  return null;
                })}
              </div>

              {/* End of Article CTA */}
              <div className="mt-16 pt-12 border-t border-white/10">
                <div className="bg-gradient-to-br from-rose-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
                  <div className="text-center max-w-2xl mx-auto">
                    <div className="mb-6">
                      <Heart className="w-12 h-12 mx-auto text-rose-400/80" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-extralight mb-4 text-white">
                      This resonated with you?
                    </h3>
                    <p className="text-white/70 font-light mb-8 leading-relaxed">
                      Get stories like this in your inbox every week. No fluff, no toxic positivity, just real talk about being human.
                    </p>
                    <button className="px-8 py-4 bg-white text-slate-900 rounded-full hover:scale-105 transition-all duration-300 font-light shadow-xl">
                      Subscribe to Soul Notes
                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Sticky container */}
              <div className="lg:sticky lg:top-8 space-y-8">
                {/* Native Ad - Course */}
                <div className="bg-gradient-to-br from-violet-600 to-purple-600 rounded-3xl p-8 text-center animate-fade-in">
                  <div className="mb-4">
                    <span className="text-4xl">📚</span>
                  </div>
                  <p className="text-white/70 text-xs font-light mb-2 uppercase tracking-wider">
                    For when you're ready
                  </p>
                  <h3 className="text-xl font-light mb-3 text-white">
                    Emotional Literacy Course
                  </h3>
                  <p className="text-sm text-white/80 font-light leading-relaxed mb-6">
                    5 weeks. No bullshit. Just practical tools for understanding your feelings.
                  </p>
                  <button className="w-full px-6 py-3 bg-white text-purple-900 rounded-full hover:bg-white/90 transition-all font-light text-sm shadow-lg">
                    Learn more
                  </button>
                </div>

                {/* Native Ad - Product */}
                <div className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-3xl p-8 text-center">
                  <div className="mb-4">
                    <span className="text-4xl">🧘</span>
                  </div>
                  <p className="text-white/70 text-xs font-light mb-2 uppercase tracking-wider">
                    Self-care that works
                  </p>
                  <h3 className="text-xl font-light mb-3 text-white">
                    The Grounding Kit
                  </h3>
                  <p className="text-sm text-white/80 font-light leading-relaxed mb-6">
                    Physical tools for when your brain won't shut up. Weighted stones, breathing guide, journal prompts.
                  </p>
                  <button className="w-full px-6 py-3 bg-white text-orange-900 rounded-full hover:bg-white/90 transition-all font-light text-sm shadow-lg">
                    Shop now
                  </button>
                </div>

                {/* Related Posts */}
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
                  <h3 className="text-lg font-light mb-6 text-white">Keep reading</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((related) => (
                      <a 
                        key={related.id}
                        href={`/post/${related.id}`}
                        className="group block"
                      >
                        <div className="flex gap-4 items-start">
                          <div className="flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden">
                            <img 
                              src={related.image}
                              alt=""
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs text-white/50 mb-1 flex items-center gap-1">
                              <span>{categoryMap[related.category]?.emoji}</span>
                              <span className="truncate">{categoryMap[related.category]?.name}</span>
                            </div>
                            <h4 className="text-sm font-light text-white/90 group-hover:text-white transition-colors leading-snug line-clamp-2">
                              {related.title}
                            </h4>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}