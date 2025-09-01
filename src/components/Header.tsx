import React from 'react';
import { Scale, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="p-3 bg-white/10 backdrop-blur-md rounded-full">
          <Scale className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Gravity Calculator
        </h1>
        <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
      </div>
      <p className="text-xl text-gray-200 max-w-2xl mx-auto">
        Discover how much you would weigh on different planets in our solar system
      </p>
    </div>
  );
};

export default Header;