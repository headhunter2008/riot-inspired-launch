import { Home, Grid3X3, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarItem {
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  color?: string;
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

export function LauncherSidebar() {
  return (
    <div className="w-20 bg-sidebar flex flex-col py-6">
      {/* Logo/Brand area */}
      <div className="px-4 mb-8">
        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">R</span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="px-4 space-y-3 mb-8">
        {sidebarItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className={cn(
              "w-12 h-12 rounded-lg flex flex-col items-center justify-center group relative",
              item.isActive 
                ? "bg-sidebar-accent text-primary" 
                : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
            )}
          >
            <item.icon className="h-6 w-6" />
            {item.isActive && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r" />
            )}
          </Button>
        ))}
      </div>

      {/* Game Icons */}
      <div className="px-4 space-y-3">
        {gameIcons.map((game, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className="w-12 h-12 rounded-lg hover:bg-sidebar-accent/50 text-sidebar-foreground/70 hover:text-sidebar-foreground relative group"
            title={game.tooltip}
          >
            <div className="text-lg">
              {game.symbol}
            </div>
          </Button>
        ))}
      </div>

      {/* User section at bottom */}
      <div className="mt-auto px-4">
        <Button
          variant="ghost"
          size="icon"
          className="w-12 h-12 rounded-lg text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
        >
          <User className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}