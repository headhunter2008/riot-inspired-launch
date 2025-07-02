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
    <div className="min-h-screen bg-background flex">
      <LauncherSidebar 
        currentPage={currentPage}
        onPageChange={onPageChange}
        onGameSelect={onGameSelect}
      />
      
      <div className="flex-1 flex flex-col">
        <HeaderBar onSettingsOpen={onSettingsOpen} />
        
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}