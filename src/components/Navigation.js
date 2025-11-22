'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Menu, ShoppingBag, Users, Send, Mail, Sticker, MicVocal } from 'lucide-react';


export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="relative">
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#f2f2f7]/20 backdrop-blur-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full mx-auto px-8" >
          <div className="grid grid-cols-3 items-center h-16">

            <div className='hidden md:flex items-center gap-1'>
              <h1 className="text-2xl leading-none text-[#464169]">
                <span className=" font-bold font-inter">Inner</span>{' '}
                <span className="font-normal italic font-serif">Fluency</span>
              </h1>
            </div>
            
            {/* Centered logo */}
            <div className="flex justify-center">
              <motion.a
                href="https://thebond.company"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 group"
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ 
                  opacity: 0.9, 
                  scale: 1, 
                  rotate: 0,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.34, 1.56, 0.64, 1], // Bounce easing
                  rotate: {
                    duration: 1,
                    ease: "easeOut"
                  }
                }}
                whileHover={{ 
                  scale: 1.1, 
                  opacity: 1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.4 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.img
                  src="/assets/logo.png"
                  alt="The Bond Company"
                  className="w-12 h-12 object-contain"
                  initial={{ filter: "blur(10px)" }}
                  animate={{ filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
              </motion.a>
            </div>

          
            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-end items-center">
               <a
                href="https://thebond.company/about"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-base text-[#464169] font-medium transition-all hover:underline hover:decoration-2 hover:underline-offset-4"
              >
                <Sticker className="w-4 h-4" />
                About Us
              </a>
              <a
                href="#subscribe"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-base text-[#464169] font-medium transition-all hover:underline hover:decoration-2 hover:underline-offset-4"
              >
                <Mail className="w-4 h-4" />
                Newsletter
              </a>

              <a
                href="https://shop.thebond.company"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full  text-base text-[#464169] font-medium transition-all hover:underline hover:decoration-2 hover:underline-offset-4"
              >
                <ShoppingBag className="w-4 h-4" />
                Shop
              </a>

              {/* Sitemap only visible on md+ */}
              <a
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsStoryModalOpen(true);
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-base hover:cursor-pointer text-[#464169] font-medium transition-all hover:underline hover:decoration-2 hover:underline-offset-4"
              >
                <MicVocal className="w-4 h-4" />
                Share
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-all ${
                isScrolled ? 'text-stone-700 hover:bg-stone-100' : 'text-stone-800 hover:bg-white/80'
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-200 shadow-lg">
            <div className="px-6 py-4 space-y-1">
              <a
                href="https://thebond.company/about"
                className="flex items-center gap-3 px-4 py-3 text-stone-700 hover:text-stone-900 hover:bg-stone-50 rounded-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                <Sticker className="w-5 h-5" />
                About Us
              </a>
              <a
                href="#subscribe"
                className="flex items-center gap-3 px-4 py-3 text-stone-700 hover:text-stone-900 hover:bg-stone-50 rounded-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                <Mail className="w-5 h-5" />
                Newsletter
              </a>

              <a
                href="https://shop.thebond.company"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 text-stone-700 hover:text-stone-900 hover:bg-stone-50 rounded-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingBag className="w-5 h-5" />
                Shop
              </a>

              {/* Share Your Story */}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsStoryModalOpen(true);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 mt-2 bg-stone-900 text-white rounded-lg font-semibold hover:bg-stone-800 transition-all"
              >
                <Send className="w-5 h-5" />
                Share Your Story
              </button>
            </div>
          </div>
        )}
      </div>

     

      {/* Story Modal */}
      {isStoryModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsStoryModalOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsStoryModalOpen(false)}
              className="absolute top-6 right-6 w-9 h-9 flex items-center justify-center text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-full transition-all z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" strokeWidth={2} />
            </button>

            <div className="px-8 py-12 md:px-16 md:py-16">
              
              <h2 className="text-4xl md:text-5xl font-medium font-serif text-slate-700 tracking-tight mb-6">
                Your Story Matters
              </h2>
              
              <div className="text-lg text-slate-700 space-y-3 mb-6 ps-2">
                  <p>The hardest moments you’ve lived through might be the light someone else is waiting for 🌻</p>
                  <p>Your truth, the pain you felt, the clarity you found, the strength it took to keep going, holds more power than you realize.</p>
                  <p>When you open your heart, you help others open theirs.</p>
                  <p>Have a story or lesson to share? <strong>We would love to help lift your voice.</strong></p>
              </div>

              <a
                href="https://support.thebond.company/?section=blog"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-slate-700 hover:scale-105 text-white font-semibold rounded-full transition-all shadow-md hover:shadow-lg"
              >
                <Send className="w-5 h-5" />
                Share Your Story
              </a>

              <p className="text-sm text-center text-slate-500 mt-4">
                Opens in a new tab
              </p>
               <div className="bg-stone-50/80 backdrop-blur-xl rounded-2xl px-6 py-5 my-8 border border-stone-200">
                  <blockquote className="space-y-3">
                    <p className="text-lg text-slate-700  leading-relaxed">
                      In the depths of winter, I finally learned that within me there lay an invincible summer 🌻
                    </p>
                    <footer className="text-base font-medium text-slate-700">— Albert Camus</footer>
                  </blockquote>
                </div>
            </div>
            
          </div>
        </div>
      )}
    </nav>
  );
}
