'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { addSubscriber } from '../data/addSubscriber.client'

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
    <div id="subscribe" className="relative border-t border-stone-200 overflow-hidden pt-10 pb-18">
      {/* Subtle ambient glow */}
      <div className="absolute inset-0  opacity-40"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-[90%] max-w-3xl px-12 py-16 text-center"
      >
        <h2 className="font-serif tracking-tight text-5xl text-[#464169] mb-3">
          Newsletter
        </h2>

        <p className="text-lg font-inter text-slate-700 mb-8">
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
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
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
            </motion.button>
            {error && (
            <p className="mt-3 text-sm text-rose-600 font-medium px-4">
              {error}
            </p>
          )}
          </div>
          
          
        </div>

        <p className="text-sm text-gray-600 mt-6">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </motion.div>
    </div>
  );
}

export default NewsletterBanner;