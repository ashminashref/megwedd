import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const cardData = [
  {
    title: 'Wedding Photography',
    subtitle: 'A curated selection of timeless angles and raw emotion.',
    img: '/Images/cinematic-wedding.jpg',
    tag: 'Photography'
  },
  {
    title: 'Cinematic Films',
    subtitle: 'Emotional storytelling captured through high-end motion.',
    img: '/Images/cinematic.jpg',
    tag: 'Film'
  },
  {
    title: 'Event Branding',
    subtitle: 'Custom visual identities for the world\'s luxury weddings.',
    img: '/Images/event.jpg', // Added placeholder img for consistency
    tag: 'Branding'
  }
];

function Services() {
  return (
    <div className='px-8 py-24 bg-[#050505] min-h-screen font-sans'>
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-20">
        <span className="text-white/40 uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
          Our Expertise
        </span>
        <h1 className='text-white text-6xl md:text-7xl '>
          Services and <br /> 
          <span className="italic ">solutions</span> we offer
        </h1>
        <p className='text-white/50 max-w-lg mt-4 text-lg text-sm leading-relaxed'>
          We turn love stories into legacy through cinematic composition 
          and standout aesthetics.
        </p>
      </div>

      {/* Cards Grid */}
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {cardData.map((item, index) => (
          <div 
            key={index} 
            className="group relative h-[450px] bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden transition-all duration-700 hover:border-white/30"
          >
            <div className="absolute inset-0 z-0">
              <img 
                src={item.img} 
                alt={item.title}
                className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-[1.5s] ease-out"
              />
              {/* Subtle Gradient for readability */}
              <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-[#050505]/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full p-10 flex flex-col">
              <div className="flex justify-between items-start">
                <span className="text-white/40 text-xs uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                  {item.tag}
                </span>
                
                {/* Elegant Circle Button */}
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <ArrowUpRight size={18} strokeWidth={1.5} />
                </div>
              </div>

              <div className="mt-auto">
                <h3 className="text-white text-3xl font-light tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500">
                  {item.title}
                </h3>
                <div className="h-px w-0 group-hover:w-full bg-gradient-to-r from-white/40 to-transparent transition-all duration-700 mb-4" />
                <p className="text-white/50 text-base leading-relaxed max-w-[260px] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {item.subtitle}
                </p>
              </div>
            </div>

            {/* Premium Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.05),transparent_50%)]" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;