import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export const FloatingRSVP = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "15996860270"; 
  const message = encodeURIComponent("Olá! Quero confirmar minha presença no aniversário do Davi e do Lucas! 🍄⭐️");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  useEffect(() => {
    const toggleVisibility = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Aparece após rolar metade da primeira tela (Hero)
      if (scrollY > (windowHeight * 0.5) && (scrollY + windowHeight) < (documentHeight - 150)) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-0 right-0 z-40 flex justify-center px-4 pointer-events-none"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto bg-green-500 hover:bg-green-600 text-white font-pixel py-3 px-6 rounded-full shadow-[0_4px_0_#1e5620] border-2 border-white flex items-center gap-3 transform transition-transform active:scale-95 animate-bounce-slow"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span className="text-sm md:text-base">CONFIRMAR PRESENÇA</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};