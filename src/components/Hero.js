import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-32 to-transparent"></div>

      <section className="px-4 pt-24 pb-8 max-w-4xl mx-auto">
        <div className="relative text-center space-y-8">
          <div className="space-y-3">
            <motion.h1
              className="font-serif tracking-tight text-5xl md:text-7xl text-[#464169] mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              Sticky notes for your{" "}
              <span className="block italic gradient-text pb-2">
                soul's fridge
              </span>
            </motion.h1>
          </div>
        </div>
      </section>
    </div>
  );
}