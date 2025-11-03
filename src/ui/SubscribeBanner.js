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
    <div id="subscribe" className="relative z-10 px-6 lg:px-8 w-full mx-auto py-12">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-orange-900/30 backdrop-blur-xl border border-white/10 px-8 py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left text section */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-xl lg:text-2xl font-light mb-1">
              Weekly reminders that you're doing better than you think.
            </h3>
            <p className="text-base font-light text-white/50">
              Retention rate: suspiciously high.
            </p>
          </div>

          {/* Right: form or success message */}
          {status === 'success' ? (
            <div className="text-green-400 font-light text-sm text-center lg:text-left">
              ✓ You're in. Check your email.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex-shrink-0 w-full lg:w-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-grow lg:w-80 px-5 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-all"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-6 py-3 bg-white text-slate-900 rounded-full text-sm font-medium hover:bg-white/90 transition-all disabled:opacity-50 whitespace-nowrap"
                >
                  {status === 'loading' ? '...' : 'Subscribe'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
