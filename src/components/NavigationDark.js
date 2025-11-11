import { useState } from 'react';
import { Mic, X, Menu, ShoppingBag,PersonStanding, Home, Map, Send } from 'lucide-react';




export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);


  return (
     <nav className="relative">
         <div className="w-full mx-auto border-b border-gray-200 py-2 bg-stone-800 backdrop-blur-2xl sticky top-0 z-50">
        <div className="flex items-center justify-center">
          <div className="hidden md:flex items-center gap-x-2">
            {[
              { icon: Home, label: 'Home', href: '/' },
              { icon: null, img: '/assets/logo.png', label: 'The Bond Company', href: 'https://thebond.company' },
              { icon: ShoppingBag, label: 'Shop', href: 'https://shop.thebond.company' },
              //{ icon: MicVocal, label: 'Your Story', href: '#', onClick: () => setIsStoryModalOpen(true) },
              //{ icon: Map, label: 'Sitemap', href: '/sitemap'},
              { icon: PersonStanding, label: 'Community', href: 'https://instagram.com/thebondcompany'},
            ].map((item) => (
              
              <a
                key={item.label}
                href={item.href}
                target={item.label === 'Home' ? undefined : '_blank'}
                rel={item.label === 'Home' ? undefined : 'noopener noreferrer'}
                onClick={(e) => {
                  if (item.onClick) {
                    e.preventDefault();
                    item.onClick();
                  }
                }}
                className={` px-4 py-2 text-white opacity-90 hover:opacity-100  rounded-lg transition-all flex items-center gap-2 text-[16px] hover:bg-white/[0.08] !tracking-normal font-medium`}
              >
                {item.img ? (
                  <img src={item.img} alt={item.label} className="w-5 h-5 object-contain" />
                ) : (
                  <item.icon className="w-5 h-5" />
                )}
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
          <div className="md:hidden my-4 rounded-2xl border overflow-hidden bg-white/5 border-white/10">
            {[
              { icon: Home, label: 'Home', href: '/' },
              { icon: null, img: '/assets/logo.png', label: 'The Bond Company', href: 'https://thebond.company' },
              { icon: ShoppingBag, label: 'Shop', href: 'https://shop.thebond.company' },
              //{ icon: MicVocal, label: 'Your Story', href: '#', onClick: () => setIsStoryModalOpen(true) },
              //{ icon: Map, label: 'Sitemap', href: '/sitemap'},
              { icon: PersonStanding, label: 'Community', href: 'https://instagram.com/thebondcompany'},
            ].map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (item.onClick) {
                    e.preventDefault();
                    item.onClick();
                  } else {
                    setIsMenuOpen(false);
                  }
                }}
                className={`flex items-center gap-3 px-6 py-4 text-white opacity-70 hover:opacity-100 hover:bg-white/10 transition-all border-b border-white/20`}
              >
                {item.img ? (
                  <img src={item.img} alt={item.label} className="w-5 h-5 object-contain" />
                ) : (
                  <item.icon className="w-5 h-5" />
                )}
                <span className="font-light">{item.label}</span>
              </a>
            ))}
          </div>
        )}
      </div>

        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-[60] bg-white" style={{ top: '44px' }}>
            <div className="p-6 space-y-1">
              {[
                { label: 'Home', href: '/' },
                { label: 'Shop', href: '#' },
                { label: 'Community', href: '#' },
                { label: 'Your Voice', href: '#' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-[17px] text-black/80 hover:text-black hover:bg-black/5 rounded-lg transition-all"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Story Modal */}
        {isStoryModalOpen && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 animate-in fade-in duration-300" 
            onClick={() => setIsStoryModalOpen(false)}
          >
            <div 
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl animate-in zoom-in-95 duration-300" 
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsStoryModalOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-stone-800 hover:text-stone-600 hover:bg-stone-100  hover:cursor-pointer rounded-full transition-all duration-200 z-10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" strokeWidth={2} />
              </button>

              <div className="px-8 py-12 md:px-12 md:py-16">
                {/* Header */}
                <div className="mb-10">
                  <h2 className="text-4xl md:text-5xl font-semibold text-stone-800 tracking-tight mb-1">
                    Your Story Matters
                  </h2>
                </div>

                {/* Content */}
                <div className="space-y-6 mb-6 text-stone-700 text-lg leading-relaxed">
                  <p>
                    The hardest moments in your life might be the light someone else needs to find their way.
                  </p>
                  
                  <p>
                    That raw, honest breakthrough, the time you faced pain, found clarity, or simply made it through, carries more power than you realize.
                  </p>

                  <p>
                    When you share your truth, you help others find theirs. When you share your light, you guide someone still searching.
                  </p>

                  {/* Quote Box */}
                  <div className="bg-stone-100/80 rounded-2xl px-6 py-4 my-8 shadow-md border border-stone-200/50">
                    <blockquote className="space-y-3">
                      <p className="text-stone-700 font-medium leading-relaxed">
                        "In the depths of winter, I finally learned that within me there lay an invincible summer"
                      🌻</p>
                      <footer className="text-sm text-stone-500">
                        — Albert Camus
                      </footer>
                    </blockquote>
                  </div>

                  <p className="text-stone-600">
                    Have a story or lesson to share? <strong>We'd love to help amplify your voice</strong>. You can be featured on our blog or social channels, or stay anonymous if you prefer.
                  </p>
                  

                  <p className="text-stone-500 text-sm">
                    Check out “Life, Unfiltered” category to get examples; then submit your story. Don’t overthink it, you delightful chaos gremlin. We’ll shape it together!
                  </p>
                </div>
                
                {/* CTA Button */}
                <a
                  href="https://support.thebond.company/?section=blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-stone-900 hover:bg-stone-800 text-white font-medium rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Share Your Story
                </a>

                <p className="text-sm text-center text-stone-400 mt-4">
                  Opens in a new tab
                </p>
              </div>
            </div>
          </div>
        )}
      </nav>
  );
}