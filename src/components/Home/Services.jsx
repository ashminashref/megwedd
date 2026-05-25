import React, { useRef } from 'react';
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
    img: '/Images/event.jpg',
    tag: 'Branding'
  }
];

function Services() {
  // Use independent array tracking hooks for bounding calculations
  const cardRefs = useRef([]);

  // Desktop Mouse Interactions: Dynamic 3D tilt tracking matrix
  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to the center of the active card
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Convert pixels to rotation angles (max tilt cap of 10 degrees)
    const rX = -(mouseY / (height / 2)) * 10;
    const rY = (mouseX / (width / 2)) * 10;

    // Direct imperative DOM manipulation skips React's diffing engine completely for 60fps performance
    card.style.transform = `rotateX(${rX}deg) rotateY(${rY}deg)`;

    // Calculate light source tracking position for the gloss sheen layer
    const glossLayer = card.querySelector('.surface-sheen');
    if (glossLayer) {
      const pX = ((mouseX + width / 2) / width) * 100;
      const pY = ((mouseY + height / 2) / height) * 100;
      glossLayer.style.background = `radial-gradient(circle at ${pX}% ${pY}%, rgba(255,255,255,0.12) 0%, transparent 60%)`;
    }
  };

  // Reset all style transformations when mouse exits element bounds
  const handleMouseLeave = (index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    
    const glossLayer = card.querySelector('.surface-sheen');
    if (glossLayer) {
      glossLayer.style.background = `radial-gradient(circle at 50% 50%, rgba(255,255,255,0), transparent 60%)`;
    }
  };

  return (
    <div className='px-4 sm:px-8 py-24 bg-[#050505] min-h-screen font-sans overflow-hidden select-none text-white'>
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div>
          <span className="text-white/40 uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
            Our Expertise
          </span>
          <h1 className='text-white text-5xl sm:text-6xl md:text-7xl tracking-tight leading-[1.05]'>
            Services and <br /> 
            <span className="italic font-light text-neutral-400">solutions</span> we offer
          </h1>
          <p className='text-white/50 max-w-lg mt-4 text-base font-light leading-relaxed'>
            We turn love stories into legacy through cinematic composition 
            and standout luxury aesthetics.
          </p>
        </div>
      </div>

      {/* Cards Grid Container with spatial perspective context */}
      <div 
        className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 xl:gap-8'
        style={{ perspective: '1500px' }}
      >
        {cardData.map((item, index) => (
          <div 
            key={index} 
            ref={(el) => (cardRefs.current[index] = el)}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={() => handleMouseLeave(index)}
            className="group relative h-[480px] bg-[#0A0A0A] border border-white/10 rounded-[32px] overflow-hidden transition-transform duration-200 ease-out will-change-transform"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Background Image Underlay with deep depth offset */}
            <div 
              className="absolute inset-0 z-0"
              style={{ transform: 'translateZ(-25px) scale(1.1)' }}
            >
              <img 
                src={item.img} 
                alt={item.title}
                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-90 transition-all duration-[1000ms] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
            </div>

            {/* Foreground Content Layer lifted closer to client lens */}
            <div 
              className="relative z-10 h-full p-8 sm:p-10 flex flex-col justify-between"
              style={{ transform: 'translateZ(40px)' }}
            >
              <div className="flex justify-between items-start w-full">
                <span className="text-white/60 text-[11px] uppercase tracking-widest border border-white/10 bg-black/20 px-3 py-1 rounded-full backdrop-blur-md">
                  {item.tag}
                </span>
                
                <div className="w-10 h-10 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-white group-hover:text-black group-hover:scale-110 transition-all duration-500">
                  <ArrowUpRight size={18} strokeWidth={1.5} />
                </div>
              </div>

              <div>
                <h3 className="text-white text-3xl sm:text-4xl font-light tracking-tight mb-4 group-hover:translate-x-1 transition-transform duration-500">
                  {item.title}
                </h3>
                <div className="h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-white/40 to-transparent transition-all duration-700 mb-4" />
                <p className="text-white/60 text-sm font-light leading-relaxed max-w-[270px] transition-all duration-500 opacity-100 transform-none lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0">
                  {item.subtitle}
                </p>
              </div>
            </div>

            {/* Dynamic Surface Highlight Sheen Layer */}
            <div className="surface-sheen absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 mix-blend-screen z-20" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;