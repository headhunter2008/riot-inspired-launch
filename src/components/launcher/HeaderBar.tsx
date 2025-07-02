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

      {/* Right side - Window controls */}
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-muted">
          <Minus className="h-4 w-4" />
        </Button>

        <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-destructive">
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}