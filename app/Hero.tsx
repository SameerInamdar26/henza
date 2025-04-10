'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white">
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Empowering the Digital Future with <span className="text-blue-500">Neurobyte</span>
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl md:text-2xl max-w-2xl mb-8 text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        We deliver cutting-edge IT solutions, cybersecurity expertise, and product innovation for the world’s boldest tech leaders.
      </motion.p>

      <motion.a
        href="#services"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl text-lg transition-all duration-200 shadow-md"
      >
        Explore Our Solutions <ArrowRight className="w-5 h-5" />
      </motion.a>
    </section>
  );
}
