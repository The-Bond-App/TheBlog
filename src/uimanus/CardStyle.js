import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const  CardStyle = () => {
  const [styleOption, setStyleOption] = useState(1);

  const posts = [
    {
      id: 1,
      title: "The Future of Sustainable Architecture",
      excerpt: "Exploring innovative design principles that merge environmental consciousness with cutting-edge aesthetics.",
      category: "Design",
      date: "Nov 15, 2024",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=500&fit=crop"
    },
    {
      id: 2,
      title: "Mastering Remote Team Collaboration",
      excerpt: "Proven strategies and tools for building cohesive distributed teams in the modern workplace.",
      category: "Business",
      date: "Nov 12, 2024",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop"
    },
    {
      id: 3,
      title: "Machine Learning in Healthcare",
      excerpt: "How artificial intelligence is revolutionizing patient care and medical diagnostics.",
      category: "Technology",
      date: "Nov 10, 2024",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop"
    }
  ];

  const renderOverlay = (post) => {
    switch(styleOption) {
      case 1:
        // Top-left corner stacked
        return (
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            <span className="bg-[#464169] text-white px-4 py-1.5 text-sm font-semibold rounded-md shadow-lg">
              {post.category}
            </span>
            <span className="bg-white/95 text-[#464169] px-4 py-1.5 text-sm font-medium rounded-md shadow-lg flex items-center gap-1.5">
              <Clock size={14} />
              {post.date}
            </span>
          </div>
        );
      
      case 2:
        // Top-right corner stacked
        return (
          <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
            <span className="bg-[#464169] text-white px-4 py-1.5 text-sm font-semibold rounded-md shadow-lg">
              {post.category}
            </span>
            <span className="bg-white/95 text-[#464169] px-4 py-1.5 text-sm font-medium rounded-md shadow-lg flex items-center gap-1.5">
              <Clock size={14} />
              {post.date}
            </span>
          </div>
        );
      
      case 3:
        // Bottom gradient overlay
        return (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-12">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="bg-white text-[#464169] px-4 py-1.5 text-sm font-semibold rounded-md">
                {post.category}
              </span>
              <span className="text-white text-sm font-medium flex items-center gap-1.5">
                <Clock size={14} />
                {post.date}
              </span>
            </div>
          </div>
        );
      
      case 4:
        // Top banner full-width
        return (
          <div className="absolute top-0 left-0 right-0 bg-[#464169]/95 backdrop-blur-sm px-6 py-3 flex items-center justify-between">
            <span className="text-white text-sm font-semibold">
              {post.category}
            </span>
            <span className="text-white text-sm font-medium flex items-center gap-1.5">
              <Clock size={14} />
              {post.date}
            </span>
          </div>
        );
      
      case 5:
        // Floating badges center
        return (
          <div className="absolute inset-0 flex items-center justify-center gap-3">
            <span className="bg-[#464169] text-white px-5 py-2 text-sm font-semibold rounded-full shadow-xl">
              {post.category}
            </span>
            <span className="bg-white text-[#464169] px-5 py-2 text-sm font-medium rounded-full shadow-xl flex items-center gap-2">
              <Clock size={14} />
              {post.date}
            </span>
          </div>
        );
      
      case 6:
        // Bottom-left corner side-by-side
        return (
          <div className="absolute bottom-4 left-4 flex items-center gap-3">
            <span className="bg-[#464169] text-white px-4 py-1.5 text-sm font-semibold rounded-md shadow-lg">
              {post.category}
            </span>
            <span className="bg-white/95 text-[#464169] px-4 py-1.5 text-sm font-medium rounded-md shadow-lg flex items-center gap-1.5">
              <Clock size={14} />
              {post.date}
            </span>
          </div>
        );
      
      case 7:
        // Vertical ribbon on left edge
        return (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#464169] text-white px-3 py-6 rounded-r-md shadow-lg">
            <div className="flex flex-col items-center gap-3">
              <span className="text-sm font-semibold [writing-mode:vertical-rl] rotate-180">
                {post.category}
              </span>
              <div className="w-px h-8 bg-white/30"></div>
              <span className="text-xs font-medium [writing-mode:vertical-rl] rotate-180">
                {post.date}
              </span>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Style Selector */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-[#464169] mb-4">Blog Card Styles</h1>
          <p className="text-[#464169]/70 mb-6">Choose a style to see different overlay options</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[1, 2, 3, 4, 5, 6, 7].map((option) => (
              <button
                key={option}
                onClick={() => setStyleOption(option)}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                  styleOption === option
                    ? 'bg-[#464169] text-white shadow-lg scale-105'
                    : 'bg-white text-[#464169] hover:bg-[#464169]/10 border border-stone-200'
                }`}
              >
                Style {option}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <motion.article
              key={post.id}
              className="bg-white rounded-xl border border-stone-200 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div 
                className="aspect-[16/10] overflow-hidden bg-gray-200 relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                {renderOverlay(post)}
              </motion.div>
              
              {/* Content */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-[#464169] mb-3 leading-tight">
                  {post.title}
                </h2>
                <p className="text-[#464169]/80 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Style Descriptions */}
        <div className="mt-12 bg-white rounded-xl border border-stone-200 p-8">
          <h3 className="text-xl font-bold text-[#464169] mb-4">Style Descriptions</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-[#464169]/70">
            <div><strong>Style 1:</strong> Top-left stacked - Clean & traditional</div>
            <div><strong>Style 2:</strong> Top-right stacked - Alternative alignment</div>
            <div><strong>Style 3:</strong> Bottom gradient - Cinematic magazine style</div>
            <div><strong>Style 4:</strong> Top banner - Bold full-width header</div>
            <div><strong>Style 5:</strong> Floating center - Dramatic & eye-catching</div>
            <div><strong>Style 6:</strong> Bottom-left horizontal - Compact layout</div>
            <div><strong>Style 7:</strong> Vertical ribbon - Unique editorial style</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default  CardStyle;