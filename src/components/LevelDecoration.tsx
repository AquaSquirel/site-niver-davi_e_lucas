import { motion } from 'framer-motion';

// Ícones simples para o padrão de fundo
const PatternIcon = ({ type, className }: { type: 'mushroom' | 'star' | 'coin', className?: string }) => {
  if (type === 'mushroom') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C7.58 2 4 5.58 4 10V14H20V10C20 5.58 16.42 2 12 2ZM6 10C6 7.24 7.79 5 10 5V10H6ZM14 5C16.21 5 18 7.24 18 10H14V5Z" />
        <path d="M12 15C8.69 15 6 17.69 6 21H18C18 17.69 15.31 15 12 15Z" />
      </svg>
    );
  }
  if (type === 'star') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" />
    </svg>
  );
};

// Arbusto Pixelado (SVG)
const PixelBush = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M20 30H80V40H20V30Z" fill="#228B22" />
    <path d="M10 20H30V30H10V20Z" fill="#228B22" />
    <path d="M70 20H90V30H70V20Z" fill="#228B22" />
    <path d="M30 10H70V30H30V10Z" fill="#32CD32" />
    <path d="M10 20H30V30H10V20Z" fill="#32CD32" />
    <path d="M70 20H90V30H70V20Z" fill="#32CD32" />
    <path d="M20 30H80V40H20V30Z" fill="#006400" opacity="0.2" />
  </svg>
);

export const LevelDecoration = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Padrão de Fundo Repetitivo */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-6 gap-12 md:gap-24 p-8 animate-pulse">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-12">
              <PatternIcon type="mushroom" className="w-8 h-8 md:w-16 md:h-16 text-blue-900 transform rotate-12" />
              <PatternIcon type="star" className="w-6 h-6 md:w-12 md:h-12 text-blue-900 transform -rotate-6 translate-x-8" />
              <PatternIcon type="coin" className="w-8 h-8 md:w-16 md:h-16 text-blue-900 transform rotate-45" />
            </div>
          ))}
        </div>
      </div>

      {/* Arbustos e Cenário na Base */}
      <div className="absolute bottom-0 left-0 w-full flex justify-between items-end pb-0">
        <PixelBush className="w-32 h-16 md:w-64 md:h-32 text-green-500 -mb-2" />
        <PixelBush className="w-24 h-12 md:w-48 md:h-24 text-green-500 hidden md:block -mb-2" />
        <div className="flex-1" />
        <PixelBush className="w-40 h-20 md:w-80 md:h-40 text-green-500 -mb-2" />
      </div>
      
      {/* Montanha Decorativa Distante */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg opacity-20 -z-10">
         <svg viewBox="0 0 200 100" fill="currentColor" className="text-green-800 w-full h-auto">
            <path d="M100 20 L150 100 L50 100 Z" />
            <path d="M50 50 L100 100 L0 100 Z" />
            <path d="M150 60 L200 100 L100 100 Z" />
         </svg>
      </div>
    </div>
  );
};