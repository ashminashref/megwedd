import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Plasma from '../ui/Plasma';
import FeaturesSection from '../ui/FeatureCard';

function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white pt-20">
      
      {/* 1. Plasma Background Container */}
      <div className="absolute transform-gpu will-change-transform inset-0 z-0 opacity-60 pointer-events-none">
        <Plasma 
          color="#ff00ff" // Adjust to match the purple/pink hue in your screenshot
          speed={0.4}
          direction="forward"
          scale={1.5}
          opacity={0.7}
          mouseInteractive={true}
        />
        {/* Optional: Radial gradient overlay to fade the plasma edges into the black background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black"></div>
      </div>

      {/* 2. Content Layer */}
      <div className="relative mt-10 z-10 max-w-7xl mx-auto px-6 flex flex-col lg:items-center lg:text-center">
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-8xl  tracking-tighter  mb-6">
          Your story <br/> Timelessly framed
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
         From the first look to the last dance, we are there to capture the heartbeat of your wedding day. Elegant, honest, and uniquely yours.
        </p>

        {/* CTA Button */}
        <button className=" gap-2 bg-white text-black  flex items-center  text-center px-4 py-4 rounded-full font-bold hover:scale-105 transition-transform group">
          Book Your Event
          <div className="bg-black text-white p-1 rounded-full group-hover:rotate-45 transition-transform">
            <ArrowUpRight size={18} />
          </div>
        </button>
        <h3 className='mt-10 text-sm text-gray-500'>Trusted by 1000+ companies and clients</h3>
      </div>
<FeaturesSection/>
      
    </section>
    
  );
}

export default Hero;