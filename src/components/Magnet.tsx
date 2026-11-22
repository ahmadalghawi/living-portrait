import React, { useRef, useState, useEffect } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  className?: string;
  strength?: number; // Divisor for displacement, default e.g. 3.5
  padding?: number;  // Distance from edge to activate magnet effect, default 50px
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  className = '',
  strength = 3.5,
  padding = 60,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;

      const isInside =
        e.clientX >= rect.left - padding &&
        e.clientX <= rect.right + padding &&
        e.clientY >= rect.top - padding &&
        e.clientY <= rect.bottom + padding;

      if (isInside) {
        setIsHovered(true);
        setPosition({
          x: distX / strength,
          y: distY / strength,
        });
      } else if (isHovered) {
        setIsHovered(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered, padding, strength]);

  return (
    <div
      ref={ref}
      className={`inline-block ${className}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0px)`,
        transition: isHovered
          ? 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)'
          : 'transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};
