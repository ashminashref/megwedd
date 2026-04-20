import React from 'react';
import { ArrowUpRight } from 'lucide-react';

  const cardData = [
    {
      title: 'Wedding Photography',
      subtitle: 'Curated selection of photo and angles',
      bgColor: 'bg-[#0E0E0E]',
    },
    {
      title: 'Cinematic Films',
      subtitle: 'Emotional storytelling through high-end motion',
      bgColor: 'bg-gradient-to-b from-[#1A0B6B] to-[#080326]',
    },
    {
      title: 'Event Branding',
      subtitle: 'Custom visual identities for luxury weddings',
      bgColor: 'bg-[#2D1B69]',
    }
  ];
function Services() {


  return (
    <div className='px-6 py-16 bg-black min-h-screen'>
      <h1 className='text-white text-5xl font-medium tracking-tight leading-tight'>
        Services and <br /> solutions we offer
      </h1>

      <p className='text-gray-400 max-w-xl mt-4 mb-12 text-lg leading-relaxed'>
        We work with intentional couples and visionary planners to turn love stories into legacy — 
        with cinematic composition, standout aesthetics, and seamless visual storytelling that 
        families remember forever.
      </p>

      {/* Cards Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {cardData.map((item, index) => (
          <div 
            key={index} 
            className={`relative group h-[500px] overflow-hidden rounded-[2.5rem] p-10 flex flex-col transition-all duration-500 hover:ring-1 hover:ring-white/20 ${item.bgColor} transform-gpu will-change-transform`}
          >
            <div className="relative z-10">
              <h3 className="text-white text-3xl font-medium mb-3">{item.title}</h3>
              <p className="text-white/60 text-lg max-w-60">{item.subtitle}</p>
            </div>

            {/* Image/Mockup Container */}
            {/* <div className="absolute inset-0  flex items-end justify-center px-6">
              <img 
                src={item.img} 
                alt={item.title}
                className="w-full h-full object-contain translate-y-8 group-hover:-translate-y-4 transition-transform duration-700 ease-out"
              />
            </div> */}

            {/* Bottom Button */}
            <div className="mt-auto relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                <ArrowUpRight size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;