import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
function Hero() {
  return (
    /* Changed: Removed lg:justify-center to allow start alignment by default, added min-h-fit for mobile */
    <section className="relative w-full min-h-fit lg:min-h-screen flex flex-col items-start lg:items-center lg:justify-center overflow-hidden text-white pt-32 pb-12 lg:pt-24">
      
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-[#1A0B6B]/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] -right-[5%] w-[40%] h-[40%] bg-[#2D1B69]/10 blur-[100px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:items-center lg:text-center">
        
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
          
          <span className="inline-block px-4 py-1.5 mb-8 text-[10px] uppercase tracking-[0.3em] font-medium border border-white/10 rounded-full bg-white/5 backdrop-blur-sm text-white/60">
            BY AKHIL KKT
          </span>

          <h1 className="text-6xl md:text-8xl font-light tracking-tighter leading-[0.9] mb-8">
            Your story <br/> 
            <span className="italic font-serif font-light text-white/90">Timelessly</span> framed
          </h1>

          <p className="max-w-xl mx-auto text-white/40 text-lg md:text-lg mb-12 font-light leading-relaxed">
            From the first look to the last dance, we capture the heartbeat 
            of your wedding day. <span className="text-white/80">Elegant. Honest. Uniquely yours.</span>
          </p>

          <div className="flex flex-col items-start lg:items-center w-full mt-10">
            <Link to = '/user'>
            <button className="
              group relative flex items-center justify-center
              w-fit 
              gap-3 md:gap-4 
              px-7 py-4 md:px-8 md:py-3 
              rounded-full overflow-hidden 
              bg-white transition-all duration-500 
              hover:pr-12 
              active:scale-95
              shadow-[0_20px_50px_rgba(255,255,255,0.1)]
            ">
              <span className="text-black font-bold tracking-tight z-10 text-sm md:text-base whitespace-nowrap">
                Get started
              </span>

              <div className="bg-black text-white rounded-full z-10 p-1 md:p-2 group-hover:rotate-45 transition-transform duration-500 flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2.5} />
              </div>
              
              {/* Shine removed based on previous preference or kept if desired */}
            </button>
</Link>
            <h3 className='mt-8 text-xs text-gray-500 uppercase'>
              Trusted by 1000+ companies / clients
            </h3>
          </div>
        </div>
      </div>

      {/* Changed: Adjusted mt-0 for tighter mobile spacing and reduced height of gradient */}
      <div className="w-full mt-12 lg:mt-6 relative z-10">
        <div className="absolute inset-x-0 top-0 h-16 lg:h-32 bg-gradient-to-b from-black to-transparent z-[-1]" />
      </div>
      
    </section>
  );
}

export default Hero;