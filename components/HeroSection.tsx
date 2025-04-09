// components/HeroSection.tsx
'use client';

import { motion } from 'framer-motion';
import { RocketIcon } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 bg-gradient-to-br from-indigo-900 to-black text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          Empowering Tech With <span className="text-indigo-400">Neurobyte</span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-300">
          We build cutting-edge IT solutions, cybersecurity platforms, and smart digital tools for a future-ready world.
        </p>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 transition-colors px-6 py-3 rounded-full font-semibold"
          >
            <RocketIcon className="w-5 h-5" />
            Let’s Build Together
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
