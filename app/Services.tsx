'use client';

import { motion } from 'framer-motion';
import { Code, ShieldCheck, Bot, Server } from 'lucide-react';

const services = [
  {
    title: 'Custom Software Development',
    icon: <Code className="w-8 h-8 text-blue-500" />,
    desc: 'We design robust, scalable software tailored to your business needs using modern tech stacks.',
  },
  {
    title: 'Cybersecurity & Ethical Hacking',
    icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
    desc: 'We secure your infrastructure with advanced penetration testing and real-time threat monitoring.',
  },
  {
    title: 'AI Automation',
    icon: <Bot className="w-8 h-8 text-purple-500" />,
    desc: 'Harness AI to automate processes, analyze data, and boost operational efficiency.',
  },
  {
    title: 'Cloud & DevOps Solutions',
    icon: <Server className="w-8 h-8 text-yellow-400" />,
    desc: 'Cloud-native solutions, CI/CD pipelines, and infrastructure automation to scale your services.',
  },
];

export default function Services() {
  return (
    <section className="w-full py-24 px-6 bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-8"
        >
          Our Core <span className="text-blue-500">Services</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900 rounded-2xl p-6 text-left shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-zinc-400">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
