import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import FeaturesSection from '../ui/FeatureCard';

function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col lg:items-center lg:justify-center overflow-hidden  text-white pt-24">
      
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Soft Purple/Indigo Glow - Top Left */}
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-[#1A0B6B]/20 blur-[120px] rounded-full animate-pulse" />
        
        {/* Soft Warm/Rose Glow - Bottom Right */}
        <div className="absolute bottom-[10%] -right-[5%] w-[40%] h-[40%] bg-[#2D1B69]/10 blur-[100px] rounded-full" />
        
        {/* Subtle Grain Overlay for Texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* 2. Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:items-center lg:text-center">
        
        {/* Floating Reveal Animation Wrapper */}
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
          
          <span className="inline-block px-4 py-1.5 mb-8 text-[10px] uppercase tracking-[0.3em] font-medium border border-white/10 rounded-full bg-white/5 backdrop-blur-sm text-white/60">
            BY AKHIL KKT
          </span>

          <h1 className="text-6xl md:text-8xl font-light tracking-tighter leading-[0.9] mb-8">
            Your story <br/> 
            <span className="italic font-serif  font-light text-white/90">Timelessly</span> framed
          </h1>

          <p className="max-w-xl mx-auto text-white/40 text-lg md:text-lg mb-12 font-light leading-relaxed">
            From the first look to the last dance, we capture the heartbeat 
            of your wedding day. <span className="text-white/80">Elegant. Honest. Uniquely yours.</span>
          </p>

          {/* Luxury CTA Button */}
         {/* Parent Container: Aligns left on mobile (items-start), centers on desktop (lg:items-center) */}
<div className="flex flex-col items-start lg:items-center w-full  mt-10">
  
  <button className="
    group relative flex items-center justify-center
    w-fit 
    gap-3 md:gap-4 
    px-7 py-4 md:px-10 md:py-5 
    rounded-full overflow-hidden 
    bg-white transition-all duration-500 
    hover:pr-12 
    active:scale-95
    shadow-[0_20px_50px_rgba(255,255,255,0.1)]
  ">
    <span className="
      text-black font-bold tracking-tight z-10 
      text-sm md:text-base 
      whitespace-nowrap
    ">
      Book Your Event
    </span>

    <div className="
      bg-black text-white rounded-full z-10
      p-1 md:p-2 
      group-hover:rotate-45 transition-transform duration-500
      flex items-center justify-center
    ">
      <ArrowUpRight 
        className="w-4 h-4 md:w-5 md:h-5" 
        strokeWidth={2.5} 
      />
    </div>
    
    {/* Shine effect */}
    <div className="
      absolute inset-0 z-0
      bg-gradient-to-r from-transparent via-black/5 to-transparent 
      -translate-x-full group-hover:translate-x-full 
      transition-transform duration-1000 ease-in-out
      pointer-events-none
    " />
  </button>

  {/* Trusted text: Also aligned to start on mobile */}
  <h3 className='mt-8 text-xs md:text-sm text-gray-500 uppercase tracking-widest'>
    Trusted by 1000+ companies / clients
  </h3>
</div>
        </div>
      </div>

      {/* 3. Transition to Features */}
      <div className="w-full mt-6 relative z-10">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent z-[-1]" />
        {/* <FeaturesSection /> */}
      </div>
      
    </section>
  );
}

export default Hero;