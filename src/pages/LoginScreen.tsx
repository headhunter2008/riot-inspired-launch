import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [staySignedIn, setStaySignedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left side - Login form */}
      <div className="w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-6">
          {/* Riot Games Logo */}
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <div>
              <div className="text-foreground font-bold text-xl">RIOT</div>
              <div className="text-muted-foreground text-sm">GAMES</div>
            </div>
          </div>

          {/* Sign-in tabs */}
          <div className="flex space-x-1 glass-effect rounded-xl p-1">
            <button className="flex-1 riot-button-secondary py-3 text-sm font-bold">
              📱 Sign-in
            </button>
            <button className="flex-1 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              🔗 QR Code
            </button>
          </div>

          {/* Login form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="username" className="text-muted-foreground text-sm">
                USERNAME
              </Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-muted border-0 mt-1"
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-muted-foreground text-sm">
                PASSWORD
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-muted border-0 mt-1"
              />
            </div>

            {/* Social login buttons */}
            <div className="grid grid-cols-5 gap-2">
              <Button variant="outline" className="bg-blue-600 hover:bg-blue-700 border-0">
                📘
              </Button>
              <Button variant="outline" className="bg-white hover:bg-gray-100 border-0">
                G
              </Button>
              <Button variant="outline" className="bg-black hover:bg-gray-800 border-0">
                🍎
              </Button>
              <Button variant="outline" className="bg-green-600 hover:bg-green-700 border-0">
                🎮
              </Button>
              <Button variant="outline" className="bg-blue-500 hover:bg-blue-600 border-0">
                📱
              </Button>
            </div>

            {/* Stay signed in */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="stay-signed-in"
                checked={staySignedIn}
                onCheckedChange={(checked) => setStaySignedIn(checked as boolean)}
              />
              <Label htmlFor="stay-signed-in" className="text-sm text-muted-foreground">
                Stay signed in
              </Label>
            </div>

            {/* Continue arrow */}
            <div className="flex justify-start pt-4">
              <Button 
                type="submit"
                variant="ghost" 
                size="icon"
                className="w-12 h-12 rounded-full bg-muted hover:bg-muted/80"
              >
                →
              </Button>
            </div>
          </form>

          {/* Footer links */}
          <div className="pt-8 space-y-2">
            <div className="text-sm text-muted-foreground">
              CAN'T SIGN IN?
            </div>
            <div className="text-sm text-muted-foreground underline cursor-pointer">
              CREATE ACCOUNT
            </div>
            <div className="text-xs text-muted-foreground pt-4">
              v112.0.1
            </div>
            <div className="text-xs text-muted-foreground">
              THIS APP IS PROTECTED BY HCAPTCHA AND ITS<br />
              PRIVACY POLICY AND TERMS OF SERVICE APPLY.
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Game artwork */}
      <div className="w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-gaming-purple/30 via-gaming-blue/20 to-transparent" />
        <div className="w-full h-full bg-gradient-to-br from-gaming-purple/20 to-gaming-blue/20 flex items-center justify-center">
          <div className="text-8xl opacity-50">🏰</div>
        </div>
        
        {/* Install button */}
        <div className="absolute bottom-8 right-8">
          <button className="riot-button px-8 py-4 text-lg font-bold flex items-center space-x-3">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
            </svg>
            <span>Install</span>
          </button>
        </div>
      </div>
    </div>
  );
}