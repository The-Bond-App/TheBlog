'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section id="subscribe" className="py-32 px-6 md:px-12 bg-background">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-bold text-6xl md:text-7xl text-foreground mb-6">Newsletter</h2>
        <p className="text-2xl text-muted-foreground mb-12 font-light">Posts that get you, weekly. Side effects may include feeling seen.</p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={status === 'success' ? "You're awesome 😎" : "Your email"}
            disabled={status === 'success'}
            className="flex-1 px-6 py-4 border-2 border-border text-base outline-none focus:border-primary transition-colors bg-white rounded-full disabled:opacity-50"
            required
          />
          <motion.button
            type="submit"
            disabled={status === 'success'}
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity rounded-full disabled:opacity-50"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {status === 'success' ? 'ALL GOOD 🎉' : 'SUBSCRIBE'}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
