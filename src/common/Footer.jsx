import React from 'react';
import { ArrowRight } from 'lucide-react';

function Footer() {
  return (
    <footer className='relative mt-32 px-6 pb-12 pt-24  border-t '>
      <div className='max-w-7xl mx-auto flex flex-col lg:items-center text-left lg:text-center'>
        
        {/* Over-sized Premium Heading */}
        <h1 className='text-white lg:text-[10rem] text-6xl font-light tracking-tighter leading-none mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000'>
          Get <span className="italic font-serif opacity-80">Started</span>
        </h1>
        
        <p className='text-white/40 text-lg md:text-xl max-w-xl font-light leading-relaxed mb-12'>
          Start your wedding journey today. Let’s transform your moments into a timeless legacy.
        </p>

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 mb-24 w-full sm:w-auto'>
          <button className='group flex items-center justify-center gap-3 bg-white text-black rounded-full px-10 py-5 font-bold hover:bg-neutral-200 transition-all duration-500 cursor-pointer'>
            Book Your Event
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className='bg-transparent text-white border border-white/20 rounded-full font-medium px-10 py-5 hover:bg-white hover:text-black hover:border-white transition-all duration-500 cursor-pointer backdrop-blur-sm'>
            Member Sign In
          </button>
        </div>

        {/* Bottom Bar: The "Professional" Detail */}
        <div className='w-full pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8'>
          <div className='flex flex-col items-start lg:items-center md:items-start'>
            <span className='text-white font-bold text-xl tracking-tighter'>megWedd</span>
            <p className='text-white/20 text-xs uppercase tracking-widest mt-2'>© 2026 All Rights Reserved</p>
          </div>

          <div className='flex gap-8 text-white/40 text-sm font-light'>
            <a href="#" className='hover:text-white transition-colors'>Instagram</a>
            <a href="#" className='hover:text-white transition-colors'>Portfolio</a>
            <a href="#" className='hover:text-white transition-colors'>Privacy</a>
          </div>
        </div>
      </div>

      {/* Decorative Gradient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[30%] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />
    </footer>
  );
}

export default Footer;