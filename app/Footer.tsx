'use client';

import { Facebook, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        <div>
          <h3 className="text-white text-xl font-bold mb-2">Neurobyte</h3>
          <p className="text-sm">
            Empowering tech through innovative IT solutions, security expertise, and intelligent tools.
          </p>
        </div>

        <div className="flex justify-center gap-6">
          <a href="https://github.com/neurobyte" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 hover:text-white transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5 hover:text-white transition" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-5 h-5 hover:text-white transition" />
          </a>
        </div>

        <div className="text-sm text-center md:text-right">
          © {new Date().getFullYear()} Neurobyte. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
