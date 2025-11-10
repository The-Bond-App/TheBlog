'use client';
import { Sticker } from 'lucide-react'
import { useState, useEffect } from 'react'

const footerLinks = {
  explore: [
    { label: 'Subscribe', url: '#subscribe' },
    { label: 'SiteMap', url: '/sitemap' },
    { label: 'Gift Wellbeing', url: 'https://shop.thebond.company' },
  ],
  getInvolved: [
    { label: 'The Bond Company', url: 'https://thebond.company' },
    { label: 'Let\'s Talk', url: 'https://support.thebond.company/?section=general' },
    { label: 'Build With Us', url: 'https://support.thebond.company/?section=business' },
  ],
  popular: [
    { label: "#Habits in Action", url: '/category/habits' },
    { label: '#Life, Unfiltered', url: '/category/lifeunfiltered' },
    { label: "#We're All Struggling", url: '/category/notyoueveryone' },
  ],
  bottom: [
    { label: 'Contact', url: 'https://support.thebond.company/?section=general' },
  ],
};

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
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-stone-100 border border-stone-50 shadow-sm">
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

export default function Footer() {
  return (
    <>
    {/** Dynamic Shenanigans */}
    <div className="w-full flex flex-col items-center justify-center py-4">
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
          className="w-10 h-10 text-stone-400 transition-transform duration-300 group-hover/sticky:rotate-12"
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

    <footer className="text-amber-50 relative bg-slate-900">
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-8 md:gap-x-8">
            
            {/* Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <img src="/assets/logo.png" className="w-6 h-6" alt="Logo" />
                <span className="font-light text-xl tracking-tight">
                  The Bond Blog
                </span>
              </div>
              <p className="text-base font-medium text-amber-50/70 leading-relaxed max-w-xs">
                Sticky notes for your soul&apos;s refrigerator.
              </p>
              
              {/* Social Media */}
              <div className="flex items-center gap-3 pt-1">
                <a
                  href="https://www.instagram.com/thebondcompany/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-40 hover:opacity-100 transition-opacity"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                <a
                  href="https://tiktok.com/@thebondcompany"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-40 hover:opacity-100 transition-opacity"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                  </svg>
                </a>

                <a
                  href="https://x.com/thebondco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-40 hover:opacity-100 transition-opacity"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-40 hover:opacity-100 transition-opacity"
                  aria-label="Telegram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Footer sections */}
            {['explore', 'getInvolved', 'popular'].map((section) => (
              <div key={section}>
                <h3 className="text-sm font-medium uppercase tracking-normal mb-4 text-amber-50 opacity-50">
                  {section === 'getInvolved'
                    ? 'Get Involved'
                    : section.charAt(0).toUpperCase() + section.slice(1)}
                </h3>
                <ul className="space-y-2">
                  {footerLinks[section].map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.url}
                        className="text-base font-normal text-amber-50 tracking-wide hover:opacity-100 transition-opacity"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-2 px-2 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm font-light opacity-30">
              © 2025{' '}
              <a href="https://thebond.company" className="hover:opacity-60">
                The Bond Company. {' '}
              </a>
               Made with Intention.
            </p>
            <div className="flex items-center gap-8">
              <a
                key="sayhello"
                href="https://support.thebond.company/?section=general"
                className="text-sm font-light opacity-40 hover:opacity-100 transition-opacity"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
