import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useState } from "react";
import SearchModal from "./SearchModal";
import CartSidebar from "./CartSidebar";
import { useCart } from "@/hooks/useCart";
import dressImage from "@/assets/dress-1.jpg";
import topImage from "@/assets/top-1.jpg";
import bottomImage from "@/assets/bottom-1.jpg";
import accessoriesImage from "@/assets/accessories-1.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { getTotalItems, setIsOpen: setCartOpen } = useCart();

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
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-rose-gold bg-clip-text text-transparent">
              Bella Boutique
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#collections" className="text-foreground hover:text-primary transition-colors">
              Collections
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
            </Button>
            <CartSidebar>
              <Button variant="ghost" size="icon" className="relative" onClick={() => setCartOpen(true)}>
                <ShoppingBag className="h-5 w-5" />
                {getTotalItems() > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-2 -right-2 w-5 h-5 rounded-full p-0 flex items-center justify-center text-xs"
                  >
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>
            </CartSidebar>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <a
                href="#home"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#collections"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Collections
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="flex items-center space-x-4 px-3 py-2">
                <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
                  <Search className="h-5 w-5" />
                </Button>
                <CartSidebar>
                  <Button variant="ghost" size="icon" className="relative" onClick={() => setCartOpen(true)}>
                    <ShoppingBag className="h-5 w-5" />
                    {getTotalItems() > 0 && (
                      <Badge 
                        variant="destructive" 
                        className="absolute -top-2 -right-2 w-5 h-5 rounded-full p-0 flex items-center justify-center text-xs"
                      >
                        {getTotalItems()}
                      </Badge>
                    )}
                  </Button>
                </CartSidebar>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        collections={collections}
      />
    </header>
  );
};

export default Header;