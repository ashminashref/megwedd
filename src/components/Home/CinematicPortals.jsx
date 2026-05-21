import React, { useState, useEffect, useRef } from 'react';

// Sample Deep Field Data
const portalData = [
  {
    title: "Eternal Gaze",
    tag: "Legacy Portrait",
    background: "/Images/cine_1.jpg", // Replace with high-quality, moody image
    midground: "/Images/cine_1_mid.png", // Image layer with transparent background
  },
  {
    title: "Lost in Echoes",
    tag: "Cinematic Still",
    background: "/Images/cine_2.jpg", 
    midground: "/Images/cine_2_mid.png",
  },
    {
    title: "Whispers of Fate",
    tag: "Dramatic Composition",
    background: "/Images/cine_3.jpg", 
    midground: "/Images/cine_3_mid.png",
  },
    {
    title: "Timeless Echo",
    tag: "Artistic Film",
    background: "/Images/cine_4.jpg", 
    midground: "/Images/cine_4_mid.png",
  }
];

function CinematicPortals() {
  const containerRef = useRef(null);
  const [scrollYPercentage, setScrollYPercentage] = useState(0);
  const [gyro, setGyro] = useState({ x: 0, y: 0 }); // Optional for tilt

  // 1. Core: Scroll-Based Parallax Effect
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = containerRef.current.offsetHeight;

      // Calculate how far down the component is visible in the viewport (0 to 1)
      const visiblePercentage = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + totalHeight)));
      setScrollYPercentage(visiblePercentage);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Optional: Subtle Gyroscope Drift (Requires no permissions)
  // This event can fire sporadically without explicit permission in some browsers
  // for *non-sensitive* data. We use it only for subtle visual drift.
  useEffect(() => {
    const handleOrientation = (event) => {
      if (typeof event.beta === 'number' && typeof event.gamma === 'number') {
        const maxDrift = 5; // Max degrees/pixels for subtle effect
        const betaBaseline = 50; // Natural holding angle

        // Subtle, dampened rotation/shift
        const xOffset = Math.max(-maxDrift, Math.min(maxDrift, (event.beta - betaBaseline) * 0.1));
        const yOffset = Math.max(-maxDrift, Math.min(maxDrift, event.gamma * 0.1));
        setGyro({ x: xOffset, y: yOffset });
      }
    };

    // Standard listener, doesn't always work without permission but won't crash
    window.addEventListener('deviceorientation', handleOrientation);
    return () => window.removeEventListener('deviceorientation', handleOrientation);
  }, []);

  return (
    <div ref={containerRef} className="px-8 py-32 bg-[#050505] font-sans">
      <div className="max-w-7xl mx-auto mb-20 text-center">
        <span className="text-white/40 uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
          Immersive Perspectives
        </span>
        <h2 className="text-white text-6xl md:text-7xl tracking-tighter">
          Portals to <br />
          <span className="italic font-light">Legacy</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {portalData.map((item, index) => {
          // Calculate individual offsets
          const scrollOffset = (scrollYPercentage - 0.5) * -150; // Invert and intensify
          
          // Apply combined scroll and optional gyro effects
          const backgroundTransform = `translate3d(${gyro.y * -0.5}px, ${scrollOffset * -0.15 + gyro.x * -0.5}px, 0)`;
          const midgroundTransform = `translate3d(${gyro.y * 1}px, ${scrollOffset * 0.1 + gyro.x * 1}px, 20px) scale(1.1)`;
          const contentTransform = `translate3d(0, 0, 60px) rotateY(${gyro.y * -0.2}deg) rotateX(${gyro.x * 0.2}deg)`;

          return (
            <div
              key={index}
              className="group relative h-[50vh] md:h-[65vh] overflow-hidden rounded-[30px] border border-white/5 bg-[#0A0A0A] [perspective:1500px]"
            >
              {/* Deep Background Layer */}
              <div
                className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-500 ease-out will-change-transform"
                style={{
                  backgroundImage: `url(${item.background})`,
                  transform: backgroundTransform,
                }}
              />

              {/* Emerging Midground Layer (Popped Forward) */}
              <div
                className="absolute inset-0 z-10 flex items-center justify-center transition-transform duration-500 ease-out will-change-transform [transform-style:preserve-3d]"
                style={{ transform: midgroundTransform }}
              >
                <img
                  src={item.midground}
                  alt={item.title}
                  className="w-[90%] h-[90%] object-contain max-h-[80%] max-w-[80%] transition-transform duration-700 delay-100 ease-out scale-95 group-hover:scale-100"
                />
              </div>

              {/* Floating Content Layer (Way Forward) */}
              <div
                className="absolute inset-x-8 bottom-8 z-20 transition-transform duration-500 ease-out will-change-transform [transform-style:preserve-3d]"
                style={{ transform: contentTransform }}
              >
                <span className="text-emerald-300 text-xs uppercase tracking-widest font-semibold">
                  {item.tag}
                </span>
                <h3 className="text-white text-3xl font-light tracking-tight mt-2 opacity-90 transition-opacity group-hover:opacity-100">
                  {item.title}
                </h3>
                <div className="h-px w-full bg-gradient-to-r from-emerald-300 to-transparent mt-4 opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Luxury Frame & Vignette Overlay */}
              <div className="absolute inset-0 z-30 pointer-events-none rounded-[30px] border-[12px] border-[#0A0A0A] shadow-[inset_0_0_80px_rgba(0,0,0,0.9)] opacity-100 group-hover:border-[#0A0A0A]/90 transition-all" />
              <div className="absolute inset-0 z-25 bg-[linear-gradient(to_top,#050505_0%,#050505/20_30%,transparent_100%)]" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CinematicPortals;