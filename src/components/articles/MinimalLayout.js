'use client';
import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Twitter, Facebook, Linkedin, Link2, Instagram } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

// Mock post data for demo
const mockPost = {
  title: "Finding Peace in the Everyday Chaos",
  description: "A journey through mindfulness and the art of being present in our fast-paced world.",
  category: "Mindfulness",
  date: "Nov 13, 2025",
  readTime: "8 min",
  image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
  instagramPostUrl: "https://instagram.com/sarahchen",
  content: `In the midst of our bustling lives, we often forget to pause and simply breathe. The art of mindfulness isn't about escaping reality—it's about embracing it fully, with all its imperfections and beauty.

Every moment offers an opportunity for presence. Whether you're sipping your morning coffee, walking through the park, or having a conversation with a friend, these moments contain infinite depth when we choose to truly experience them.

The practice begins with awareness. Notice the sensations in your body, the thoughts passing through your mind, the sounds around you. Without judgment, without trying to change anything—just observe.

This simple act of observation creates space. Space between stimulus and response. Space to choose how we want to engage with our lives. Space to find peace, even in chaos.

Remember, mindfulness isn't about perfection. It's about returning, again and again, to the present moment. Each return is a victory, each breath a new beginning.`
};

// Author data
const author = {
  name: "Sarah Chen",
  bio: "Writer, mindfulness teacher, and believer in the power of honest storytelling.",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
  social: {
    twitter: "@sarahchen",
    instagram: "@sarahchen",
    linkedin: "sarahchen"
  }
};

export default function MinimalLayout({ post = mockPost }) {
  const [copied, setCopied] = useState(false);
  
  const heroRef = useRef(null);
const { scrollYProgress } = useScroll({
  target: heroRef,
  offset: ["start start", "end start"]
});

const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 0]);
 
  

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = post.title;
    
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
    };
    
    if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } else {
      window.open(urls[platform], '_blank', 'width=600,height=400');
    }
  };

  const handleBack = () => {
    console.log('Back to stories');
  };

  return (
    <div className="bg-white min-h-screen" ref={heroRef}>
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="border-b border-gray-200 sticky top-0 bg-white/80 backdrop-blur-md z-10"
      >
        <div className="max-w-5xl mx-auto px-6 py-6">
          <motion.button 
            onClick={handleBack}
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to stories</span>
          </motion.button>
        </div>
      </motion.header>

      {/* Hero Image with Parallax */}
      <motion.div 
        className="relative h-[60vh] min-h-[400px] bg-stone-900 overflow-hidden group"
       
      >
        <motion.div 
          key={post.id || 'hero-image'}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ y }}
        >
          <motion.img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            style={{ opacity: imageOpacity }}
          />
        </motion.div>
        
        {/* Gradient overlay - darker on hover */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70"
          variants={{
            initial: { opacity: 0.8 },
            hover: { opacity: 1 }
          }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Title overlay - always visible */}
        <div className="absolute inset-0 flex items-end justify-center pb-16 px-6">
          <motion.div
            className="text-center max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider mb-4"
            >
              {post.category}
            </motion.div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl leading-tight">
              {post.title}
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-lg text-white/90 mt-4"
            >
              {post.date} · {post.readTime} read
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        {/* Description */}
        <p className="text-2xl text-gray-600 mb-12 leading-relaxed font-light">
          {post.description}
        </p>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p 
              key={index}
              className="text-gray-700 leading-relaxed mb-6 text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Share Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-100"
        >
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">Share</h3>
          <div className="flex gap-3">
            {[
              { platform: 'twitter', Icon: Twitter, label: 'Twitter' },
              { platform: 'facebook', Icon: Facebook, label: 'Facebook' },
              { platform: 'linkedin', Icon: Linkedin, label: 'LinkedIn' },
              { platform: 'copy', Icon: Link2, label: 'Copy link' }
            ].map(({ platform, Icon, label }) => (
              <motion.button
                key={platform}
                onClick={() => handleShare(platform)}
                whileHover={{ scale: 1.1, rotate: platform === 'copy' ? 0 : 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors relative"
                aria-label={label}
              >
                <Icon className="w-5 h-5 text-gray-700" />
                {copied && platform === 'copy' && (
                  <motion.span 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-gray-900 text-white px-2 py-1 rounded whitespace-nowrap"
                  >
                    Copied!
                  </motion.span>
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Author Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 bg-gray-50 rounded-2xl"
        >
          <div className="flex gap-6 items-start">
            <motion.img 
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              src={author.image} 
              alt={author.name}
              className="w-16 h-16 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {author.name}
              </h3>
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                {author.bio}
              </p>
              <div className="flex gap-4 text-sm">
                {['Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                  <motion.a 
                    key={social}
                    whileHover={{ y: -2 }}
                    href="#" 
                    className="text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    {social}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Instagram CTA with animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-slate-700 p-12 mt-12"
        >
          {/* Animated gradient orbs */}
          <motion.div 
            animate={{ 
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl" 
          />
          <motion.div 
            animate={{ 
              x: [0, -30, 0],
              y: [0, 30, 0],
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-500/30 to-orange-500/30 rounded-full blur-3xl" 
          />
          
          <div className="relative text-center max-w-2xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-sm font-medium mb-6"
            >
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-green-400" 
              />
              Join the conversation
            </motion.div>
            
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
            >
              What's your perspective?
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-lg mb-8 leading-relaxed"
            >
              Every viewpoint enriches the dialogue. Share yours or discover insights from others in our Instagram community.
            </motion.p>
            
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={post.instagramPostUrl || "https://instagram.com/sarahchen"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-semibold transition-all duration-200 "
            >
              <Instagram className="w-5 h-5" />
              <span>Continue on Instagram</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </div>
        </motion.div>

        
      </article>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
            <p>© 2025 Wellbeing. All rights reserved.</p>
            <div className="flex gap-8">
              {['Privacy', 'Terms', 'Contact'].map((link) => (
                <motion.a 
                  key={link}
                  whileHover={{ y: -2 }}
                  href="#" 
                  className="hover:text-gray-900 transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}