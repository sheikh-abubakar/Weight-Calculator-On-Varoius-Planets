import React from 'react';
import type { Planet } from '../types/Planet';

interface Planet3DProps {
  planet: Planet;
  size?: 'small' | 'large';
}

const Planet3D: React.FC<Planet3DProps> = ({ planet, size = 'large' }) => {
  const sizeClasses = size === 'large' ? 'w-48 h-48' : 'w-20 h-20';
  const animationDuration = size === 'large' ? '20s' : '15s';

  return (
    <div className="relative">
      <div 
        className={`${sizeClasses} mx-auto rounded-full bg-gradient-to-br ${planet.gradient} relative overflow-hidden animate-spin shadow-2xl`}
        style={{ animationDuration }}
      >
        {/* Planet surface details */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/3 w-8 h-8 rounded-full bg-white/20"></div>
          <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-black/20"></div>
          <div className="absolute bottom-1/3 left-1/4 w-6 h-6 rounded-full bg-white/10"></div>
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full shadow-[inset_0_0_50px_rgba(255,255,255,0.1)]"></div>
      </div>
      
      {/* Saturn's rings */}
      {planet.name === 'Saturn' && size === 'large' && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-72 h-72 border-4 border-yellow-300/30 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-yellow-400/20 rounded-full"></div>
        </div>
      )}
    </div>
  );
};

export default Planet3D;