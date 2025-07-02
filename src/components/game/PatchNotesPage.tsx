import { useState } from "react";
import { Button } from "@/components/ui/button";

interface PatchNote {
  id: string;
  title: string;
  version: string;
  description: string;
  category: string;
  author: string;
  date: string;
  image?: string;
}

const patchNotes: PatchNote[] = [
  {
    id: "1",
    title: "VALORANT PATCH NOTES 11.00",
    version: "11.00",
    description: "Agent updates, new map Corrode, map rotation, and so much more!",
    category: "Game Updates",
    author: "Ashley Tsao",
    date: "6/24/2025",
    image: "/lovable-uploads/25774c6c-8ba1-4fb4-82e5-7ca06753246d.png"
  },
  {
    id: "2",
    title: "VALORANT PATCH NOTES 10.11",
    version: "10.11",
    description: "Balance updates for competitive play and bug fixes.",
    category: "Game Updates",
    author: "Dev Team",
    date: "6/10/2025"
  },
  {
    id: "3",
    title: "VALORANT PATCH NOTES 10.10",
    version: "10.10",
    description: "New skins, agent adjustments, and quality of life improvements.",
    category: "Game Updates",
    author: "Content Team",
    date: "5/28/2025"
  }
];

export function PatchNotesPage() {
  const [selectedPatch, setSelectedPatch] = useState(patchNotes[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-gaming-purple/5">
      {/* Hero Section with Featured Patch */}
      <div className="relative h-[70vh] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gaming-purple/20 via-primary/10 to-gaming-blue/15">
          {selectedPatch.image ? (
            <img 
              src={selectedPatch.image} 
              alt={selectedPatch.title}
              className="w-full h-full object-cover opacity-60"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-9xl opacity-10 text-primary">⚡</div>
            </div>
          )}
        </div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
        
        {/* Navigation tabs */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-8 glass-effect rounded-full px-6 py-3">
            <button className="text-white/70 font-medium hover:text-white transition-all duration-200">
              Overview
            </button>
            <button className="text-white font-bold border-b-2 border-primary pb-1 transition-all duration-200">
              Patch Notes
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="absolute bottom-16 left-8 right-8 text-white z-10">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-black mb-4 tracking-tight">{selectedPatch.title}</h1>
            <p className="text-xl text-white/90 mb-6 max-w-2xl leading-relaxed">{selectedPatch.description}</p>
            
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-primary font-bold">{selectedPatch.category}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-white/70">{selectedPatch.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-white/70">{selectedPatch.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Patch Notes List */}
      <div className="px-8 py-12">
        <h2 className="text-3xl font-bold riot-title mb-8">Recent Updates</h2>
        
        <div className="grid gap-6">
          {patchNotes.map((patch) => (
            <div
              key={patch.id}
              onClick={() => setSelectedPatch(patch)}
              className={`glass-effect hover-glow rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                selectedPatch.id === patch.id 
                  ? 'border-primary/50 bg-primary/5' 
                  : 'border-border/30 hover:border-primary/30'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-3">
                    <h3 className="text-xl font-bold text-foreground">{patch.title}</h3>
                    <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full">
                      v{patch.version}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">{patch.description}</p>
                  
                  <div className="flex items-center space-x-6 text-sm">
                    <span className="text-primary font-medium">{patch.category}</span>
                    <span className="text-muted-foreground">{patch.author}</span>
                    <span className="text-muted-foreground">{patch.date}</span>
                  </div>
                </div>
                
                <div className="ml-6">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="hover:bg-primary/10 hover:border-primary/50"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="riot-button-secondary px-8 py-3 font-bold"
          >
            LOAD MORE UPDATES
          </Button>
        </div>
      </div>
    </div>
  );
}