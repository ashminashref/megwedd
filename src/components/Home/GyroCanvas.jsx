import React, { useState, useEffect, useRef } from 'react';

function GyroCanvas() {
  const [hasPermission, setHasPermission] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Target values from the sensor
  const targetX = useRef(0);
  const targetY = useRef(0);

  // Current animated positions (for smoothing/damping)
  const currentX = useRef(0);
  const currentY = useRef(0);

  const containerRef = useRef(null);
  const requestRef = useRef(null);

  // 1. Detect if user is on a mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/Mobi|Android|iPhone/i.test(navigator.userAgent));
    };
    checkMobile();
    
    // Check if permission was previously granted or isn't required (Android)
    if (typeof DeviceOrientationEvent !== 'undefined' && !DeviceOrientationEvent.requestPermission) {
      setHasPermission('granted');
    }
  }, []);

  // 2. Continuous animation loop for butter-smooth motion (Damping)
  useEffect(() => {
    const updateMotion = () => {
      // Linear Interpolation formula: current = current + (target - current) * easingFactor
      // 0.1 gives it a subtle, luxury hydraulic fluid delay effect
      currentX.current += (targetX.current - currentX.current) * 0.1;
      currentY.current += (targetY.current - currentY.current) * 0.1;

      if (containerRef.current) {
        // Apply 3D rotation based on the smoothed sensor values
        containerRef.current.style.transform = `rotateX(${currentX.current}deg) rotateY(${currentY.current}deg)`;
      }

      requestRef.current = requestAnimationFrame(updateMotion);
    };

    if (hasPermission === 'granted') {
      requestRef.current = requestAnimationFrame(updateMotion);
    }

    return () => cancelAnimationFrame(requestRef.current);
  }, [hasPermission]);

  // 3. Process the orientation angles
  const handleOrientation = (event) => {
    // beta: front-to-back tilt (-180 to 180). Assume ~45-60 deg is natural holding angle.
    // gamma: left-to-right tilt (-90 to 90).
    const beta = event.beta || 0;
    const gamma = event.gamma || 0;

    // Constrain and map values so the UI doesn't spin wildly (Max 15 degrees tilt)
    const maxTilt = 15;
    
    // Normalize natural holding posture (subtracting roughly 50 degrees from beta)
    const normalizedBeta = beta - 50; 

    targetX.current = Math.max(Math.min(-normalizedBeta * 0.4, maxTilt), -maxTilt);
    targetY.current = Math.max(Math.min(gamma * 0.4, maxTilt), -maxTilt);
  };

  // 4. Request Sensor Permission (Required on iOS 13+)
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
        console.error('Error requesting device orientation context:', error);
      }
    } else {
      // Standard Android or Fallback behavior
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

  // If user is browsing via Desktop, show a prompt or alternative
  if (!isMobile) {
    return (
      <div style={styles.section}>
        <div style={styles.fallbackCard}>
          <h2 style={styles.title}>Interactive Canvas</h2>
          <p style={styles.text}>Open this website on your smartphone to experience the live gyroscope physical orientation features!</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.section}>
      {hasPermission !== 'granted' ? (
        <div style={styles.permissionWrapper}>
          <button onClick={requestPermission} style={styles.btn}>
            ✦ Activate Gyro Experience
          </button>
        </div>
      ) : (
        <div style={styles.scene}>
          <div ref={containerRef} style={styles.gyroCard}>
            {/* Layer 1: Background Blur */}
            <div style={styles.glow} />
            
            {/* Layer 2: Floating Typography Content */}
            <div style={styles.content}>
              <span style={styles.tag}>IMMERSE</span>
              <h2 style={styles.cardTitle}>Spatial UI</h2>
              <p style={styles.cardText}>Tilt your device to interact with the perspective of this interface element in real-time.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Minimal, premium inline styling configuration
const styles = {
  section: {
    height: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0a0a0a',
    padding: '20px',
    overflow: 'hidden',
  },
  permissionWrapper: {
    textAlign: 'center',
  },
  btn: {
    padding: '14px 28px',
    fontSize: '16px',
    fontWeight: '600',
    backgroundColor: '#ffffff',
    color: '#000000',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    boxShadow: '0 10px 30px rgba(255,255,255,0.1)',
  },
  fallbackCard: {
    maxWidth: '400px',
    textAlign: 'center',
    padding: '4px',
  },
  title: { color: '#fff', fontSize: '2rem', marginBottom: '12px' },
  text: { color: '#888', fontSize: '1rem', lineHeight: '1.5' },
  scene: {
    perspective: '1000px', // Creates the 3D depth field context
    width: '100%',
    maxWidth: '340px',
    height: '400px',
  },
  gyroCard: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '24px',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '30px',
    transformStyle: 'preserve-3d', // Ensures nested layers depth are honored
    boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
  },
  glow: {
    position: 'absolute',
    top: '-10%',
    left: '-10%',
    width: '120%',
    height: '120%',
    background: 'radial-gradient(circle at 50% 50%, rgba(100, 100, 255, 0.15), transparent 60%)',
    pointerEvents: 'none',
    transform: 'translateZ(-20px)', // Pushes the glow layer back in space
  },
  content: {
    transform: 'translateZ(40px)', // Pops the text forward out of the card
    backfaceVisibility: 'hidden',
  },
  tag: { color: '#6464ff', letterSpacing: '2px', fontSize: '12px', fontWeight: 'bold' },
  cardTitle: { color: '#fff', fontSize: '1.8rem', margin: '8px 0' },
  cardText: { color: '#aaa', fontSize: '0.95rem', lineHeight: '1.4' },
};

export default GyroCanvas;