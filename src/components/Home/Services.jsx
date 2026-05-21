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
  const [permissionStatus, setPermissionStatus] = useState('unknown'); // 'unknown', 'granted', 'denied'
  const [isMobile, setIsMobile] = useState(false);

  // Animation frame and targeting references
  const targetX = useRef(0);
  const targetY = useRef(0);
  const [gyro, setGyro] = useState({ x: 0, y: 0 });
  const requestRef = useRef(null);

  // 1. Detect if the device is mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/Mobi|Android|iPhone/i.test(navigator.userAgent));
    };
    checkMobile();

    // Check if the browser doesn't require explicit permissions (most Android devices)
    if (typeof DeviceOrientationEvent !== 'undefined' && !DeviceOrientationEvent.requestPermission) {
      setPermissionStatus('granted');
    }
  }, []);

  // 2. Linear Interpolation (Lerp) animation loop for fluid damping
  useEffect(() => {
    const updateMotion = () => {
      setGyro((prev) => {
        const nextX = prev.x + (targetX.current - prev.x) * 0.1;
        const nextY = prev.y + (targetY.current - prev.y) * 0.1;
        return { x: nextX, y: nextY };
      });
      requestRef.current = requestAnimationFrame(updateMotion);
    };

    if (permissionStatus === 'granted') {
      requestRef.current = requestAnimationFrame(updateMotion);
    }
    return () => cancelAnimationFrame(requestRef.current);
  }, [permissionStatus]);

  // 3. Mathematical mapping for smooth tilts
  const handleOrientation = (event) => {
    const beta = event.beta || 0;   // Front-to-back tilt (-180 to 180)
    const gamma = event.gamma || 0; // Left-to-right tilt (-90 to 90)

    const maxTilt = 15; // Cap the max tilt to keep it premium and subtle
    const baselineBeta = 55; // Calibrate for a natural holding posture angle (~55°)
    
    const normalizedBeta = beta - baselineBeta;

    targetX.current = Math.max(Math.min(-normalizedBeta * 0.4, maxTilt), -maxTilt);
    targetY.current = Math.max(Math.min(gamma * 0.4, maxTilt), -maxTilt);
  };

  // 4. Bulletproof Synchronous Permission Trigger
  const requestPermission = () => {
    if (
      typeof DeviceOrientationEvent !== 'undefined' &&
      typeof DeviceOrientationEvent.requestPermission === 'function'
    ) {
      // Must be executed synchronously in the click handler to satisfy iOS security
      DeviceOrientationEvent.requestPermission()
        .then((response) => {
          setPermissionStatus(response);
          if (response === 'granted') {
            window.addEventListener('deviceorientation', handleOrientation, true);
          }
        })
        .catch((error) => {
          console.error("Sensor initialization context failed:", error);
          setPermissionStatus('denied');
        });
    } else if (typeof DeviceOrientationEvent !== 'undefined') {
      // Standard Android direct bind fallback
      setPermissionStatus('granted');
      window.addEventListener('deviceorientation', handleOrientation, true);
    } else {
      setPermissionStatus('denied');
    }
  };

  // Clean up listeners on unmount
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

        {/* 🔥 HIGHLY HIGHLIGHTED LUXURY BUTTON STATION */}
        {isMobile && (
          <div className="w-full md:w-auto shrink-0 z-30">
            {permissionStatus !== 'granted' ? (
              <button 
                onClick={requestPermission}
                className="relative overflow-hidden w-full md:w-auto px-8 py-5 rounded-2xl bg-white text-black font-bold text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.25)] border border-white active:scale-98 transition-all duration-300 animate-bounce"
              >
                {/* Shimmer Sweeping Highlight Effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full animate-[shimmer_2.5s_infinite]" />
                
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
                Access blocked. Tap the URL lock icon to reset permissions.
              </p>
            )}
          </div>
        )}
      </div>

      {/* Cards Grid with Perspective Viewport */}
      <div 
        className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        style={{ perspective: '1200px' }} // Gives structural 3D context to child elements
      >
        {cardData.map((item, index) => {
          const rotateX = permissionStatus === 'granted' ? gyro.x : 0;
          const rotateY = permissionStatus === 'granted' ? gyro.y : 0;

          return (
            <div 
              key={index} 
              className="group relative h-[450px] bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:border-white/30"
              style={{
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transformStyle: 'preserve-3d', // Ensures inner layers depth are independent
              }}
            >
              {/* Background Layer (Pushed Backward) */}
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

              {/* Typography Content Layer (Popped Forward) */}
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

              {/* Flash Highlight Flare Effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.06),transparent_50%)]" 
                style={{
                  transform: `translate3d(${rotateY * -2.5}px, ${rotateX * -2.5}px, 0px)`,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;