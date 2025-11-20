'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Flame, Sticker } from 'lucide-react';

const posts = [
  {
    title: "The Refrigerator Theory of Self-Care",
    description: "Why your emotional well-being works exactly like keeping groceries fresh",
    category: "Mental Models",
    readTime: "8 min",
    author: "Sarah Chen",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80"
  },
  {
    title: "Pressure Cooker Feelings",
    description: "Understanding emotional release through kitchen physics",
    category: "Emotion",
    readTime: "6 min",
    author: "Marcus Webb",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
  },
  {
    title: "The Battery Metaphor",
    description: "Why you can't pour from an empty cup",
    category: "Energy",
    readTime: "5 min",
    author: "Emma Taylor",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80"
  }
];

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  return (
    <section className="px-6 md:px-12 py-36 md:py-48 max-w-7xl mx-auto bg-background">
      {/* Header Section */}
      <motion.div
        className="mb-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        

        {/* Main Headline */}
       
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
        <div className="lg:w-1/2">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.95] gradient-text pb-2">
            Sticky notes for <span className="italic font-light">your soul's</span> fridge
          </h1>
        </div>
        
        <div className="lg:w-1/2 flex flex-col justify-center">
          
        <div className="border-l-2 border-slate-900 pl-8 mb-8">
          <div>
            <p className="text-xl font-light text-stone-500 leading-tight mb-4 flex items-center gap-3">
              <Sticker className="w-12 h-12 stroke-[2] stroke-stone-400" />
              Understand your emotions through simple, unforgettable analogies.
            </p>

            <p className="text-base text-stone-400 leading-relaxed">
              Updated often. Meant to be revisited. Built to stay with you.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 px-6 py-4 bg-primary text-primary-foreground text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity rounded-full flex items-center justify-center gap-2">
                BEGIN READING
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-6 py-4 border-2 border-primary text-primary text-sm font-semibold tracking-wide hover:bg-primary hover:text-primary-foreground transition-all rounded-full">
                Practice
              </button>
              <button className="px-6 py-4 border-2 border-primary text-primary text-sm font-semibold tracking-wide hover:bg-primary hover:text-primary-foreground transition-all rounded-full">
                Subscribe
              </button>
            </div>
        </div>
        </div>
      </div>
      </motion.div>

      {/* Bento Grid Layout */}
      <motion.div
        className="grid lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Featured Article - Large Card */}
        <motion.div
          className="lg:col-span-2 group cursor-pointer"
          variants={itemVariants}
        >
          <div className="relative h-[550px] overflow-hidden mb-8 rounded-3xl">
            <motion.img
              src={posts[0].image}
              alt={posts[0].title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute top-6 left-6">
              <span className="px-4 py-2 bg-amber-400 text-foreground text-xs font-bold tracking-wider flex items-center gap-1.5 rounded-full">
                <Flame className="w-3.5 h-3.5" /> FEATURED STORY
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono tracking-wider">
              <span>{posts[0].category.toUpperCase()}</span>
              <span>·</span>
              <span>{posts[0].readTime.toUpperCase()}</span>
            </div>
            <h2 className="font-bold text-5xl lg:text-5xl text-foreground leading-tight">{posts[0].title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{posts[0].description}</p>
            <button className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all group/btn">
              <span className="text-sm tracking-wide">READ ARTICLE</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Side Articles - Smaller Cards */}
        <div className="space-y-8">
          {posts.slice(1, 3).map((post, idx) => (
            <motion.div key={idx} className="group cursor-pointer" variants={itemVariants}>
              <div className="relative h-[240px] overflow-hidden mb-4 rounded-3xl">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              <div className="space-y-3">
                <div className="text-xs text-muted-foreground font-mono tracking-wider">
                  {post.category.toUpperCase()}
                </div>
                <h3 className="font-bold text-2xl text-foreground leading-tight">{post.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{post.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
