import { Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useMemo } from 'react';

export default function MasonryBlog() {
  const posts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80",
      category: "mindfulness",
      date: "Nov 18, 2024",
      title: "Finding Peace in Daily Moments",
      excerpt: "Discover how small mindful practices throughout your day can transform your emotional wellbeing and bring lasting calm.",
      size: "lg" // lg = tall card with more content
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
      category: "practice",
      date: "Nov 15, 2024",
      title: "The Art of Being Present",
      excerpt: "Learn practical techniques to anchor yourself in the present moment.",
      size: "sm" // sm = compact card
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80",
      category: "story",
      date: "Nov 12, 2024",
      title: "Journey to Self-Compassion",
      excerpt: "A personal story of learning to treat yourself with the same kindness you show to others, even during difficult times.",
      size: "md" // md = medium card
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?w=800&q=80",
      category: "lean",
      date: "Nov 10, 2024",
      title: "Small Steps, Big Changes",
      excerpt: "Why tiny daily habits create lasting transformation in your mental health journey.",
      size: "md"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      category: "mindfulness",
      date: "Nov 8, 2024",
      title: "Breathe",
      excerpt: "Quick breathing exercises for instant calm.",
      size: "sm"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80",
      category: "story",
      date: "Nov 5, 2024",
      title: "Breaking Free from Perfectionism",
      excerpt: "How I learned to embrace imperfection and found freedom in the process. A journey from constant self-criticism to self-acceptance.",
      size: "lg"
    }
  ];

  // Split posts into two columns for masonry layout
  const columns = useMemo(() => {
    const col1 = [];
    const col2 = [];
    
    posts.forEach((post, index) => {
      if (index % 2 === 0) {
        col1.push(post);
      } else {
        col2.push(post);
      }
    });
    
    return [col1, col2];
  }, [posts]);

  // Size mapping for card heights
  const sizeClasses = {
    sm: "h-auto", // Compact
    md: "h-auto", // Medium
    lg: "h-auto"  // Tall - will naturally be taller due to content
  };

  const excerptLines = {
    sm: "line-clamp-2",
    md: "line-clamp-3", 
    lg: "line-clamp-5"
  };

  const imageAspects = {
    sm: "aspect-[16/9]",
    md: "aspect-[4/3]",
    lg: "aspect-[5/4]"
  };

  const CardContent = ({ post, index }) => (
    <motion.article
      key={post.id}
      className={`group bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 cursor-pointer mb-8 ${sizeClasses[post.size]}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      {/* Image Container */}
      <div className={`relative ${imageAspects[post.size]} overflow-hidden bg-gradient-to-br from-stone-100 to-stone-200`}>
         <motion.img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover brightness-95 contrast-100 saturate-90 grayscale-[20%] group-hover:brightness-110 group-hover:saturate-130 group-hover:grayscale-0 transition-all duration-500"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        
        {/* Moody gradient overlay - stays on bottom even on hover for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-stone-800/20 to-transparent group-hover:bg-gradient-to-t group-hover:from-black/70 group-hover:via-transparent group-hover:to-transparent transition-all duration-500" />
       
        {/* Category and Date */}
        <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center justify-between">
          <span className="text-white text-xs font-semibold tracking-wide bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
            # {post.category}
          </span>
          <span className="text-white/95 text-sm font-medium flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full">
            <Clock size={14} strokeWidth={2.5} />
            {post.date}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        <h2 className={`font-inter font-extrabold text-[#464169] mb-3 leading-tight group-hover:text-[#5a5187] transition-colors duration-300 ${
          post.size === 'sm' ? 'text-2xl' : post.size === 'md' ? 'text-3xl' : 'text-4xl'
        }`}>
          {post.title}
        </h2>
        
        <p className={`font-lora text-[#464169] text-lg leading-relaxed mb-5 ${excerptLines[post.size]}`}>
          {post.excerpt}
        </p>
     </div>
    </motion.article>
  );

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Column 1 */}
            <div className="flex flex-col">
                {columns[0].map((post, index) => (
                    <CardContent key={post.id} post={post} index={index * 2} />
                ))}
            </div>
            
            {/* Column 2 */}
            <div className="flex flex-col">
                {columns[1].map((post, index) => (
                <CardContent key={post.id} post={post} index={index * 2 + 1} />
                ))}
            </div>
        </div>
   );
}