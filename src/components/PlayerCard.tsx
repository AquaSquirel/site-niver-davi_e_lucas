import { motion } from 'framer-motion';

interface PlayerCardProps {
  name: string;
  role: 'Player 1' | 'Player 2';
  character: 'Mario' | 'Luigi';
  imageUrl?: string;
  delay?: number;
}

export const PlayerCard = ({ name, role, character, imageUrl, delay = 0 }: PlayerCardProps) => {
  const isMario = character === 'Mario';
  const bgColor = isMario ? 'bg-mario-red' : 'bg-luigi-green';
  const borderColor = isMario ? 'border-mario-red' : 'border-luigi-green';

  return (
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      className={`relative w-full max-w-[280px] bg-white border-4 ${borderColor} rounded-xl p-4 shadow-xl flex flex-col items-center gap-4`}
    >
      <div className="absolute -top-3 bg-gray-800 text-white font-pixel text-[10px] px-3 py-1 rounded-full z-10">
        {role}
      </div>
      
      <div className={`w-32 h-32 ${bgColor} rounded-full border-4 border-white shadow-lg flex items-center justify-center overflow-hidden relative`}>
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="font-pixel text-5xl text-white">{name[0]}</span>
        )}
      </div>
      
      <div className="text-center">
        <h3 className="font-pixel text-xl text-gray-800">{name}</h3>
        <p className="font-sans text-gray-500 font-bold uppercase tracking-widest text-sm mt-1">
          como {character}
        </p>
      </div>

      <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden border border-gray-300">
        <div className={`h-full ${bgColor} w-[90%]`} />
      </div>
      <div className="flex justify-between w-full font-pixel text-[10px] text-gray-500">
        <span>VIDA</span>
        <span>9/10</span>
      </div>
    </motion.div>
  );
};