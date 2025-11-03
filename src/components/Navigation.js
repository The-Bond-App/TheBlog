import { useState } from 'react';

// Import your icons here:
import { Home, Info, Mail, Map, X, Menu, ShoppingBagIcon, MicVocal } from 'lucide-react'; // adjust path

export default function Navigation({ isMenuOpen, setIsMenuOpen }) {
  

  return (
    <nav className="relative z-50">
      <div className="w-full mx-auto pt-8 px-8">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-4 group">
            <img src="/assets/logo.png" className="w-9 h-9" alt="Logo" />
            <span className="text-white font-light text-3xl tracking-normal hidden sm:block">
              The Bond Blog
            </span>
          </a>

          <div className="hidden md:flex items-center gap-4">
            {[
              { icon: Home, label: 'Home', href: '/' },
              { icon: Info, label: 'The Bond Company', href: 'https://thebond.company' },
              { icon: ShoppingBagIcon, label: 'Shop', href: 'https://shop.thebond.company' },
              { icon: MicVocal, label: 'Your Story', href: '/yourstory' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-white opacity-70 hover:opacity-100 hover:bg-white/10 rounded-lg transition-all flex items-center gap-2 text-lg !tracking-wide font-light"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white opacity-70 hover:opacity-100 hover:bg-white/10 rounded-lg transition-all"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 backdrop-blur-xl rounded-2xl border overflow-hidden bg-white/5 border-white/10">
            {[
              { icon: Home, label: 'Home', href: '/' },
              { icon: Info, label: 'About', href: '/about' },
              { icon: Mail, label: 'Subscribe', href: '/subscribe' },
              { icon: Map, label: 'Sitemap', href: '/sitemap' },
            ].map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-3 px-6 py-4 text-white opacity-70 hover:opacity-100 hover:bg-white/10 transition-all ${
                  idx !== 3 ? 'border-b border-white/20' : ''
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-light">{item.label}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
