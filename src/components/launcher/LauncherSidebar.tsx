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
  { icon: User, label: "Profile", color: "text-primary" },
];

const gameIcons = [
  { color: "bg-gaming-gold", initial: "L" },
  { color: "bg-gaming-blue", initial: "V" },
  { color: "bg-primary", initial: "T" },
  { color: "bg-gaming-purple", initial: "R" },
];

export function LauncherSidebar() {
  return (
    <div className="w-16 bg-sidebar border-r border-sidebar-border flex flex-col items-center py-4 space-y-4">
      {/* Main Navigation */}
      <div className="space-y-2">
        {sidebarItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className={cn(
              "w-10 h-10 rounded-lg",
              item.isActive 
                ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground",
              item.color
            )}
          >
            <item.icon className="h-5 w-5" />
            <span className="sr-only">{item.label}</span>
          </Button>
        ))}
      </div>

      {/* Separator */}
      <div className="w-8 h-px bg-sidebar-border" />

      {/* Game Icons */}
      <div className="space-y-2">
        {gameIcons.map((game, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className="w-10 h-10 rounded-lg hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <div className={cn("w-6 h-6 rounded flex items-center justify-center text-xs font-bold text-white", game.color)}>
              {game.initial}
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}