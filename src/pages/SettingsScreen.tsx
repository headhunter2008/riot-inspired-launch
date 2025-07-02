import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { X } from "lucide-react";

interface SettingsScreenProps {
  onClose: () => void;
}

export function SettingsScreen({ onClose }: SettingsScreenProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-background w-full max-w-4xl h-[80vh] rounded-lg overflow-hidden flex">
        {/* Sidebar */}
        <div className="w-80 bg-muted/30 p-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-black">●</span>
              </div>
              <span className="text-foreground font-medium">RIOT CLIENT</span>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <h1 className="text-2xl font-bold text-foreground">Riot Client - General</h1>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Settings content */}
          <div className="space-y-8">
            {/* Language */}
            <div>
              <Label className="text-sm font-medium text-foreground mb-3 block">
                RIOT CLIENT LANGUAGE
              </Label>
              <Select defaultValue="english">
                <SelectTrigger className="w-full max-w-md bg-muted border-0">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English (US)</SelectItem>
                  <SelectItem value="spanish">Spanish</SelectItem>
                  <SelectItem value="french">French</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Startup Behavior */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <Label className="text-sm font-medium text-foreground">
                  STARTUP BEHAVIOR
                </Label>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-primary rounded-full" />
                      <span className="text-foreground font-medium">Open Riot Client on startup</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">
                        RECOMMENDED
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Riot Client will run in your system tray when your computer starts so your games can update automatically.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Close Window */}
            <div>
              <Label className="text-sm font-medium text-foreground mb-4 block">
                CLOSE WINDOW
              </Label>
              
              <RadioGroup defaultValue="minimize" className="space-y-4">
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="minimize" id="minimize" />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="minimize" className="text-foreground font-medium">
                        Minimize to system tray
                      </Label>
                      <span className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">
                        RECOMMENDED
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Riot Client will stay running, which helps launching games faster and keeps your games up to date automatically.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="exit" id="exit" />
                  <Label htmlFor="exit" className="text-foreground">
                    Exit application
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Footer */}
          <div className="absolute bottom-8 left-8">
            <div className="text-xs text-muted-foreground">
              v112.0.1.3343
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}