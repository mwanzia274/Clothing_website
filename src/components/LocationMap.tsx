import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, ExternalLink, Navigation } from 'lucide-react';

const LocationMap = () => {
  const openInGoogleMaps = () => {
    window.open('https://www.google.com/maps/place/Eastleigh,+Nairobi/@-1.2730196,36.836274,14z/data=!3m1!4b1!4m6!3m5!1s0x182f16b02d007251:0xb8beb2dbf14a0af4!8m2!3d-1.2730196!4d36.8528639!16zL20vMDZyaDcz?entry=ttu', '_blank');
  };

  const getDirections = () => {
    window.open('https://www.google.com/maps/dir//Eastleigh,+Nairobi/@-1.2730196,36.836274,14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x182f16b02d007251:0xb8beb2dbf14a0af4!2m2!1d36.8528639!2d-1.2730196!3e0?entry=ttu', '_blank');
  };

  return (
    <Card className="overflow-hidden border-0 shadow-elegant">
      <div className="relative w-full h-80">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31910.66848668407!2d36.836273746010136!3d-1.2730196121855202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f16b02d007251%3A0xb8beb2dbf14a0af4!2sEastleigh%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1756186746142!5m2!1sen!2ske"
          width="100%" 
          height="100%" 
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
          allow="geolocation"
        />
        <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 border border-border/50">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="w-4 h-4 text-primary" />
            <div>
              <p className="font-semibold text-foreground">NECTOR BOUTIQUE</p>
              <p className="text-muted-foreground">Eastleigh, Nairobi</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 flex gap-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={getDirections}
            className="bg-background/90 backdrop-blur-sm border border-border/50 hover:bg-background/95"
          >
            <Navigation className="w-4 h-4 mr-1" />
            Directions
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={openInGoogleMaps}
            className="bg-background/90 backdrop-blur-sm border border-border/50 hover:bg-background/95"
          >
            <ExternalLink className="w-4 h-4 mr-1" />
            View Larger
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default LocationMap;