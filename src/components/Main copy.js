'use client';

import { useState } from 'react';


import Hero from '../components/Hero'

import FeaturedGrid from '../components/FeaturedGrid'
import Footer from '../components/Footer'

import SubscribeBanner from '../ui/SubscribeBanner'

export default function Main() {
  
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  

  const categories = [
    { id: 'all', icon: '✨', name: 'All Posts', description: 'Everything we write' },
    { id: 'feelings', icon: '🎭', name: 'Feelings I Didn\'t Ask For', description: 'Emotional surprises, internal chaos' },
    { id: 'why', icon: '🔍', name: 'Finding Your Why', description: 'Life purpose, identity loss' },
    { id: 'science', icon: '🧠', name: 'Science Says', description: 'Psychology & neuroscience' },
    { id: 'mindbug', icon: '🤯', name: 'Mind Bug', description: 'Question, idea, or provocation' },
    { id: 'habits', icon: '🌱', name: 'Small Wins & Tiny Habits', description: 'Practical rituals, grounding actions' },
    { id: 'whenitshard', icon: '🛤️', name: 'When It\'s Hard', description: 'Deeper support, bridge between blog and nudge' },
    { id: 'meaning', icon: '💡', name: 'Life, Then Meaning', description: 'Late epiphanies, emotional clarity' },
    { id: 'virtualyou', icon: '📱', name: 'The Virtual You', description: 'Digital overwhelm, online identity' },
    { id: 'notyoueveryone', icon: '👥', name: 'It\'s Not Just You, It\'s Everyone', description: 'Human connection, relational chaos' },
    { id: 'boundaries', icon: '🛡️', name: 'Boundaries & Burnout', description: 'Emotional labor, people-pleasing' }
  ];

  

  const blogPosts = [
    {
      id: 4,
      title: "The Weight of Unspoken Words",
      excerpt: "Sometimes what we don't say carries more meaning than a thousand conversations.",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
      readTime: "4 min",
      category: "feelings",
      date: "Oct 28, 2025",
      tall: true
    },
    {
      id: 5,
      title: "Breaking Patterns",
      excerpt: "How to recognize the loops you're stuck in and find the exit.",
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=80",
      readTime: "6 min",
      category: "habits",
      date: "Oct 27, 2025"
    },
    {
      id: 6,
      title: "The Art of Letting Go",
      excerpt: "Release isn't about forgetting. It's about choosing what to carry forward.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      readTime: "5 min",
      category: "meaning",
      date: "Oct 26, 2025"
    },
    {
      id: 7,
      title: "Finding Your Frequency",
      excerpt: "When you operate at your natural frequency, everything else falls into place.",
      image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=800&q=80",
      readTime: "8 min",
      category: "why",
      date: "Oct 25, 2025",
      tall: true
    },
    {
      id: 8,
      title: "The Power of Pause",
      excerpt: "In the space between action and reaction, wisdom lives.",
      image: "https://images.unsplash.com/photo-1528892677828-8862216f3665?w=800&q=80",
      readTime: "3 min",
      category: "habits",
      date: "Oct 24, 2025"
    },
    {
      id: 9,
      title: "Rewriting Your Story",
      excerpt: "You're not stuck with the narrative you've been telling yourself.",
      image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&q=80",
      readTime: "7 min",
      category: "meaning",
      date: "Oct 23, 2025"
    },
    {
      id: 10,
      title: "The Quiet Revolution",
      excerpt: "Real change doesn't announce itself. It whispers and transforms.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      readTime: "6 min",
      category: "mindbug",
      date: "Oct 22, 2025",
      tall: true
    },
    {
      id: 11,
      title: "Between Chaos and Calm",
      excerpt: "Finding equilibrium in a world that never stops moving.",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
      readTime: "5 min",
      category: "whenitshard",
      date: "Oct 21, 2025"
    },
    {
      id: 12,
      title: "Your Digital Shadow Self",
      excerpt: "The person you are online isn't always who you want to be.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      readTime: "6 min",
      category: "virtualyou",
      date: "Oct 20, 2025"
    },
    {
      id: 13,
      title: "The Science of Overthinking",
      excerpt: "Why your brain won't shut up and what you can do about it.",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
      readTime: "8 min",
      category: "science",
      date: "Oct 19, 2025",
      tall: true
    },
    {
      id: 14,
      title: "When No Feels Impossible",
      excerpt: "Learning to set boundaries without guilt or fear.",
      image: "https://images.unsplash.com/photo-1523365237953-94b3cd414884?w=800&q=80",
      readTime: "5 min",
      category: "boundaries",
      date: "Oct 18, 2025"
    },
    {
      id: 15,
      title: "We're All Just Winging It",
      excerpt: "The comforting truth that nobody really has it figured out.",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80",
      readTime: "4 min",
      category: "notyoueveryone",
      date: "Oct 17, 2025"
    }
  ];



  return (
    <div className="min-h-screen bg-slate-900">
      <Variant2 {...{ blogPosts, categories, selectedCategory, setSelectedCategory, isCategoryOpen, setIsCategoryOpen}} />
    </div>
  );
}


