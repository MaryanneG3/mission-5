import { useState, useEffect } from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import styles from "./MapComponent.module.css";

function MapComponent({ stations }) {
  const [googleLoaded, setGoogleLoaded] = useState(false); // tracking if GM is loaded

  // waiit for GM to load
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.google && window.google.maps) {
        setGoogleLoaded(true); // set googleLoaded to true once GM API is available to stop it from async erroring
        clearInterval(interval);
      }
    }, 100); // check every 100ms to see if loaded

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div>
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <div
          className={styles.mapContainer}
          style={{ height: "550px", width: "632px" }}
        >
          <Map
            defaultZoom={12}
            defaultCenter={{ lat: -37.05, lng: 174.93 }}
            mapId={import.meta.env.VITE_MAP_ID}
          >
            {googleLoaded &&
              stations.map((station, index) => (
                <Marker
                  key={index}
                  position={station.coordinates}
                  onClick={() => setSelectedStation(station)}
                  icon={{
                    url: "/images/zPurpleVector.png",
                    scaledSize: new window.google.maps.Size(44, 50),
                  }}
                />
              ))}
          </Map>
        </div>
      </APIProvider>
    </div>
  );
}

export default MapComponent;
