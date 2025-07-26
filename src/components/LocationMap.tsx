import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const LocationMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [tokenSaved, setTokenSaved] = useState(false);

  // Check if token is saved in localStorage
  useEffect(() => {
    const savedToken = localStorage.getItem('mapbox-token');
    if (savedToken) {
      setMapboxToken(savedToken);
      setTokenSaved(true);
    }
  }, []);

  const saveToken = () => {
    if (mapboxToken.trim()) {
      localStorage.setItem('mapbox-token', mapboxToken);
      setTokenSaved(true);
      initializeMap();
    }
  };

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    // Set Mapbox access token
    mapboxgl.accessToken = mapboxToken;
    
    // Initialize map centered on Nairobi, Kenya (you can change this location)
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [36.8219, -1.2921], // Nairobi coordinates
      zoom: 13,
      pitch: 45,
    });

    // Add a marker for the boutique location
    const marker = new mapboxgl.Marker({
      color: '#e91e63', // Primary color
      scale: 1.2
    })
      .setLngLat([36.8219, -1.2921])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML(`
            <div style="padding: 10px;">
              <h3 style="margin: 0 0 8px 0; font-weight: 600;">Bella Boutique</h3>
              <p style="margin: 0; color: #666;">123 Fashion Street<br>Nairobi, Kenya</p>
            </div>
          `)
      )
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Add atmosphere effects
    map.current.on('style.load', () => {
      map.current?.setFog({
        color: 'rgb(255, 255, 255)',
        'high-color': 'rgb(200, 200, 225)',
        'horizon-blend': 0.2,
      });
    });
  };

  useEffect(() => {
    if (tokenSaved && mapboxToken) {
      initializeMap();
    }

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [tokenSaved, mapboxToken]);

  if (!tokenSaved) {
    return (
      <Card className="p-6 bg-background border border-border">
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold">Location Map Setup</h3>
        </div>
        <p className="text-muted-foreground mb-4">
          To display the map, please enter your Mapbox public token. 
          You can get one for free at{' '}
          <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            mapbox.com
          </a>
        </p>
        <div className="flex gap-2">
          <Input
            type="password"
            placeholder="Enter your Mapbox public token"
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            className="flex-1"
          />
          <Button onClick={saveToken} disabled={!mapboxToken.trim()}>
            Save & Load Map
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Your token will be stored locally in your browser for this demo.
        </p>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden border-0 shadow-elegant">
      <div className="relative w-full h-80">
        <div ref={mapContainer} className="absolute inset-0" />
        <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 border border-border/50">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="w-4 h-4 text-primary" />
            <div>
              <p className="font-semibold text-foreground">Bella Boutique</p>
              <p className="text-muted-foreground">123 Fashion Street, Nairobi</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default LocationMap;