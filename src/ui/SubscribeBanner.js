'use client'; // ✅ ensures React hooks work in Next.js app router

import { useState } from 'react';

export default function SubscribeBanner() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // TODO: integrate with your actual email signup service (e.g., Mailchimp, Resend, etc.)
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
   <div id="subscribe" className="mt-32 mb-20">
      <div className="max-w-4xl mx-auto text-center p-16 rounded-3xl bg-gradient-to-br from-amber-900/20 via-orange-900/20 to-rose-900/20 border border-orange-500/20">
        <h2 className="text-5xl font-light mb-6 bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
          Stay Connected
        </h2>
        <p className="text-xl text-white/60 !font-extralight tracking-wide mb-10 max-w-2xl mx-auto leading-relaxed">
          Posts that get you, weekly.  Side effects may include feeling seen.
        </p>
        <div className="flex gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-6 py-4 text-lg rounded-full bg-white/5 border border-white/10 focus:border-orange-500/50 focus:outline-none text-white placeholder:text-white/30"
          />
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 text-white text-lg font-medium hover:shadow-lg hover:shadow-orange-500/30 transition-all whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
