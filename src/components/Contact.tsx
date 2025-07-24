import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-pearl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Visit our boutique or reach out to us. We'd love to help you find 
            your perfect style.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-foreground">
              Visit Our Boutique
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-rose-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-rose-gold-dark" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Address</h4>
                  <p className="text-muted-foreground">
                    123 Fashion Avenue<br />
                    Downtown District<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-rose-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-rose-gold-dark" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-rose-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-rose-gold-dark" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">hello@bellaboutique.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-rose-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-rose-gold-dark" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Hours</h4>
                  <p className="text-muted-foreground">
                    Monday - Saturday: 10AM - 8PM<br />
                    Sunday: 12PM - 6PM
                  </p>
                </div>
              </div>
            </div>

            <Card className="p-6 bg-gradient-to-br from-rose-gold/10 to-accent/10 border-rose-gold/20">
              <h4 className="font-semibold text-foreground mb-3">
                Personal Styling Services
              </h4>
              <p className="text-muted-foreground mb-4">
                Book a private consultation with our expert stylists for a 
                personalized shopping experience.
              </p>
              <Button variant="elegant" className="w-full">
                Book Appointment
              </Button>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-background border-0 shadow-soft">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Send us a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input placeholder="Your first name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input placeholder="Your last name" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input placeholder="How can we help you?" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us about your style preferences or any questions you have..."
                  rows={6}
                />
              </div>

              <Button variant="boutique" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;