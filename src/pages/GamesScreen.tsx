import { useState } from "react";
import { Card } from "@/components/ui/card";

interface Game {
  id: string;
  title: string;
  icon: string;
  backgroundImage: string;
  videoUrl?: string;
}

const games: Game[] = [
  {
    id: "lol",
    title: "League of Legends",
    icon: "⚡",
    backgroundImage: "bg-gradient-to-br from-gaming-gold/30 to-gaming-blue/30"
  },
  {
    id: "wild-rift",
    title: "League of Legends: Wild Rift",
    icon: "🏹",
    backgroundImage: "bg-gradient-to-br from-gaming-blue/30 to-gaming-purple/30"
  },
  {
    id: "runeterra",
    title: "Legends of Runeterra",
    icon: "🃏",
    backgroundImage: "bg-gradient-to-br from-gaming-purple/30 to-gaming-gold/30"
  },
  {
    id: "tft",
    title: "Teamfight Tactics",
    icon: "♟️",
    backgroundImage: "bg-gradient-to-br from-pink-500/30 to-orange-500/30"
  },
  {
    id: "valorant",
    title: "VALORANT",
    icon: "🎯",
    backgroundImage: "bg-gradient-to-br from-primary/30 to-gaming-purple/30"
  }
];

interface GamesScreenProps {
  onGameSelect: (gameId: string) => void;
}

export function GamesScreen({ onGameSelect }: GamesScreenProps) {
  const [hoveredGame, setHoveredGame] = useState<string | null>(null);

  return (
    <div className="p-8 ml-20 gradient-hero min-h-screen">
      <h1 className="text-4xl font-bold text-foreground mb-8">Games</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-6">All Games</h2>
        
        <div className="grid grid-cols-3 gap-6">
          {games.map((game) => (
            <div
              key={game.id}
              className={`glass-card relative overflow-hidden cursor-pointer group hover-lift ${game.backgroundImage} border border-border/50 hover:border-primary/50 rounded-xl`}
              onMouseEnter={() => setHoveredGame(game.id)}
              onMouseLeave={() => setHoveredGame(null)}
              onClick={() => onGameSelect(game.id)}
            >
              <div className="relative h-64 p-6 flex flex-col justify-end">
                {/* Video placeholder when hovered */}
                {hoveredGame === game.id && (
                  <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-xl">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-white text-lg font-medium flex items-center gap-2">
                        <span className="animate-pulse">▶</span> Trailer Playing
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Game icon */}
                <div className="absolute top-4 left-4">
                  <div className="w-10 h-10 glass-card rounded-lg flex items-center justify-center border border-white/20">
                    <span className="text-lg">{game.icon}</span>
                  </div>
                </div>
                
                {/* Install button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center animate-glow">
                    <span className="text-white text-sm font-bold">📥</span>
                  </div>
                </div>
                
                {/* Game title */}
                <div className="relative z-10 glass-card p-3 rounded-lg">
                  <h3 className="text-white font-bold text-xl group-hover:text-primary transition-colors">
                    {game.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Additional games section */}
      <div className="grid grid-cols-3 gap-6 mt-12">
        {games.slice(0, 2).map((game) => (
          <Card
            key={`additional-${game.id}`}
            className={`relative overflow-hidden cursor-pointer group transition-all duration-300 hover:scale-105 ${game.backgroundImage} border-transparent hover:border-white/50`}
            onMouseEnter={() => setHoveredGame(`additional-${game.id}`)}
            onMouseLeave={() => setHoveredGame(null)}
            onClick={() => onGameSelect(game.id)}
          >
            <div className="relative h-64 p-6 flex flex-col justify-end">
              {hoveredGame === `additional-${game.id}` && (
                <div className="absolute inset-0 bg-black/20">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-white/70 text-sm">▶ Trailer Playing</div>
                  </div>
                </div>
              )}
              
              <div className="absolute top-4 left-4">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-sm">{game.icon}</span>
                </div>
              </div>
              
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                  <span className="text-white text-xs">📥</span>
                </div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-white font-bold text-xl">{game.title}</h3>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}