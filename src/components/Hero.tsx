import { motion } from 'framer-motion';
import { Star, ChevronDown, Coins } from 'lucide-react';

// Componente de Nuvem "Fofinha" (Estilo Mario clássico)
const MarioCloud = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 45" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Sombra da nuvem para dar profundidade */}
    <path 
      d="M20 40C20 40 10 40 10 30C10 20 20 15 30 15C30 15 35 5 50 5C65 5 70 15 70 15C70 15 90 15 90 30C90 40 80 40 80 40H20Z" 
      fill="#D9E5FF" 
    />
    {/* Parte principal branca */}
    <path 
      d="M20 35C20 35 10 35 10 25C10 15 20 10 30 10C30 10 35 0 50 0C65 0 70 10 70 10C70 10 90 10 90 25C90 35 80 35 80 35H20Z" 
      fill="white" 
    />
  </svg>
);

export const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-gradient-to-b from-game-sky to-[#98B5FF] flex flex-col items-center justify-center overflow-hidden text-center px-4 pt-16 md:pt-0">
      
      {/* HUD (Heads Up Display) - Top Bar */}
      <div className="absolute top-0 left-0 w-full p-4 md:p-8 flex justify-between items-start font-pixel text-white text-[10px] md:text-xl drop-shadow-md z-30">
        <div className="flex flex-col items-start">
          <span className="mb-1">SCORE</span>
          <span>202600</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1 mb-1">
            <div className="w-3 h-4 md:w-5 md:h-6 bg-game-coin rounded-full animate-pulse border-2 border-yellow-600" />
            <span>x 09</span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className="mb-1">WORLD</span>
          <span>2-21</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="mb-1">TIME</span>
          <span>18:00</span>
        </div>
      </div>

      {/* Nuvens Fofinhas e Maiores */}
      <motion.div 
        animate={{ x: [-40, 40, -40] }} 
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[5%] opacity-90 z-10" 
      >
        <MarioCloud className="w-40 h-20 md:w-64 md:h-32 drop-shadow-lg" />
      </motion.div>

      <motion.div 
        animate={{ x: [40, -40, 40] }} 
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-48 right-[5%] opacity-80 z-10" 
      >
        <MarioCloud className="w-48 h-24 md:w-80 md:h-40 drop-shadow-lg" />
      </motion.div>

      <motion.div 
        animate={{ x: [-20, 20, -20] }} 
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[60%] left-[15%] opacity-50 z-10 hidden md:block" 
      >
        <MarioCloud className="w-32 h-16 md:w-56 md:h-28 drop-shadow-md" />
      </motion.div>

      {/* Floating Blocks Decoration */}
      <div className="absolute top-[20%] md:top-[25%] flex gap-4 md:gap-8 z-10">
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-10 h-10 md:w-16 md:h-16 bg-game-brick border-2 md:border-4 border-black/20 shadow-[4px_4px_0_rgba(0,0,0,0.2)]"
        />
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          className="w-10 h-10 md:w-16 md:h-16 bg-yellow-400 border-2 md:border-4 border-yellow-600 flex items-center justify-center shadow-[4px_4px_0_rgba(0,0,0,0.2)]"
        >
          <span className="font-pixel text-yellow-700 text-lg md:text-2xl animate-pulse">?</span>
        </motion.div>
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          className="w-10 h-10 md:w-16 md:h-16 bg-game-brick border-2 md:border-4 border-black/20 shadow-[4px_4px_0_rgba(0,0,0,0.2)]"
        />
      </div>
      
      {/* Main Title Content */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="z-20 mt-12 md:mt-0"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <Star className="text-game-coin w-6 h-6 md:w-10 md:h-10 fill-game-coin animate-bounce" />
          <h2 className="font-pixel text-sm md:text-2xl text-white drop-shadow-md tracking-wider">SUPER ANIVERSÁRIO</h2>
          <Star className="text-game-coin w-6 h-6 md:w-10 md:h-10 fill-game-coin animate-bounce" />
        </div>
        
        <h1 className="font-pixel text-4xl md:text-8xl text-white mb-4 tracking-tighter drop-shadow-[4px_4px_0_#0048BB] stroke-black">
          DAVI & LUCAS
        </h1>
        
        <div className="bg-game-brick text-white font-pixel py-3 px-8 rounded-lg inline-block shadow-[4px_4px_0_#7f2e15] border-2 border-white/20 mt-4 text-xs md:text-base animate-pulse">
          FASE 9 DESBLOQUEADA
        </div>
      </motion.div>

      {/* Decorative Pipes at Bottom */}
      <div className="absolute bottom-10 left-[-20px] md:left-10 w-16 md:w-24 h-24 md:h-32 bg-gradient-to-r from-green-600 via-green-500 to-green-700 border-4 border-black/20 z-10 flex justify-center">
         <div className="absolute -top-8 w-20 md:w-28 h-8 bg-gradient-to-r from-green-600 via-green-500 to-green-700 border-4 border-black/20" />
      </div>
      <div className="absolute bottom-10 right-[-20px] md:right-10 w-16 md:w-24 h-16 md:h-24 bg-gradient-to-r from-green-600 via-green-500 to-green-700 border-4 border-black/20 z-10 flex justify-center">
         <div className="absolute -top-8 w-20 md:w-28 h-8 bg-gradient-to-r from-green-600 via-green-500 to-green-700 border-4 border-black/20" />
      </div>

      {/* Ground Decoration */}
      <div className="absolute bottom-0 w-full h-12 bg-repeat-x z-20" style={{ 
        backgroundImage: 'linear-gradient(135deg, #43B047 25%, transparent 25%), linear-gradient(225deg, #43B047 25%, transparent 25%), linear-gradient(45deg, #43B047 25%, transparent 25%), linear-gradient(315deg, #43B047 25%, transparent 25%)',
        backgroundPosition: '10px 0, 10px 0, 0 0, 0 0',
        backgroundSize: '20px 20px',
        backgroundColor: '#38953b'
      }} />
    </section>
  );
};