import Hero from './Hero';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import Loader from './Loader';

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Loader />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
