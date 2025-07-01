import { Card } from "@/components/ui/card";

interface FeaturedCardProps {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

export function FeaturedCard({ title, description, category, imageUrl }: FeaturedCardProps) {
  return (
    <Card className="bg-content-featured border-border overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform duration-300">
      <div className="relative h-80 flex">
        {/* Left side - Content */}
        <div className="flex-1 p-8 flex flex-col justify-center space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gaming-gold rounded flex items-center justify-center">
              <span className="text-xs font-bold text-black">L</span>
            </div>
            <span className="text-gaming-gold text-sm font-medium">{category}</span>
          </div>
          
          <h2 className="text-3xl font-bold text-foreground leading-tight">
            {title}
          </h2>
          
          <p className="text-muted-foreground text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Right side - Image */}
        <div className="flex-1 relative overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-content-featured via-content-featured/50 to-transparent" />
        </div>
      </div>
    </Card>
  );
}