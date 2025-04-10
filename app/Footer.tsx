export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 px-6 md:px-20 border-t border-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Neurobyte. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}
