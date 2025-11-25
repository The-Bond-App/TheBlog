'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { addSubscriber } from '../data/addSubscriber.client'


export default function Newsletter() {
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
          setError('Hey! Looks like that didn’t work. Try again or contact care@thebond.company');
        }
        
      } catch (err) {
        setSubsuc(2);
        setError('Hey! Looks like that didn’t work. Try again or contact care@thebond.company');
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
    <div  id="subscribe" className="w-full mx-auto flex flex-col">
      {/* Newsletter Section */}
      <div className="flex-1 flex items-center justify-center relative overflow-hidden">
        {/* Two small, concentrated, glowing blobs */}
        <motion.div
          className="absolute w-[250px] h-[180px] rounded-md"
          style={{
            background: 'linear-gradient(180deg, #667eea 0%, #ff4545 100%)',
            filter: 'blur(50px)',
            opacity: 0.5,
            left: '10%',
            bottom: '15%',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 0.9, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-[140px] h-[140px] rounded-md"
          style={{
            background: 'linear-gradient(180deg, #667eea 0%, #ff4545 100%)',
            filter: 'blur(50px)',
            opacity: 0.5,
            right: '5%',
            bottom: '15%',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 0.9, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

      

        {/* Newsletter form */}
       <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-[90%] px-12 pt-16 pb-28 text-center"
      >
        <h2 className="font-serif tracking-tight text-5xl text-[#464169] mb-3">
          Newsletter
        </h2>

        <p className="text-lg text-slate-700 mb-8">
          Posts that hit different, delivered weekly. Side effects may include feeling seen.
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

            {/* Button inside input */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSubscribe}
              disabled={loading || subsuc === 1}
              aria-label={subsuc === 1 ? 'Already on our database' : 'Set up your notification alert'}
              className="absolute top-1/2 right-2 -translate-y-1/2 px-5 py-3 bg-slate-700 text-white font-semibold text-sm rounded-lg hover:bg-slate-800 hover:cursor-pointer transition-all shadow-md"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <span style={spinnerStyle} aria-hidden="true"></span>
                </span>
              ) : subsuc === 1 ? (
                'Subscribed 🎉'
              ) : subsuc === 2 ? (
                'Failed 👎'
              ) : (
                'Subscribe'
              )}
            </motion.button>
          </div>
        </div>

        {/* Error message outside the flex container */}
        {error ? (
          <p className="mt-3 text-sm text-rose-600 font-medium text-center max-w-lg mx-auto">
            {error}
          </p>
        ) : (
          <p className="text-sm text-slate-600 mt-4">
            No Spam. Unsubscribe at any time.
          </p>
        )}



       
      </motion.div>
      </div>

    </div>
  );
}