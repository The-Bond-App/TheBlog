import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Flame, ArrowRight, Play } from 'lucide-react';

// Featured posts data
const featuredPosts = [
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
  },
  {
    title: "Anxiety as Static",
    description: "When your nervous system can't find the signal",
    category: "Processing",
    readTime: "4 min",
    author: "James Cole",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80"
  },
  {
    title: "Boundaries as Fences",
    description: "Good neighbors make good emotional health",
    category: "Protection",
    readTime: "6 min",
    author: "Lisa Park",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80"
  }
];

// ========== HERO 1: Minimalist Featured ==========
function Hero1() {
  return (
    <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
      <div className="mb-16">
        <h1 className="font-serif text-7xl md:text-8xl text-slate-900 mb-4 leading-tight">
          Sticky notes for <span className="italic font-light">your soul's</span> fridge
        </h1>
        <p className="text-2xl font-light text-slate-700 mb-8">
          Emotional fundamentals, explained through analogies that stick.
        </p>
        <div className="w-24 h-1 bg-slate-900"></div>
      </div>

      <div className="group cursor-pointer">
        <div className="relative h-96 overflow-hidden mb-8 rounded-2xl">
          <motion.img 
            src={featuredPosts[0].image} 
            alt={featuredPosts[0].title} 
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7 }}
          />
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-sm text-slate-500 font-mono tracking-wider">
            <span>{featuredPosts[0].category.toUpperCase()}</span>
            <span>·</span>
            <span>{featuredPosts[0].readTime.toUpperCase()}</span>
          </div>
          <h2 className="font-serif text-5xl text-slate-900 leading-tight">{featuredPosts[0].title}</h2>
          <p className="text-xl text-slate-600 leading-relaxed">{featuredPosts[0].description}</p>
          <button className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:gap-4 transition-all text-lg mt-4">
            <span>READ ARTICLE</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

