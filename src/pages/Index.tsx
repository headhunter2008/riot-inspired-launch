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
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground">Home</h1>
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
      <div className="grid grid-cols-4 gap-6">
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
    </div>
  );
};

export default Index;
