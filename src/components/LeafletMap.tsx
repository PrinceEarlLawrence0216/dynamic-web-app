'use client';

import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

type LeafletMapProps = {
  lat: number;
  lng: number;
  zoom?: number;          // optional; default 14
  showMarker?: boolean;   // optional; default true
};

export default function LeafletMap({
  lat,
  lng,
  zoom = 14,
  showMarker = true,
}: LeafletMapProps) {
  useEffect(() => {
    // Create map
    const map = L.map('leaflet-map').setView([lat, lng], zoom);

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Marker (optional)
    let marker: L.Marker | undefined;
    if (showMarker) {
      marker = L.marker([lat, lng]).addTo(map);
    }

    // Clean up on unmount
    return () => {
      map.remove();
      marker?.remove();
    };
  }, [lat, lng, zoom, showMarker]);

  return <div id="leaflet-map" className="w-full h-full" />;
}
