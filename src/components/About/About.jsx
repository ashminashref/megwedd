import React from 'react';
import { IoArrowForwardOutline } from "react-icons/io5";

// --- Wedding Image Assets (Replace these placeholder URLs with your actual team/studio images)
const studioImages = {
  main: "https://images.unsplash.com/photo-1591604466107-dd9ba66b4137?q=80&w=1200&auto=format&fit=crop", // Main large landscape
  team1: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=600&auto=format&fit=crop", // Vertical Portrait
  team2: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=600&auto=format&fit=crop", // Vertical Portrait 2
};

function About() {
  const values = [
    { name: "Cinematic Narrative", description: "Every frame tells a deeply personal story." },
    { name: "Unobtrusive Presence", description: "Capturing candid moments without disruption." },
    { name: "Authentic Emotion", description: "Real laughter, real tears, timeless memories." },
  ];

  return (
    <div className=" min-h-screen text-white font-sans antialiased">
      {/* Container wraps the entire section for centering and max-width */}
      <section className="container mx-auto px-6 py-24 md:py-32 max-w-7xl">
        
        {/* Responsive Grid Structure: 
            Mobile (default): Stacks elements (grid-cols-1)
            Tablet/Desktop (lg): Uses 2 columns for side-by-side layout (lg:grid-cols-2)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* 1. LEFT COLUMN: Text Content (Geometrics) */}
          <div className="space-y-16">
            
            {/* Main Heading Block */}
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] font-semibold border border-white/10 rounded-full bg-white/5 backdrop-blur-sm text-white/60">
                OUR STUDIO
              </span>
              <h1 className="text-5xl md:text-6xl  tracking-tighter leading-[0.9] text-white">
                Bespoke Films for Timeless Stories.
              </h1>
              <p className="max-w-xl text-neutral-400  font-light leading-relaxed">
                Founded by <span className="text-white font-medium">Akhil KKT</span>, megWedd is a premier cinematography studio dedicated to capturing the raw, honest, and joyful essence of your wedding day. We believe your legacy deserves a cinematic frame.
              </p>
            </div>

            {/* Sub-features / Values (Replicating the grid pattern in the screenshot) */}
            <div className="pt-12 border-t border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                  {values.map((value, idx) => (
                    <div key={idx} className="space-y-2">
                        <h3 className="text-sm font-semibold text-white tracking-wide uppercase">
                            {value.name}
                        </h3>
                        <p className="text-sm text-neutral-500 font-light leading-relaxed max-w-xs">
                            {value.description}
                        </p>
                    </div>
                  ))}
                </div>
            </div>
            
            {/* Signature Studio CTA */}
            <div className="flex flex-col sm:flex-row gap-6 pt-12">
               <button className="flex items-center gap-2 group text-white text-sm font-medium">
                  Meet the Team 
                  <IoArrowForwardOutline className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </button>
               <button className="text-neutral-500 text-sm font-light hover:text-white transition-colors">
                  Our Philosophy
               </button>
            </div>

          </div>

          {/* 2. RIGHT COLUMN: Visual Content (Editorial Images) */}
          {/* Uses a sub-grid to replicate the layout in the screenshot */}
          <div className="space-y-6 lg:mt-10 animate-in fade-in slide-in-from-right-8 duration-1000 ease-out">
            
            {/* Top Large Image (Matches the "Natural Places" image block) */}
            <div className="relative aspect-[16/10] w-full rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 [box-shadow:0_0_60px_rgba(255,255,255,0.03)]">
                <img 
                    src={studioImages.main} 
                    alt="Akhil KKT Studio" 
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Bottom Sub-grid for Team Portraits (Matches the "Desert/Scenery" image block) */}
            <div className="grid grid-cols-2 gap-6">
                <div className="aspect-[10/12] w-full rounded-2xl md:rounded-3xl overflow-hidden border border-white/10">
                    <img 
                        src={studioImages.team1} 
                        alt="Cinematographer 1" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="aspect-[10/12] w-full rounded-2xl md:rounded-3xl overflow-hidden border border-white/10">
                    <img 
                        src={studioImages.team2} 
                        alt="Cinematographer 2" 
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
            
          </div>
        </div>

      </section>
    </div>
  );
}

export default About;