'use client';
import { motion } from 'framer-motion';
import { Clock, Calendar, LifeBuoy } from 'lucide-react';

const posts = [
  {
    title: "The Mirror Effect in Relationships",
    excerpt: "Why we're drawn to people who reflect parts of ourselves",
    cat: "Relationships",
    date: "Nov 12, 2025",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    h: 320,
    readTime: "5 min",
    author: "Sarah Chen"
  },
  {
    title: "Emotional Granularity",
    excerpt: "The power of naming your feelings with precision",
    cat: "Self-Awareness",
    date: "Nov 10, 2025",
    img: "https://images.unsplash.com/photo-1499728603263-13726abce5fd?w=800&h=600&fit=crop",
    h: 320,
    readTime: "6 min",
    author: "Marcus Webb"
  },
  {
    title: "The Comfort Zone Paradox",
    excerpt: "Why staying comfortable keeps you uncomfortable",
    cat: "Growth",
    date: "Nov 8, 2025",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1200&fit=crop",
    h: 520,
    readTime: "4 min",
    author: "Emma Taylor"
  },
  {
    title: "Window of Tolerance",
    excerpt: "Understanding your nervous system's sweet spot",
    cat: "Self-Awareness",
    date: "Nov 7, 2025",
    img: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&h=700&fit=crop",
    h: 370,
    readTime: "7 min",
    author: "James Cole"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function ArticlesGrid() {
  return (
    <section className="py-36 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex justify-between items-end mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="font-bold text-5xl md:text-6xl text-foreground mb-3">
              All Articles
            </h2>
            <p className="text-muted-foreground font-light">Latest insights and stories</p>
          </div>
          <button className="p-3 bg-amber-400 hover:bg-amber-500 transition-colors shadow-lg hover:scale-110 transition-transform rounded-full hidden md:flex items-center justify-center">
            <LifeBuoy className="w-6 h-6 text-foreground" />
          </button>
        </motion.div>

        <motion.div
          className="columns-1 sm:columns-2 lg:columns-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {posts.map((post, i) => (
            <motion.article key={i} className="break-inside-avoid mb-8 group cursor-pointer" variants={itemVariants}>
              <div className="relative overflow-hidden rounded-3xl">
                <motion.img
                  src={post.img}
                  alt={post.title}
                  className="w-full transition-all duration-700 group-hover:scale-110"
                  style={{ height: `${post.h}px`, objectFit: 'cover' }}
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/70 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="text-xs font-bold text-amber-400 tracking-wider font-mono">{post.cat.toUpperCase()}</span>
                  </div>

                  <h3 className="font-bold text-3xl text-white mb-2 leading-tight">{post.title}</h3>
                  <p className="text-white/90 text-base leading-relaxed mb-3 font-light">{post.excerpt}</p>

                  <div className="text-white/70 text-xs font-mono tracking-wide flex items-center gap-2 flex-wrap">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime.toUpperCase()}
                    <span className="text-white/40">·</span>
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date.toUpperCase()}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
