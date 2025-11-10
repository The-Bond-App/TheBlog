"use client"
import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { categories } from '../constants/categories';

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

  // "All Articles" category
  const allCategory = { 
    id: 'all', 
    icon: '✨', 
    name: 'All Articles'
  };

  // Get first 4 categories for top display
  const topCategories = [allCategory, ...categories.slice(0, 4)];
  
  // Get remaining categories for dropdown
  const moreCategories = categories.slice(4);

  return (
    <div className="bg-gray-200 border-y border-gray-200 z-40">
      <div className="w-full mx-auto px-6 py-4">
        {/* Filter label 
        <div className="flex items-center justify-center text-xs gap-6 mb-6">
          <div className="uppercase tracking-[0.05em] text-slate-800/70 font-semibold">
            Explore Topics
          </div>
          <div className="h-3 w-px bg-slate-800/20"></div>
          <a
            href="/sitemap"
            className="flex items-center gap-1.5 uppercase tracking-tight text-slate-800/50 hover:text-slate-800/70 transition-colors duration-200 font-semibold"
          >
            Site Map <SquareArrowOutUpRight size={12} strokeWidth={1.75} />
          </a>
        </div>*/}

        {/* Category buttons */}
        <div className="flex flex-wrap gap-3 justify-center items-center">
          {/* Top categories always visible */}
          {topCategories.map((cat) => (
            <button
              key={cat.id || cat.uuid}
              onClick={() => onCategoryChange(cat.id || cat.uuid)}
              className={`cursor-pointer flex-shrink-0 px-2 py-2.5 rounded-lg text-base font-normal tracking-normal transition-all duration-300 relative ${
                selectedCategory === (cat.id || cat.uuid)
                  ? 'text-stone-800 bg-white/[0.08]'
                  : 'bg-white text-stone-800 hover:bg-gray-50 border border-stone-200'
              }`}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
          
          <div className="h-5 w-px bg-stone-800/20 mx-2"></div>

          {/* More dropdown */}
          {moreCategories.length > 0 && (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className={`cursor-pointer flex-shrink-0 px-4 py-2.5 rounded-lg text-sm tracking-normal transition-all duration-300 flex items-center gap-2 relative text-slate-800/70 font-medium hover:bg-white/50
                
                }`}
              >
                <span>More</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
              </button>

              {showDropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white rounded-2xl shadow-2xl z-50 min-w-[220px]">
                  <div className="p-2">
                    {moreCategories.map((cat) => (
                      <button
                        key={cat.uuid}
                        onClick={() => {
                          onCategoryChange(cat.uuid);
                          setShowDropdown(false);
                        }}
                        className={`cursor-pointer w-full flex items-center gap-2 px-2 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                          selectedCategory === cat.uuid
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