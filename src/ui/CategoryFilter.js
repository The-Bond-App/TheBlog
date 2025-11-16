import { useState } from 'react';
import { X, Map, ChevronDown, Brain } from 'lucide-react';

// Primary categories (shown in main menu)
const primaryCategories = [
  { 
    uuid: 'all', 
    icon: '🤯', 
    name: 'All',
    description: ''
  },
  { 
    uuid: 'emotions', 
    icon: <Brain />, 
    name: 'Emotions Explained',
    description: 'Figure out what you\'re actually feeling'
  },
  { 
    uuid: 'science', 
    icon: '🧠', 
    name: 'Science Says',
    description: 'The psychology behind why you feel what you feel'
  },
  { 
    uuid: 'habits', 
    icon: '🌱', 
    name: 'Habits That Work',
    description: 'Small rituals that actually change things'
  },
  { 
    uuid: 'questionsworthasking', 
    icon: '🤔', 
    name: 'Questions Worth Asking',
    description: 'Big questions you can\'t Google'
  }, 
  { 
    uuid: 'boundaries', 
    icon: '✋', 
    name: 'Protecting Your Peace',
    description: 'Learning to say no without guilt'
  }
];

// Secondary categories (shown in modal)
const secondaryCategories = [
  { 
    uuid: 'notjustyou', 
    icon: '🤝', 
    name: 'You\'re Not Alone',
    description: 'Real stories from real people'
  },
  {
    uuid: 'modernlife',
    icon:'📱',
    name: 'Modern Life',
    description: 'When the internet makes you feel worse'
  },
  {
    uuid: 'lettinggo',
    icon: '🍂',
    name: 'Letting Go',
    description: 'When things end and you need to move forward'
  },
  {
    uuid: 'permissiontofeelgood',
    icon: '🌻',
    name: 'Permission to Feel Good',
    description: 'It\'s okay to be happy—seriously'
  }
];

const allCategories = [...primaryCategories, ...secondaryCategories];

export default function BlogCategoryMenu() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showSitemap, setShowSitemap] = useState(false);
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);

  return (
    <>
      {/* Compact Blog Category Menu */}
      <div className="bg-white mt-8">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-5xl font-semibold text-gray-900 mb-2">
               What do you need today?
            </h2>
            <button
              onClick={() => {
                setShowMoreDropdown(false);
                setShowSitemap(true);
              }}
              className="hover:cursor-pointer uppercase text-stone-500 hover:text-stone-400 flex items-center gap-2 justify-center mx-auto mb-4"
            >
              <Map className="w-4 h-4" />
              <span className="text-sm ">Sitemap</span>
            </button>

          </div>

          {/* Category Pills - Horizontal */}
          <div className="flex flex-wrap items-center justify-center gap-7">
      
            {/* Primary Categories Only */}
            {primaryCategories.map((cat) => (
              <button
                key={cat.uuid}
                onClick={() => setSelectedCategory(cat.uuid)}
                className={`text-sm tracking-wider uppercase hover:cursor-pointer font-medium whitespace-nowrap transition-colors pb-1 ${
                  selectedCategory === cat.uuid
                    ? 'text-stone-500 border-b-2 border-stone-500'
                    : 'text-stone-400 hover:text-stone-600'
                }`}
              >
                {/*<span className="mr-2">{cat.icon}</span>*/}
                {cat.name}
                
                {/* Tooltip on hover */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-stone-900 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-10">
                  {cat.description}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-stone-900"></div>
                </div>
              </button>
            ))}

            {/* More Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowMoreDropdown(!showMoreDropdown)}
                className="text-sm tracking-wider text-stone-500 uppercase hover:cursor-pointer  font-medium whitespace-nowrap transition-colors pb-1 transition-all flex items-center gap-2"
              >
                More
                <ChevronDown className={`w-4 h-4 transition-transform ${showMoreDropdown ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Content */}
              {showMoreDropdown && (
                <>
                  {/* Backdrop to close dropdown */}
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setShowMoreDropdown(false)}
                  />
                  
                  {/* Dropdown Menu */}
                  <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-stone-200 py-3 z-20">
                    {secondaryCategories.map((cat) => (
                      <button
                        key={cat.uuid}
                        onClick={() => {
                          setSelectedCategory(cat.uuid);
                          setShowMoreDropdown(false);
                        }}
                        className="w-full hover:cursor-pointer text-left px-4 py-3 hover:bg-stone-100 transition-colors flex items-start gap-3"
                      >
                        <span className="text-xl">{cat.icon}</span>
                        <div>
                          <div className="text-sm font-semibold text-stone-500">
                            {cat.name}
                          </div>
                          <div className="text-sm text-stone-500 mt-0.5">
                            {cat.description}
                          </div>
                        </div>
                      </button>
                    ))}
                    
                   
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

    


      {/* Sitemap Modal */}
      {showSitemap && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-stone-200 px-8 py-6 flex items-center justify-between rounded-t-3xl">
              <h2 className="text-2xl font-semibold text-stone-900">All Categories</h2>
              <button
                onClick={() => setShowSitemap(false)}
                className="p-2 hover:bg-stone-100 hover:cursor-pointer rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-stone-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Primary Categories */}
                <div>
                  <h3 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-4">
                    Main Topics
                  </h3>
                  <div className="space-y-3">
                    {primaryCategories.map((cat) => (
                      <button
                        key={cat.uuid}
                        onClick={() => {
                          setSelectedCategory(cat.uuid);
                          setShowSitemap(false);
                        }}
                        className="w-full text-left group"
                      >
                        <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-stone-50 transition-colors">
                          <span className="text-2xl">{cat.icon}</span>
                          <div>
                            <div className="text-sm font-medium text-stone-900 group-hover:text-black">
                              {cat.name}
                            </div>
                            <div className="text-xs text-stone-500 mt-1">
                              {cat.description}
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Secondary Categories */}
                <div>
                  <h3 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-4">
                    More Topics
                  </h3>
                  <div className="space-y-3">
                    {secondaryCategories.map((cat) => (
                      <button
                        key={cat.uuid}
                        onClick={() => {
                          setSelectedCategory(cat.uuid);
                          setShowSitemap(false);
                        }}
                        className="w-full text-left group"
                      >
                        <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-stone-50 transition-colors">
                          <span className="text-2xl">{cat.icon}</span>
                          <div>
                            <div className="text-sm font-medium text-stone-900 group-hover:text-black">
                              {cat.name}
                            </div>
                            <div className="text-xs text-stone-500 mt-1">
                              {cat.description}
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Additional Pages Section */}
              <div className="mt-8 pt-8 border-t border-stone-200">
                <h3 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-4">
                  Resources
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <a
                    href="#subscribe"
                    className="block p-3 rounded-lg hover:bg-stone-50 transition-colors"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent the default jump
                      const element = document.querySelector('#subscribe');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    <div className="text-sm font-medium text-stone-900">Newsletter</div>
                    <div className="text-xs text-stone-500 mt-0.5">
                      Weekly insights in your inbox
                    </div>
                  </a>

                  <a href="https://instagram.com/thebondcompany"  target="_blank" rel="noopener noreferrer" className="block p-3 rounded-lg hover:bg-stone-50 transition-colors">
                    <div className="text-sm font-medium text-stone-900">Community</div>
                    <div className="text-xs text-stone-500 mt-0.5">Join the bond community</div>
                  </a>
                 
                </div>
              </div>

              {/* Footer Note */}
              <div className="mt-8 pt-8 border-t border-stone-200">
                <p className="text-sm text-stone-500 text-center">
                  Pick a path. Stay with intention.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}