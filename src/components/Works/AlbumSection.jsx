import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Increased images for a better "Infinite" feel
const weddingImages = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=400",
  "https://images.unsplash.com/photo-1465495910483-0d674b0b700e?q=80&w=400",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=400",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=400",
  "https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=400",
  "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=400",
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400", // Duplicated some for density
];

const AlbumSection = () => {
  const triggerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    //Infinite Rotation based on Scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "+=3000", // Longer scroll for smoother rotation
        scrub: 1.5,   // Slightly higher scrub 
        pin: true,
        anticipatePin: 1,
      }
    });

    tl.to(containerRef.current, {
      rotation: -360, // Full circle rotation
      ease: "none",
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="bg-black overflow-hidden">
      {/* 2. THE PREMIUM BLUR OVERLAY */}
      {/* This creates a mask so the images fade out smoothly at the edges and bottom */}
      <div 
        ref={triggerRef} 
        className="relative min-h-screen flex flex-col items-center justify-start   [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_85%)]"
      >
        
        {/* Content Layer */}
        <div className="relative z-30 pt-40 px-6 mb-20 pointer-events-none">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-[0.9]">
            The <span className="italic font-serif font-light text-neutral-400">Eternal</span> <br /> Archive
          </h2>
          <p className="max-w-md mx-auto text-neutral-500 text-sm md:text-base font-light">
            Every frame a legacy. Scroll to traverse through our latest cinematic captures.
          </p>
        </div>

        {/* Orbit Container */}
        <div 
          ref={containerRef}
          className="absolute top-[55%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] md:w-[1300px] md:h-[1300px] pointer-events-none"
        >
          {weddingImages.map((src, i) => {
            // Distribute images evenly across 360 degrees
            const angle = (i * (360 / weddingImages.length)); 
            return (
              <div 
                key={i}
                className="album-card absolute top-0 left-1/2 -translate-x-1/2 origin-[center_400px] md:origin-[center_650px]"
                style={{ transform: `rotate(${angle}deg)` }}
              >
                <div className="w-32 h-48 md:w-64 md:h-80 rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/5 bg-neutral-900/50 backdrop-blur-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  <img 
                    src={src} 
                    alt={`Wedding ${i}`} 
                    className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* 3. VIGNETTE & BLUR GRADIENTS */}
        {/* Bottom Blur Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black via-black/80 to-transparent z-40 pointer-events-none" />
        
        {/* Top Blur Overlay */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent z-40 pointer-events-none" />

        {/* Bottom Feature Grid */}
        <div className="absolute bottom-12w-full max-w-5xl px-6 grid grid-cols-3 gap-8 text-center z-50 invisible md:visible">
            <div className="group cursor-default">
                <h4 className="text-white font-bold text-sm group-hover:text-neutral-400 transition-colors">Cinematic</h4>
                <div className="h-[1px] w-8 bg-neutral-800 mx-auto mt-2" />
            </div>
            <div className="group cursor-default">
                <h4 className="text-white font-bold text-sm group-hover:text-neutral-400 transition-colors">Immortal</h4>
                <div className="h-[1px] w-8 bg-neutral-800 mx-auto mt-2" />
            </div>
            <div className="group cursor-default">
                <h4 className="text-white font-bold text-sm group-hover:text-neutral-400 transition-colors">Bespoke</h4>
                <div className="h-[1px] w-8 bg-neutral-800 mx-auto mt-2" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumSection;