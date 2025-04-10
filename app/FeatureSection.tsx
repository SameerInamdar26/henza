import { ShieldCheck, Code, Bot } from 'lucide-react'

const features = [
  {
    title: 'Ethical Hacking Platforms',
    description: 'Fully controlled environments to teach and test real-world cyber attacks safely.',
    icon: <ShieldCheck className="h-8 w-8 text-indigo-500" />,
  },
  {
    title: 'Custom AI Chatbots',
    description: 'Trainable bots that support tools, workflows, and real-time customer support.',
    icon: <Bot className="h-8 w-8 text-indigo-500" />,
  },
  {
    title: 'End-to-End IT Solutions',
    description: 'From web apps to secure backend systems—we build smart, scalable tech.',
    icon: <Code className="h-8 w-8 text-indigo-500" />,
  },
]

export default function FeatureSection() {
  return (
    <section className="py-20 px-6 bg-white text-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
