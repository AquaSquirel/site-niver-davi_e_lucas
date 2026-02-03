import { MessageCircle } from 'lucide-react';

export const Footer = () => {
  const phoneNumber = "15996860270"; 
  const message = encodeURIComponent("Olá! Quero confirmar minha presença no aniversário do Davi e do Lucas! 🍄⭐️");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (  
    <footer className="w-full bg-gray-900 text-white py-12 px-4 text-center mt-12 relative overflow-hidden">
      <div className="max-w-md mx-auto relative z-10">
        <h3 className="font-pixel text-yellow-400 text-lg mb-4 animate-pulse">
          PRESSIONE START
        </h3>
        
        <p className="font-sans text-gray-400 mb-8 max-w-xs mx-auto">
          Confirme sua presença para garantir seu power-up na festa!
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-game-coin text-yellow-900 font-pixel py-4 px-8 rounded-full text-lg shadow-[0_0_20px_rgba(251,208,0,0.5)] hover:scale-105 transition-transform animate-bounce"
        >
          <MessageCircle className="w-6 h-6" />
          CONFIRMAR
        </a>

        <div className="mt-12 text-[10px] text-gray-500 font-pixel uppercase tracking-widest">
          © 2026 Super Davi & Lucas Bros. <br/>
          <span className="block mt-4 opacity-70">
            Desenvolvido por{' '}
            <a 
              href="https://mateuss.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-yellow-500 hover:text-white transition-colors"
            >
              Mateuss
            </a>
          </span>
        </div>
      </div>

      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />
    </footer>
  );
};