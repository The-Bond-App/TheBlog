'use client'
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import { Compass, Clock } from 'lucide-react';


import Navigation from './Navigation';
import Hero from './Hero'
import RitualSelector from './RitualSelector'
import NewsletterBanner from './NewsletterBanner'
import Footer from './Footer'


const blogPosts = [
  {
    id: 1,
    title: "The Power of Singular Focus: Make One Idea Your Life but this is title",
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


export default function FullPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // * * * * * * * * * * * * * * * * * * * * * * * * * *
  // BEGIN - Handle floating "untangle your feelings" button
  const [showRitualsButton, setShowRitualsButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setShowRitualsButton(scrollPercentage > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToRituals = () => {
    const ritualsSection = document.getElementById('rituals');
    if (ritualsSection) {
      ritualsSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
  // END - Handle floating "untangle your feelings" button
  // * * * * * * * * * * * * * * * * * * * * * * * * * *


  return (
    <main className='bg-[#f2f2f7]'>
       {/** Ritual floating button - will uncomment when enough content 
      <button
        className={`fixed bottom-8 right-8 z-50 bg-[#464169] border-2 border-white/70  hover:cursor-pointer backdrop-blur-sm text-white/90 px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-700 flex items-center gap-2.5 group  ${
          showRitualsButton ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
        }`}
        onClick={scrollToRituals}
      >
        <Compass size={18} className="group-hover:rotate-90 transition-transform duration-500" strokeWidth={1.5} />
        <span className="font-medium text-sm tracking-wide">Untangle Your Feelings</span>
      </button>
      */}

      {/** Navigation */}
      <Navigation />

      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        
        {/** Hero */}
        <Hero />

        {/** Main Posts */}
        <div className="max-w-6xl mx-auto" >
          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24  mb-12 items-start">
            {currentPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="group bg-white overflow-hidden hover:shadow-md transition-all duration-500 cursor-pointer"
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
                <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col items-start gap-2">
                  <span className="text-white/95 text-sm font-semibold tracking-wide bg-black/30 backdrop-blur-xl px-4 py-2 rounded-md">
                    # {post.category}
                  </span>
                  <span className="text-white/95 text-sm font-medium flex items-center gap-2 bg-black/30 backdrop-blur-xl px-4 py-2 rounded-md">
                    <Clock size={14} strokeWidth={2.5} />
                    {post.date}
                  </span>
                </div>
                </div>
                {/* Content - Typography First */}
                <div className="p-9">
                  <h2 className="font-inter text-5xl font-extrabold text-[#5a5187] mb-6 leading-tighter group-hover:text-slate-700 transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="font-lora text-[#464169] text-medium text-xl leading-relaxed mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/** Ritual component - will uncomment when enough content 
        <RitualSelector />*/}
        

      </div>
      <Footer />
    </main>
  );
}