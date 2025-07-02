import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PatchNotesPage } from "@/components/game/PatchNotesPage";

export function TeamfightDetailScreen() {
  const [activeTab, setActiveTab] = useState<'overview' | 'patchnotes'>('overview');

  const overviewContent = (
    <div className="min-h-screen bg-background">
      {/* Header with background video/image */}
      <div className="relative h-[60vh] overflow-hidden">
        {/* Video background placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-gaming-purple/30 via-pink-500/20 to-orange-500/20">
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-8xl opacity-30">♟️</div>
          </div>
        </div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        
        {/* Navigation tabs */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-8 glass-effect rounded-full px-6 py-3">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`font-bold transition-all duration-200 ${
                activeTab === 'overview' 
                  ? 'text-white border-b-2 border-primary pb-1' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Overview
            </button>
            <button 
              onClick={() => setActiveTab('patchnotes')}
              className={`font-medium transition-all duration-200 relative ${
                activeTab === 'patchnotes' 
                  ? 'text-white border-b-2 border-primary pb-1' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Patch Notes
              <span className="ml-2 w-2 h-2 bg-primary rounded-full inline-block animate-pulse"></span>
            </button>
          </div>
        </div>
        
        {/* Install button */}
        <div className="absolute top-8 left-8 z-20">
          <Button size="lg" className="bg-primary hover:bg-primary/90 px-8 py-3 text-lg font-bold flex items-center space-x-3">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
            </svg>
            <span>Install</span>
          </Button>
        </div>
        
        {/* Game title and trailer info */}
        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="text-6xl font-bold mb-4">Teamfight Tactics</h1>
          <h2 className="text-xl font-semibold mb-2">Strategy Meets Chaos</h2>
          <p className="text-lg opacity-90 max-w-md">Draft, deploy, and upgrade from a shared pool of champions to create a team comp that will crush the competition.</p>
          
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
          <Badge variant="secondary" className="px-4 py-2">
            🖥️ Windows
          </Badge>
          <Badge variant="outline" className="px-4 py-2">
            🍎 macOS
          </Badge>
          <Badge variant="outline" className="px-4 py-2">
            📱 Mobile
          </Badge>
        </div>
      </div>
      
      {/* System Requirements */}
      <div className="px-8 py-6">
        <h3 className="text-xl font-semibold text-foreground mb-6">System Requirements</h3>
        
        <div className="grid grid-cols-2 gap-6">
          {/* Minimum Specs */}
          <div className="bg-card rounded-lg p-6">
            <div className="text-center mb-4">
              <h4 className="font-semibold text-foreground">Minimum Specs</h4>
              <div className="text-2xl font-bold text-foreground mt-2">60 FPS</div>
            </div>
            
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-muted-foreground">OS</span>
                <div className="text-foreground">Windows 10 (64-bit)</div>
              </div>
              <div>
                <span className="text-muted-foreground">CPU</span>
                <div className="text-foreground">Intel Core i3-530 / AMD A6-3650</div>
              </div>
              <div>
                <span className="text-muted-foreground">GPU</span>
                <div className="text-foreground">GeForce 9600GT / Radeon HD 6570</div>
              </div>
            </div>
          </div>
          
          {/* Recommended Specs */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
            <div className="text-center mb-4">
              <h4 className="font-semibold text-foreground">Recommended Specs</h4>
              <div className="text-2xl font-bold text-foreground mt-2">144+ FPS</div>
            </div>
            
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-muted-foreground">OS</span>
                <div className="text-foreground">Windows 10/11 (64-bit)</div>
              </div>
              <div>
                <span className="text-muted-foreground">CPU</span>
                <div className="text-foreground">Intel Core i5-3300 / AMD Ryzen 3 1200</div>
              </div>
              <div>
                <span className="text-muted-foreground">GPU</span>
                <div className="text-foreground">GeForce GTX 560 / Radeon HD 6950</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional Details */}
      <div className="px-8 py-6">
        <h3 className="text-xl font-semibold text-foreground mb-6">Additional Details</h3>
        
        <div className="grid grid-cols-4 gap-8 text-sm">
          <div>
            <span className="text-muted-foreground">WEBSITE</span>
            <div className="text-foreground mt-1">teamfighttactics.leagueoflegends.com</div>
          </div>
          <div>
            <span className="text-muted-foreground">DEVELOPER</span>
            <div className="flex items-center space-x-2 mt-1">
              <div className="w-4 h-4 bg-primary rounded">
                <span className="text-white text-xs">R</span>
              </div>
              <span className="text-foreground">RIOT GAMES</span>
            </div>
          </div>
          <div>
            <span className="text-muted-foreground">PUBLISHER</span>
            <div className="flex items-center space-x-2 mt-1">
              <div className="w-4 h-4 bg-primary rounded">
                <span className="text-white text-xs">R</span>
              </div>
              <span className="text-foreground">RIOT GAMES</span>
            </div>
          </div>
          <div>
            <span className="text-muted-foreground">RELEASE DATE</span>
            <div className="text-foreground mt-1">Jun 26, 2019</div>
          </div>
        </div>
      </div>
    </div>
  );

  return activeTab === 'overview' ? overviewContent : <PatchNotesPage />;
}