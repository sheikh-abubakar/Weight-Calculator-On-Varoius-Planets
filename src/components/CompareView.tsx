import React from 'react';
import type { Planet } from '../types/Planet';
import { calculateWeight } from '../utils/calculations';
import Planet3D from './Planet3D';

interface CompareViewProps {
  planets: Planet[];
  earthWeight: number;
}

const CompareView: React.FC<CompareViewProps> = ({ planets, earthWeight }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {planets.map((planet, index) => {
        const planetWeight = calculateWeight(earthWeight, planet.gravity);
        return (
          <div 
            key={planet.name}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Mini 3D Planet */}
            <div className="mb-4">
              <Planet3D planet={planet} size="small" />
            </div>

            <h3 className="text-xl font-bold text-white mb-2 text-center">
              {planet.name}
            </h3>
            
            <div className="space-y-2 text-center">
              <div className="text-sm text-gray-300">
                Gravity: {planet.gravity}g
              </div>
              <div className="text-2xl font-bold text-white">
                {planetWeight} kg
              </div>
              
              {planet.name !== 'Earth' && (
                <div className={`text-sm font-medium ${
                  planetWeight > earthWeight ? 'text-red-300' : 'text-green-300'
                }`}>
                  {planetWeight > earthWeight ? '+' : ''}{(planetWeight - earthWeight).toFixed(1)} kg
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CompareView;