function BlogGrid({ posts, categories }) {
  const getCategoryInfo = (catId) => categories.find(c => c.id === catId) || categories[0];
  
  return (
    <div className="relative z-10 py-20 px-6 lg:px-8 max-w-[1600px] mx-auto">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {posts.map((post) => {
          const catInfo = getCategoryInfo(post.category);
          return (
            <a
              key={post.id}
              href={`/post/${post.id}`}
              className="group block break-inside-avoid mb-6"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-500">
                <div className={`relative overflow-hidden ${post.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/30 to-transparent" />
                  
                  <div className="absolute top-4 left-4 px-3 py-1 bg-purple-500/30 backdrop-blur-xl border border-purple-400/40 rounded-full text-purple-200 text-xs font-medium flex items-center gap-2">
                    <span>{catInfo.icon}</span>
                    <span>{catInfo.name}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-light mb-2 leading-tight group-hover:text-pink-300 transition-colors">{post.title}</h3>
                  <p className="text-sm text-white/50 font-light leading-relaxed mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center gap-3 text-xs text-white/40">
                    <span>{post.readTime}</span>
                    <span className="w-1 h-1 rounded-full bg-white/40" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}



// Version 2: Segmented Control
function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  const [page, setPage] = useState(0);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(categories.length / itemsPerPage);
  const visibleCats = categories.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  return (
    <div className="z-10 relative flex items-center gap-2">
      <button
        onClick={() => setPage(Math.max(0, page - 1))}
        disabled={page === 0}
        className=" flex-shrink-0 w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <svg className="w-3.5 h-3.5 text-white/60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <div className="flex-1 inline-flex p-1 bg-white/5 rounded-lg">
        {visibleCats.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`flex-1 px-4 py-3 text-sm font-medium rounded transition-all ${
              selectedCategory === cat.id
                ? 'bg-white/10 text-white'
                : 'text-white hover:cursor-pointer'
            }`}
          >
            <span className="mr-1.5">{cat.icon}</span>
            {cat.name}
          </button>
        ))}
      </div>
      
      <button
        onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
        disabled={page === totalPages - 1}
        className="flex-shrink-0 w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <svg className="w-3.5 h-3.5 text-white/60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}



function Variant2({ blogPosts, categories, selectedCategory, setSelectedCategory, isCategoryOpen, setIsCategoryOpen, isMenuOpen, setIsMenuOpen }) {
  const filteredPosts = selectedCategory === 'all' ? blogPosts : blogPosts.filter(post => post.category === selectedCategory);
  const getCategoryInfo = (catId) => categories.find(c => c.id === catId) || categories[0];
  const selectedCategoryInfo = getCategoryInfo(selectedCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-600/20 via-orange-600/20 to-rose-600/20" />
        <div className="absolute inset-0 backdrop-blur-3xl" />
      </div>

      {/** containerizing the blog */}
      <div className='z-10 relative max-w-6xl mx-auto'>
        {/** Menu & Hero */}
        <Hero />
        

        {/** Highlights Post & Subscribe Banner*/}
        <FeaturedGrid categories={categories} />
  
        <CategoryFilter {...{categories, selectedCategory, setSelectedCategory, isCategoryOpen, setIsCategoryOpen, selectedCategoryInfo}} />
        <BlogGrid posts={filteredPosts} categories={categories} />
        <SubscribeBanner />
      </div>
      <Footer />
    </div>
  );
}

