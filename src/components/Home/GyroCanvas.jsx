import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';

const cardData = [
  {
    title: 'Wedding Photography',
    subtitle: 'A curated selection of timeless angles and raw emotion.',
    img: '/Images/cinematic-wedding.jpg',
    tag: 'Photography'
  },
  {
    title: 'Cinematic Films',
    subtitle: 'Emotional storytelling captured through high-end motion.',
    img: '/Images/cinematic.jpg',
    tag: 'Film'
  },
  {
    title: 'Event Branding',
    subtitle: 'Custom visual identities for the world\'s luxury weddings.',
    img: '/Images/event.jpg',
    tag: 'Branding'
  }
];

function Services() {
  const [permissionStatus, setPermissionStatus] = useState('unknown'); 
  const [supportsGyro, setSupportsGyro] = useState(false);

  // High-frequency physics values kept completely outside of React State
  const targetX = useRef(0);
  const targetY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);
  
  // Direct DOM pointers to avoid re-renders
  const cardRefs = useRef([]);
  const flareRefs = useRef([]);
  const requestRef = useRef(null);

  // 1. Feature detection
  useEffect(() => {
    if (typeof window !== 'undefined' && 'DeviceOrientationEvent' in window) {
      setSupportsGyro(true);
      if (!DeviceOrientationEvent.requestPermission) {
        setPermissionStatus('granted');
      }
    }
  }, []);

  // 2. Real-time DOM Modification Loop (Zero-Lag Engine)
  useEffect(() => {
    const updateMotion = () => {
      // 1. Compute smooth linear interpolation values
      currentX.current += (targetX.current - currentX.current) * 0.12;
      currentY.current += (targetY.current - currentY.current) * 0.12;

      // 2. Directly mutate DOM node styles imperatively (bypasses React diffing)
      cardRefs.current.forEach((cardNode,) => {
        if (cardNode) {
          cardNode.style.transform = `rotateX(${currentX.current}deg) rotateY(${currentY.current}deg)`;
        }
      });

      flareRefs.current.forEach((flareNode) => {
        if (flareNode) {
          flareNode.style.transform = `translate3d(${currentY.current * -2.5}px, ${currentX.current * -2.5}px, 0px)`;
        }
      });

      requestRef.current = requestAnimationFrame(updateMotion);
    };

    if (permissionStatus === 'granted') {
      requestRef.current = requestAnimationFrame(updateMotion);
    }
    return () => cancelAnimationFrame(requestRef.current);
  }, [permissionStatus]);

  // 3. Sensor stream receiver
  const handleOrientation = (event) => {
    if (event.beta === null || event.gamma === null || (event.beta === 0 && event.gamma === 0)) {
      return; // Filter out dummy desktop/laptop baseline transmissions
    }

    const maxTilt = 12; 
    const baselineBeta = 55; // Neutral wrist pitch offset config
    
    const normalizedBeta = event.beta - baselineBeta;

    targetX.current = Math.max(Math.min(-normalizedBeta * 0.35, maxTilt), -maxTilt);
    targetY.current = Math.max(Math.min(event.gamma * 0.35, maxTilt), -maxTilt);
  };

  // 4. Synchronous activation trigger
  const requestPermission = () => {
    if (
      typeof DeviceOrientationEvent !== 'undefined' &&
      typeof DeviceOrientationEvent.requestPermission === 'function'
    ) {
      DeviceOrientationEvent.requestPermission()
        .then((response) => {
          setPermissionStatus(response);
          if (response === 'granted') {
            window.addEventListener('deviceorientation', handleOrientation, true);
          }
        })
        .catch((error) => {
          console.error("Sensor connection failed:", error);
          setPermissionStatus('denied');
        });
    } else {
      setPermissionStatus('granted');
      window.addEventListener('deviceorientation', handleOrientation, true);
    }
  };

  useEffect(() => {
    if (permissionStatus === 'granted') {
      window.addEventListener('deviceorientation', handleOrientation, true);
    }
    return () => window.removeEventListener('deviceorientation', handleOrientation, true);
  }, [permissionStatus]);

  return (
    <div className='px-8 py-24 bg-[#050505] min-h-screen font-sans overflow-hidden'>
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div>
          <span className="text-white/40 uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
            Our Expertise
          </span>
          <h1 className='text-white text-6xl md:text-7xl tracking-tight'>
            Services and <br /> 
            <span className="italic font-light">solutions</span> we offer
          </h1>
          <p className='text-white/50 max-w-lg mt-4 text-base leading-relaxed'>
            We turn love stories into legacy through cinematic composition 
            and standout aesthetics.
          </p>
        </div>

        {/* HIGH-HIGHLIGHTED INTERACTIVE CONTROL STATION */}
        {supportsGyro && (
          <div className="w-full md:w-auto shrink-0 z-30">
            {permissionStatus !== 'granted' ? (
              <button 
                onClick={requestPermission}
                className="relative overflow-hidden w-full md:w-auto px-8 py-5 rounded-2xl bg-white text-black font-bold text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-3 shadow-[0_0_50px_rgba(255,255,255,0.3)] border-2 border-white active:scale-95 transition-all duration-300 animate-bounce"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                <Sparkles size={14} className="text-black" />
                <span>Activate Motion Depth</span>
              </button>
            ) : (
              <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center gap-3 text-white/60 text-xs font-medium tracking-widest uppercase backdrop-blur-md">
                <CheckCircle2 size={14} className="text-emerald-400" />
                <span>Spatial Mode Engaged</span>
              </div>
            )}
            {permissionStatus === 'denied' && (
              <p className="text-rose-400 text-center text-xs mt-3 font-medium">
                Sensor blocked. Tap your address bar settings to clear site permissions.
              </p>
            )}
          </div>
        )}
      </div>

      {/* Cards Grid Component with 3D Context */}
      <div 
        className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        style={{ perspective: '1200px' }}
      >
        {cardData.map((item, index) => (
          <div 
            key={index} 
            ref={(el) => (cardRefs.current[index] = el)} // Attach dynamic array reference pointer
            className="group relative h-[450px] bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:border-white/30 will-change-transform"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Background Image Underlay */}
            <div 
              className="absolute inset-0 z-0"
              style={{ transform: 'translateZ(-15px) scale(1.08)' }}
            >
              <img 
                src={item.img} 
                alt={item.title}
                className="w-full h-full object-cover opacity-70 grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-[1.2s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent" />
            </div>

            {/* Foreground Content Layer */}
            <div 
              className="relative z-10 h-full p-10 flex flex-col justify-between"
              style={{ transform: 'translateZ(35px)' }}
            >
              <div className="flex justify-between items-start w-full">
                <span className="text-white/40 text-xs uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                  {item.tag}
                </span>
                
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <ArrowUpRight size={18} strokeWidth={1.5} />
                </div>
              </div>

              <div>
                <h3 className="text-white text-3xl font-light tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500">
                  {item.title}
                </h3>
                <div className="h-px w-0 group-hover:w-full bg-gradient-to-r from-white/40 to-transparent transition-all duration-700 mb-4" />
                <p className="text-white/50 text-base leading-relaxed max-w-[260px] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {item.subtitle}
                </p>
              </div>
            </div>

            {/* Surface Highlight Glow Layer */}
            <div 
              ref={(el) => (flareRefs.current[index] = el)} // Attach light mapping array tracking pointers
              className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.06),transparent_50%)] will-change-transform" 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;