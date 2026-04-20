import React from 'react';
import { Timer, Rocket, ShieldCheck, FileCheck } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, iconColor }) => (
  <div className="flex items-start space-x-4 p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-colors">
    <div className={`p-3 rounded-xl ${iconColor} bg-opacity-10`}>
      <Icon className={`w-6 h-6 ${iconColor.replace('bg-', 'text-')}`} />
    </div>
    <div>
      <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      title: "99.9% Uptime",
      description: "Enterprise-grade audio infra built.",
      icon: Timer,
      iconColor: "bg-blue-500",
    },
    {
      title: "Fast Delivery",
      description: "Our team works hard to deliver your projects within the deadline.",
      icon: Rocket,
      iconColor: "bg-orange-600",
    },
    {
      title: "Protected Files",
      description: "You will get access to your files that is protected.",
      icon: ShieldCheck,
      iconColor: "bg-green-600",
    },
    {
      title: "Compliance",
      description: "Fully SOC 2, HIPAA & PCI-ready for regulated.",
      icon: FileCheck,
      iconColor: "bg-yellow-500",
    }
  ];

  return (
    <section className="bg-black py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;