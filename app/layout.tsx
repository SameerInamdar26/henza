import './globals.css'; // correct path when in same folder

import { ReactNode } from 'react';

export const metadata = {
  title: 'Neurobyte | IT Solutions Company',
  description: 'Empowering Tech With Neurobyte',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
