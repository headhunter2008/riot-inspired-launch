import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
interface SplashScreenProps {
  onComplete: () => void;
}
export function SplashScreen({
  onComplete
}: SplashScreenProps) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 1;
        if (newProgress >= 100) {
          setTimeout(() => onComplete(), 1000);
        }
        return Math.min(newProgress, 100);
      });
    }, 50);
    return () => clearInterval(interval);
  }, [onComplete]);
  return <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background artwork */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-background via-background/90 to-background/70" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent" />
      </div>

      {/* Riot Games Logo */}
      <div className="absolute top-8 left-8 z-10">
        <div className="flex items-center space-x-3">
          
          <div>
            <div className="text-white font-bold text-xl">ROCK</div>
            <div className="text-white/70 text-sm">GAMES</div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-md mx-auto px-8">
        {/* Character artwork placeholder */}
        <div className="mb-8 flex justify-center">
          <div className="w-64 h-80 bg-gradient-to-b from-primary/30 to-primary/10 rounded-lg flex items-center justify-center">
            <span className="text-6xl">⚡</span>
          </div>
        </div>

        {/* Loading text */}
        <div className="text-center mb-6">
          <h2 className="text-primary font-bold text-xl mb-2">LOADING</h2>
          <div className="text-foreground text-lg">
            {progress}%
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-6">
          <Progress value={progress} className="h-2" />
        </div>
      </div>
    </div>;
}