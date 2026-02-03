import { MapPin, Calendar, Clock, Navigation } from 'lucide-react';

export const MissionInfo = () => {
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=Rua+Gregório+Gronla,+400+-+Vila+Olinda";

  return (
    <div className="w-full max-w-md mx-auto bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-2xl border-4 border-game-brick relative overflow-hidden my-8">
      {/* Pipe Decoration */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-bl-full opacity-20" />

      <h3 className="font-pixel text-center text-xl text-game-brick mb-6 uppercase border-b-2 border-dashed border-gray-300 pb-4">
        Detalhes da Missão
      </h3>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <p className="font-pixel text-xs text-gray-400 uppercase mb-1">Data</p>
            <p className="font-sans font-bold text-lg text-gray-800">21 de Fevereiro</p>
            <p className="text-sm text-gray-500">Sábado</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="p-3 bg-yellow-100 rounded-lg text-yellow-600">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <p className="font-pixel text-xs text-gray-400 uppercase mb-1">Horário</p>
            <p className="font-sans font-bold text-lg text-gray-800">13:00 hrs</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="p-3 bg-red-100 rounded-lg text-red-600">
            <MapPin className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <p className="font-pixel text-xs text-gray-400 uppercase mb-1">Local</p>
            <p className="font-sans font-bold text-lg text-gray-800">MiniMundo</p>
            <p className="text-sm text-gray-600 mt-1">Rua Gregório Gronla, 400</p>
            <p className="text-xs text-gray-500">Vila Olinda (Em frente ao Clube Olinda)</p>
          </div>
        </div>

        <div className="pt-2">
          <a 
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full group relative flex items-center justify-center gap-2 bg-luigi-green hover:bg-green-600 text-white font-pixel py-4 px-6 rounded-xl transition-all active:scale-95 shadow-[0_4px_0_#2d7a30] hover:shadow-[0_2px_0_#2d7a30] translate-y-0 hover:translate-y-[2px]"
          >
            <Navigation className="w-5 h-5 group-hover:animate-bounce" />
            ABRIR MAPA
          </a>
        </div>
      </div>
    </div>
  );
};