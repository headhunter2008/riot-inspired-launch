import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface GameDetailScreenProps {
  gameId: string;
}

const gameData: Record<string, any> = {
  valorant: {
    title: "VALORANT",
    description: "It's time to usher in the next era of military supremacy, Phaseguard.",
    trailerTitle: "NO TRACE // Phaseguard Skin Reveal Trailer",
    website: "playvalorant.com",
    developer: "RIOT GAMES",
    publisher: "RIOT GAMES",
    releaseDate: "Jun 2, 2020",
    rating: "16",
    platforms: ["Windows", "PlayStation®5", "Xbox Series X|S"],
    systemRequirements: {
      minimum: {
        fps: "30 FPS",
        os: "Windows 10 (Build 17134+)",
        architecture: "x64",
        cpu: "Intel Core 2 Duo E8400, AMD Athlon 200GE",
        gpu: "NVIDIA GeForce GT 420M, AMD Radeon R5 200, Intel HD Graphics 4000"
      },
      recommended: {
        fps: "60 FPS",
        os: "Windows 10 (Build 17134+), Windows 11",
        architecture: "x64",
        cpu: "Intel Core i3-4150, AMD Ryzen 3 1200",
        gpu: "NVIDIA GeForce GT 730, AMD Radeon R7 240, Intel Arc A380/A350M"
      },
      highEnd: {
        fps: "144+ FPS",
        os: "Windows 10 (Build 17134+), Windows 11",
        architecture: "x64",
        cpu: "Intel Core i5-9400F, AMD Ryzen 5 2600X",
        gpu: "NVIDIA GeForce GTX 1050 TI, AMD Radeon R7 370, Intel Arc A750"
      }
    }
  },
  lol: {
    title: "League of Legends",
    description: "Join the millions of players in the world's most popular online battle arena.",
    website: "leagueoflegends.com",
    developer: "RIOT GAMES",
    publisher: "RIOT GAMES",
    releaseDate: "Oct 27, 2009"
  }
};

