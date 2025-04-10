// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Neurobyte | IT Solutions Company',
  description: 'Empowering Tech with Cutting-Edge Solutions',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-black text-white antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
