import { Hero } from './components/Hero';
import { PlayerCard } from './components/PlayerCard';
import { MissionInfo } from './components/MissionInfo';
import { Footer } from './components/Footer';
import { ScrollHint } from './components/ScrollHint';
import { FloatingRSVP } from './components/FloatingRSVP';

function App() {
  return (
    <div className="min-h-screen bg-game-sky bg-opacity-10">
      <ScrollHint />
      <FloatingRSVP />
      <Hero />
      
      <main className="container mx-auto px-4 py-12 relative z-20 pb-20">
        
        {/* Players Section */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
                      <PlayerCard 
                        name="Davi" 
                        role="Player 1" 
                        character="Mario" 
                        imageUrl="/davi.jpeg"
                        delay={0.2}
                      />
                      
                      <div className="font-pixel text-5xl text-white drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)] animate-pulse my-4">
                        &
                      </div>
                      
                      <PlayerCard 
                        name="Lucas" 
                        role="Player 2" 
                        character="Luigi" 
                        imageUrl="/lucas.jpeg"
                        delay={0.4}
                      />        </div>

        {/* Info Section */}
        <MissionInfo />

      </main>
      
      <Footer />
    </div>
  );
}

export default App;