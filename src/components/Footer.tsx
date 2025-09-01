import React from 'react';
import { Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto mt-12 text-center">
      <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Globe className="w-5 h-5 text-blue-300" />
          <h3 className="text-lg font-semibold text-white">How it Works</h3>
        </div>
        <p className="text-gray-300 leading-relaxed">
          Weight is determined by the gravitational pull of a planet. Each planet has different gravity 
          based on its mass and size. Your weight changes, but your mass stays the same throughout the universe!
        </p>
      </div>
    </div>
  );
};

export default Footer;