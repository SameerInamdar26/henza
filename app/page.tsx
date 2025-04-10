import Hero from './Hero';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

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