// ========== HERO 2: Stacked Cards ==========
function Hero2() {
  return (
    <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
      <div className="mb-16">
        <h1 className="font-serif text-7xl md:text-8xl text-slate-900 mb-4">
          Sticky notes for <span className="italic font-light">your soul's</span> fridge
        </h1>
        <p className="text-2xl font-light text-slate-700">
          Emotional fundamentals, explained through analogies that stick.
        </p>
      </div>

      <div className="space-y-6">
        {featuredPosts.slice(0, 4).map((post, idx) => (
          <motion.div 
            key={idx}
            className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
            whileHover={{ x: 8 }}
          >
            <div className="grid md:grid-cols-4 gap-0">
              <div className="relative h-48 md:h-full min-h-48 overflow-hidden">
                <motion.img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
                <div className="text-xs text-slate-500 font-mono tracking-wider mb-2">
                  {post.category.toUpperCase()} · {post.readTime.toUpperCase()}
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-slate-900 mb-2">{post.title}</h3>
                <p className="text-slate-600 mb-4">{post.description}</p>
                <button className="inline-flex items-center gap-2 text-slate-900 font-medium hover:gap-4 transition-all w-fit">
                  <span>Read</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ========== HERO 3: Grid Showcase ==========
function Hero3() {
  return (
    <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
      <div className="mb-16">
        <h1 className="font-serif text-7xl md:text-8xl text-slate-900 mb-4">
          Sticky notes for <span className="italic font-light">your soul's</span> fridge
        </h1>
        <p className="text-2xl font-light text-slate-700">
          Emotional fundamentals, explained through analogies that stick.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredPosts.map((post, idx) => (
          <motion.div 
            key={idx}
            className="group cursor-pointer"
            whileHover={{ y: -8 }}
          >
            <div className="relative h-64 overflow-hidden mb-4 rounded-xl">
              <motion.img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.6 }}
              />
            </div>
            <div className="space-y-2">
              <div className="text-xs text-slate-500 font-mono tracking-wider">
                {post.category.toUpperCase()} · {post.readTime.toUpperCase()}
              </div>
              <h3 className="font-serif text-xl text-slate-900 leading-tight">{post.title}</h3>
              <p className="text-sm text-slate-600">{post.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ========== HERO 4: Alternating Layout ==========
function Hero4() {
  return (
    <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
      <div className="mb-20">
        <h1 className="font-serif text-7xl md:text-8xl text-slate-900 mb-4">
          Sticky notes for <span className="italic font-light">your soul's</span> fridge
        </h1>
        <p className="text-2xl font-light text-slate-700">
          Emotional fundamentals, explained through analogies that stick.
        </p>
      </div>

      <div className="space-y-20">
        {featuredPosts.slice(0, 3).map((post, idx) => (
          <motion.div 
            key={idx}
            className="group cursor-pointer grid md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            {idx % 2 === 0 ? (
              <>
                <div className="relative h-80 overflow-hidden rounded-2xl">
                  <motion.img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
                <div className="space-y-4">
                  <div className="text-xs text-slate-500 font-mono tracking-wider">
                    {post.category.toUpperCase()} · {post.readTime.toUpperCase()}
                  </div>
                  <h3 className="font-serif text-4xl text-slate-900">{post.title}</h3>
                  <p className="text-lg text-slate-600">{post.description}</p>
                  <button className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:gap-4 transition-all">
                    <span>Read Article</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-4">
                  <div className="text-xs text-slate-500 font-mono tracking-wider">
                    {post.category.toUpperCase()} · {post.readTime.toUpperCase()}
                  </div>
                  <h3 className="font-serif text-4xl text-slate-900">{post.title}</h3>
                  <p className="text-lg text-slate-600">{post.description}</p>
                  <button className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:gap-4 transition-all">
                    <span>Read Article</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
                <div className="relative h-80 overflow-hidden rounded-2xl">
                  <motion.img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ========== HERO 5: Featured + List ==========
function Hero5() {
  return (
    <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
      <div className="mb-16">
        <h1 className="font-serif text-7xl md:text-8xl text-slate-900 mb-4">
          Sticky notes for <span className="italic font-light">your soul's</span> fridge
        </h1>
        <p className="text-2xl font-light text-slate-700">
          Emotional fundamentals, explained through analogies that stick.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 group cursor-pointer">
          <div className="relative h-96 overflow-hidden mb-6 rounded-2xl">
            <motion.img 
              src={featuredPosts[0].image} 
              alt={featuredPosts[0].title} 
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-yellow-400 text-black text-xs font-black tracking-wider">
                ⭐ FEATURED
              </span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-xs text-slate-500 font-mono tracking-wider">
              {featuredPosts[0].category.toUpperCase()} · {featuredPosts[0].readTime.toUpperCase()}
            </div>
            <h2 className="font-serif text-4xl text-slate-900">{featuredPosts[0].title}</h2>
            <p className="text-lg text-slate-600">{featuredPosts[0].description}</p>
          </div>
        </div>

        <div className="space-y-6">
          {featuredPosts.slice(1, 4).map((post, idx) => (
            <motion.div 
              key={idx}
              className="group cursor-pointer pb-6 border-b border-slate-200 last:border-b-0"
              whileHover={{ x: 4 }}
            >
              <div className="text-xs text-slate-500 font-mono tracking-wider mb-2">
                {post.category.toUpperCase()}
              </div>
              <h3 className="font-serif text-lg text-slate-900 leading-tight mb-1">{post.title}</h3>
              <p className="text-xs text-slate-500">{post.readTime} · {post.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ========== HERO 6: Minimal Typography ==========
function Hero6() {
  return (
    <section className="px-6 md:px-12 py-20 max-w-4xl mx-auto">
      <div className="mb-20">
        <h1 className="font-serif text-8xl md:text-9xl text-slate-900 mb-6 leading-tight">
          Sticky notes for <span className="italic font-light">your soul's</span> fridge
        </h1>
        <p className="text-2xl font-light text-slate-700 mb-2">
          Emotional fundamentals, explained through analogies that stick.
        </p>
      </div>

      <div className="space-y-16">
        {featuredPosts.map((post, idx) => (
          <motion.div 
            key={idx}
            className="group cursor-pointer border-l-4 border-slate-900 pl-8 py-2"
            whileHover={{ x: 12 }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="text-xs text-slate-500 font-mono tracking-wider">
                {post.category.toUpperCase()} · {post.readTime.toUpperCase()}
              </div>
              <span className="text-xs text-slate-400 font-mono">{post.author}</span>
            </div>
            <h3 className="font-serif text-3xl text-slate-900 leading-tight mb-2">{post.title}</h3>
            <p className="text-slate-600 text-lg leading-relaxed">{post.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ========== HERO 7: Magazine Layout ==========
function Hero7() {
  return (
    <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div>
          <h1 className="font-serif text-7xl md:text-8xl text-slate-900 mb-4">
            Sticky notes for <span className="italic font-light">your soul's</span> fridge
          </h1>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-2xl font-light text-slate-700 mb-4">
            Emotional fundamentals, explained through analogies that stick.
          </p>
          <p className="text-slate-600">
            A curated collection of mental models and frameworks for understanding yourself.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredPosts.map((post, idx) => (
          <motion.div 
            key={idx}
            className="group cursor-pointer"
            whileHover={{ y: -8 }}
          >
            <div className="relative h-72 overflow-hidden mb-6 rounded-2xl">
              <motion.img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
            </div>
            <div className="space-y-3">
              <div className="text-xs text-slate-500 font-mono tracking-wider">
                {post.category.toUpperCase()} · {post.readTime.toUpperCase()}
              </div>
              <h3 className="font-serif text-2xl text-slate-900 leading-tight">{post.title}</h3>
              <p className="text-slate-600">{post.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ========== HERO 8: Asymmetric Hero ==========
function Hero8() {
  return (
    <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-12 mb-16">
        <div className="md:col-span-2">
          <h1 className="font-serif text-7xl md:text-8xl text-slate-900 mb-4">
            Sticky notes for <span className="italic font-light">your soul's</span> fridge
          </h1>
          <p className="text-2xl font-light text-slate-700">
            Emotional fundamentals, explained through analogies that stick.
          </p>
        </div>
        <div className="flex flex-col justify-end">
          <p className="text-slate-600 text-lg leading-relaxed">
            A curated collection of mental models and frameworks for understanding yourself. Updated daily.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <motion.div 
          className="md:col-span-2 group cursor-pointer"
          whileHover={{ y: -4 }}
        >
          <div className="relative h-96 overflow-hidden mb-6 rounded-2xl">
            <motion.img 
              src={featuredPosts[0].image} 
              alt={featuredPosts[0].title} 
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
            />
          </div>
          <div className="space-y-4">
            <div className="text-xs text-slate-500 font-mono tracking-wider">
              {featuredPosts[0].category.toUpperCase()} · {featuredPosts[0].readTime.toUpperCase()}
            </div>
            <h2 className="font-serif text-4xl text-slate-900">{featuredPosts[0].title}</h2>
            <p className="text-lg text-slate-600">{featuredPosts[0].description}</p>
          </div>
        </motion.div>

        <div className="space-y-6">
          {featuredPosts.slice(1, 4).map((post, idx) => (
            <motion.div 
              key={idx}
              className="group cursor-pointer"
              whileHover={{ x: 4 }}
            >
              <div className="text-xs text-slate-500 font-mono tracking-wider mb-2">
                {post.category.toUpperCase()}
              </div>
              <h3 className="font-serif text-lg text-slate-900 leading-tight mb-1">{post.title}</h3>
              <p className="text-xs text-slate-500">{post.readTime} · {post.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ========== HERO 9: CINEMATIC - Full Screen Video Hero ==========
function Hero9() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      >
        <img 
          src={featuredPosts[0].image}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-serif text-6xl md:text-8xl text-white mb-6 leading-tight">
            Sticky notes for <span className="italic font-light">your soul's</span> fridge
          </h1>
          <p className="text-2xl font-light text-white/90 mb-8">
            Emotional fundamentals, explained through analogies that stick.
          </p>
          
          <motion.button
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 font-semibold rounded-full hover:bg-white/90 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-5 h-5 fill-black" />
            <span>Explore Featured Story</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-white text-center">
          <p className="text-sm font-light mb-2">Scroll to explore</p>
          <ChevronRight className="w-6 h-6 rotate-90 mx-auto" />
        </div>
      </motion.div>
    </section>
  );
}

// ========== HERO 10: CINEMATIC - Parallax Scroll Hero ==========
function Hero10() {
  const [scrollY, setScrollY] = useState(0);

  return (
    <section className="relative w-full min-h-screen">
      {/* Parallax Background */}
      <motion.div
        className="fixed inset-0 z-0"
        style={{ y: scrollY * 0.5 }}
      >
        <img 
          src={featuredPosts[0].image}
          alt="Parallax background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 py-32 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="font-serif text-6xl md:text-8xl text-white mb-6 leading-tight">
            Sticky notes for <span className="italic font-light">your soul's</span> fridge
          </h1>
          <p className="text-2xl font-light text-white/90 mb-8 max-w-2xl">
            Emotional fundamentals, explained through analogies that stick.
          </p>
        </motion.div>
      </div>

      {/* Featured Post Card (appears on scroll) */}
      <div className="relative z-10 px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <motion.div
          className="bg-white rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-96 overflow-hidden">
              <motion.img 
                src={featuredPosts[0].image}
                alt={featuredPosts[0].title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="text-xs text-slate-500 font-mono tracking-wider mb-4">
                {featuredPosts[0].category.toUpperCase()} · {featuredPosts[0].readTime.toUpperCase()}
              </div>
              <h2 className="font-serif text-4xl text-slate-900 mb-4">{featuredPosts[0].title}</h2>
              <p className="text-lg text-slate-600 mb-6">{featuredPosts[0].description}</p>
              <button className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:gap-4 transition-all w-fit">
                <span>Read Article</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* More Posts Grid */}
      <div className="relative z-10 px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <h3 className="font-serif text-4xl text-white mb-12">More to Explore</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.slice(1).map((post, idx) => (
            <motion.div
              key={idx}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="relative h-64 overflow-hidden mb-4 rounded-xl">
                <motion.img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                />
              </div>
              <div className="space-y-2">
                <div className="text-xs text-white/60 font-mono tracking-wider">
                  {post.category.toUpperCase()} · {post.readTime.toUpperCase()}
                </div>
                <h4 className="font-serif text-xl text-white leading-tight">{post.title}</h4>
                <p className="text-white/70 text-sm">{post.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ========== HERO 11: CINEMATIC - Animated Text Hero ==========
function Hero11() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative w-full py-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      ></motion.div>
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      ></motion.div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 max-w-6xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-6xl md:text-6xl text-white mb-3 leading-tight"
            variants={itemVariants}
          >
            Sticky notes for <span className="italic font-light">your soul's</span> fridge
          </motion.h1>
          
          <motion.p 
            className="text-2xl font-light text-white/80 mb-8"
            variants={itemVariants}
          >
            Emotional fundamentals, explained through analogies that stick.
          </motion.p>

          <motion.div 
            className="flex flex-col md:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <motion.button
              className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-full hover:bg-white/90 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🧠 &nbsp; Read Articles
            </motion.button>
            <motion.button
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🌱 &nbsp; Practice
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Featured Posts Preview */}
        <motion.div
          className="mt-20 grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {featuredPosts.slice(0, 3).map((post, idx) => (
            <motion.div
              key={idx}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="text-xs text-white/60 font-mono tracking-wider mb-3">
                {post.category.toUpperCase()}
              </div>
              <h3 className="font-serif text-lg text-white leading-tight mb-2">{post.title}</h3>
              <p className="text-white/70 text-sm">{post.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ========== MAIN SHOWCASE COMPONENT ==========
export default function HeroShowcase10() {
  const [currentHero, setCurrentHero] = useState(0);

  const heroes = [
    { name: "Minimalist Featured", component: Hero1 },
    { name: "Stacked Cards", component: Hero2 },
    { name: "Grid Showcase", component: Hero3 },
    { name: "Alternating Layout", component: Hero4 },
    { name: "Featured + List", component: Hero5 },
    { name: "Minimal Typography", component: Hero6 },
    { name: "Magazine Layout", component: Hero7 },
    { name: "Asymmetric", component: Hero8 },
    { name: "CINEMATIC: Full Screen", component: Hero9 },
    { name: "CINEMATIC: Parallax", component: Hero10 },
    { name: "CINEMATIC: Animated", component: Hero11 }
  ];

  const CurrentHero = heroes[currentHero].component;

  const goToPrevious = () => {
    setCurrentHero((prev) => (prev - 1 + heroes.length) % heroes.length);
  };

  const goToNext = () => {
    setCurrentHero((prev) => (prev + 1) % heroes.length);
  };

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentHero}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CurrentHero />
        </motion.div>
      </AnimatePresence>

      {/* Switcher Controls */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <motion.div
          className="bg-white border-2 border-slate-900 rounded-full px-6 py-4 flex items-center gap-6 shadow-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <button
            onClick={goToPrevious}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
            aria-label="Previous hero"
          >
            <ChevronLeft className="w-5 h-5 text-slate-900" />
          </button>

          <div className="flex items-center gap-3 min-w-max">
            <span className="text-sm font-mono text-slate-500">{currentHero + 1} / {heroes.length}</span>
            <span className="text-xs text-slate-400">—</span>
            <span className="text-sm font-semibold text-slate-900">{heroes[currentHero].name}</span>
          </div>

          <button
            onClick={goToNext}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
            aria-label="Next hero"
          >
            <ChevronRight className="w-5 h-5 text-slate-900" />
          </button>
        </motion.div>
      </div>

      {/* Dot Indicators */}
      <motion.div
        className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-40 flex gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {heroes.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentHero(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentHero ? 'bg-slate-900 w-6' : 'bg-slate-300 hover:bg-slate-500'
            }`}
            aria-label={`Go to hero ${idx + 1}`}
          />
        ))}
      </motion.div>
    </div>
  );
}
