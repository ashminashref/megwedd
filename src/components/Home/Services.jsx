import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

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
  const [hasPermission, setHasPermission] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Raw target sensor offsets
  const targetX = useRef(0);
  const targetY = useRef(0);

  // Smoothed visual offset values (Damping state tracking)
  const [gyro, setGyro] = useState({ x: 0, y: 0 });
  const requestRef = useRef(null);

  // 1. Detect environment target context
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/Mobi|Android|iPhone/i.test(navigator.userAgent));
    };
    checkMobile();
    
    if (typeof DeviceOrientationEvent !== 'undefined' && !DeviceOrientationEvent.requestPermission) {
      setHasPermission('granted');
    }
  }, []);

  // 2. High-performance linear interpolation (lerp) loop running at screen frame speed
  useEffect(() => {
    const updateMotion = () => {
      // Smooth out the movement trajectory step by step
      setGyro((prev) => {
        const nextX = prev.x + (targetX.current - prev.x) * 0.1;
        const nextY = prev.y + (targetY.current - prev.y) * 0.1;
        return { x: nextX, y: nextY };
      });
      requestRef.current = requestAnimationFrame(updateMotion);
    };

    if (hasPermission === 'granted') {
      requestRef.current = requestAnimationFrame(updateMotion);
    }
    return () => cancelAnimationFrame(requestRef.current);
  }, [hasPermission]);

  // 3. Process the orientation angles securely
  const handleOrientation = (event) => {
    const beta = event.beta || 0;   // Forward/Backward tilt
    const gamma = event.gamma || 0; // Left/Right tilt

    const maxTilt = 12; // Cap the absolute physical swing to maintain premium subtlety
    const baselineBeta = 50; // Normalize normal casual holding pitch configuration
    
    const normalizedBeta = beta - baselineBeta;

    // Map axes cleanly: Beta changes X-axis pitch, Gamma changes Y-axis yaw
    targetX.current = Math.max(Math.min(-normalizedBeta * 0.3, maxTilt), -maxTilt);
    targetY.current = Math.max(Math.min(gamma * 0.3, maxTilt), -maxTilt);
  };

  // 4. Permission activation routine for mobile security protocols (iOS requirement)
  const requestPermission = async () => {
    if (
      typeof DeviceOrientationEvent !== 'undefined' &&
      typeof DeviceOrientationEvent.requestPermission === 'function'
    ) {
      try {
        const permissionState = await DeviceOrientationEvent.requestPermission();
        setHasPermission(permissionState);
        if (permissionState === 'granted') {
          window.addEventListener('deviceorientation', handleOrientation);
        }
      } catch (error) {
        console.error('Error executing motion sensor authentication context:', error);
      }
    } else {
      setHasPermission('granted');
      window.addEventListener('deviceorientation', handleOrientation);
    }
  };

  useEffect(() => {
    if (hasPermission === 'granted') {
      window.addEventListener('deviceorientation', handleOrientation);
    }
    return () => window.removeEventListener('deviceorientation', handleOrientation);
  }, [hasPermission]);

  return (
    <div className='px-8 py-24 bg-[#050505] min-h-screen font-sans overflow-hidden'>
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-20">
        <span className="text-white/40 uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
          Our Expertise
        </span>
        <h1 className='text-white text-6xl md:text-7xl '>
          Services and <br /> 
          <span className="italic ">solutions</span> we offer
        </h1>
        <p className='text-white/50 max-w-lg mt-4 text-base leading-relaxed'>
          We turn love stories into legacy through cinematic composition 
          and standout aesthetics.
        </p>

        {/* Dynamic Mobile Activation Banner */}
        {isMobile && hasPermission !== 'granted' && (
          <button 
            onClick={requestPermission}
            className="mt-8 px-5 py-2.5 text-xs font-medium tracking-widest text-black bg-white uppercase rounded-full hover:bg-white/90 transition-all duration-300"
          >
            ✦ Enable Motion Perspective
          </button>
        )}
      </div>

      {/* Cards Grid Context with 3D Depth Viewport Config */}
      <div 
        className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        style={{ perspective: '1000px' }} // Critical: Gives structural depth environment to children
      >
        {cardData.map((item, index) => {
          // Calculate individual motion based on state
          // On desktop, these values are 0, defaulting gracefully to your beautiful standard hover states
          const rotateX = isMobile && hasPermission === 'granted' ? gyro.x : 0;
          const rotateY = isMobile && hasPermission === 'granted' ? gyro.y : 0;

          return (
            <div 
              key={index} 
              className="group relative h-[450px] bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden transition-all duration-700 hover:border-white/30"
              style={{
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transformStyle: 'preserve-3d', // Dictates nested child depth offsets are respected
              }}
            >
              {/* Background Layer (Pushed Backwards) */}
              <div 
                className="absolute inset-0 z-0"
                style={{ transform: 'translateZ(-10px) scale(1.05)' }}
              >
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-[1.5s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
              </div>

              {/* Core Typography Content Layer (Popped Forward) */}
              <div 
                className="relative z-10 h-full p-10 flex flex-col justify-between"
                style={{ transform: 'translateZ(30px)' }} // Forces card elements to float in mid-air
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

              {/* Flash/Shine Layer shifting opposite to hand tilt movement direction */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.05),transparent_50%)]" 
                style={{
                  transform: `translate3d(${rotateY * -2}px, ${rotateX * -2}px, 0px)`,
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