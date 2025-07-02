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
    <div className="min-h-screen bg-background ml-20">
      {/* Header with background video/image */}
      <div className="relative h-[60vh] overflow-hidden">
        {/* Video background placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-gaming-purple/20 to-gaming-blue/20">
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-8xl opacity-30">🎮</div>
          </div>
        </div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        
        {/* Navigation tabs */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-8">
            <button className="text-white font-medium border-b-2 border-primary pb-2">
              Overview
            </button>
            <button className="text-white/70 font-medium pb-2 hover:text-white">
              Patch Notes
              <span className="ml-2 w-2 h-2 bg-primary rounded-full inline-block"></span>
            </button>
          </div>
        </div>
        
        {/* Install button */}
        <div className="absolute top-6 left-6">
          <Button size="lg" className="bg-primary hover:bg-primary/90 px-8 py-3 text-lg font-bold rounded-full">
            ⬇ Install
          </Button>
        </div>
        
        {/* Game title and trailer info */}
        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="text-6xl font-bold mb-4">{game.title}</h1>
          <h2 className="text-xl font-semibold mb-2">{game.trailerTitle || "Game Trailer"}</h2>
          <p className="text-lg opacity-90 max-w-md">{game.description}</p>
          
          <Button variant="outline" className="mt-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
            Learn More
          </Button>
        </div>
        
        {/* Video thumbnail */}
        <div className="absolute bottom-6 right-6">
          <div className="w-20 h-12 bg-black/50 rounded flex items-center justify-center">
            <span className="text-white text-xs">📹</span>
          </div>
        </div>
      </div>
      
      {/* Platform Availability */}
      <div className="px-8 py-6">
        <h3 className="text-xl font-semibold text-foreground mb-4">Platform Availability</h3>
        <div className="flex space-x-4">
          <Badge variant="secondary" className="px-4 py-2 bg-white/10 text-white border-white/20">
            🖥️ Windows
          </Badge>
          {game.platforms?.includes("PlayStation®5") && (
            <Badge variant="outline" className="px-4 py-2 bg-muted/50 text-muted-foreground border-muted">
              🎮 PlayStation®5
            </Badge>
          )}
          {game.platforms?.includes("Xbox Series X|S") && (
            <Badge variant="outline" className="px-4 py-2 bg-muted/50 text-muted-foreground border-muted">
              🎮 Xbox Series X|S
            </Badge>
          )}
        </div>
      </div>
      
      {/* System Requirements */}
      {game.systemRequirements && (
        <div className="px-8 py-6">
          <h3 className="text-xl font-semibold text-foreground mb-6">System Requirements</h3>
          
          <div className="grid grid-cols-3 gap-6">
            {/* Minimum Specs */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="text-center mb-4">
                <div className="bg-muted/50 text-muted-foreground px-4 py-2 rounded text-sm font-medium">
                  Minimum Specs
                </div>
                <div className="text-3xl font-bold text-foreground mt-4">{game.systemRequirements.minimum.fps}</div>
              </div>
              
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-muted-foreground">OS</span>
                  <div className="text-foreground">{game.systemRequirements.minimum.os}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">OS ARCHITECTURE</span>
                  <div className="text-foreground">{game.systemRequirements.minimum.architecture}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">CPU</span>
                  <div className="text-foreground">{game.systemRequirements.minimum.cpu}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">GPU</span>
                  <div className="text-foreground">{game.systemRequirements.minimum.gpu}</div>
                </div>
              </div>
            </div>
            
            {/* Recommended Specs */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="text-center mb-4">
                <div className="bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-medium">
                  Recommended Specs
                </div>
                <div className="text-3xl font-bold text-foreground mt-4">{game.systemRequirements.recommended.fps}</div>
              </div>
              
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-muted-foreground">OS</span>
                  <div className="text-foreground">{game.systemRequirements.recommended.os}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">OS ARCHITECTURE</span>
                  <div className="text-foreground">{game.systemRequirements.recommended.architecture}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">CPU</span>
                  <div className="text-foreground">{game.systemRequirements.recommended.cpu}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">GPU</span>
                  <div className="text-foreground">{game.systemRequirements.recommended.gpu}</div>
                </div>
              </div>
            </div>
            
            {/* High-end Specs */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="text-center mb-4">
                <div className="bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-medium">
                  High-end Specs
                </div>
                <div className="text-3xl font-bold text-foreground mt-4">{game.systemRequirements.highEnd.fps}</div>
              </div>
              
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-muted-foreground">OS</span>
                  <div className="text-foreground">{game.systemRequirements.highEnd.os}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">OS ARCHITECTURE</span>
                  <div className="text-foreground">{game.systemRequirements.highEnd.architecture}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">CPU</span>
                  <div className="text-foreground">{game.systemRequirements.highEnd.cpu}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">GPU</span>
                  <div className="text-foreground">{game.systemRequirements.highEnd.gpu}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" className="px-8 text-muted-foreground border-muted">
              SHOW MORE ↓
            </Button>
          </div>
        </div>
      )}
      
      {/* Additional Details */}
      <div className="px-8 py-6">
        <h3 className="text-xl font-semibold text-foreground mb-6">Additional Details</h3>
        
        <div className="grid grid-cols-4 gap-8 text-sm">
          <div>
            <div className="text-muted-foreground font-medium">WEBSITE</div>
            <div className="text-foreground mt-1">{game.website}</div>
          </div>
          <div>
            <div className="text-muted-foreground font-medium">DEVELOPER</div>
            <div className="flex items-center space-x-2 mt-1">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">🏢</span>
              </div>
              <span className="text-foreground font-medium">{game.developer}</span>
            </div>
          </div>
          <div>
            <div className="text-muted-foreground font-medium">PUBLISHER</div>
            <div className="flex items-center space-x-2 mt-1">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">🏢</span>
              </div>
              <span className="text-foreground font-medium">{game.publisher}</span>
            </div>
          </div>
          <div>
            <div className="text-muted-foreground font-medium">RELEASE DATE</div>
            <div className="text-foreground mt-1">{game.releaseDate}</div>
          </div>
        </div>
        
        {game.rating && (
          <div className="mt-8">
            <div className="inline-block bg-orange-500 text-white px-3 py-2 rounded text-sm font-bold">
              {game.rating}
              <div className="text-xs">Ages {game.rating} & up</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}