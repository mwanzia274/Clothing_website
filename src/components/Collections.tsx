import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import dressImage from "@/assets/dress-1.jpg";
import topImage from "@/assets/top-1.jpg";
import bottomImage from "@/assets/bottom-1.jpg";
import accessoriesImage from "@/assets/accessories-1.jpg";

const Collections = () => {
  const collections = [
    {
      id: 1,
      title: "Dresses",
      description: "Elegant dresses for every occasion",
      image: dressImage,
      itemCount: "24 items",
    },
    {
      id: 2,
      title: "Tops & Blouses",
      description: "Sophisticated tops and blouses",
      image: topImage,
      itemCount: "32 items",
    },
    {
      id: 3,
      title: "Bottoms",
      description: "Tailored pants and skirts",
      image: bottomImage,
      itemCount: "18 items",
    },
    {
      id: 4,
      title: "Accessories",
      description: "Curated accessories and bags",
      image: accessoriesImage,
      itemCount: "45 items",
    },
  ];

  return (
    <section id="collections" className="py-20 bg-pearl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Collections</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated collections, each piece selected for its 
            exceptional quality and timeless appeal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection) => (
            <Card key={collection.id} className="group overflow-hidden border-0 shadow-soft hover:shadow-rose transition-all duration-500 bg-background">
              <div className="relative overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-foreground">
                  {collection.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {collection.description}
                </p>
                <p className="text-sm text-warm-gray mb-4">
                  {collection.itemCount}
                </p>
                <Button 
                  variant="ghost" 
                  className="w-full hover:bg-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  onClick={() => window.alert(`Browse ${collection.title} collection - Coming soon!`)}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Collection
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;