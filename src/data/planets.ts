import type { Planet } from '../types/Planet';

export const planets: Planet[] = [
  { 
    name: 'Mercury', 
    gravity: 0.378, 
    color: '#8C7853', 
    gradient: 'from-gray-400 to-yellow-600',
    description: 'The smallest and closest planet to the Sun'
  },
  { 
    name: 'Venus', 
    gravity: 0.907, 
    color: '#FFC649', 
    gradient: 'from-orange-300 to-yellow-500',
    description: 'The hottest planet in our solar system'
  },
  { 
    name: 'Earth', 
    gravity: 1.0, 
    color: '#6B93D6', 
    gradient: 'from-blue-400 to-green-500',
    description: 'Our home planet with perfect conditions for life'
  },
  { 
    name: 'Mars', 
    gravity: 0.377, 
    color: '#CD5C5C', 
    gradient: 'from-red-400 to-orange-600',
    description: 'The red planet, target for future human exploration'
  },
  { 
    name: 'Jupiter', 
    gravity: 2.36, 
    color: '#D8CA9D', 
    gradient: 'from-yellow-600 to-orange-800',
    description: 'The largest planet with a famous Great Red Spot'
  },
  { 
    name: 'Saturn', 
    gravity: 0.916, 
    color: '#FAD5A5', 
    gradient: 'from-yellow-300 to-amber-600',
    description: 'Known for its spectacular ring system'
  },
  { 
    name: 'Uranus', 
    gravity: 0.889, 
    color: '#4FD0E7', 
    gradient: 'from-cyan-300 to-blue-600',
    description: 'An ice giant that rotates on its side'
  },
  { 
    name: 'Neptune', 
    gravity: 1.13, 
    color: '#4B70DD', 
    gradient: 'from-blue-500 to-indigo-700',
    description: 'The windiest planet with supersonic storms'
  }
];