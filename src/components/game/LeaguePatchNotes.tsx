import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface LeaguePatchNotesProps {
  onOverviewClick?: () => void;
}

export function LeaguePatchNotes({ onOverviewClick }: LeaguePatchNotesProps) {
  const [selectedPatch, setSelectedPatch] = useState({
    title: "League of Legends Patch 14.1",
    description: "Major champion updates, item reworks, and gameplay improvements for the new season.",
    version: "14.1",
    date: "Jan 10, 2024"
  });

  const patches = [
    {
      title: "League of Legends Patch 14.1",
      description: "Major champion updates, item reworks, and gameplay improvements for the new season.",
      version: "14.1",
      date: "Jan 10, 2024"
    },
    {
      title: "League of Legends Patch 13.24",
      description: "End of season updates with balance changes and Arena game mode improvements.",
      version: "13.24", 
      date: "Dec 13, 2023"
    },
    {
      title: "League of Legends Patch 13.23",
      description: "Pre-season changes with new items and jungle updates.",
      version: "13.23",
      date: "Nov 29, 2023"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-gaming-purple/5">
      {/* Header with background */}
      <div className="relative h-[70vh] overflow-hidden">
        {/* Video background placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-gaming-gold/30 via-gaming-blue/20 to-gaming-purple/20">
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-9xl opacity-20">⚡</div>
          </div>
        </div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
        
        {/* Navigation tabs */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-8 glass-effect rounded-full px-6 py-3">
            <button onClick={onOverviewClick} className="font-medium transition-all duration-200 text-white/70 hover:text-white">
              Overview
            </button>
            <button className="font-bold transition-all duration-200 text-white border-b-2 border-primary pb-1">
              Patch Notes
              <span className="ml-2 w-2 h-2 bg-primary rounded-full inline-block animate-pulse"></span>
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="absolute bottom-16 left-8 right-8 text-white z-10">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-black mb-4 tracking-tight">{selectedPatch.title}</h1>
            <p className="text-xl text-white/90 mb-6 max-w-2xl leading-relaxed">{selectedPatch.description}</p>
            
            <div className="flex items-center space-x-6 mb-8">
              <Badge variant="secondary" className="px-4 py-2 text-lg font-bold">
                v{selectedPatch.version}
              </Badge>
              <span className="text-white/80 text-lg">{selectedPatch.date}</span>
            </div>
            
            <Button size="lg" className="bg-primary hover:bg-primary/90 font-bold text-lg px-8 py-4">
              Read Full Notes
            </Button>
          </div>
        </div>
      </div>
      
      {/* Patch List */}
      <div className="px-8 py-8">
        <h2 className="text-2xl font-bold riot-title mb-8">Recent Patches</h2>
        
        <div className="grid gap-4">
          {patches.map((patch, index) => (
            <div 
              key={index}
              onClick={() => setSelectedPatch(patch)}
              className={`p-6 rounded-xl border cursor-pointer transition-all duration-200 hover-glow ${
                selectedPatch.version === patch.version 
                  ? 'bg-primary/10 border-primary/30' 
                  : 'bg-card/80 border-border/50 hover:bg-card'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-foreground text-lg">{patch.title}</h3>
                <span className="text-muted-foreground text-sm">{patch.date}</span>
              </div>
              <p className="text-muted-foreground">{patch.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}