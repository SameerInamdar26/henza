import './globals.css';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import Head from 'next/head';

// Font setup (you can change to another professional font)
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Neurobyte | Leading IT Solutions Company',
  description: 'Cutting-edge IT services, AI innovation, and enterprise-grade solutions — powered by Neurobyte.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
