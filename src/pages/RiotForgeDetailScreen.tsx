import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PatchNotesRiotForge } from "@/components/game/PatchNotesRiotForge";
export function RiotForgeDetailScreen() {
  const [activeTab, setActiveTab] = useState<'overview' | 'patchnotes'>('overview');
  if (activeTab === 'patchnotes') {
    return <PatchNotesRiotForge onOverviewClick={() => setActiveTab('overview')} />;
  }
  return <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-gaming-purple/5">
      {/* Header with background video/image */}
      <div className="relative h-[70vh] overflow-hidden">
        {/* Video background placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-gaming-blue/30 via-cyan-500/20 to-purple-500/20">
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-9xl opacity-20">⭐</div>
          </div>
        </div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
    
        {/* Navigation tabs */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-8 glass-effect rounded-full px-6 py-3">
            <button onClick={() => setActiveTab('overview')} className={`font-medium transition-all duration-200 ${activeTab === 'overview' ? 'text-white border-b-2 border-primary pb-1' : 'text-white/70 hover:text-white'}`}>
              Overview
            </button>
            <button onClick={() => setActiveTab('patchnotes')} className={`font-medium transition-all duration-200 relative ${activeTab !== 'overview' ? 'text-white border-b-2 border-primary pb-1' : 'text-white/70 hover:text-white'}`}>
              Patch Notes
              <span className="ml-2 w-2 h-2 bg-primary rounded-full inline-block animate-pulse"></span>
            </button>
          </div>
        </div>
    
        {/* Install button */}
        <div className="absolute top-8 left-8 z-20">
          <Button size="lg" className="bg-primary hover:bg-primary/90 flex items-center space-x-3 py-[27px] px-[37px] rounded-lg font-bold text-2xl">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
            </svg>
            <span>Install</span>
          </Button>
        </div>
    
        {/* Game title and trailer info */}
        <div className="absolute bottom-12 left-8 text-white z-10">
          <h1 className="text-7xl font-black mb-6 tracking-tight">Riot Forge</h1>
          <h2 className="text-2xl font-semibold mb-4 text-white/90">Explore New Worlds</h2>
          <p className="text-lg text-white/80 max-w-lg leading-relaxed mb-6">Discover amazing single-player games set in the world of Runeterra, created by talented independent developers.</p>
          
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
          <div className="border border-border hover-glow px-6 py-3 rounded-lg flex items-center space-x-3 transition-all duration-200 hover:bg-accent/20">
            <svg className="w-5 h-5 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />
            </svg>
            <span className="font-medium text-muted-foreground">macOS</span>
          </div>
          <div className="border border-border hover-glow px-6 py-3 rounded-lg flex items-center space-x-3 transition-all duration-200 hover:bg-accent/20">
            <svg className="w-5 h-5 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />
            </svg>
            <span className="font-medium text-muted-foreground">PlayStation</span>
          </div>
          <div className="border border-border hover-glow px-6 py-3 rounded-lg flex items-center space-x-3 transition-all duration-200 hover:bg-accent/20">
            <svg className="w-5 h-5 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />
            </svg>
            <span className="font-medium text-muted-foreground">Xbox</span>
          </div>
          <div className="border border-border hover-glow px-6 py-3 rounded-lg flex items-center space-x-3 transition-all duration-200 hover:bg-accent/20">
            <svg className="w-5 h-5 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,20 0 0,1 12,2Z" />
            </svg>
            <span className="font-medium text-muted-foreground">Nintendo Switch</span>
          </div>
        </div>
      </div>
  
      {/* Games Collection */}
      <div className="px-8 py-8">
        <h3 className="text-2xl font-bold riot-title mb-8">Featured Games</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-card/80 border border-border/50 rounded-xl p-6 hover-glow">
            <h4 className="font-bold text-foreground text-lg mb-4">Ruined King</h4>
            <p className="text-muted-foreground">A story-driven, turn-based RPG that brings League of Legends to life in an entirely new way.</p>
          </div>
          
          <div className="bg-card/80 border border-border/50 rounded-xl p-6 hover-glow">
            <h4 className="font-bold text-foreground text-lg mb-4">Hextech Mayhem</h4>
            <p className="text-muted-foreground">A fast-paced rhythm runner set in the world of Arcane.</p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <button className="riot-button-secondary px-8 py-3 font-bold">
            SHOW MORE ⌄
          </button>
        </div>
      </div>
  
      {/* Additional Details */}
      <div className="px-8 py-6">
        <h3 className="text-xl font-semibold text-foreground mb-6">Additional Details</h3>
        
        <div className="grid grid-cols-4 gap-8 text-sm">
          <div>
            <span className="text-muted-foreground">WEBSITE</span>
            <div className="text-foreground mt-1">rockapp.com/beam</div>
          </div>
          <div>
            <span className="text-muted-foreground">DEVELOPER</span>
            <div className="flex items-center space-x-2 mt-1">
              <div className="w-4 h-4 bg-primary rounded">
                <span className="text-white text-xs">R</span>
              </div>
              <span className="text-foreground">ROCK APP</span>
            </div>
          </div>
          <div>
            <span className="text-muted-foreground">PUBLISHER</span>
            <div className="flex items-center space-x-2 mt-1">
              <div className="w-4 h-4 bg-primary rounded">
                <span className="text-white text-xs">R</span>
              </div>
              <span className="text-foreground">ROCK APPS</span>
            </div>
          </div>
          <div>
            <span className="text-muted-foreground">LAUNCH DATE</span>
            <div className="text-foreground mt-1">2021</div>
          </div>
        </div>
      </div>
    </div>;
}