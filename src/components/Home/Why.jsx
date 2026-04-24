import React from 'react'

import { BentoGrid, BentoCard } from '../ui/bento-grid'

// Icons
import { 
  IoCameraOutline, 
  IoHeartOutline, 
  IoCalendarClearOutline,
  IoImagesOutline,
  IoNotificationsOutline,
  IoChevronForwardOutline
} from "react-icons/io5";

// --- 1. Floating Notification List (For "Real-Time Updates" card)
const NotificationList = () => (
  <div className="flex flex-col gap-2 w-full max-w-[280px] group-hover:scale-105 transition-transform duration-500">
    {[
      { label: "New Booking", time: "2m ago", color: "#fb7185" },
      { label: "Video Ready", time: "10m ago", color: "#38bdf8" },
      { label: "Payment Received", time: "1h ago", color: "#a855f7" }
    ].map((item, i) => (
      <div key={i} className="flex items-center gap-3 rounded-xl border border-white/10 bg-neutral-900/80 p-3 backdrop-blur-md shadow-2xl">
        <div className="h-8 w-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${item.color}20` }}>
          <IoNotificationsOutline style={{ color: item.color }} />
        </div>
        <div className="flex-1">
          <p className="text-[11px] font-medium text-white">{item.label}</p>
          <p className="text-[9px] text-neutral-500">{item.time}</p>
        </div>
      </div>
    ))}
  </div>
);

// --- 2. Scrolling Background (For "Media Hub" card)
const MediaMarquee = () => (
  <div className="grid grid-cols-3 gap-2 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
    {[...Array(9)].map((_, i) => (
      <div key={i} className="h-16 w-16 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center">
        <IoImagesOutline className="text-white" />
      </div>
    ))}
  </div>
);

function Why() {
  const chooseUsFeatures = [
    {
      Icon: IoCameraOutline,
      name: "Cinematic Excellence",
      description: "We don't just record; we create high-end wedding films.",
      href: "/portfolio",
      cta: "View Work",
      background: (
        <div className="absolute inset-0 bg-neutral-950 [mask-image:radial-gradient(50%_50%_at_50%_50%,black_0%,transparent_100%)] opacity-50">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
      ),
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 bg-neutral-900/50 border-white/10",
    },
    {
      Icon: IoNotificationsOutline,
      name: "Real-Time Updates",
      description: "Track your editing progress and get notified instantly.",
      href: "/portal",
      cta: "Client Portal",
      background: (
        <div className="absolute inset-0 flex items-center justify-center translate-y-12 group-hover:translate-y-8 transition-all duration-500 [mask-image:linear-gradient(to_top,black,transparent)]">
          <NotificationList />
        </div>
      ),
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 bg-neutral-900/50 border-white/10",
    },
    {
      Icon: IoImagesOutline,
      name: "Unified Media Hub",
      description: "A private digital gallery for your photos and videos.",
      href: "/hub",
      cta: "Explore Hub",
      background: (
        <div className="absolute inset-0 flex items-center justify-center -rotate-12 translate-y-10">
          <MediaMarquee />
        </div>
      ),
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2 bg-neutral-900/50 border-white/10",
    },
    {
      Icon: IoCalendarClearOutline,
      name: "Seamless Timeline",
      description: "Coordinated schedules for every wedding event.",
      href: "/schedule",
      cta: "See Timeline",
      background: (
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
           <div className="w-[80%] h-12 border border-dashed border-white/20 rounded-full flex items-center justify-between px-6">
              <div className="h-2 w-2 rounded-full bg-rose-500 shadow-[0_0_10px_#f43f5e]" />
              <div className="h-1 flex-1 border-t border-dashed border-white/20 mx-2" />
              <div className="h-2 w-2 rounded-full bg-neutral-700" />
           </div>
        </div>
      ),
      className: "lg:col-start-2 lg:col-end-4 lg:row-start-2 lg:row-end-3 bg-neutral-900/50 border-white/10",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans">
      
      
      <main className="container mx-auto px-6 py-24 max-w-6xl">
        <div className="relative mb-20">
          {/* Decorative Glow */}
          
          <h2 className="text-white/50 font-bold tracking-[0.3em] uppercase text-[10px] mb-4">
            The MegWedd Advantage
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Why Choose Us?
          </h1>
          <p className="mx-auto text-neutral-400 text-lg leading-relaxed">
            We blend world-class wedding cinematography with a seamless digital experience for our couples.
          </p>
        </div>
        
        <BentoGrid className="lg:grid-rows-2 gap-4">
          {chooseUsFeatures.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </main>

      
    </div>
  )
}

export default Why