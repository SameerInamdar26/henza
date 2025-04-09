// app/services/page.tsx
import ServiceCard from '@/components/ServiceCard';

const services = [
  {
    title: 'Ethical Hacking Labs',
    description: 'Custom-built labs for learning cybersecurity in a safe environment.',
  },
  {
    title: 'AI-Powered Tools',
    description: 'Build and integrate AI chatbots and automation tools tailored to your business.',
  },
  {
    title: 'Web Development',
    description: 'Full-stack web app development with modern frameworks like Next.js.',
  },
];

export default function ServicesPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}
 
