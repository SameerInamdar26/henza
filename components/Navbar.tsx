'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center shadow">
      <Link href="/" className="text-xl font-bold">Neurobyte</Link>
      <div className="space-x-4">
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}
 
