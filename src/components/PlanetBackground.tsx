import React from 'react';
import type { Planet } from '../types/Planet';

interface PlanetBackgroundProps {
  planet: Planet;
  isVisible: boolean;
}

const PlanetBackground: React.FC<PlanetBackgroundProps> = ({ planet, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none">
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
        style={{
          width: '600px',
          height: '600px',
          filter: 'blur(2px) brightness(1.1) drop-shadow(0 0 80px #fff)',
          opacity: 0.25,
          transition: 'opacity 0.5s',
        }}
      >
        <div
          className={`rounded-full animate-spin-slow shadow-2xl`}
          style={{
            width: '100%',
            height: '100%',
            background: `linear-gradient(135deg, ${planet.color} 0%, #fff 100%)`,
            boxShadow: `0 0 120px 40px ${planet.color}`,
            border: `8px solid rgba(255,255,255,0.08)`,
            animation: 'spin 30s linear infinite',
          }}
        >
          {/* Optional: Add planet rings for Saturn */}
          {planet.name === 'Saturn' && (
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                width: '700px',
                height: '700px',
                border: '12px solid rgba(255, 230, 150, 0.3)',
                borderRadius: '50%',
                transform: 'translate(-50%, -50%) rotate(-20deg)',
                pointerEvents: 'none',
              }}
            />
          )}
        </div>
      </div>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
          .animate-spin-slow {
            animation: spin 30s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default PlanetBackground;