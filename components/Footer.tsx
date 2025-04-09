// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-100 p-4 text-center text-gray-600">
      © {new Date().getFullYear()} Neurobyte. All rights reserved.
    </footer>
  );
}
