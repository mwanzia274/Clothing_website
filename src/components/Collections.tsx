import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";
import dressImage from "@/assets/dress-1.jpg";
import topImage from "@/assets/top-1.jpg";
import bottomImage from "@/assets/bottom-1.jpg";
import accessoriesImage from "@/assets/accessories-1.jpg";

const Collections = () => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const collections = [
    {
      id: 1,
      title: "Dresses",
      description: "Elegant dresses for every occasion",
      image: dressImage,
      itemCount: "24 items",
      price: 125.00,
    },
    {
      id: 2,
      title: "Tops & Blouses",
      description: "Sophisticated tops and blouses",
      image: topImage,
      itemCount: "32 items",
      price: 75.00,
    },
    {
      id: 3,
      title: "Bottoms",
      description: "Tailored pants and skirts",
      image: bottomImage,
      itemCount: "18 items",
      price: 95.00,
    },
    {
      id: 4,
      title: "Accessories",
      description: "Curated accessories and bags",
      image: accessoriesImage,
      itemCount: "45 items",
      price: 45.00,
    },
  ];

  const handleAddToCart = (collection: typeof collections[0]) => {
    addItem({
      id: collection.id.toString(),
      title: collection.title,
      image: collection.image,
      price: collection.price,
    });
    
    toast({
      title: "Added to cart!",
      description: `${collection.title} has been added to your cart.`,
    });
  };

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
                <p className="text-muted-foreground mb-2">
                  {collection.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm text-warm-gray">
                    {collection.itemCount}
                  </p>
                  <p className="text-lg font-bold text-primary">
                    ${collection.price}
                  </p>
                </div>
                <div className="space-y-2">
                  <Button 
                    variant="ghost" 
                    className="w-full hover:bg-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    onClick={() => window.alert(`Browse ${collection.title} collection - Coming soon!`)}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Collection
                  </Button>
                  <Button 
                    variant="elegant" 
                    className="w-full"
                    onClick={() => handleAddToCart(collection)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;