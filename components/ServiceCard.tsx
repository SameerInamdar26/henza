// components/ServiceCard.tsx
interface Props {
    title: string;
    description: string;
  }
  
  export default function ServiceCard({ title, description }: Props) {
    return (
      <div className="border p-4 rounded-xl shadow hover:shadow-lg transition-all bg-white">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    );
  }
   
