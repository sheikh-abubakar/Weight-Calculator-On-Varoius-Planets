import React from 'react';
import { Calculator } from 'lucide-react';
import type { Planet } from '../types/Planet';
import { calculateWeight, getWeightDifference } from '../utils/calculations';
import Planet3D from './Planet3D';

interface SinglePlanetViewProps {
  planet: Planet;
  earthWeight: number;
  isAnimating: boolean;
}

const SinglePlanetView: React.FC<SinglePlanetViewProps> = ({
  planet,
  earthWeight,
  isAnimating
}) => {
  const planetWeight = calculateWeight(earthWeight, planet.gravity);
  const weightDifference = getWeightDifference(planetWeight, earthWeight);

  return (
    <div className="max-w-2xl mx-auto">
      <div className={`bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center transition-all duration-300 ${isAnimating ? 'scale-95 opacity-50' : 'scale-100 opacity-100'}`}>
        {/* 3D Planet */}
        <div className="mb-8">
          <Planet3D planet={planet} size="large" />
        </div>

        <h2 className="text-3xl font-bold text-white mb-2">{planet.name}</h2>
        <p className="text-gray-300 mb-6">{planet.description}</p>

        <div className="space-y-4">
          <div className="flex justify-between items-center text-lg">
            <span className="text-gray-300">Gravity Factor:</span>
            <span className="text-white font-semibold">{planet.gravity}g</span>
          </div>
          <div className="flex justify-between items-center text-2xl">
            <span className="text-gray-300">Your Weight:</span>
            <span className="text-white font-bold">{planetWeight} kg</span>
          </div>
          
          {planet.name !== 'Earth' && (
            <div className="mt-6 p-4 bg-white/5 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <Calculator className="w-5 h-5 text-blue-300" />
                <span className="text-blue-300 font-medium">Weight Difference</span>
              </div>
              <p className="text-gray-300">
                {planetWeight > earthWeight ? 'Heavier' : 'Lighter'} by{' '}
                <span className="text-white font-semibold">
                  {weightDifference.toFixed(1)} kg
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SinglePlanetView;