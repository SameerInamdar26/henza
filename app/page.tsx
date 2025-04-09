import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
