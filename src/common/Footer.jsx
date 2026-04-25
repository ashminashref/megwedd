import React from 'react';
import { ArrowRight  } from 'lucide-react';
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-32 px-6 pb-12 pt-32 overflow-hidden">
      {/* Hairline Top Border with Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-end">
          
          {/* Left Side: Massive Branding */}
          <div className="space-y-8">
            <h1 className="text-white text-7xl md:text-8xl xl:text-9xl font-extralight tracking-tighter leading-[0.85] animate-in fade-in slide-in-from-bottom-8 duration-1000">
              Capture <br />
              <span className="italic font-serif text-neutral-500">Emotion.</span>
            </h1>
            <p className="text-white/40 text-lg max-w-md font-light leading-relaxed">
              Based in Kerala, capturing timeless stories globally. We don't just take photos; we preserve legacies.
            </p>
          </div>

          {/* Right Side: Premium CTA Box */}
          <div className="flex flex-col items-start lg:items-end gap-8">
            <div className="group relative">
              <button className="relative z-10 flex items-center gap-4 bg-white text-black rounded-full px-12 py-6 font-semibold overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 cursor-pointer">
                <span className="relative z-10">BOOK YOUR DATE</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
              </button>
              {/* Soft Glow behind button */}
              <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
           
          </div>
        </div>

        {/* The "Big Logo" Watermark Section */}
        <div className="relative py-20  ">
          {/* Subtle oversized background text */}
          <h2 className="text-[15vw] font-bold text-white/[0.02] select-none tracking-tighter text-center leading-none">
            MEGWEDD
          </h2>
          
          {/* Footer Links Overlay */}
          <div className="absolute inset-0 flex flex-col md:flex-row justify-between items-center px-4 gap-6">
            <div className="text-white/20 text-xs tracking-widest uppercase font-medium">
              &copy; {currentYear} MEGWEDD STUDIOS
            </div>
            
            <nav className="flex gap-10">
              {['Work', 'About', 'Services', 'Pricing'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-white/40 text-sm font-light hover:text-white transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

          
            <div className="text-blue-500  underline cursor-pointer hover:text-blue-400 animation duration-500  text-xs tracking-widest  font-medium">
              Privacy / Terms
            </div>
          </div>
        </div>
      </div>

     
    </footer>
  );
}

export default Footer;