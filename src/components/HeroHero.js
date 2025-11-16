'use client'

import {useState} from 'react'
import { Layers, ChevronDown, Sticker, LayoutDashboard } from 'lucide-react';
import {categories, categoryMap} from '../constants/categories'

export default function WellbeingHero() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const selectedCat = categories.find(cat => cat.uuid === selectedCategory);
   

  return (
    <div className="pt-36 pb-12" style={{border: '3px solid'}}>
      <div className="w-full mx-auto ps-24 pe-8" >
        
          {/* grid: left = 2fr, middle = 1fr, right = 1fr */}
          <div className="grid grid-cols-[2fr_1.5fr_1.5fr] gap-6 items-stretch">
            
            {/* LEFT - big column (2x) - content anchored to bottom */}
            <div className="min-w-0 flex flex-col justify-end">
              <div className="mb-6">
               <h1 className="font-geist text-6xl font-light gradient-text pb-1 tracking-tight leading-[1.05]">
                 The Bond Blog
                </h1>

                <div className="mt-4 text-xl text-stone-600 font-normal space-y-1 ps-1">
                <p>Sticky Notes for Your Soul's Fridge </p>  
                   
                <p>Emotional Growth • Explained Simply</p>
                </div>
              </div>

            {/* Search bar (anchored to the bottom of this column) */}
            <div className="relative">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full bg-white hover:cursor-pointer rounded-lg pl-4 pr-10 py-3.5 text-base text-stone-600 border border-gray-200 outline-none hover:bg-gray-50 transition-colors text-left flex items-center gap-3 shadow-sm"
            >
                <LayoutDashboard className="w-5 h-5 text-stone-400" />
                <span>
                {selectedCat ? selectedCat.name : 'Explore'}
                </span>
            </button>
            
            <ChevronDown 
                className={`absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none transition-transform ${isOpen ? 'rotate-180' : ''}`}
            />

            {isOpen && (
                <>
                {/* Backdrop to close dropdown when clicking outside */}
                <div 
                    className="fixed inset-0 z-40"
                    onClick={() => setIsOpen(false)}
                />
                
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50 max-h-96 overflow-y-auto">
                   

                    {categories.map((cat) => (
                    <button
                        key={cat.uuid}
                        onClick={() => {
                            setSelectedCategory(cat.uuid);
                            setIsOpen(false);
                        }}
                        className={`w-full hover:cursor-pointer text-left px-4 py-3 hover:bg-stone-100 transition-colors flex items-center gap-4 ${
                            selectedCategory === cat.uuid ? 'bg-stone-50' : ''
                        }`}
                    >
                        <span className="w-4 h-4 flex items-center justify-center">
                            {cat.icon}
                        </span>
                        <div>
                            <div className="text-sm font-semibold text-stone-700">
                            {cat.name}
                            </div>
                            <div className="text-sm text-stone-500 mt-0.5">
                            {cat.description}
                            </div>
                        </div>
                    </button>
                    ))}
                </div>
                </>
            )}
            </div>

            {selectedCat && (
            <div className="mt-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                <p className="text-sm text-gray-600">Selected category:</p>
                <p className="text-lg font-semibold text-gray-800 flex items-center gap-2 mt-1">
                <span>{selectedCat.icon}</span>
                {selectedCat.name}
                </p>
            </div>
            )}
      
      
            </div>

            
            {/* MIDDLE - Categories (1x) */}
            <div className="min-w-0">
                <div className="bg-white rounded-2xl h-full flex flex-col shadow-lg border border-gray-100">
                    <div className="px-6 pt-6 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                        <Sticker className="w-5 h-5 text-stone-600" />
                        <h2 className="text-xl font-bold text-stone-600 tracking-tight">
                        Popular Categories
                        </h2>
                    </div>
                    <p className="text-base text-stone-500 mt-1">See what everyone's exploring</p>
                    </div>
                    <div className="overflow-visible flex-1 px-2 py-2">
                    {categories.slice(0,4).map((category, idx) => (
                        <div
                        key={category.uuid}
                        className="flex items-center gap-4 hover:bg-stone-100 px-4 py-4 rounded-xl cursor-pointer transition-all duration-200 group mb-1 last:mb-0"
                        >
                        {/* No background - just the icon */}
                        <span className="text-2xl text-stone-700 flex-shrink-0">
                            {category.icon}
                        </span>

                        <div className="flex-1 min-w-0">
                            <div className="font-medium text-stone-700 text-[15px]">{category.name}</div>
                        </div>

                        <svg 
                            className="w-5 h-5 text-stone-400 group-hover:text-stone-900 transition-colors flex-shrink-0" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            strokeWidth={2.5}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        </div>
                    ))}
                    </div>
                </div>
            </div>


            {/* RIGHT - Promo Card (1x) */}
            <div className="min-w-0">
              <div className="bg-blue-600 rounded-xl p-8 relative overflow-hidden h-full flex flex-col justify-between">
                {/* Illustration (decorative) */}
                <div className="absolute right-6 top-6 w-32 h-40 opacity-30 pointer-events-none">
                  <div className="absolute right-2 top-8 w-24 h-28 border-4 border-white/40 rounded-lg rotate-12"></div>
                  <div className="absolute right-8 top-16 w-12 h-8 bg-white/30 rounded"></div>
                </div>

                {/* Content group */}
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-8 leading-tight">
                    Your emotional clarity, everywhere.
                    <br />
                    <br />
                    bundalele
                  </h3>
                </div>

                {/* Footer action stays at bottom to help card fill height evenly */}
                <div className="relative z-10">
                  <button className="bg-white text-blue-600 px-5 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors w-full text-sm">
                    Read your first note
                  </button>
                </div>
              </div>
            </div>

          </div>
        
      </div>
    </div>
  );
}