export function GameDetailScreen({ gameId }: GameDetailScreenProps) {
  const game = gameData[gameId] || gameData.valorant;

  return (
    <div className="min-h-screen bg-background ml-16">
      {/* Header with background video/image */}
      <div className="relative h-[70vh] overflow-hidden">
        {/* Video background placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-gaming-purple/30 to-gaming-blue/20">
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-9xl opacity-20">⚡</div>
          </div>
        </div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
        
        {/* Navigation tabs */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-8 glass-effect rounded-full px-6 py-3">
            <button className="text-white font-bold border-b-2 border-primary pb-1 transition-all duration-200">
              Overview
            </button>
            <button className="text-white/70 font-medium hover:text-white transition-all duration-200 relative">
              Patch Notes
              <span className="ml-2 w-2 h-2 bg-primary rounded-full inline-block animate-pulse"></span>
            </button>
          </div>
        </div>
        
        {/* Install button */}
        <div className="absolute top-8 left-8 z-20">
          <button className="riot-button px-8 py-4 text-lg font-bold flex items-center space-x-3">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
            </svg>
            <span>Install</span>
          </button>
        </div>
        
        {/* Game title and trailer info */}
        <div className="absolute bottom-12 left-8 text-white z-10">
          <h1 className="text-7xl font-black mb-6 tracking-tight">{game.title}</h1>
          <h2 className="text-2xl font-semibold mb-4 text-white/90">{game.trailerTitle || "Game Trailer"}</h2>
          <p className="text-lg text-white/80 max-w-lg leading-relaxed mb-6">{game.description}</p>
          
          <button className="riot-button-secondary px-6 py-3 text-white hover:bg-white/20 border-white/30">
            Learn More
          </button>
        </div>
        
        {/* Video thumbnail */}
        <div className="absolute bottom-8 right-8 z-10">
          <div className="w-24 h-16 glass-effect rounded-lg flex items-center justify-center cursor-pointer hover-glow">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Platform Availability */}
      <div className="px-8 py-8">
        <h3 className="text-2xl font-bold riot-title mb-6">Platform Availability</h3>
        <div className="flex flex-wrap gap-4">
          <div className="glass-effect hover-glow px-6 py-3 rounded-lg flex items-center space-x-3">
            <svg className="w-5 h-5 text-foreground" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20,18C20.5,18 21,17.5 21,17V7C21,6.5 20.5,6 20,6H4C3.5,6 3,6.5 3,7V17C3,17.5 3.5,18 4,18H20M5,8H19V16H5V8Z" />
            </svg>
            <span className="font-bold text-foreground">Windows</span>
          </div>
          {game.platforms?.includes("PlayStation®5") && (
            <div className="border border-border hover-glow px-6 py-3 rounded-lg flex items-center space-x-3 transition-all duration-200 hover:bg-accent/20">
              <svg className="w-5 h-5 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />
              </svg>
              <span className="font-medium text-muted-foreground">PlayStation®5</span>
            </div>
          )}
          {game.platforms?.includes("Xbox Series X|S") && (
            <div className="border border-border hover-glow px-6 py-3 rounded-lg flex items-center space-x-3 transition-all duration-200 hover:bg-accent/20">
              <svg className="w-5 h-5 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />
              </svg>
              <span className="font-medium text-muted-foreground">Xbox Series X|S</span>
            </div>
          )}
        </div>
      </div>
      
      {/* System Requirements */}
      {game.systemRequirements && (
        <div className="px-8 py-8">
          <h3 className="text-2xl font-bold riot-title mb-8">System Requirements</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Minimum Specs */}
            <div className="bg-card/80 border border-border/50 rounded-xl p-6 hover-glow">
              <div className="text-center mb-6">
                <h4 className="font-bold text-foreground text-lg">Minimum Specs</h4>
                <div className="text-3xl font-black text-foreground mt-3">{game.systemRequirements.minimum.fps}</div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <span className="text-muted-foreground text-xs font-bold uppercase tracking-wide">OS</span>
                  <div className="text-foreground font-medium">{game.systemRequirements.minimum.os}</div>
                </div>
                <div>
                  <span className="text-muted-foreground text-xs font-bold uppercase tracking-wide">OS ARCHITECTURE</span>
                  <div className="text-foreground font-medium">{game.systemRequirements.minimum.architecture}</div>
                </div>
                <div>
                  <span className="text-muted-foreground text-xs font-bold uppercase tracking-wide">CPU</span>
                  <div className="text-foreground font-medium">{game.systemRequirements.minimum.cpu}</div>
                </div>
                <div>
                  <span className="text-muted-foreground text-xs font-bold uppercase tracking-wide">GPU</span>
                  <div className="text-foreground font-medium">{game.systemRequirements.minimum.gpu}</div>
                </div>
              </div>
            </div>
            
            {/* Recommended Specs */}
            <div className="bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary/30 rounded-xl p-6 hover-glow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/20 rounded-full -mr-10 -mt-10"></div>
              <div className="text-center mb-6 relative z-10">
                <h4 className="font-bold text-foreground text-lg">Recommended Specs</h4>
                <div className="text-3xl font-black text-primary mt-3">{game.systemRequirements.recommended.fps}</div>
              </div>
              
              <div className="space-y-4 relative z-10">
                <div>
                  <span className="text-muted-foreground text-xs font-bold uppercase tracking-wide">OS</span>
                  <div className="text-foreground font-medium">{game.systemRequirements.recommended.os}</div>
                </div>
                <div>
                  <span className="text-muted-foreground text-xs font-bold uppercase tracking-wide">OS ARCHITECTURE</span>
                  <div className="text-foreground font-medium">{game.systemRequirements.recommended.architecture}</div>
                </div>
                <div>
                  <span className="text-muted-foreground text-xs font-bold uppercase tracking-wide">CPU</span>
                  <div className="text-foreground font-medium">{game.systemRequirements.recommended.cpu}</div>
                </div>
                <div>
                  <span className="text-muted-foreground text-xs font-bold uppercase tracking-wide">GPU</span>
                  <div className="text-foreground font-medium">{game.systemRequirements.recommended.gpu}</div>
                </div>
              </div>
            </div>
            
            {/* High-end Specs */}
            <div className="bg-card/80 border border-border/50 rounded-xl p-6 hover-glow">
              <div className="text-center mb-6">
                <h4 className="font-bold text-foreground text-lg">High-end Specs</h4>
                <div className="text-3xl font-black text-foreground mt-3">{game.systemRequirements.highEnd.fps}</div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <span className="text-muted-foreground text-xs font-bold uppercase tracking-wide">OS</span>
                  <div className="text-foreground font-medium">{game.systemRequirements.highEnd.os}</div>
                </div>
                <div>
                  <span className="text-muted-foreground text-xs font-bold uppercase tracking-wide">OS ARCHITECTURE</span>
                  <div className="text-foreground font-medium">{game.systemRequirements.highEnd.architecture}</div>
                </div>
                <div>
                  <span className="text-muted-foreground text-xs font-bold uppercase tracking-wide">CPU</span>
                  <div className="text-foreground font-medium">{game.systemRequirements.highEnd.cpu}</div>
                </div>
                <div>
                  <span className="text-muted-foreground text-xs font-bold uppercase tracking-wide">GPU</span>
                  <div className="text-foreground font-medium">{game.systemRequirements.highEnd.gpu}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <button className="riot-button-secondary px-8 py-3 font-bold">
              SHOW MORE ⌄
            </button>
          </div>
        </div>
      )}
      
      {/* Additional Details */}
      <div className="px-8 py-6">
        <h3 className="text-xl font-semibold text-foreground mb-6">Additional Details</h3>
        
        <div className="grid grid-cols-4 gap-8 text-sm">
          <div>
            <span className="text-muted-foreground">WEBSITE</span>
            <div className="text-foreground mt-1">{game.website}</div>
          </div>
          <div>
            <span className="text-muted-foreground">DEVELOPER</span>
            <div className="flex items-center space-x-2 mt-1">
              <div className="w-4 h-4 bg-primary rounded">
                <span className="text-white text-xs">R</span>
              </div>
              <span className="text-foreground">{game.developer}</span>
            </div>
          </div>
          <div>
            <span className="text-muted-foreground">PUBLISHER</span>
            <div className="flex items-center space-x-2 mt-1">
              <div className="w-4 h-4 bg-primary rounded">
                <span className="text-white text-xs">R</span>
              </div>
              <span className="text-foreground">{game.publisher}</span>
            </div>
          </div>
          <div>
            <span className="text-muted-foreground">RELEASE DATE</span>
            <div className="text-foreground mt-1">{game.releaseDate}</div>
          </div>
        </div>
        
        {game.rating && (
          <div className="mt-6">
            <div className="w-12 h-16 bg-orange-500 rounded flex flex-col items-center justify-center text-white">
              <span className="text-xs">PEGI</span>
              <span className="text-lg font-bold">{game.rating}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}