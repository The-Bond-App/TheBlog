
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';
const posts = [
  { id: 1, title: "Embracing Growth: Do One Thing Every Day That Scares You", category: "Architecture", date: "Dec 22, 2023", author: "Max Musterman", excerpt: "Eleanor Roosevelt's timeless advice encapsulates a profound philosophy that transcends comfort and familiarity.", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" },
  { id: 2, title: "The Art of Minimalism in Modern Design", category: "Design", date: "Dec 18, 2023", author: "Sarah Chen", excerpt: "Less is more—exploring how restraint creates powerful visual statements.", image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&q=80" },
  { id: 3, title: "Building Sustainable Futures", category: "Innovation", date: "Dec 15, 2023", author: "James Wilson", excerpt: "How forward-thinking architects are reshaping our relationship with the environment.", image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80" },
  { id: 4, title: "Urban Spaces Reimagined", category: "Urban", date: "Dec 10, 2023", author: "Maria Lopez", excerpt: "Transforming city landscapes into thriving community hubs.", image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80" },
];

// 1. EDITORIAL SPOTLIGHT — Dramatic hero with floating cards
const EditorialSpotlight = () => {
  const [hovered, setHovered] = React.useState(null);
  return (
    <section className="mb-20">
      <div className="relative h-[500px] overflow-hidden">
        <img src={posts[0].image} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute left-10 top-1/2 -translate-y-1/2 max-w-lg z-10">
          <span className="inline-block bg-white text-black px-4 py-1 text-xs font-bold mb-4">{posts[0].category}</span>
          <h2 className="text-4xl font-black text-white leading-tight mb-4">{posts[0].title}</h2>
          <p className="text-white/70 italic mb-6">{posts[0].excerpt}</p>
          <div className="flex items-center gap-4 text-white/60 text-sm">
            <span>{posts[0].date}</span>
            <span>•</span>
            <span>By {posts[0].author}</span>
          </div>
        </div>
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3">
          {posts.slice(1).map((p, i) => (
            <div key={p.id} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
              className={`w-56 bg-white/95 backdrop-blur rounded-lg overflow-hidden shadow-2xl transition-all duration-300 cursor-pointer ${hovered === i ? "scale-105 -translate-x-4" : ""}`}>
              <img src={p.image} alt="" className="w-full h-24 object-cover" />
              <div className="p-3">
                <span className="text-xs font-bold text-gray-500">{p.category}</span>
                <h4 className="text-sm font-bold text-gray-900 leading-tight line-clamp-2">{p.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 2. ASYMMETRIC BENTO — Dynamic grid with hover reveals
const AsymmetricBento = () => {
  const [active, setActive] = React.useState(0);
  return (
    <section className="mb-20">
      <div className="grid grid-cols-4 grid-rows-2 gap-3 h-[450px]">
        {posts.map((p, i) => {
          const spans = ["col-span-2 row-span-2", "col-span-2", "col-span-1", "col-span-1"][i];
          return (
            <div key={p.id} onMouseEnter={() => setActive(i)} className={`${spans} relative  overflow-hidden cursor-pointer group`}>
              <img src={p.image} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className={`absolute inset-0 transition-all duration-500 ${active === i ? "bg-black/40" : "bg-black/60"}`} />
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <span className={`inline-block self-start px-3 py-1 text-xs font-bold mb-2 transition-all duration-300 ${active === i ? "bg-white text-black" : "bg-white/20 text-white"}`}>{p.category}</span>
                <h4 className={`font-bold text-white leading-tight transition-all duration-300 ${i === 0 ? "text-2xl" : "text-base"}`}>{p.title}</h4>
                <div className={`overflow-hidden transition-all duration-500 ${active === i ? "max-h-20 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                  <p className="text-white/70 text-sm italic">{p.excerpt}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

// 3. FLIP CARDS — 3D flip reveal
const FlipCards = () => (
  <section className="mb-20">
    <h3 className="text-xs font-bold mb-6 text-gray-400 tracking-widest uppercase">3. Flip Cards</h3>
    <div className="grid grid-cols-4 gap-4">
      {posts.map(p => (
        <div key={p.id} className="h-80 perspective-1000 group cursor-pointer">
          <div className="relative w-full h-full transition-transform duration-700 group-hover:[transform:rotateY(180deg)]" style={{transformStyle: "preserve-3d"}}>
            <div className="absolute inset-0  overflow-hidden" style={{backfaceVisibility: "hidden"}}>
              <img src={p.image} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="bg-white text-black px-2 py-1 text-xs font-bold">{p.category}</span>
                <h4 className="text-white font-bold mt-2 leading-tight">{p.title}</h4>
              </div>
            </div>
            <div className="absolute inset-0 bg-gray-900 p-5 flex flex-col justify-center [transform:rotateY(180deg)]" style={{backfaceVisibility: "hidden"}}>
              <span className="text-xs text-gray-400 font-bold mb-2">{p.category}</span>
              <h4 className="text-white font-bold text-lg mb-3">{p.title}</h4>
              <p className="text-gray-400 text-sm italic mb-4">{p.excerpt}</p>
              <div className="text-gray-500 text-xs">{p.date} • By {p.author}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// 4. SPLIT SCREEN SLIDER — Half image, half content
const SplitScreen = () => {
  const [idx, setIdx] = React.useState(0);
  const p = posts[idx];
  return (
  <section className="my-8">
  <div className="flex h-[400px] rounded-xl overflow-hidden bg-white shadow-2xl">
    <div className="w-1/2 relative overflow-hidden">
      <AnimatePresence mode="wait">
        {posts.map((post, i) => i === idx && (
          <motion.img
            key={post.id}
            src={post.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </AnimatePresence>
    </div>
    <div className="w-1/2 p-10 flex flex-col">
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          className="flex-1 flex flex-col justify-center"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
            exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
          }}
        >
          <motion.div
            className="flex items-center gap-4 mb-6"
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              exit: { opacity: 0, x: -20, transition: { duration: 0.3 } }
            }}
          >
            <span className="bg-[#464169] rounded-md text-white px-4 py-1.5 text-sm font-semibold">
              {p.category}
            </span>
            <span className="text-[#464169]/80 italic text-sm">
              {p.date}
            </span>
            <span className="text-[#464169]/80 text-sm">
              By {p.author}
            </span>
          </motion.div>
          
          <motion.h2
            className="text-3xl font-bold text-[#464169] leading-tight mb-4"
            variants={{
              hidden: { opacity: 0, y: 40, skewY: 2 },
              visible: { opacity: 1, y: 0, skewY: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
            }}
          >
            {p.title}
          </motion.h2>
          
          <motion.p
            className="text-[#464169]/80 italic leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              exit: { opacity: 0, y: -15, transition: { duration: 0.3 } }
            }}
          >
            {p.excerpt}
          </motion.p>
        </motion.div>
      </AnimatePresence>
      
      <div className="flex gap-2 pt-4">
        {posts.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-1 rounded-full ${i === idx ? "w-8 bg-gray-900" : "w-4 bg-gray-300 hover:bg-gray-400"}`}
            animate={{ width: i === idx ? 32 : 16 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </div>
    </div>
  </div>
</section>
  );
};

// 5. STAGGERED REVEAL — Cascading cards with depth
const StaggeredReveal = () => (
  <section className="mb-20">
    <div className="flex gap-4 items-start">
      {posts.map((p, i) => (
        <div key={p.id} style={{marginTop: i * 40}} className="flex-1 group cursor-pointer">
          <div className="bg-white  overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={p.image} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-gray-900 text-white px-3 py-1 text-xs font-bold">{p.category}</span>
                <span className="text-gray-400 text-xs">{p.date}</span>
              </div>
              <h4 className="font-bold text-gray-900 leading-tight mb-2">{p.title}</h4>
              <p className="text-gray-500 text-sm italic line-clamp-2">{p.excerpt}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);


export default function HighlightPost() {
  return (
    <section id="rituals">
      
      
        <FlipCards />
      
    </section>
  );
}