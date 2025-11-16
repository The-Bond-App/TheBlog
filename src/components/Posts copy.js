'use client'

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, X, Map, ChevronDown } from 'lucide-react';
import { categories, categoryMap } from '../constants/categories';


import Sitemap from '../ui/Sitemap'

const mockPosts = [
  {
    id: 1,
    title: "The Art of Letting Go",
    excerpt: "Sometimes the hardest thing and the right thing are the same. Learning to release what no longer serves us opens doors to unexpected growth.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    category: 'Healing',
    readTime: 8,
    date: '2025-11-05',
  },
  {
    id: 2,
    title: "Finding Your Voice",
    excerpt: "Your story matters. Here's how to start telling it with confidence and authenticity.",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&q=80",
    category: 'Growth',
    readTime: 6,
    date: '2025-11-04',
  },
  {
    id: 3,
    title: "The Power of Pause",
    excerpt: "In a world that glorifies hustle, rest becomes a radical act of self-care.",
    image: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=1200&q=80",
    category: 'Mindfulness',
    readTime: 5,
    date: '2025-11-03',
  },
  {
    id: 4,
    title: "Building Deeper Connections",
    excerpt: "Moving beyond small talk to create relationships that truly nourish the soul.",
    image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=1200&q=80",
    category: 'Connection',
    readTime: 7,
    date: '2025-11-02',
  },
  {
    id: 5,
    title: "Creative Courage",
    excerpt: "What happens when you give yourself permission to create without judgment.",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&q=80",
    category: 'Creativity',
    readTime: 9,
    date: '2025-11-01',
  },
  {
    id: 6,
    title: "The Long Road Home",
    excerpt: "Sometimes the journey to yourself takes a lifetime. And that's perfectly okay.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80",
    category: 'Journey',
    readTime: 10,
    date: '2025-10-31',
  },
  {
    id: 7,
    title: "Embracing Imperfection",
    excerpt: "The beauty of being human lies in our flaws, not despite them.",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&q=80",
    category: 'Healing',
    readTime: 6,
    date: '2025-10-30',
  },
  {
    id: 8,
    title: "The Courage to Begin Again",
    excerpt: "Every ending is an invitation to start fresh with wisdom earned.",
    image: "https://images.unsplash.com/photo-1476673160081-cf065607f449?w=1200&q=80",
    category: 'Growth',
    readTime: 7,
    date: '2025-10-29',
  },
  {
    id: 9,
    title: "Stillness in Motion",
    excerpt: "Finding peace doesn't mean stopping—it means moving with intention.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    category: 'Mindfulness',
    readTime: 5,
    date: '2025-10-28',
  },
  {
    id: 10,
    title: "The Language of Listening",
    excerpt: "True connection begins when we hear what isn't being said.",
    image: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=1200&q=80",
    category: 'Connection',
    readTime: 8,
    date: '2025-10-27',
  },
  {
    id: 11,
    title: "Breaking Through Creative Blocks",
    excerpt: "What to do when inspiration feels a million miles away.",
    image: "https://images.unsplash.com/photo-1483086431886-3590a88317fe?w=1200&q=80",
    category: 'Creativity',
    readTime: 9,
    date: '2025-10-26',
  },
  {
    id: 12,
    title: "Mountains and Valleys",
    excerpt: "Life's rhythm includes both peaks and low points—both are essential.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    category: 'Journey',
    readTime: 10,
    date: '2025-10-25',
  },
];



