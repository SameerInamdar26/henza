import '../styles/globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Neurobyte | IT Solutions Company',
  description: 'Empowering Tech With Neurobyte',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black antialiased">
        {children}
      </body>
    </html>
  );
}
