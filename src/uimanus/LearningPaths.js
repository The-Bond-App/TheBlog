import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function LearningPathsCompact() {
  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Left: Content */}
          <div>
            <h2 className="font-serif text-5xl md:text-6xl text-white mb-4">
              Learning Paths
            </h2>
            <p className="text-xl font-light text-white/80 mb-2">
              Structured journeys from confusion to clarity.
            </p>
            <p className="text-lg text-white/70 mb-8">
              Choose your transformation. Understanding Anxiety, Building Self-Compassion, Relationship Patterns, Emotional Regulation—each designed to change how you feel.
            </p>
            
            <motion.button
              className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 font-semibold rounded-full hover:bg-white/90 transition-all"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore Paths</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Right: Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🧠', label: 'Anxiety' },
                { icon: '💚', label: 'Self-Compassion' },
                { icon: '🤝', label: 'Relationships' },
                { icon: '⚖️', label: 'Regulation' }
              ].map((path, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center hover:border-white/40 transition-all cursor-pointer"
                  whileHover={{ y: -4 }}
                >
                  <div className="text-4xl mb-3">{path.icon}</div>
                  <p className="text-white font-semibold text-sm">{path.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
