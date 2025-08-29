import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Award, Users, Sparkles } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Fashion",
      description: "Every piece is selected with love and attention to detail"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "We source only the finest materials and craftsmanship"
    },
    {
      icon: Users,
      title: "Personal Service",
      description: "Dedicated styling advice and personalized experience"
    },
    {
      icon: Sparkles,
      title: "Timeless Elegance",
      description: "Classic styles that transcend seasonal trends"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <Badge variant="secondary" className="mb-4 bg-rose-gold/20 text-rose-gold-dark">
              About NECTOR BOUTIQUE
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Where <span className="text-primary">Style</span> Meets 
              <br />
              <span className="bg-gradient-to-r from-rose-gold to-accent bg-clip-text text-transparent">
                Sophistication
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Founded with a vision to empower women through fashion, NECTOR BOUTIQUE 
              has been a trusted destination for sophisticated style for over a decade.
              We believe that the right outfit can transform not just how you look, 
              but how you feel.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our carefully curated collections feature pieces from emerging designers 
              and established fashion houses, ensuring that every woman finds something 
              that speaks to her unique style and personality.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-rose-gold/20 rounded-full flex items-center justify-center">
                      <value.icon className="w-5 h-5 text-rose-gold-dark" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="lg:ml-8">
            <Card className="p-8 bg-gradient-to-br from-blush to-pearl border-0 shadow-elegant">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">5K+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Unique Pieces</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Designer Brands</div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-border/50">
                <h4 className="font-semibold text-center mb-4 text-foreground">
                  What Our Customers Say
                </h4>
                <blockquote className="text-center italic text-muted-foreground">
                  "NECTOR BOUTIQUE has completely transformed my wardrobe. 
                  The quality and style are unmatched!"
                </blockquote>
                <div className="text-center mt-3 text-sm font-medium text-warm-gray">
                  — Sarah M., Loyal Customer
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;