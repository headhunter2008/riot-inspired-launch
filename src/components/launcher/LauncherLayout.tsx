import { useState } from "react";
import { LauncherSidebar } from "./LauncherSidebar";
import { Button } from "@/components/ui/button";
import { X, Minus } from "lucide-react";

interface LauncherLayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onPageChange: (page: string) => void;
  onGameSelect?: (gameId: string) => void;
  onSettingsOpen: () => void;
}

export function LauncherLayout({ 
  children, 
  currentPage, 
  onPageChange, 
  onGameSelect,
  onSettingsOpen 
}: LauncherLayoutProps) {
  return (
    <div className="h-screen w-screen bg-background flex overflow-hidden">
      <LauncherSidebar 
        currentPage={currentPage}
        onPageChange={onPageChange}
        onGameSelect={onGameSelect}
        onSettingsOpen={onSettingsOpen}
      />
      
      <div className="flex-1 flex flex-col h-full ml-24">
        {/* Minimal header with only window controls */}
        <div className="h-8 bg-transparent flex items-center justify-end px-4 flex-shrink-0 absolute top-0 right-0 z-50">
          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="icon" className="h-6 w-6 hover:bg-white/10 text-white/70 hover:text-white">
              <Minus className="h-3 w-3" />
            </Button>
            <Button variant="ghost" size="icon" className="h-6 w-6 hover:bg-red-500/80 text-white/70 hover:text-white">
              <X className="h-3 w-3" />
            </Button>
          </div>
        </div>
        
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}