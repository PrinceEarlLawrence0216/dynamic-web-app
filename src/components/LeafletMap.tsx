// components/GoogleMap.tsx  (or LeafletMap.tsx)
'use client';

type GoogleMapProps = {
  lat: number;
  lng: number;
  zoom?: number;          // ← added, optional
  showMarker?: boolean;   // ← added, optional
};

export default function GoogleMap({
  lat,
  lng,
  zoom = 14,
}: GoogleMapProps) {
  const mapUrl = `https://www.google.com/maps?q=${lat},${lng}&hl=en&z=${zoom}&output=embed`;

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <iframe
        title="Google Map"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src={mapUrl}
      />
    </div>
  );
}
