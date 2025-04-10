'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="px-6 md:px-16 py-20 bg-gray-950 text-white">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          Get in Touch
        </motion.h2>

        <form className="grid gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-gray-900 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-gray-900 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            className="bg-gray-900 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-500 transition p-4 rounded-xl font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
 
