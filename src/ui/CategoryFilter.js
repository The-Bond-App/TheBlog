"use client"
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, SquareArrowOutUpRight } from 'lucide-react';

export default function CategoryFilter({ selectedCategory, onCategoryChange }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const topCategories = [
    { id: 'all', icon: '✨', name: 'All Articles', description: 'Everything we write' },
    { id: 'feelings', icon: '💭', name: 'Feelings I Didn\'t Ask For', description: 'Emotional surprises, internal chaos' },
    { id: 'habits', icon: '🌱', name: 'Small Wins & Tiny Habits', description: 'Practical rituals, grounding actions' },
    { id: 'whenitshard', icon: '🌧️', name: 'When It\'s Hard', description: 'Deeper support, bridge between blog and nudge' },
    { id: 'notyoueveryone', icon: '🤝', name: 'It\'s Not Just You, It\'s Everyone', description: 'Human connection, relational chaos' },
  ];

  const moreCategories = [
    { id: 'why', icon: '🧭', name: 'Finding Your Why', description: 'Life purpose, identity loss' },
    { id: 'science', icon: '🧠', name: 'Science Says', description: 'Psychology & neuroscience' },
    { id: 'mindbug', icon: '🤯', name: 'Mind Bug', description: 'Question, idea, or provocation' },
    { id: 'meaning', icon: '✨', name: 'Life, Then Meaning', description: 'Late epiphanies, emotional clarity' },
    { id: 'virtualyou', icon: '💻', name: 'The Virtual You', description: 'Digital overwhelm, online identity' },
    { id: 'boundaries', icon: '🚧', name: 'Boundaries & Burnout', description: 'Emotional labor, people-pleasing' }
  ];

  return (
    <div className="border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Filter label */}
        <div className="flex items-center justify-center text-xs gap-6 mb-6">
          <div className="uppercase tracking-[0.15em] text-white/50 font-semibold">
            Explore Topics
          </div>
          <div className="h-3 w-px bg-white/[0.12]"></div>
          <a
            href="/sitemap"
            className="flex items-center gap-1.5 uppercase tracking-[0.15em] text-white/40 hover:text-white/70 transition-colors duration-200 font-semibold"
          >
            Site Map <SquareArrowOutUpRight size={12} strokeWidth={1.75} />
          </a>
        </div>

        {/* Category buttons */}
        <div className="flex flex-wrap gap-2 justify-center items-center pb-1">
          {/* Top categories always visible */}
          {topCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`cursor-pointer flex-shrink-0 px-4 py-2 rounded-full text-sm tracking-tight transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-white text-slate-900 font-medium'
                  : 'bg-transparent text-white/60 hover:text-white hover:bg-white/5 border border-white/20'
              }`}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.name}
            </button>
          ))}

          {/* Subtle divider */}
          <div className="h-6 w-px bg-white/10 mx-1"></div>

          {/* More dropdown */}
          {moreCategories.length > 0 && (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className={`cursor-pointer flex-shrink-0 px-4 py-2 rounded-full text-sm transition-all duration-200 flex items-center gap-2 ${
                  moreCategories.some(cat => cat.id === selectedCategory)
                    ? 'bg-white text-slate-900 font-medium'
                    : 'bg-transparent text-white/60 hover:text-white hover:bg-white/5 border border-white/20'
                }`}
              >
                <span>More</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
              </button>

              {showDropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white rounded-2xl shadow-2xl z-50 min-w-[200px]">
                  <div className="p-2">
                    {moreCategories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          onCategoryChange(cat.id);
                          setShowDropdown(false);
                        }}
                        className={`cursor-pointer w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                          selectedCategory === cat.id
                            ? 'bg-slate-200 text-slate-900 font-medium'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                      >
                        <span className="text-base">{cat.icon}</span>
                        <span className="flex-1 text-left">{cat.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}