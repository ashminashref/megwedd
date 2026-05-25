import React, { useState } from 'react'

function Services() {
  const demoItems = [
    { 
      id: '01',
      tag: 'CINEMA',
      text: 'Cinematic Films', 
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800',
      desc: 'High-end storytelling crafted with cinematic color grading, premium sound design, and emotional depth.'
    },
    { 
      id: '02',
      tag: 'PORTFOLIO',
      text: 'Wedding Photography', 
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800',
      desc: 'Timeless imagery capturing the grandeur, raw emotions, and intricate details of your special day.'
    },
    { 
      id: '03',
      tag: 'DOCUMENTARY',
      text: 'Candid Moments', 
      image: 'https://images.unsplash.com/photo-1465495910483-0d674b0b700e?q=80&w=800',
      desc: 'Unscripted, natural, and authentic expressions captured perfectly without disrupting the flow of the event.'
    },
    { 
      id: '04',
      tag: 'EDITORIAL',
      text: 'Pre-Wedding Shoots', 
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800',
      desc: 'Concept-driven editorial sessions set in breathtaking locations designed around your personal story.'
    }
  ];

  // Track the active hovered item to dynamically update the background preview
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='w-full  min-h-screen  text-white selection:bg-orange-500 selection:text-black relative transition-colors duration-500'>
      
      {/* Background Interactive Image Preview (Desktop Only) */}
      <div className="hidden lg:block absolute inset-0 left-1/2 w-1/2 h-full overflow-hidden pointer-events-none z-0">
        {demoItems.map((item, idx) => (
          <div
            key={item.id}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out scale-[1.02] ${
              activeIndex === idx ? 'opacity-20 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{ backgroundImage: `url(${item.image})` }}
          />
        ))}
        {/* Vignette overlay for a premium dark aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-transparent to-[#0a0a0a]" />
      </div>

      {/* Main Structural Layout Grid */}
      <div className='w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 py-20 lg:py-0 min-h-screen grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch relative z-10'>
        
        {/* LEFT COLUMN: Fixed Header Content on Desktop */}
        <div className='lg:col-span-5 flex flex-col justify-center lg:h-screen lg:sticky lg:top-0 py-8 lg:py-0'>
          <p className='text-orange-500 text-xs font-bold mb-4 tracking-[0.5em] uppercase'>
            Signature Craft
          </p>
          
          <h1 className='text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tighter mb-6 leading-[0.9] uppercase'>
            Our <br /> 
            <span className="italic font-serif font-light text-neutral-400 capitalize tracking-normal">Services</span>
          </h1>
          
          <p className='text-neutral-400 max-w-md text-base xl:text-lg font-light leading-relaxed mb-8'>
            A curation of cinematic offerings designed to preserve your legacy. 
            From grand narratives to intimate whispers, discover our artistry.
          </p>

          {/* Dynamic Active Description block that shifts context on item hover */}
          <div className="hidden lg:block min-h-[80px] border-l border-neutral-800 pl-4 transition-all duration-300">
            <span className="text-[10px] text-orange-500 tracking-widest block font-bold mb-1">
              {demoItems[activeIndex].tag}
            </span>
            <p className="text-xs text-neutral-500 max-w-xs transition-opacity duration-300">
              {demoItems[activeIndex].desc}
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Menu Items list */}
        <div className='lg:col-span-7 flex flex-col justify-center lg:min-h-screen py-4 lg:py-16'>
          <div className="w-full divide-y divide-neutral-900 border-y border-neutral-900">
            {demoItems.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  className="group block py-8 sm:py-10 lg:py-12 relative cursor-pointer overflow-hidden transition-all duration-300"
                >
                  {/* Sliding Row Accent Background Layer */}
                  <div className="absolute inset-0 bg-neutral-950/40 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10 px-2">
                    
                    {/* Title and ID wrapper */}
                    <div className="flex items-start gap-4 sm:gap-6">
                      <span className={`font-mono text-xs pt-1 sm:pt-2 transition-colors duration-300 ${
                        isActive ? 'text-orange-500' : 'text-neutral-600'
                      }`}>
                        {item.id}
                      </span>
                      <div>
                        <h2 className={`text-2xl sm:text-3xl xl:text-4xl font-semibold tracking-tight transition-all duration-300 group-hover:pl-2 ${
                          isActive ? 'text-white' : 'text-neutral-400'
                        }`}>
                          {item.text}
                        </h2>
                        <p className="text-xs text-neutral-500 mt-2 max-w-md block lg:hidden">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Interactive Action indicator */}
                    <div className="flex items-center gap-4 self-end sm:self-auto">
                      {/* Responsive Hover Image Tooltip for Tablet/Desktop sizes */}
                      <div className="w-16 h-10 sm:w-24 sm:h-14 rounded overflow-hidden opacity-40 sm:opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100 shadow-2xl border border-neutral-800">
                        <img src={item.image} alt={item.text} className="w-full h-full object-cover" />
                      </div>
                      <span className={`text-lg transition-transform duration-300 ${
                        isActive ? 'text-orange-500 translate-x-1' : 'text-neutral-700'
                      }`}>
                        →
                      </span>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Services