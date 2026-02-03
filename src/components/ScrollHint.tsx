import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const ScrollHint = () => {
  const { scrollY } = useScroll();
  
  // Desaparece rápido assim que começa a rolar
  const opacity = useTransform(scrollY, [0, 80], [1, 0]);

  return (
    <motion.div 
      style={{ opacity }}
      className="fixed right-3 bottom-16 flex flex-col items-center gap-1 z-50 pointer-events-none"
    >
      {/* Container da Linha com Glow */}
      <div className="w-[3px] h-48 bg-white/30 rounded-full relative overflow-hidden shadow-[0_0_10px_rgba(251,208,0,0.3)]">
        {/* Faísca/Luz Amarela Intensa descendo */}
        <motion.div 
          animate={{ 
            y: [-200, 200],
          }}
          transition={{ 
            duration: 1.2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="w-full h-24 bg-gradient-to-b from-transparent via-game-coin to-transparent"
        />
      </div>

      {/* Seta Amarela Vibrante */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center -mt-1"
      >
        <ChevronDown className="w-8 h-8 text-game-coin filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" strokeWidth={4} />
      </motion.div>
      
      {/* Pequena Moeda Decorativa no topo */}
      <div className="absolute -top-4 w-2 h-2 bg-game-coin rounded-full animate-pulse shadow-[0_0_8px_#FBD000]" />
    </motion.div>
  );
};