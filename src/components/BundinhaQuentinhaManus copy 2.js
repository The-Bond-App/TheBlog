'use client'
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import { Menu, X, Mail, ArrowRight, ShoppingBag, Users, Sticker, Facebook, Instagram, Linkedin, Youtube, Globe, MicVocal, Calendar, Clock } from 'lucide-react';
import HighlightPost from '../uimanus/HighlightPost'


//import Navigation from './Navigation';
const blogPosts = [
  {
    id: 1,
    title: "The Power of Singular Focus: Make One Idea Your Life",
    category: "Exercise",
    date: "Dec 22, 2023",
    author: "Anna Joe",
    excerpt: '"Take up one idea. Make that one idea your life" encapsulates the profound wisdom of Swami Vivekananda, urging individuals to embrace the transformative potential inherent in singular focus.',
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&q=80",
    
  },
  {
    id: 2,
    title: "The Liberating Power of One Right Move",
    category: "Learn",
    date: "Dec 22, 2023",
    author: "Jack Novak",
    excerpt: '"Don\'t worry about failure; you only have to be right once" is not just a motivational adage but a powerful philosophy that reframes our perspective on setbacks and risk-taking.',
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&q=80",
    
  },
  {
    id: 3,
    title: "Mastering the Art of Minimalism",
    category: "Exercise",
    date: "Dec 20, 2023",
    author: "Sarah Chen",
    excerpt: 'Minimalism is not about having less, it\'s about making room for more of what matters. Discover how simplicity can transform your creative process.',
    image: "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=800&q=80",
    
  },
  {
    id: 4,
    title: "The Psychology of Color in Design",
    category: "Story",
    date: "Dec 18, 2023",
    author: "Marcus Reed",
    excerpt: 'Colors speak louder than words. Understanding the emotional impact of color choices can elevate your design work from good to extraordinary.',
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80",
    
  },
  {
    id: 5,
    title: "Building Habits That Last",
    category: "Story",
    date: "Dec 15, 2023",
    author: "Emma Wilson",
    excerpt: 'Small changes lead to remarkable results. Learn the science behind habit formation and how to make lasting changes in your creative practice.',
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80",
    
  },
  {
    id: 6,
    title: "The Future of Interface Design",
    category: "Learn",
    date: "Dec 12, 2023",
    author: "David Park",
    excerpt: 'As technology evolves, so does the way we interact with digital products. Explore emerging trends that will shape the next decade of design.',
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    
  }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Compact Navbar - Always Visible */}
    <nav className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-xl bg-[#f2f2f7]/60 `}>
      
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
           <a href="/" className="flex items-center">
            <span className="text-2xl font-semibold text-gray-900">TheBond</span>
            <span className="text-xl font-serif font-light text-rose-600"> &nbsp;Company </span>
          </a>


            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100/50 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Expanded Menu Overlay */}
      {isOpen && (
         <div
    className="fixed left-0 right-0 top-20 h-[40vh] z-40 backdrop-blur-xl bg-[#f2f2f7]/60 overflow-y-auto"
    
  >
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-full">
      <div className="w-full">
              {/* Left Side - Tagline and Social */}
              <div className="mb-12 lg:mb-0">
                <h2 className="text-[46px] font-extrabold text-gray-900 leading-tighter mb-4">
                  Don't take it.
                </h2>
                
                {/* Social Links */}
                <div className="flex items-center gap-2">
                  <a href="#" className="p-3 bg-slate-100 hover:bg-stone-800  rounded-full transition-colors">
                    <Facebook className="w-6 h-6 text-gray-700 hover:text-white" strokeWidth={1.5} />
                  </a>
                  <a href="#" className="p-3 bg-slate-100 hover:bg-stone-800 rounded-full transition-colors">
                    <Instagram className="w-6 h-6 text-gray-700 hover:text-white" strokeWidth={1.5} />
                  </a>
                  <a href="#" className="p-3 bg-slate-100 hover:bg-stone-800 rounded-full transition-colors">
                    <Linkedin className="w-6 h-6 text-gray-700 hover:text-white" strokeWidth={1.5} />
                  </a>
                  <a href="#" className="p-3 bg-slate-100 hover:bg-stone-800 rounded-full transition-colors">
                    <Youtube className="w-6 h-6 text-gray-700 hover:text-white" strokeWidth={1.5} />
                  </a>
                  <a href="#" className="p-3 bg-slate-100 hover:bg-stone-800 rounded-full transition-colors">
                    <Globe className="w-6 h-6 text-gray-700 hover:text-white" strokeWidth={1.5} />
                  </a>
                </div>
              </div>

              {/* Right Side - Navigation Grid */}
              <div className="absolute right-8 top-1/2 -translate-y-1/2">
                <div className="grid grid-cols-2 gap-x-24 gap-y-8 text-right">
                  <a 
                    href="#architecture" 
                    className="text-xl font-medium text-gray-900 hover:text-gray-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Architecture
                  </a>
                  <a 
                    href="#home" 
                    className="text-xl font-medium text-gray-900 hover:text-gray-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </a>
                  <a 
                    href="#design" 
                    className="text-xl font-medium text-gray-900 hover:text-gray-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Design
                  </a>
                  <a 
                    href="#authors" 
                    className="text-xl font-medium text-gray-900 hover:text-gray-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Authors
                  </a>
                  <a 
                    href="#productivity" 
                    className="text-xl font-medium text-gray-900 hover:text-gray-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Productivity
                  </a>
                  <a 
                    href="#contact" 
                    className="text-xl font-medium text-gray-900 hover:text-gray-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Navigation() {
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
        <div className="w-full mx-auto px-20" >
          <div className="grid grid-cols-3 items-center h-16">

            <div className='hidden md:flex items-center gap-1'>
              <h1 className="text-2xl leading-none text-[#464169]">
                <span className=" font-semibold font-inter">Growth</span>{' '}
                <span className="font-normal italic font-serif">Notes</span>
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
                  className="w-10 h-10 object-contain"
                  initial={{ filter: "blur(10px)" }}
                  animate={{ filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
              </motion.a>
            </div>

           
            {/* Desktop Navigation */}
           <div className="hidden md:flex justify-end items-center gap-1">
  <a
    href="#subscribe"
    className="flex items-center gap-2 px-4 py-2 rounded-full text-base text-[#464169] font-medium font-inter transition-all hover:underline hover:decoration-2 hover:underline-offset-4"
  >
    <Mail className="w-4 h-4" />
    Newsletter
  </a>

  <a
    href="https://shop.thebond.company"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-2 rounded-full text-base text-[#464169] font-medium font-inter transition-all hover:underline hover:decoration-2 hover:underline-offset-4"
  >
    <ShoppingBag className="w-4 h-4" />
    Shop
  </a>

  {/* Sitemap only visible on md+ */}
  <a
    href="https://shop.thebond.company"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-2 rounded-full text-base text-[#464169] font-medium font-inter transition-all hover:underline hover:decoration-2 hover:underline-offset-4"
  >
    <MicVocal className="w-4 h-4" />
    Share Your Story
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

export default function BlogGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  return (
    <main className='bg-[#f2f2f7]'>
    <Navigation />
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div  className="relative min-h-[40vh] flex items-center justify-center  overflow-hidden">
        {/* Gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32  to-transparent"></div>
        
        <section className="px-4 py-12 md:pt-20 pb-8 max-w-4xl mx-auto">
          <motion.div
            className="relative text-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-3"
            >
              <h1 className="font-serif tracking-tight text-5xl md:text-6xl text-[#464169]/80">
                Sticky notes for your <span className="block italic gradient-text pb-2"> soul's fridge</span> 
              </h1>
              <p className="text-[20px] font-normal tracking-tight font-inter text-[#464169]/60">
                Emotional truths that don't fade. Explained through analogies you'll actually remember.
              </p>
              
            </motion.div>
          </motion.div>
        </section>
      </div>
      <div className="max-w-6xl mx-auto">
        <HighlightPost />
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {currentPosts.map((post, index) => (
            <>
             <motion.article
              key={post.id}
              className="group bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Image Container - Hero Focus */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-stone-100 to-stone-200">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
                
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                
                {/* Category and Date - Refined positioning */}
                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center justify-between">
                  <span className="text-white text-sm font-semibold tracking-wide bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
                    #{post.category}
                  </span>
                  <span className="text-white/95 text-sm font-medium flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full">
                    <Clock size={14} strokeWidth={2.5} />
                    {post.date}
                  </span>
                </div>
              </div>

              {/* Content - Typography First */}
              <div className="p-7">
                <h2 className="font-inter text-5xl font-extrabold text-[#464169] mb-3 leading-tighter group-hover:text-[#5a5187] transition-colors duration-300">
                  {post.title}
                </h2>
                
                <p className="font-lora text-[#464169] text-medium text-lg leading-relaxed mb-5 line-clamp-3">
                  {post.excerpt}
                </p>

               
              </div>

             
            </motion.article>
            </>
          ))}
        </div>
      </div>
    </div>
    </main>
  );
}