import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-fashion.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Elegant women's fashion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-left max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-foreground">Elegance</span>
          <br />
          <span className="bg-gradient-to-r from-primary to-rose-gold bg-clip-text text-transparent">
            Redefined
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
          Discover our curated collection of sophisticated women's fashion, 
          where timeless elegance meets modern style.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="elegant" size="lg" className="text-lg px-8 py-6">
            Shop Collection
          </Button>
          <Button variant="boutique" size="lg" className="text-lg px-8 py-6">
            Learn More
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;