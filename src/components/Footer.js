'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NewsletterBanner from './NewsletterBanner';

const footerLinks = {
  explore: [
    { label: 'Subscribe', url: '#subscribe' },
    { label: 'Archive', url: '/archive' },
    { label: 'Gift Wellbeing', url: 'https://shop.thebond.company' },
  ],
  getInvolved: [
    { label: 'About Us', url: 'https://thebond.company/about' },
    { label: 'Write for Us', url: 'https://support.thebond.company/?section=business' },
    { label: 'Partner With Us', url: 'https://support.thebond.company/?section=business' },
  ],
  popular: [
    { label: "Habits in Action", url: '/category/habits' },
    { label: 'Emotions 101', url: '/category/lifeunfiltered' },
    { label: "Protecting Your Peace", url: '/category/notyoueveryone' },
  ],
  resources: [
    { label: 'Privacy Policy', url: '/privacy' },
    { label: 'Terms of Use', url: '/terms' },
    { label: 'FAQ', url: '/faq' },
  ],
};

export default function NewsletterFooter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col" style={{border: '1px solid yellow'}}>
      {/* Newsletter Section */}
      <div className="flex-1 flex items-center justify-center relative overflow-hidden">
        {/* Two small, concentrated, glowing blobs */}
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full"
          style={{
            background: 'linear-gradient(180deg, rgb(34, 68, 255) 0%, rgb(255, 51, 0) 100%)',
            filter: 'blur(60px)',
            opacity: 0.8,
            left: '20%',
            top: '20%',
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
       <NewsletterBanner />
      </div>

      {/* Footer */}
      <footer className="text-gray-800 relative bg-gray-100">
        <div className="border-t border-gray-800/10">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 lg:gap-8">
              
              {/* Brand */}
              <div className="space-y-3 lg:pr-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border-2 border-gray-800 flex items-center justify-center">
                    <span className="text-xs font-bold">★</span>
                  </div>
                  <span className="font-medium text-xl tracking-tight">
                    Enjoyable Stuff
                  </span>
                </div>
                <p className="text-base font-medium text-gray-600 leading-relaxed max-w-sm">
                  Your digital haven for all things delightful and uplifting.
                </p>
                
                {/* Social Media */}
                <div className="flex items-center gap-4 pt-1">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  <a
                    href="https://x.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
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
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    aria-label="Telegram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Footer sections */}
              {['explore', 'getInvolved', 'resources'].map((section) => (
                <div key={section}>
                  <h3 className="text-xs font-semibold uppercase tracking-widest mb-4 text-gray-500">
                    {section === 'getInvolved'
                      ? 'Get Involved'
                      : section.charAt(0).toUpperCase() + section.slice(1)}
                  </h3>
                  <ul className="space-y-2.5">
                    {footerLinks[section].map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.url}
                          className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 block"
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
            <div className="mt-10 pt-3 border-t border-gray-800/10 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm font-medium text-gray-600 tracking-wide">
                {new Date().getFullYear()} © Max Musterman. Made with Intention.
              </p>
              <a
                href="/contact"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 tracking-wide"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}