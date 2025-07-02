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
const sidebarItems: SidebarItem[] = [{
  icon: Home,
  label: "Home",
  isActive: true
}, {
  icon: Grid3X3,
  label: "Library"
}];

// Riot Games style icons with specific colors
const gameIcons = [{
  color: "bg-riot-red",
  symbol: "🔴",
  tooltip: "Valorant"
}, {
  color: "bg-gaming-gold",
  symbol: "⚡",
  tooltip: "League of Legends"
}, {
  color: "bg-gaming-purple",
  symbol: "👑",
  tooltip: "Teamfight Tactics"
}, {
  color: "bg-gaming-blue",
  symbol: "⭐",
  tooltip: "Riot Forge"
}];
export function LauncherSidebar({
  currentPage,
  onPageChange,
  onGameSelect,
  onSettingsOpen
}: LauncherSidebarProps) {
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
  return <div className="w-24 bg-transparent backdrop-blur-sm flex flex-col h-screen fixed left-0 top-0 border-r border-white/10">
      {/* Logo/Brand area */}
      <div className="px-4 pt-6 mb-8">
        <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xl">R</span>
        </div>
      </div>

      {/* Main Navigation - Centered */}
      <div className="flex-1 flex flex-col justify-center px-3 space-y-4">
        {sidebarItems.map((item, index) => <Button key={index} variant="ghost" size="icon" onClick={() => handlePageChange(item.label.toLowerCase())} className={cn("w-16 h-16 rounded-xl flex flex-col items-center justify-center group relative border border-transparent transition-all duration-200 shadow-lg", currentPage === item.label.toLowerCase() ? "bg-primary/20 text-primary border-primary/50 backdrop-blur-sm" : "text-white/70 hover:text-white hover:bg-primary/10 hover:border-primary/30 backdrop-blur-sm")}>
            <item.icon className="h-8 w-8" />
            {currentPage === item.label.toLowerCase() && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-10 bg-primary rounded-r" />}
          </Button>)}

        {/* Spacer */}
        

        {/* Game Icons */}
        {gameIcons.map((game, index) => {
        const gameId = game.tooltip.toLowerCase().replace(/\s+/g, '-');
        const isSelected = selectedGame === gameId;
        return <Button key={index} variant="ghost" size="icon" onClick={() => handleGameSelect(gameId)} className={cn("w-16 h-16 rounded-xl relative group border border-transparent transition-all duration-200 shadow-lg", isSelected ? "bg-primary/20 text-primary border-primary/50 backdrop-blur-sm" : "text-white/70 hover:text-white hover:bg-primary/10 hover:border-primary/30 backdrop-blur-sm")} title={game.tooltip}>
              <div className="text-2xl">
                {game.symbol}
              </div>
              {/* Tooltip on hover */}
              <div className="absolute left-20 top-1/2 -translate-y-1/2 bg-popover text-popover-foreground px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                {game.tooltip}
              </div>
              {isSelected && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-10 bg-primary rounded-r" />}
            </Button>;
      })}
      </div>

      {/* User section at bottom */}
      <div className="px-3 pb-6">
        <Button variant="ghost" size="icon" onClick={onSettingsOpen} className="w-16 h-16 rounded-xl text-white/70 hover:text-white hover:bg-primary/10 hover:border-primary/30 border border-transparent transition-all duration-200 relative group shadow-lg backdrop-blur-sm" title="Settings">
          <User className="h-8 w-8" />
          {/* Tooltip on hover */}
          <div className="absolute left-20 top-1/2 -translate-y-1/2 bg-popover text-popover-foreground px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
            Settings
          </div>
        </Button>
      </div>
    </div>;
}