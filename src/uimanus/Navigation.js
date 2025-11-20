import { useState, useEffect } from 'react';
import { Menu, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
      {/* Liquid Glass Navigation Bar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/70 backdrop-blur-xl shadow-sm'
            : 'bg-white/50 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full" />
              <div>
                <div className="font-semibold text-lg text-foreground tracking-tight">The Bond</div>
                <div className="font-mono text-[10px] text-muted-foreground tracking-wider">EST. 2025</div>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#subscribe" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide">
                NEWSLETTER
              </a>
              <a href="https://shop.thebond.company" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide">
                SHOP
              </a>
              <a href="https://support.thebond.company/?section=general" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide">
                CONTACT
              </a>
              <button
                onClick={() => setIsStoryModalOpen(true)}
                className="px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium tracking-wide rounded-full hover:opacity-90 transition-opacity"
              >
                SUBMIT STORY
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2" aria-label="Toggle menu">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-white/95 backdrop-blur-md border-t border-border"
            >
              <div className="px-6 py-4 space-y-2">
                <a href="#subscribe" className="block px-4 py-3 text-foreground hover:bg-secondary rounded-lg font-medium tracking-wide transition-colors" onClick={() => setIsMenuOpen(false)}>
                  NEWSLETTER
                </a>
                <a href="https://shop.thebond.company" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-foreground hover:bg-secondary rounded-lg font-medium tracking-wide transition-colors" onClick={() => setIsMenuOpen(false)}>
                  SHOP
                </a>
                <a href="https://support.thebond.company/?section=general" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-foreground hover:bg-secondary rounded-lg font-medium tracking-wide transition-colors" onClick={() => setIsMenuOpen(false)}>
                  CONTACT
                </a>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsStoryModalOpen(true);
                  }}
                  className="w-full px-4 py-3 mt-2 bg-primary text-primary-foreground font-medium tracking-wide rounded-full"
                >
                  SUBMIT STORY
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Story Modal */}
      <AnimatePresence>
        {isStoryModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsStoryModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsStoryModalOpen(false)}
                className="absolute top-6 right-6 w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary rounded-full transition-all z-10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" strokeWidth={2} />
              </button>

              <div className="px-8 py-12 md:px-12 md:py-16">
                <div className="mb-8">
                  <h2 className="font-semibold text-4xl md:text-5xl text-foreground mb-3">Your Story Matters</h2>
                  <p className="text-lg text-muted-foreground">The hardest moments in your life might be the light someone else needs.</p>
                </div>

                <div className="space-y-6 mb-8 text-foreground leading-relaxed">
                  <p>That raw, honest breakthrough, the time you faced pain, found clarity, or simply made it through—it carries more power than you realize.</p>
                  <p>When you share your truth, you help others find theirs. When you share your light, you guide someone still searching.</p>
                  <div className="bg-secondary px-6 py-5 my-8 rounded-2xl">
                    <blockquote className="space-y-3">
                      <p className="text-foreground font-medium">"In the depths of winter, I finally learned that within me there lay an invincible summer" 🌻</p>
                      <footer className="text-sm text-muted-foreground">— Albert Camus</footer>
                    </blockquote>
                  </div>
                  <p>Have a story or lesson to share? <strong>We'd love to help amplify your voice</strong>.</p>
                </div>

                <a href="https://support.thebond.company/?section=blog" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-primary hover:opacity-90 text-primary-foreground font-semibold transition-all rounded-full">
                  <Send className="w-5 h-5" />
                  Share Your Story
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed nav */}
      <div className="h-20" />
    </nav>
  );
}
