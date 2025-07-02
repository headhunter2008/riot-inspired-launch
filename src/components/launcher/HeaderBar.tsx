import { Button } from "@/components/ui/button";
import { User, X, Minus, Settings } from "lucide-react";

interface HeaderBarProps {
  onSettingsOpen: () => void;
}

export function HeaderBar({ onSettingsOpen }: HeaderBarProps) {
  return (
    <div className="h-12 bg-background border-b border-border flex items-center justify-between px-4 flex-shrink-0">
      {/* Left side - can be empty or have breadcrumbs */}
      <div />

      {/* Right side - User controls */}
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-1">
          <span className="text-primary text-sm font-bold">V</span>
          <span className="text-foreground text-sm">1</span>
        </div>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8"
          onClick={onSettingsOpen}
        >
          <Settings className="h-4 w-4 text-primary" />
        </Button>

        <Button variant="ghost" size="icon" className="h-8 w-8">
          <User className="h-4 w-4" />
        </Button>

        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Minus className="h-4 w-4" />
        </Button>

        <Button variant="ghost" size="icon" className="h-8 w-8">
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}