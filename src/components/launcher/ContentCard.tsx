import { Card, CardContent } from "@/components/ui/card";

interface ContentCardProps {
  title: string;
  category: string;
  imageUrl: string;
  tag: string;
  tagColor?: string;
}

export function ContentCard({ title, category, imageUrl, tag, tagColor = "bg-accent" }: ContentCardProps) {
  return (
    <div className="bg-card rounded-xl overflow-hidden group cursor-pointer hover:scale-[1.02] transition-all duration-300 border border-border/50">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Category Icon */}
        <div className="absolute top-3 left-3">
          <div className="w-8 h-8 bg-gaming-gold rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-sm font-bold text-black">⚡</span>
          </div>
        </div>

        {/* Tag */}
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold text-foreground uppercase tracking-wide ${tagColor}`}>
            {tag}
          </span>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-foreground text-base leading-tight line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {category}
        </p>
      </div>
    </div>
  );
}