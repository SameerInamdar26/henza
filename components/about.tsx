'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="px-6 md:px-16 py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          About Neurobyte
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 text-lg"
        >
          At Neurobyte, we're not just developers — we're architects of digital innovation. From building powerful tools and platforms to delivering elite ethical hacking education, we thrive at the intersection of code and creativity. Our team merges AI, security, and software to deliver impactful tech solutions with confidence.
        </motion.p>
      </div>
    </section>
  );
}
 
