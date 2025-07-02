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
    <div className="min-h-screen bg-background p-8 ml-16">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold riot-title">Home</h1>
      </div>
      
      {/* Latest Patch Notes Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold riot-title mb-6">Latest Patch Notes</h2>
        <div className="glass-effect hover-glow rounded-xl p-6 max-w-sm transition-all duration-300 cursor-pointer">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 22L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-primary font-bold text-lg">VALORANT Patch Notes 11.00</h3>
              <p className="text-muted-foreground text-sm">June 24, 2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* What's New Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold riot-title mb-8">What's New</h2>
        
        <div className="relative rounded-2xl overflow-hidden glass-effect hover-glow cursor-pointer">
          <div className="absolute inset-0">
            <img 
              src={featuredMerch} 
              alt="MSI 2025 Coach Jacket"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          </div>
          
          <div className="relative z-10 p-8 lg:p-12">
            <div className="max-w-lg">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gaming-gold text-black text-sm font-bold mb-4">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 22L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
                </svg>
                Merch
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">MSI 2025 Coach Jacket</h3>
              <p className="text-white/90 text-lg mb-6">Support your region's battle for glory and pride in the MSI 2025 Coach Jacket!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {contentItems.map((item, index) => (
          <div 
            key={index} 
            onClick={() => handleContentClick(item)} 
            className="content-card cursor-pointer"
          >
            <div className="bg-card rounded-xl overflow-hidden border border-border/50 hover-glow">
              <div className="relative">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                
                {/* Category Icon */}
                <div className="absolute top-3 left-3">
                  <div className="w-8 h-8 bg-gaming-gold rounded-lg flex items-center justify-center shadow-lg">
                    <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 22L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
                    </svg>
                  </div>
                </div>

                {/* Tag */}
                <div className="absolute top-3 right-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wide ${
                    item.tag === "MERCH" ? "bg-primary" : "bg-accent"
                  }`}>
                    {item.tag}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-card-foreground text-base mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {item.category}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Promos Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold riot-title mb-8">Promos</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-green-600 to-green-700 p-8 text-white hover-glow cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/90 to-green-800/90" />
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-green-600 font-bold text-lg">R</span>
                </div>
                <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">Get More from Riot Games with Xbox Game Pass</h3>
              <p className="text-green-100 text-lg">Riot Games joins forces with Xbox to bring our biggest titles to Game Pass Ultimate.</p>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-primary/80 p-8 text-white hover-glow cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-3">Riot Mobile</h3>
              <p className="text-white/90 text-lg">Riot Mobile makes it easy to discover new content, stay informed about your favorite games, and connect with friends.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
