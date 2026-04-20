import React from 'react';
import { Camera, Sparkles, Heart, Zap } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, iconColor }) => (
  <div className="flex items-start space-x-4 p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-all duration-300 group">
    <div className={`p-3 rounded-xl ${iconColor} bg-opacity-10 group-hover:bg-opacity-20 transition-all`}>
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
      title: "Artistic Vision",
      description: "Editorial-style compositions that capture the soul of your celebration.",
      icon: Camera,
      iconColor: "bg-blue-500",
    },
    {
      title: "Timeless Finish",
      description: "Signature color grading that ensures your memories never go out of style.",
      icon: Sparkles,
      iconColor: "bg-purple-500",
    },
    {
      title: "Sneak Peeks",
      description: "Relive the magic instantly with a curated highlight gallery within 48 hours.",
      icon: Zap,
      iconColor: "bg-amber-500",
    },
    {
      title: "Private Vault",
      description: "Secure, high-resolution cloud gallery to share your story with loved ones.",
      icon: Heart,
      iconColor: "bg-rose-500",
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