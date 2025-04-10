import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Neurobyte | IT Solutions Company',
  description: 'Empowering Tech with Cutting-Edge Solutions',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
