import { useRef, useState } from 'react';

/**
 * Tilt3D — Subtle interactive 3D perspective tilt on hover.
 * Wrap any card or element for a classic, professional 3D lift effect.
 * 
 * @param {number} intensity - Tilt intensity in degrees (default: 6)
 * @param {number} scale - Scale factor on hover (default: 1.02)
 * @param {string} className - Additional CSS classes
 */
export default function Tilt3D({
  children,
  intensity = 6,
  scale = 1.02,
  className = '',
  style = {},
}) {
  const containerRef = useRef(null);
  const [transform, setTransform] = useState('perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)');

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * intensity;
    const rotateX = ((centerY - y) / centerY) * intensity;

    setTransform(
      `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale},${scale},${scale})`
    );
  };

  const handleMouseLeave = () => {
    setTransform('perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)');
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`tilt-3d ${className}`}
      style={{
        transform,
        transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
