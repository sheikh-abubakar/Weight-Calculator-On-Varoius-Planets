import { useState } from 'react';
import type { Planet } from '../types/Planet';

export const usePlanetSelection = (initialPlanet: Planet) => {
  const [selectedPlanet, setSelectedPlanet] = useState<Planet>(initialPlanet);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePlanetChange = (planetName: string, planets: Planet[]) => {
    const planet = planets.find(p => p.name === planetName);
    if (planet) {
      setIsAnimating(true);
      setTimeout(() => {
        setSelectedPlanet(planet);
        setIsAnimating(false);
      }, 150);
    }
  };

  return {
    selectedPlanet,
    isAnimating,
    handlePlanetChange
  };
};