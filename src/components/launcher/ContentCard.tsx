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
    <Card className="bg-card border-border overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform duration-300">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Category Icon */}
        <div className="absolute top-3 left-3">
          <div className="w-8 h-8 bg-gaming-gold rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-black">L</span>
          </div>
        </div>

        {/* Tag */}
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 rounded text-xs font-medium text-foreground ${tagColor}`}>
            {tag}
          </span>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-foreground mb-1 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">
          {category}
        </p>
      </CardContent>
    </Card>
  );
}