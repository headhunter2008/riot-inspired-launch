import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PatchNotesPage } from "@/components/game/PatchNotesPage";
interface GameDetailScreenProps {
  gameId: string;
  onGameSelect?: (gameId: string) => void;
  onSettingsOpen?: () => void;
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
export function GameDetailScreen({
  gameId,
  onGameSelect,
  onSettingsOpen
}: GameDetailScreenProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'patchnotes'>('overview');
  const game = gameData[gameId] || gameData.valorant;
  
  const overviewContent = <div className="min-h-screen bg-background">
      {/* Header with background video/image */}
      <div className="relative h-[60vh] overflow-hidden">
        {/* Video background placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-gaming-gold/30 via-gaming-blue/20 to-gaming-purple/20">
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-8xl opacity-30">⚡</div>
          </div>
        </div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent " />
        
        {/* Navigation tabs */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-8 glass-effect rounded-full px-6 py-3">
            <button onClick={() => setActiveTab('overview')} className={`font-bold transition-all duration-200 ${activeTab === 'overview' ? 'text-white border-b-2 border-primary pb-1' : 'text-white/70 hover:text-white'}`}>
              Overview
            </button>
            <button onClick={() => setActiveTab('patchnotes')} className={`font-medium transition-all duration-200 relative ${activeTab === 'patchnotes' ? 'text-white border-b-2 border-primary pb-1' : 'text-white/70 hover:text-white'}`}>
              Patch Notes
              <span className="ml-2 w-2 h-2 bg-primary rounded-full inline-block animate-pulse"></span>
            </button>
          </div>
        </div>
        
        {/* Install button */}
        <div className="absolute top-8 left-8 z-20">
          <Button size="lg" className="bg-primary hover:bg-primary/90 font-bold flex items-center space-x-3 px-[37px] py-[27px] text-2xl rounded-lg">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
            </svg>
            <span>Install</span>
          </Button>
        </div>
        
        {/* Game title and trailer info */}
        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="font-bold mb-4 text-7xl">{game.title}</h1>
          <h2 className="text-xl font-semibold mb-2">{game.trailerTitle || "Game Trailer"}</h2>
          <p className="text-lg opacity-90 max-w-md">{game.description}</p>
          
          <Button variant="outline" className="mt-4 bg-white/10 border-white/30 text-white hover:bg-white/20 my-0 px-[24px] py-[12px]">
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
          <Badge variant="secondary" className="px-4 py-2">
            🖥️ Windows
          </Badge>
          {game.platforms?.includes("PlayStation®5") && (
            <Badge variant="outline" className="px-4 py-2">
              🎮 PlayStation®5
            </Badge>
          )}
          {game.platforms?.includes("Xbox Series X|S") && (
            <Badge variant="outline" className="px-4 py-2">
              🎮 Xbox Series X|S
            </Badge>
          )}
        </div>
      </div>
      
      {/* System Requirements */}
      {game.systemRequirements && (
        <div className="px-8 py-6">
          <h3 className="text-xl font-semibold text-foreground mb-6">System Requirements</h3>
          
          <div className="grid grid-cols-2 gap-6">
            {/* Minimum Specs */}
            <div className="bg-card rounded-lg p-6">
              <div className="text-center mb-4">
                <h4 className="font-semibold text-foreground">Minimum Specs</h4>
                <div className="text-2xl font-bold text-foreground mt-2">{game.systemRequirements.minimum.fps}</div>
              </div>
              
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-muted-foreground">OS</span>
                  <div className="text-foreground">{game.systemRequirements.minimum.os}</div>
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
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
              <div className="text-center mb-4">
                <h4 className="font-semibold text-foreground">Recommended Specs</h4>
                <div className="text-2xl font-bold text-foreground mt-2">{game.systemRequirements.recommended.fps}</div>
              </div>
              
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-muted-foreground">OS</span>
                  <div className="text-foreground">{game.systemRequirements.recommended.os}</div>
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
      </div>
    </div>;
  
  return activeTab === 'overview' ? overviewContent : <PatchNotesPage onOverviewClick={() => setActiveTab('overview')} />;
}