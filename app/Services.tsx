'use client';

import { Code2, ShieldCheck, Bot } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Custom Software Development',
    icon: <Code2 size={36} />,
    description: 'Robust, scalable applications tailored to your business needs.',
  },
  {
    title: 'Cybersecurity Solutions',
    icon: <ShieldCheck size={36} />,
    description: 'Cutting-edge security services to keep your data protected.',
  },
  {
    title: 'AI Chatbot Integration',
    icon: <Bot size={36} />,
    description: 'Intelligent bots that automate and elevate customer support.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-20 bg-black text-white">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Our Services
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-shadow"
          >
            <div className="mb-4 text-purple-400">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
