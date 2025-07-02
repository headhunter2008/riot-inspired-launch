import { useState } from "react";
import { LauncherSidebar } from "./LauncherSidebar";
import { HeaderBar } from "./HeaderBar";

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
      
      <div className="flex-1 flex flex-col h-full">
        <HeaderBar onSettingsOpen={onSettingsOpen} />
        
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}