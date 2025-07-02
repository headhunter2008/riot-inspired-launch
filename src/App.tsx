import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SplashScreen } from "./pages/SplashScreen";
import { LoginScreen } from "./pages/LoginScreen";
import { SettingsScreen } from "./pages/SettingsScreen";
import { GamesScreen } from "./pages/GamesScreen";
import { GameDetailScreen } from "./pages/GameDetailScreen";
import { LeagueDetailScreen } from "./pages/LeagueDetailScreen";
import { TeamfightDetailScreen } from "./pages/TeamfightDetailScreen";
import { RiotForgeDetailScreen } from "./pages/RiotForgeDetailScreen";
import { LauncherLayout } from "./components/launcher/LauncherLayout";
import Index from "./pages/Index";

const queryClient = new QueryClient();

const App = () => {
  const [currentScreen, setCurrentScreen] = useState<'splash' | 'login' | 'main'>('splash');
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [showSettings, setShowSettings] = useState(false);

  const handleSplashComplete = () => setCurrentScreen('main');
  const handleGameSelect = (gameId: string) => setSelectedGame(gameId);
  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    setSelectedGame(null);
  };

  if (currentScreen === 'splash') {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <SplashScreen onComplete={handleSplashComplete} />
        </TooltipProvider>
      </QueryClientProvider>
    );
  }


  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {selectedGame ? (
          selectedGame === "valorant" ? (
            <GameDetailScreen gameId={selectedGame} onGameSelect={handleGameSelect} onSettingsOpen={() => setShowSettings(true)} />
          ) : (
            <LauncherLayout
              currentPage={currentPage}
              onPageChange={handlePageChange}
              onGameSelect={handleGameSelect}
              onSettingsOpen={() => setShowSettings(true)}
            >
              {selectedGame === "league-of-legends" && <LeagueDetailScreen />}
              {selectedGame === "teamfight-tactics" && <TeamfightDetailScreen />}
              {selectedGame === "riot-forge" && <RiotForgeDetailScreen />}
              {selectedGame && !["valorant", "league-of-legends", "teamfight-tactics", "riot-forge"].includes(selectedGame) && <GameDetailScreen gameId={selectedGame} />}
            </LauncherLayout>
          )
        ) : (
          <LauncherLayout
            currentPage={currentPage}
            onPageChange={handlePageChange}
            onGameSelect={handleGameSelect}
            onSettingsOpen={() => setShowSettings(true)}
          >
            {currentPage === 'home' && <Index />}
            {currentPage === 'library' && <GamesScreen onGameSelect={handleGameSelect} />}
          </LauncherLayout>
        )}
        {showSettings && <SettingsScreen onClose={() => setShowSettings(false)} />}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
