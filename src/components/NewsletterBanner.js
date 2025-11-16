'use client';
import { useState, useEffect } from 'react';
import { Sticker } from 'lucide-react';
import { addSubscriber } from '../data/addSubscriber.client'

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
      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-stone-100/80 shadow-sm">
        <span 
          key={index}
          className="text-xl animate-[fadeIn_0.5s_ease-in-out]"
        >
          {current.emoji}
        </span>
      </div>
      <span 
        key={`text-${index}`}
        className="text-sm font-medium text-gray-700 animate-[fadeIn_0.5s_ease-in-out]"
      >
        {current.label}
      </span>
    </div>
  );
};

function NewsletterBanner() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [subsuc, setSubsuc] = useState(0); // 0 = initial, 1 = success, 2 = error
    
    const [isFocused, setIsFocused] = useState(false);

    // Validate email format
    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubscribe = async (e) => {
        e.preventDefault();
        
        if (!email || !isValidEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }
        setLoading(true);
        setError('');
        
        try {
        const r = await addSubscriber(email);
        if(r){
            setEmail('');
            setSubsuc(1);
        } else {
            setSubsuc(2);
            setError('Oops! Something went wrong while saving your email. Please try again or email care@thebond.company');
        }
        
        } catch (err) {
        setSubsuc(2);
        setError('Oops! Something went wrong while saving your email. Please try again or email care@thebond.company');
        console.error('Subscription error:', err);
        } finally {
        setLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
        handleSubscribe();
        }
    };

    const spinnerStyle = {
        display: 'inline-block',
        width: '16px',
        height: '16px',
        border: '3px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '50%',
        borderTopColor: 'white',
        animation: 'spin 1s linear infinite',
    };

  return (
    <div id="subscribe" className="relative border-t border-stone-200 overflow-hidden py-12">
      {/* Subtle ambient glow */}
      <div className="absolute inset-0  opacity-40"></div>
      
   
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-bold text-brown-900 mb-4 tracking-tight leading-tight">
          Newsletter
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-10 font-light max-w-2xl mx-auto">
          Posts that get you, weekly. Side effects may include feeling seen.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <div className="flex-1 relative">
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={subsuc === 1 || loading}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onKeyPress={handleKeyPress}
                placeholder={subsuc === 1 ? "You're awesome 😎" : "Your email"} 
                className={`w-full px-5 py-4 rounded-xl border-2 text-base transition-all duration-300 outline-none ${
                    isFocused 
                    ? 'border-gray-900 shadow-xl bg-white' 
                    : 'border-gray-200 shadow-md bg-gray-50 hover:bg-white hover:border-gray-300'
                }`}
                />
            </div>
            <button
                onClick={handleSubscribe}
                disabled={loading || subsuc === 1}
                aria-label={subsuc === 1 ? 'Already on our database' : 'Set up your notification alert'}
                className="px-8 py-4 bg-gray-900 hover:cursor-pointer text-white font-semibold text-base rounded-xl hover:bg-gray-800 active:scale-95 transition-all duration-200 shadow-md hover:shadow-xl"
            >
                {loading ? (
                <span className="flex items-center justify-center">
                    <span style={spinnerStyle} aria-hidden="true"></span>
                </span>
                ) : subsuc === 1 ? (
                'All Good 🎉'
                ) : subsuc === 2 ? (
                'Failed 👎'
                ) : (
                'Subscribe'
                )}
            </button>
            
        </div>
        {error && (
        <p className="mt-3 text-sm text-rose-600 font-medium px-4">
            {error}
        </p>
        )}

        {/* Integrated DynamicShenanigans */}
        <div className="inline-flex items-center justify-center gap-4 px-4 py-3 mt-8">
          {/* Logo */}
          <div className="hover:cursor-pointer relative group/logo flex items-center justify-center">
            <img src="/assets/logo.png" className="w-9 h-9 flex items-center justify-center transition-transform duration-300 group-hover/logo:scale-110" />
            
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover/logo:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
              The Bond Company
            </div>
          </div>

          {/* Plus */}
          <span className="text-2xl text-stone-400 font-light">+</span>

          {/* Sticky Note */}
          <div className="hover:cursor-pointer relative group/sticky flex items-center justify-center">
            <div className="w-10 h-10 rounded-xl  flex items-center justify-center shadow-md bg-stone-100/80 transition-all duration-300 group-hover/sticky:rotate-12">
              <Sticker
                className="w-6 h-6 text-gray-600"
                strokeWidth={1.5}
              />
            </div>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover/sticky:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
              Sticky Analogies
            </div>
          </div>

          {/* Equals */}
          <span className="text-2xl text-stone-400 font-light">=</span>

          {/* Dynamic Result */}
          <div className="hover:cursor-pointer flex items-center justify-start min-w-[200px]">
            <DynamicResult />
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default NewsletterBanner;