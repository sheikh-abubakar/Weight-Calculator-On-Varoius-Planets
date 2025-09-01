import React from 'react';
import type { Planet } from '../types/Planet';

interface ControlPanelProps {
  earthWeight: string;
  setEarthWeight: (weight: string) => void;
  selectedPlanet: Planet;
  onPlanetChange: (planetName: string) => void;
  viewMode: 'single' | 'compare';
  setViewMode: (mode: 'single' | 'compare') => void;
  planets: Planet[];
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  earthWeight,
  setEarthWeight,
  selectedPlanet,
  onPlanetChange,
  viewMode,
  setViewMode,
  planets
}) => {
  return (
    <div className="max-w-4xl mx-auto mb-12">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
        <div className="grid md:grid-cols-3 gap-6 items-end">
          {/* Weight Input */}
          <div>
            <label htmlFor="weight" className="block text-white font-semibold mb-2">
              Your Weight on Earth
            </label>
            <div className="relative">
              <input
                id="weight"
                type="number"
                value={earthWeight}
                onChange={(e) => setEarthWeight(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-md text-white placeholder-gray-300 border border-white/30 focus:border-white/60 focus:outline-none transition-all duration-200"
                placeholder="Enter weight"
                min="0"
                step="0.1"
              />
              <div className="absolute right-3 top-3 text-gray-300">kg</div>
            </div>
          </div>

          {/* Planet Selector */}
          <div>
            <label htmlFor="planet" className="block text-white font-semibold mb-2">
              Choose Planet
            </label>
            <select
              id="planet"
              value={selectedPlanet.name}
              onChange={(e) => onPlanetChange(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-md text-white border border-white/30 focus:border-white/60 focus:outline-none transition-all duration-200 cursor-pointer"
            >
              {planets.map(planet => (
                <option key={planet.name} value={planet.name} className="bg-gray-800">
                  {planet.name}
                </option>
              ))}
            </select>
          </div>

          {/* View Mode Toggle */}
          <div>
            <label className="block text-white font-semibold mb-2">View Mode</label>
            <div className="flex rounded-xl overflow-hidden border border-white/30">
              <button
                onClick={() => setViewMode('single')}
                className={`flex-1 px-4 py-3 transition-all duration-200 ${
                  viewMode === 'single' 
                    ? 'bg-white/30 text-white' 
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Single
              </button>
              <button
                onClick={() => setViewMode('compare')}
                className={`flex-1 px-4 py-3 transition-all duration-200 ${
                  viewMode === 'compare' 
                    ? 'bg-white/30 text-white' 
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Compare
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;