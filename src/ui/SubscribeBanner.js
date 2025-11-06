'use client';

import { useState } from 'react';
import { addSubscriber } from '../services/subscribers'

export default function SubscribeBanner() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [subsuc, setSubsuc] = useState(0); // 0 = initial, 1 = success, 2 = error

  // Validate email format
  const isValidEmail = (email) => {
     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
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

  const spinnerStyle = {
    display: 'inline-block',
    width: '16px',
    height: '16px',
    border: '3px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '50%',
    borderTopColor: 'white',
    animation: 'spin 1s linear infinite',
    marginRight: '6px'
  };

  return (
    <div id="subscribe" className="mt-32 mb-20">
      <div className="max-w-4xl mx-auto relative">
        
        <div className="relative overflow-hidden text-center p-16 rounded-3xl backdrop-blur-xl bg-slate-900/60 border border-white/10 shadow-2xl">
          {/* Gradient border effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-rose-500/20 opacity-50" />
          
          <div className="relative z-10">
            <h2 className="text-5xl font-light mb-6 bg-gradient-to-r from-amber-300 via-orange-300 to-rose-300 bg-clip-text text-transparent tracking-tight">
              Stay Connected
            </h2>
            <p className="text-xl text-white/70 !font-light tracking-wide mb-10 max-w-2xl mx-auto leading-relaxed">
              Posts that get you, weekly. Side effects may include feeling seen.
            </p>
     
            <div className="flex gap-4 max-w-xl mx-auto">
              <form 
                onSubmit={handleSubmit}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '19px',
                  width: '100%'
                }}
              >
               <input 
                  type="email" 
                  placeholder={subsuc === 1 ? "You're awesome 😎" : "Your email"} 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                  disabled={subsuc === 1 || loading}
                   className="flex-1 px-6 py-4 text-lg font-light tracking-wide rounded-full bg-white/5 border border-white/10 focus:border-orange-500/50 focus:outline-none text-white/70 placeholder:text-white/40"
                />
                <button 
                  type="submit" 
                  disabled={loading || subsuc === 1}
                  aria-label={subsuc === 1 ? 'Already on our database' : 'Set up your notification alert'}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white text-lg font-medium hover:cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <span style={spinnerStyle} aria-hidden="true"></span>
                      <span>Setting up your alert...</span>
                    </>
                  ) : subsuc === 1 ? (
                    'All Good 🎉'
                  ) : subsuc === 2 ? (
                    'Failed 👎'
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </form>
            </div>
            
            <p className="mt-6 text-base text-white/50 font-light">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}