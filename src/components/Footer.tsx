import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-rose-gold to-rose-gold-light bg-clip-text text-transparent">
              NECTOR BOUTIQUE
            </h3>
            <p className="text-background/80 mb-4 leading-relaxed max-w-md">
              Your destination for sophisticated women's fashion. We curate timeless 
              pieces that celebrate your unique style and empower your confidence.
            </p>
            <div className="flex items-center text-background/60 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-1 text-rose-gold fill-rose-gold" />
              <span>for fashion lovers</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-background/80 hover:text-rose-gold transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#collections" className="text-background/80 hover:text-rose-gold transition-colors">
                  Collections
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/80 hover:text-rose-gold transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-rose-gold transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Customer Care</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-background/80 hover:text-rose-gold transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-rose-gold transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-rose-gold transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-rose-gold transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © 2024 NECTOR BOUTIQUE. All rights reserved. | Crafted with elegance and passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;