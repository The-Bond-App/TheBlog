import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Flame, ArrowRight, Sticker } from 'lucide-react';

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

// Hero 1: Classic Editorial (Featured + 2 Sidebar)
function HeroVariation1() {
  return (
    <section className="px-6 md:px-12 py-12 max-w-7xl mx-auto">
      
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
        </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 group cursor-pointer">
          <div className="relative h-[550px] overflow-hidden mb-6">
            <motion.img 
              src={featuredPosts[0].image} 
              alt={featuredPosts[0].title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              whileHover={{ scale: 1.05 }}
            />
            <div className="absolute top-6 left-6">
              <span className="px-4 py-2 bg-yellow-400 text-black text-xs font-black tracking-wider flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5" /> FEATURED STORY
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-sm text-slate-500 font-mono tracking-wider">
              <span>{featuredPosts[0].category.toUpperCase()}</span>
              <span>·</span>
              <span>{featuredPosts[0].readTime.toUpperCase()}</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl text-slate-900 leading-tight">{featuredPosts[0].title}</h2>
            <p className="text-lg text-slate-600 leading-relaxed">{featuredPosts[0].description}</p>
            <button className="inline-flex items-center gap-2 text-slate-900 font-medium hover:gap-4 transition-all">
              <span className="text-sm tracking-wide">READ ARTICLE</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="space-y-8">
          {featuredPosts.slice(1, 3).map((post, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative h-[240px] overflow-hidden mb-4">
                <motion.img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  whileHover={{ scale: 1.05 }}
                />
              </div>
              <div className="space-y-3">
                <div className="text-xs text-slate-500 font-mono tracking-wider">
                  {post.category.toUpperCase()}
                </div>
                <h3 className="font-serif text-2xl text-slate-900 leading-tight">{post.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Hero 2: Masonry Grid (4 posts in grid)
function HeroVariation2() {
  return (
    <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
      <div className="mb-16">
        <h1 className="font-serif text-6xl md:text-7xl text-slate-900 mb-4">
          Sticky notes for <span className="italic font-light">your soul's</span> fridge
        </h1>
        <p className="text-xl font-light text-slate-700 mb-2">
          Emotional fundamentals, explained through analogies that stick.
        </p>
        <p className="text-sm text-slate-500">
          Explore our latest mental models and frameworks
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredPosts.map((post, idx) => (
          <motion.div 
            key={idx} 
            className="group cursor-pointer"
            whileHover={{ y: -4 }}
          >
            <div className="relative h-64 overflow-hidden mb-4 rounded-lg">
              <motion.img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                whileHover={{ scale: 1.1 }}
              />
            </div>
            <div className="space-y-2">
              <div className="text-xs text-slate-500 font-mono tracking-wider">
                {post.category.toUpperCase()} · {post.readTime.toUpperCase()}
              </div>
              <h3 className="font-serif text-lg text-slate-900 leading-tight">{post.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{post.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Hero 3: Split Hero (Large left, stacked right)
function HeroVariation3() {
  return (
    <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="font-serif text-6xl md:text-7xl text-slate-900 mb-3">
          Sticky notes for <span className="italic font-light">your soul's</span> fridge
        </h1>
        <p className="text-lg font-light text-slate-700">
          Emotional fundamentals, explained through analogies that stick.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="group cursor-pointer">
          <div className="relative h-96 overflow-hidden mb-6 rounded-xl">
            <motion.img 
              src={featuredPosts[0].image} 
              alt={featuredPosts[0].title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              whileHover={{ scale: 1.05 }}
            />
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-sm text-slate-500 font-mono tracking-wider">
              <span>{featuredPosts[0].category.toUpperCase()}</span>
              <span>·</span>
              <span>{featuredPosts[0].readTime.toUpperCase()}</span>
            </div>
            <h2 className="font-serif text-3xl text-slate-900 leading-tight">{featuredPosts[0].title}</h2>
            <p className="text-slate-600 leading-relaxed">{featuredPosts[0].description}</p>
            <button className="inline-flex items-center gap-2 text-slate-900 font-medium hover:gap-4 transition-all">
              <span className="text-sm tracking-wide">READ ARTICLE</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {featuredPosts.slice(1, 4).map((post, idx) => (
            <motion.div 
              key={idx} 
              className="group cursor-pointer pb-6 border-b border-slate-200 last:border-b-0"
              whileHover={{ x: 4 }}
            >
              <div className="flex gap-4">
                <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
                  <motion.img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ scale: 1.1 }}
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="text-xs text-slate-500 font-mono tracking-wider">
                    {post.category.toUpperCase()}
                  </div>
                  <h3 className="font-serif text-lg text-slate-900 leading-tight">{post.title}</h3>
                  <p className="text-xs text-slate-500">{post.readTime}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Hero 4: Carousel Style (Large featured, scroll)
function HeroVariation4() {
  return (
    <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="font-serif text-6xl md:text-7xl text-slate-900 mb-3">
          Sticky notes for <span className="italic font-light">your soul's</span> fridge
        </h1>
        <p className="text-lg font-light text-slate-700">
          Emotional fundamentals, explained through analogies that stick.
        </p>
      </div>

      <div className="space-y-8">
        {featuredPosts.map((post, idx) => (
          <motion.div 
            key={idx}
            className="group cursor-pointer grid md:grid-cols-3 gap-6 pb-8 border-b border-slate-200 last:border-b-0"
            whileHover={{ x: 4 }}
          >
            <div className="md:col-span-1">
              <div className="relative h-48 overflow-hidden rounded-lg">
                <motion.img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  whileHover={{ scale: 1.05 }}
                />
              </div>
            </div>
            <div className="md:col-span-2 space-y-3">
              <div className="flex items-center gap-4 text-sm text-slate-500 font-mono tracking-wider">
                <span>{post.category.toUpperCase()}</span>
                <span>·</span>
                <span>{post.readTime.toUpperCase()}</span>
                <span>·</span>
                <span>{post.author}</span>
              </div>
              <h3 className="font-serif text-3xl text-slate-900 leading-tight">{post.title}</h3>
              <p className="text-lg text-slate-600 leading-relaxed">{post.description}</p>
              <button className="inline-flex items-center gap-2 text-slate-900 font-medium hover:gap-4 transition-all">
                <span className="text-sm tracking-wide">READ ARTICLE</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Hero 5: Minimal List
function HeroVariation5() {
  return (
    <section className="px-6 md:px-12 py-20 max-w-4xl mx-auto">
      <div className="mb-16">
        <h1 className="font-serif text-6xl md:text-7xl text-slate-900 mb-4">
          Sticky notes for <span className="italic font-light">your soul's</span> fridge
        </h1>
        <p className="text-lg font-light text-slate-700 mb-2">
          Emotional fundamentals, explained through analogies that stick.
        </p>
      </div>

      <div className="space-y-12">
        {featuredPosts.map((post, idx) => (
          <motion.div 
            key={idx}
            className="group cursor-pointer border-l-4 border-slate-900 pl-6 py-2"
            whileHover={{ x: 8 }}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="text-xs text-slate-500 font-mono tracking-wider">
                {post.category.toUpperCase()} · {post.readTime.toUpperCase()}
              </div>
              <span className="text-xs text-slate-400 font-mono">{post.author}</span>
            </div>
            <h3 className="font-serif text-2xl text-slate-900 leading-tight mb-2">{post.title}</h3>
            <p className="text-slate-600 leading-relaxed">{post.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Hero 6: Magazine Spread
function HeroVariation6() {
  return (
    <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h1 className="font-serif text-6xl md:text-7xl text-slate-900 mb-4">
            Sticky notes for <span className="italic font-light">your soul's</span> fridge
          </h1>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-lg font-light text-slate-700 mb-2">
            Emotional fundamentals, explained through analogies that stick.
          </p>
          <p className="text-sm text-slate-500">
            Curated collection of mental models and frameworks
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {featuredPosts.slice(0, 4).map((post, idx) => (
          <motion.div 
            key={idx}
            className="group cursor-pointer"
            whileHover={{ y: -6 }}
          >
            <div className="relative h-80 overflow-hidden mb-6 rounded-xl">
              <motion.img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                whileHover={{ scale: 1.1 }}
              />
            </div>
            <div className="space-y-3">
              <div className="text-xs text-slate-500 font-mono tracking-wider">
                {post.category.toUpperCase()} · {post.readTime.toUpperCase()}
              </div>
              <h3 className="font-serif text-2xl text-slate-900 leading-tight">{post.title}</h3>
              <p className="text-slate-600 leading-relaxed">{post.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Hero 7: Featured + Grid
function HeroVariation7() {
  return (
    <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="font-serif text-6xl md:text-7xl text-slate-900 mb-3">
          Sticky notes for <span className="italic font-light">your soul's</span> fridge
        </h1>
        <p className="text-lg font-light text-slate-700">
          Emotional fundamentals, explained through analogies that stick.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-6 mb-12">
        <div className="lg:col-span-3 group cursor-pointer">
          <div className="relative h-96 overflow-hidden mb-6 rounded-xl">
            <motion.img 
              src={featuredPosts[0].image} 
              alt={featuredPosts[0].title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              whileHover={{ scale: 1.05 }}
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-yellow-400 text-black text-xs font-black tracking-wider flex items-center gap-1">
                <Flame className="w-3 h-3" /> FEATURED
              </span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-xs text-slate-500 font-mono tracking-wider">
              {featuredPosts[0].category.toUpperCase()} · {featuredPosts[0].readTime.toUpperCase()}
            </div>
            <h2 className="font-serif text-3xl text-slate-900 leading-tight">{featuredPosts[0].title}</h2>
            <p className="text-slate-600 leading-relaxed">{featuredPosts[0].description}</p>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-4">
          {featuredPosts.slice(1, 4).map((post, idx) => (
            <motion.div 
              key={idx}
              className="group cursor-pointer"
              whileHover={{ x: 4 }}
            >
              <div className="relative h-32 overflow-hidden mb-2 rounded-lg">
                <motion.img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  whileHover={{ scale: 1.1 }}
                />
              </div>
              <h3 className="font-serif text-sm text-slate-900 leading-tight">{post.title}</h3>
              <p className="text-xs text-slate-500 mt-1">{post.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Hero 8: Asymmetric Layout
function HeroVariation8() {
  return (
    <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-12 mb-16">
        <div className="md:col-span-2">
          <h1 className="font-serif text-6xl md:text-7xl text-slate-900 mb-4">
            Sticky notes for <span className="italic font-light">your soul's</span> fridge
          </h1>
          <p className="text-lg font-light text-slate-700">
            Emotional fundamentals, explained through analogies that stick.
          </p>
        </div>
        <div className="flex flex-col justify-end">
          <p className="text-sm text-slate-500 leading-relaxed">
            A curated collection of mental models and frameworks for understanding yourself. Updated daily.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <motion.div 
          className="md:col-span-2 group cursor-pointer"
          whileHover={{ y: -4 }}
        >
          <div className="relative h-96 overflow-hidden mb-6 rounded-xl">
            <motion.img 
              src={featuredPosts[0].image} 
              alt={featuredPosts[0].title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              whileHover={{ scale: 1.05 }}
            />
          </div>
          <div className="space-y-4">
            <div className="text-xs text-slate-500 font-mono tracking-wider">
              {featuredPosts[0].category.toUpperCase()} · {featuredPosts[0].readTime.toUpperCase()}
            </div>
            <h2 className="font-serif text-3xl text-slate-900 leading-tight">{featuredPosts[0].title}</h2>
            <p className="text-slate-600 leading-relaxed">{featuredPosts[0].description}</p>
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



// Main HeroShowcase Component
export default function HeroShowcase() {
  const [currentHero, setCurrentHero] = useState(0);

  const heroes = [
    { name: "Classic Editorial", component: HeroVariation1 },
    { name: "Masonry Grid", component: HeroVariation2 },
    { name: "Split Layout", component: HeroVariation3 },
    { name: "Carousel Style", component: HeroVariation4 },
    { name: "Minimal List", component: HeroVariation5 },
    { name: "Magazine Spread", component: HeroVariation6 },
    { name: "Featured + Grid", component: HeroVariation7 },
    { name: "Asymmetric", component: HeroVariation8 }
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
