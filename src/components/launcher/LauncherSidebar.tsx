import { useState } from "react";
import { Home, Grid3X3, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarItem {
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  color?: string;
}

interface LauncherSidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  onGameSelect?: (gameId: string) => void;
  onSettingsOpen: () => void;
}

const sidebarItems: SidebarItem[] = [
  { icon: Home, label: "Home", isActive: true },
  { icon: Grid3X3, label: "Library" },
];

// Riot Games style icons with specific colors
const gameIcons = [
  { color: "bg-riot-red", symbol: "🔴", tooltip: "Valorant" },
  { color: "bg-gaming-gold", symbol: "⚡", tooltip: "League of Legends" }, 
  { color: "bg-gaming-purple", symbol: "👑", tooltip: "Teamfight Tactics" },
  { color: "bg-gaming-blue", symbol: "⭐", tooltip: "Riot Forge" },
];

export function LauncherSidebar({ currentPage, onPageChange, onGameSelect, onSettingsOpen }: LauncherSidebarProps) {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const handleGameSelect = (gameId: string) => {
    setSelectedGame(gameId);
    onGameSelect?.(gameId);
    // Clear page selection when game is selected
    if (currentPage === "home" || currentPage === "library") {
      // Keep current page
    }
  };

  const handlePageChange = (page: string) => {
    setSelectedGame(null); // Clear game selection when page is selected
    onPageChange(page);
  };

  return (
    <div className="w-20 bg-sidebar flex flex-col h-screen fixed left-0 top-0 gradient-secondary border-r border-border/30">
      {/* Logo/Brand area */}
      <div className="px-4 pt-6 mb-8">
        <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center animate-glow">
          <span className="text-white font-bold text-lg">R</span>
        </div>
      </div>

      {/* Main Navigation - Centered */}
      <div className="flex-1 flex flex-col justify-center px-4 space-y-3">
        {sidebarItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            onClick={() => handlePageChange(item.label.toLowerCase())}
            className={cn(
              "w-12 h-12 rounded-xl glass-card group relative border border-transparent transition-all duration-300 hover-lift",
              currentPage === item.label.toLowerCase() && !selectedGame
                ? "gradient-primary text-white shadow-lg" 
                : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:glass-card"
            )}
          >
            <item.icon className="h-5 w-5" />
            {currentPage === item.label.toLowerCase() && !selectedGame && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r animate-glow" />
            )}
          </Button>
        ))}

        {/* Spacer */}
        <div className="h-6" />

        {/* Game Icons */}
        {gameIcons.map((game, index) => {
          const gameId = game.tooltip.toLowerCase().replace(/\s+/g, '-');
          const isSelected = selectedGame === gameId;
          
          return (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              onClick={() => handleGameSelect(gameId)}
              className={cn(
                "w-12 h-12 rounded-xl glass-card relative group border border-transparent transition-all duration-300 hover-lift",
                isSelected
                  ? "gradient-primary text-white shadow-lg"
                  : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:glass-card"
              )}
              title={game.tooltip}
            >
              <div className="text-lg">
                {game.symbol}
              </div>
              {/* Enhanced Tooltip */}
              <div className="absolute left-16 top-1/2 -translate-y-1/2 glass-card px-3 py-2 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50 border border-border/50">
                <span className="text-foreground font-medium">{game.tooltip}</span>
              </div>
              {isSelected && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r animate-glow" />
              )}
            </Button>
          );
        })}
      </div>

      {/* User section at bottom */}
      <div className="px-4 pb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={onSettingsOpen}
          className="w-12 h-12 rounded-xl glass-card text-sidebar-foreground/70 hover:text-sidebar-foreground hover:glass-card border border-transparent transition-all duration-300 hover-lift relative group"
          title="Settings"
        >
          <User className="h-5 w-5" />
          {/* Enhanced Tooltip */}
          <div className="absolute left-16 top-1/2 -translate-y-1/2 glass-card px-3 py-2 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50 border border-border/50">
            <span className="text-foreground font-medium">Settings</span>
          </div>
        </Button>
      </div>
    </div>
  );
}