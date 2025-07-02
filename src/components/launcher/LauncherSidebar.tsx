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

export function LauncherSidebar({ currentPage, onPageChange, onGameSelect }: LauncherSidebarProps) {
  return (
    <div className="w-20 bg-sidebar flex flex-col">
      {/* Logo/Brand area */}
      <div className="px-4 pt-6 mb-8">
        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
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
            onClick={() => onPageChange(item.label.toLowerCase())}
            className={cn(
              "w-12 h-12 rounded-lg flex flex-col items-center justify-center group relative border border-transparent transition-all duration-200",
              currentPage === item.label.toLowerCase()
                ? "bg-sidebar-accent text-primary border-primary/50" 
                : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-white/25 hover:border-white/50"
            )}
          >
            <item.icon className="h-6 w-6" />
            {currentPage === item.label.toLowerCase() && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r" />
            )}
          </Button>
        ))}

        {/* Spacer */}
        <div className="h-8" />

        {/* Game Icons */}
        {gameIcons.map((game, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            onClick={() => onGameSelect?.(game.tooltip.toLowerCase().replace(' ', '-'))}
            className="w-12 h-12 rounded-lg hover:bg-white/25 hover:border-white/50 text-sidebar-foreground/70 hover:text-sidebar-foreground relative group border border-transparent transition-all duration-200"
            title={game.tooltip}
          >
            <div className="text-lg">
              {game.symbol}
            </div>
          </Button>
        ))}
      </div>

      {/* User section at bottom */}
      <div className="px-4 pb-6">
        <Button
          variant="ghost"
          size="icon"
          className="w-12 h-12 rounded-lg text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-white/25 hover:border-white/50 border border-transparent transition-all duration-200"
        >
          <User className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}