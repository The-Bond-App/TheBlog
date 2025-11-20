import {categories, categoryMap} from '../constants/categories'

const morelinks = [
    { id: 1, name: 'Shop',  bgColor: 'bg-stone-100', link: 'https://shop.thebond.company'},
    { id: 2, name: 'About Us',bgColor: 'bg-stone-100', link: 'https://thebond.company/about'},
    { id: 3, name: 'Say Hello', bgColor: 'bg-stone-100', link: 'https://support.thebond.company/?section=general'},
    { id: 5, name: 'Community', bgColor: 'bg-stone-100', link: '#'},
];


export default function  CategoryDropDown(){
    return(
        <>
           {/* Categories Dropdown */}
              <div className="relative mb-6">
                <button 
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full bg-stone-100 rounded-xl pl-5 pr-10 py-3 text-sm text-stone-700 border-2 border-stone-200 hover:border-stone-300 hover:cursor-pointer transition-all shadow-sm hover:shadow-lg text-left flex items-center gap-3 font-medium"
                >
                  <LayoutDashboard className="w-5 h-5 text-stone-600 flex-shrink-0" />
                  <span className="truncate">{selectedCat ? selectedCat.name : 'Explore Categories'}</span>
                </button>
                
                <ChevronDown 
                  className={`absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
                
                 
                {isOpen && (
                    <div className="absolute left-0 mt-2 w-full bg-white/95 backdrop-blur-2xl rounded-xl shadow-2xl border border-stone-200 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                    
                    
                    <div className="p-6">
                        <div className="flex gap-3">
                        {categories.map((category) => (
                            <button
                            key={category.uuid}
                            onClick={() => {
                                setSelectedCat(category);
                                setIsOpen(false);
                            }}
                            onMouseEnter={() => setHoveredCat(category.uuid)}
                            onMouseLeave={() => setHoveredCat(null)}
                            className={`
                                relative border border-stone-200 hover:cursor-pointer flex-1 p-5 rounded-2xl text-left transition-all duration-300 overflow-hidden
                                ${hoveredCat === category.uuid 
                                ? 'bg-stone-900 shadow-lg scale-[1.02]' 
                                : 'bg-stone-50 hover:bg-stone-100 shadow-sm'
                                }
                            `}
                            >
                            {/* Animated gradient background */}
                            <div className={`
                                absolute inset-0 bg-gradient-to-br from-stone-800 to-stone-950
                                transition-opacity duration-300
                                ${hoveredCat === category.uuid ? 'opacity-100' : 'opacity-0'}
                            `} />
                            
                            <div className="relative z-10">
                                <div className={`
                                text-3xl mb-2 transition-all duration-300
                                ${hoveredCat === category.uuid ? 'scale-110 -rotate-6' : 'scale-100'}
                                `}>
                                {category.icon}
                                </div>
                                <div className={`
                                font-semibold text-base mb-1 transition-colors duration-300
                                ${hoveredCat === category.uuid ? 'text-white' : 'text-stone-900'}
                                `}>
                                {category.name}
                                </div>
                                <div className={`
                                text-sm transition-colors duration-300
                                ${hoveredCat === category.uuid ? 'text-stone-300' : 'text-stone-500'}
                                `}>
                                {category.description}
                                </div>
                            </div>
                            </button>
                        ))}
                        </div>
                    </div>

                    
                    <div className="h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent mx-6" />

                    
                    <div className="px-8 py-6">
                        <p className="text-xs text-stone-500 font-medium uppercase tracking-wider mb-3">Bond Community Spaces</p>
                        <div className="flex items-center gap-3">
                        <a 
                            href="https://instagram.com/thebondcompany" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 to-rose-500 flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
                        >
                            <Instagram className="w-5 h-5 text-white" />
                        </a>
                        
                        <a 
                            href="https://tiktok.com/@thebondcompany" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-lg bg-stone-900 flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
                        >
                            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                            </svg>
                        </a>
                        
                        <a 
                            href="#" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-sky-600 flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
                        >
                            <Send className="w-5 h-5 text-white" />
                        </a>
                        </div>
                    </div>

                    
                    <div className="h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent mx-6" />

                    
                    <div className="pt-6 pb-10 px-8">
                        <p className="text-xs text-stone-500 font-medium uppercase tracking-wider mb-4">More Resources</p>
                        <div className="flex items-center gap-3">
                        {morelinks.map((link, idx) => (
                            <React.Fragment key={link.id}>
                            <a
                                href={link.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs uppercase text-stone-600 hover:text-stone-900 transition-colors font-medium"
                            >
                                {link.name}
                            </a>
                            {idx < morelinks.length - 1 && (
                                <div className="w-1 h-1 rounded-full bg-stone-400" />
                            )}
                            </React.Fragment>
                        ))}
                        </div>
                    </div>
                    </div>
                )}
              </div>

              {selectedCat && (
                <div className="p-4 bg-gradient-to-br from-stone-50 to-white rounded-xl shadow-sm border-2 border-stone-200 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <p className="text-[10px] text-stone-500 mb-1 uppercase tracking-wide">Now exploring</p>
                  <p className="text-base font-semibold text-stone-900 flex items-center gap-2">
                    <span className="text-xl">{selectedCat.icon}</span>
                    {selectedCat.name}
                  </p>
                </div>
              )}
        </>
    )
}