function PostCard({ post, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article 
      onClick={onClick}
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="space-y-4">
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-stone-100">
          <img
            src="https://images.unsplash.com/photo-1761839257046-84e95464cc52?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt={post.title}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? 'scale-105' : 'scale-100'
            }`}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-stone-500">
            <span className="px-2 py-1 bg-stone-100 rounded-full">{post.category}</span>
            <span>{post.readTime} min</span>
          </div>

          <h3 className="text-xl font-semibold text-stone-900 leading-tight group-hover:text-stone-600 transition-colors">
            {post.title}
          </h3>

          <p className="text-stone-600 text-sm leading-relaxed line-clamp-2">
            {post.description}
          </p>
        </div>
      </div>
    </article>
  );
}


const primaryCategories = categories.slice(0, 4);
const secondaryCategories = categories.slice(4);


export default function Posts() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [heroCategory, setHeroCategory] = useState('all');
  const [showSitemap, setShowSitemap] = useState(false);
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);

  const heroPost = posts.find(p => p.category === heroCategory) || posts[0];
  console.log(heroPost)
  
  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(p => p.category === selectedCategory);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setHeroCategory(category === 'All' ? 'Healing' : category);
  };

  const handlePostClick = (post) => {
    setSelectedCategory(post.category);
    setHeroCategory(post.category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



const heroRef = useRef(null);
const { scrollYProgress } = useScroll({
  target: heroRef,
  offset: ["start start", "end start"]
});

const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 0]);


  return (
    <div className="min-h-screen bg-white">
      
      {/* Simple Hero */}
      <section className="relative">
        <div ref={heroRef} className="h-[60vh] relative overflow-hidden bg-stone-900">
          <motion.div 
            key={heroPost.id} 
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ y }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1761258772385-66e51635cf84?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={heroPost.title}
              className="w-full h-full object-cover"
              style={{ opacity: imageOpacity }}
            />
          </motion.div>
          <div className="relative h-full flex items-end">
            <div className="max-w-6xl mx-auto px-6 pb-16 w-full">
              <motion.div 
                key={heroPost.id} 
                className="max-w-2xl space-y-4"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.span 
                  className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-base font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {heroPost.category}
                </motion.span>
                
                <motion.h1 
                  className="text-5xl font-bold text-white leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {heroPost.title}
                </motion.h1>
                
                <motion.p 
                  className="text-xl text-white/90 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                > 
                  {heroPost.description}
                </motion.p>
                
                <motion.button 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-stone-900 rounded-full font-medium hover:bg-stone-100 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read story
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Hero Category Tabs */}
        <div className="bg-stone-900 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6" style={{border: '3px solid yellow'}}>
            <div className="flex items-center justify-between py-4">
             
              <button
                key="all"
                onClick={() => {
                  setHeroCategory('all');
                  setSelectedCategory('all');
                }}
                className={`px-6 py-2 rounded-full text-sm hover:cursor-pointer font-medium whitespace-nowrap transition-all ${
                  heroCategory === 'all'
                    ? 'bg-white text-stone-900'
                    : 'text-white/70 hover:text-white hover:bg-amber-50/10'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span>All Posts</span>
                </span>
              </button>
 
              <div className="flex gap-2 overflow-x-auto scrollbar-hide">

              {primaryCategories.map((cat, index) => (
              <button
                  key={index}
                  onClick={() => {
                    setHeroCategory(cat.name);
                    setSelectedCategory(cat.name);
                  }}
                  className={`px-5 py-2 rounded-full text-base hover:cursor-pointer font-medium whitespace-nowrap transition-all ${
                    heroCategory === cat.name
                      ? 'bg-white/90 text-stone-900'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    
                    <span>{cat.name}</span>
                  </span>
                </button>

                ))}
                {/* More dropdown for remaining categories */}
            
              <button
                onClick={() => setShowMoreDropdown(!showMoreDropdown)}
                className="pl-3 text-sm text-amber-50/70 hover:text-amber-50 hover:cursor-pointer font-medium whitespace-nowrap transition-colors transition-all flex items-center"
              >
                More
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${showMoreDropdown ? 'rotate-180' : ''}`} />
              </button>
               <button
                onClick={() => setShowSitemap(true)}
                className="pl-4 flex items-center hover:cursor-pointer text-amber-50/60 hover:text-amber-50 transition-colors"
              >
                <Map className="w-4 h-4" />
              </button>

              {showMoreDropdown && (
                <>
                  {/* Backdrop to close dropdown */}
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setShowMoreDropdown(false)}
                  />
                  
                  {/* Dropdown Menu */}
                  <div className="absolute top-full right-0 mr-24 w-72 bg-white rounded-2xl shadow-xl border border-stone-200 py-3 z-20">
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
      </section>

      
      {showSitemap && (
         <Sitemap
          onClose={() => setShowSitemap(false)}
          onSelectCategory={(uuid) => {
            setSelectedCategory(uuid);
            setShowSitemap(false);
          }}
        />
      )}

      {/* Posts Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-stone-500 mb-4">No stories in {selectedCategory}</p>
            <button
              onClick={() => handleCategoryChange('All')}
              className="px-6 py-2 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-800 transition-colors"
            >
              View all
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filteredPosts.map((post) => (
              <PostCard 
                key={post.id} 
                post={post} 
                onClick={() => handlePostClick(post)}
              />
            ))}
          </div>
        )}
      </section>

      <style jsx>{`
        .hero-transition {
          animation: fadeIn 0.8s ease-out;
        }
        
        .hero-content-transition {
          animation: slideUp 0.8s ease-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(1.05);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}