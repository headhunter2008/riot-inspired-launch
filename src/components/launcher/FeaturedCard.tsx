import { Card } from "@/components/ui/card";

interface FeaturedCardProps {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

export function FeaturedCard({ title, description, category, imageUrl }: FeaturedCardProps) {
  return (
    <div className="relative h-80 bg-gradient-to-r from-card to-card/95 rounded-xl overflow-hidden group cursor-pointer">
      <div className="absolute inset-0 flex">
        {/* Left side - Content */}
        <div className="flex-1 p-8 flex flex-col justify-center space-y-6 z-10 relative">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gaming-gold rounded-lg flex items-center justify-center">
              <span className="text-sm font-bold text-black">⚡</span>
            </div>
            <span className="text-gaming-gold text-sm font-medium uppercase tracking-wide">{category}</span>
          </div>
          
          <h2 className="text-4xl font-bold text-foreground leading-tight max-w-md">
            {title}
          </h2>
          
          <p className="text-muted-foreground text-base leading-relaxed max-w-lg">
            {description}
          </p>
        </div>

        {/* Right side - Image */}
        <div className="flex-1 relative">
          <img 
            src={imageUrl} 
            alt={title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-card via-card/80 to-transparent" />
          
          {/* Red geometric accents like in the original */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 transform rotate-45 translate-x-16 -translate-y-16" />
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/30 transform rotate-12 translate-x-8 translate-y-8" />
        </div>
      </div>
    </div>
  );
}