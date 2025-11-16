'use client'
import { useState, useEffect } from 'react';
import { X, Menu, ShoppingBag, Map, Users, Send, Mail } from 'lucide-react';
import Sitemap from '../ui/Sitemap';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSitemap, setShowSitemap] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

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
            ? 'bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm'
            : 'bg-transparent border-b border-stone-200 shadow-xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="https://thebond.company"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group"
            >
              <img
                src="/assets/logo.png"
                alt="The Bond Company"
                className="w-7 h-7 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <span className={`font-semibold text-base text-stone-900`}>
                The Bond Company
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              <a
                href="#subscribe"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-100 transition-all"
              >
                <Mail className="w-4 h-4" />
                Newsletter
              </a>

              <a
                href="https://shop.thebond.company"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-100 transition-all"
              >
                <ShoppingBag className="w-4 h-4" />
                Shop
              </a>

              {/* Sitemap only visible on md+ */}
              <button
                onClick={() => setShowSitemap(true)}
                className="hidden md:flex hover:cursor-pointer items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-100 transition-all"
              >
                <Map className="w-4 h-4" />
                Sitemap
              </button>

              <a
                href="https://instagram.com/thebondcompany"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-100 transition-all"
              >
                <Users className="w-4 h-4" />
                Community
              </a>

              <button
                onClick={() => setIsStoryModalOpen(true)}
                className="ml-2 px-5 py-2 rounded-full text-sm font-semibold bg-stone-900 text-white hover:bg-stone-800 shadow-md transition-all"
              >
                Share Your Story
              </button>
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

              <a
                href="https://instagram.com/thebondcompany"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 text-stone-700 hover:text-stone-900 hover:bg-stone-50 rounded-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                <Users className="w-5 h-5" />
                Community
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

      {/* Sitemap */}
      {showSitemap && (
        <Sitemap
          onClose={() => setShowSitemap(false)}
          onSelectCategory={(uuid) => {
            setSelectedCategory(uuid);
            setShowSitemap(false);
          }}
        />
      )}

      {/* Story Modal */}
      {isStoryModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsStoryModalOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsStoryModalOpen(false)}
              className="absolute top-6 right-6 w-9 h-9 flex items-center justify-center text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-full transition-all z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" strokeWidth={2} />
            </button>

            <div className="px-8 py-12 md:px-12 md:py-16">
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-semibold text-stone-900 tracking-tight mb-3">
                  Your Story Matters
                </h2>
                <p className="text-lg text-stone-600">
                  The hardest moments in your life might be the light someone else needs.
                </p>
              </div>

              <div className="space-y-6 mb-8 text-stone-700 text-base leading-relaxed">
                <p>
                  That raw, honest breakthrough, the time you faced pain, found clarity, or simply made it through—it carries more power than you realize.
                </p>

                <p>
                  When you share your truth, you help others find theirs. When you share your light, you guide someone still searching.
                </p>

                <div className="bg-stone-50 rounded-2xl px-6 py-5 my-8 border border-stone-200">
                  <blockquote className="space-y-3">
                    <p className="text-stone-800 font-medium leading-relaxed">
                      "In the depths of winter, I finally learned that within me there lay an invincible summer" 🌻
                    </p>
                    <footer className="text-sm text-stone-500">— Albert Camus</footer>
                  </blockquote>
                </div>

                <p className="text-stone-700">
                  Have a story or lesson to share? <strong>We'd love to help amplify your voice</strong>.
                </p>

                <p className="text-sm text-stone-500">
                  Check out "Life, Unfiltered" for examples, then submit your story. Don't overthink it—we'll shape it together.
                </p>
              </div>

              <a
                href="https://support.thebond.company/?section=blog"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-stone-900 hover:bg-stone-800 text-white font-semibold rounded-full transition-all shadow-md hover:shadow-lg"
              >
                <Send className="w-5 h-5" />
                Share Your Story
              </a>

              <p className="text-xs text-center text-stone-400 mt-4">
                Opens in a new tab
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
