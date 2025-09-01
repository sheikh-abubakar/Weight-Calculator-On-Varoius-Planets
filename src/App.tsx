import  { useState } from 'react';
import { planets } from './data/planets';
import { usePlanetSelection } from './hooks/usePlanetSelection';
import StarField from './components/StarField';
import Header from './components/Header';
import ControlPanel from './components/ControlPanel';
import SinglePlanetView from './components/SinglePlanetView';
import CompareView from './components/CompareView';
import Footer from './components/Footer';
import PlanetBackground from './components/PlanetBackground'; // <-- Add this import

function App() {
  const [earthWeight, setEarthWeight] = useState<string>('70');
  const [viewMode, setViewMode] = useState<'single' | 'compare'>('single');
  
  const { selectedPlanet, isAnimating, handlePlanetChange } = usePlanetSelection(planets[2]); // Earth

  const weight = parseFloat(earthWeight) || 0;

  const showPlanetBg = !!selectedPlanet;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated background stars */}
      <StarField />

      {/* Animated background planet */}
      <PlanetBackground planet={selectedPlanet} isVisible={showPlanetBg} />

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <Header />

        {/* Controls */}
        <ControlPanel
          earthWeight={earthWeight}
          setEarthWeight={setEarthWeight}
          selectedPlanet={selectedPlanet}
          onPlanetChange={(planetName) => handlePlanetChange(planetName, planets)}
          viewMode={viewMode}
          setViewMode={setViewMode}
          planets={planets}
        />

        {/* Results */}
        {viewMode === 'single' ? (
          <SinglePlanetView
            planet={selectedPlanet}
            earthWeight={weight}
            isAnimating={isAnimating}
          />
        ) : (
          <CompareView
            planets={planets}
            earthWeight={weight}
          />
        )}

        {/* Footer Info */}
        <Footer />
      </div>
    </div>
  );
}

export default App;