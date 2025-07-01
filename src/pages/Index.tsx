import { LauncherSidebar } from "@/components/launcher/LauncherSidebar";
import { HeaderBar } from "@/components/launcher/HeaderBar";
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

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <HeaderBar />
      
      <div className="flex flex-1">
        <LauncherSidebar />
        
        <main className="flex-1 p-8 overflow-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Home</h1>
          </div>

          {/* What's New Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-6">What's New</h2>
            
            <FeaturedCard
              title="MSI 2025 Coach Jacket"
              description="Support your region's battle for glory and pride in the MSI 2025 Coach Jacket!"
              category="Merch"
              imageUrl={featuredMerch}
            />
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentItems.map((item, index) => (
              <ContentCard
                key={index}
                title={item.title}
                category={item.category}
                imageUrl={item.imageUrl}
                tag={item.tag}
                tagColor={item.tag === "MERCH" ? "bg-primary" : "bg-accent"}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
