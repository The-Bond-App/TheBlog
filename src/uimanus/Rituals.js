'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const coreEmotions = [
  {
    emoji: '😰',
    label: 'Anxious',
    story: "Heart racing. Mind spinning. Can't sit still.",
    postTitle: "The 5-4-3-2-1 Grounding Technique That Actually Works",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80"
  },
  {
    emoji: '😤',
    label: 'Angry',
    story: "Jaw clenched. Everything's annoying. Ready to snap.",
    postTitle: "How to Transform Anger Into Energy in Under 5 Minutes",
    image: "https://images.unsplash.com/photo-1483086431886-3590a88317fe?w=800&q=80"
  },
  {
    emoji: '😢',
    label: 'Sad',
    story: "Heavy chest. Eyes stinging. Everything feels hard.",
    postTitle: "Why Giving Yourself Permission to Feel Changes Everything",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80"
  },
  {
    emoji: '😵',
    label: 'Overwhelmed',
    story: "Too much. Too many tabs open. Brain's fried.",
    postTitle: "The One Thing Protocol: From Chaos to Clarity",
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&q=80"
  }
];

export default function Rituals() {
  return (
    <section className="py-36 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-bold text-4xl md:text-5xl text-foreground mb-3">Quick Rituals for Every Feeling</h2>
          <p className="text-muted-foreground font-light">Swipe to explore →</p>
        </motion.div>

        <div className="flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory hide-scrollbar">
          {coreEmotions.map((emotion, idx) => (
            <motion.div
              key={emotion.label}
              className="flex-shrink-0 w-96 snap-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="relative h-[500px] overflow-hidden rounded-3xl group">
                <motion.img
                  src={emotion.image}
                  alt={emotion.label}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20" />

                <div className="absolute top-0 left-0 right-0 p-6">
                  <div className="flex items-start gap-3">
                    <div className="text-5xl">{emotion.emoji}</div>
                    <div>
                      <div className="text-white font-bold text-2xl mb-2">{emotion.label}</div>
                      <p className="text-white/80 text-sm font-light leading-relaxed">{emotion.story}</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-lg mb-4 leading-tight">{emotion.postTitle}</h3>
                  <button className="w-full bg-white text-foreground px-4 py-3 hover:bg-secondary transition-all font-semibold text-sm flex items-center justify-center gap-2 group/btn rounded-full">
                    <span>READ ALL {emotion.label.toUpperCase()} RITUALS</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
