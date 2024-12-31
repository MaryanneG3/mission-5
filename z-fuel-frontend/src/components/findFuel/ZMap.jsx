import { useState, useEffect } from "react";
import {
  APIProvider,
  Map,
  Marker,
  InfoWindow,
} from "@vis.gl/react-google-maps";

function ZMap() {
  const [open, setOpen] = useState(false);
  const [googleLoaded, setGoogleLoaded] = useState(false); // track if Google Maps is loaded

  const position = { lat: -37.05587893945348, lng: 174.92683621422697 };
  const zKingsway = { lat: -37.0606535, lng: 174.948526 };
  const papakuraNorth = { lat: -37.0505888253282, lng: 174.92973951083405 };
  const takanini = { lat: -37.04244157998147, lng: 174.9201183815876 };

  // Wait for Google Maps to load
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.google && window.google.maps) {
        setGoogleLoaded(true); // Set googleLoaded to true once Google Maps API is available
        clearInterval(interval);
      }
    }, 100); // Check every 100ms

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const stations = [zKingsway, papakuraNorth, takanini]; // array of station positions **** will pull array from database

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div style={{ height: "50vh", width: "50%" }}>
        <Map
          defaultZoom={12}
          defaultCenter={position}
          mapId={import.meta.env.VITE_MAP_ID}
        >
          {googleLoaded &&
            stations.map((station, index) => (
              <Marker
                key={index}
                position={station}
                onClick={() => setOpen(true)}
                icon={{
                  url: "/images/zPurpleVector.png", // Custom pin image URL
                  scaledSize:
                    googleLoaded && window.google.maps
                      ? new window.google.maps.Size(30, 30)
                      : undefined, // Only access google.maps when it's loaded
                }}
              />
            ))}
          {open && (
            <InfoWindow position={zKingsway}>
              <h1>Z location</h1>
              <h3>Z address 239, suburb</h3>
              <h4>Open 24 hours</h4>
              <p>Pre-order Coffee Pay in app</p>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}

export default ZMap;
