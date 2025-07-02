import { FeaturedCard } from "@/components/launcher/FeaturedCard";
import { ContentCard } from "@/components/launcher/ContentCard";

// Import images
import featuredMerch from "@/assets/featured-merch.jpg";
import gameCard1 from "@/assets/game-card-1.jpg";
import gameCard2 from "@/assets/game-card-2.jpg";
import gameCard3 from "@/assets/game-card-3.jpg";
import gameCard4 from "@/assets/game-card-4.jpg";

const Index = () => {
  const contentItems = [
    {
      title: "Spirit Blossom Orianna Chibi Champion",
      category: "Realms collide and myths leap",
      imageUrl: gameCard1,
      tag: "GAME UPDATES"
    },
    {
      title: "Act 2 Launch Trailer",
      category: "Realms collide and myths leap",
      imageUrl: gameCard2,
      tag: "GAME UPDATES"
    },
    {
      title: "MSI 2025 Hockey Jersey",
      category: "Look good on and off the ice in",
      imageUrl: gameCard3,
      tag: "MERCH"
    },
    {
      title: "Yunara Abilities Rundown",
      category: "Learn about the newest champion",
      imageUrl: gameCard4,
      tag: "GAME UPDATES"
    }
  ];

  const handleContentClick = (item: any) => {
    // For now, we'll just log. In a real app, this would navigate to content detail
    console.log('Content clicked:', item);
  };

  return (
    <div className="p-8 ml-20 gradient-hero min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground">Latest Patch Notes</h1>
      </div>
      
      {/* Latest Patch Notes Section */}
      <div className="mb-12">
        <div className="glass-card rounded-xl p-6 hover-lift max-w-md border-l-4 border-primary">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center animate-glow">
              <span className="text-white text-sm font-bold">V</span>
            </div>
            <div>
              <h3 className="text-primary font-bold text-lg">VALORANT Patch Notes 11.00</h3>
              <p className="text-muted-foreground text-sm">June 24, 2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* What's New Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-8">What's New</h2>
        
        <FeaturedCard
          title="MSI 2025 Coach Jacket"
          description="Support your region's battle for glory and pride in the MSI 2025 Coach Jacket!"
          category="Merch"
          imageUrl={featuredMerch}
        />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-4 gap-6 mb-16">
        {contentItems.map((item, index) => (
          <div key={index} onClick={() => handleContentClick(item)} className="cursor-pointer hover-lift">
            <div className="glass-card rounded-xl overflow-hidden group transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                    item.tag === "MERCH" ? "gradient-primary text-white" : "bg-accent text-accent-foreground"
                  }`}>
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Promos Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-foreground mb-8">Promos</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="glass-card rounded-xl p-8 text-white relative overflow-hidden hover-lift gradient-gaming">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">R</span>
              </div>
              <div className="w-12 h-12 bg-black/30 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">G</span>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Get More from Riot Games with Xbox Game Pass</h3>
            <p className="text-white/90">Riot Games joins forces with Xbox to bring our biggest titles to Game Pass Ultimate.</p>
          </div>
          
          <div className="glass-card rounded-xl p-8 text-white relative overflow-hidden hover-lift gradient-primary">
            <h3 className="text-xl font-bold mb-2">Riot Mobile</h3>
            <p className="text-white/90">Riot Mobile makes it easy to discover new content, stay informed about your favorite games, and connect with friends.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
