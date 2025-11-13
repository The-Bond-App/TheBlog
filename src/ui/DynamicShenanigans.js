import { Sticker } from 'lucide-react'
import { useState, useEffect } from 'react'

const DynamicResult = () => {
  const [index, setIndex] = useState(0);
  
  const results = [
    { emoji: '🧠', label: 'Make Sense of Emotions' },
    { emoji: '🌱', label: 'Build Better Habits' },
    { emoji: '🌍', label: 'Feel Seen & Heard' }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % results.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const current = results[index];
  
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-200 shadow-sm">
        <span 
          key={index}
          className="text-2xl animate-[fadeIn_0.5s_ease-in-out]"
        >
          {current.emoji}
        </span>
      </div>
      <span 
        key={`text-${index}`}
        className="text-sm font-medium text-stone-500 animate-[fadeIn_0.5s_ease-in-out]"
      >
        {current.label}
      </span>
    </div>
  );
};

export default function DynamicShenanigans(){
    return(
        <div className="w-full flex flex-col items-center justify-center">
        <div className="inline-flex items-center justify-center gap-4 px-4 py-4 group/formula shrink-0">
        {/* Logo */}
            <div className="hover:cursor-pointer relative group/logo flex items-center justify-center">
            <img
                src="/assets/logo.png"
                className="w-10 h-10 transition-transform duration-300 group-hover/logo:scale-110"
                alt="The Bond Company"
            />
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-stone-800 text-white text-xs rounded-lg opacity-0 group-hover/logo:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                The Bond Company
            </div>
            </div>
            {/* Plus */}
            <span className="text-4xl text-stone-400 font-extralight">+</span>

            {/* Sticky Note */}
            <div className="hover:cursor-pointer relative group/sticky flex items-center justify-center">
            <Sticker
            className="w-8 h-8 text-stone-400 transition-transform duration-300 group-hover/sticky:rotate-12"
            strokeWidth={1.2}
            />
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-stone-800 text-white text-xs rounded-lg opacity-0 group-hover/sticky:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Sticky Analogies
            </div>
            </div>

            {/* Equals */}
            <span className="text-4xl text-stone-400 font-extralight">=</span>

            {/* Dynamic Result */}
            <div className="hover:cursor-pointer flex items-center justify-start flex-grow text-left min-w-60" >
            <DynamicResult />
            </div>
        </div>
        </div>
    )
}