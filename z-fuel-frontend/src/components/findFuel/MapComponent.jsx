import { useState, useEffect } from "react";
import {
  APIProvider,
  Map,
  Marker,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import styles from "./MapComponent.module.css";

function MapComponent() {
  const [googleLoaded, setGoogleLoaded] = useState(false); // track if Google Maps is loaded
  const [stations, setStations] = useState([]); // stores stations data
  const [selectedStation, setSelectedStation] = useState(null); // set the selected station for info windows

  // Wait for Google Maps to load
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.google && window.google.maps) {
        setGoogleLoaded(true); // Set googleLoaded to true once Google Maps API is available
        clearInterval(interval);
      }
    }, 100); // check every 100ms to seee if loaded

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // fetch the Z-stations data from the backend to be used dynamically (from mongodb)
  useEffect(() => {
    const fetchStations = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/stations"); // Endpoint URL to access the data
        const data = await response.json(); // Parse the response object as JSON to get actual data
        setStations(data); // update the stations state with DB data from BE
      } catch (error) {
        console.error(
          "An error occurred while fetching station data from the backend: ",
          error
        );
      }
    };

    fetchStations(); // call fetchStations to trigger the data fetch
  }, []);

  return (
    <div>
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <div style={{ height: "550px", width: "632px" }}>
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
                  onClick={() => {
                    setSelectedStation(station);
                  }} // Set selected station and zoom to pin
                  icon={{
                    url: "/images/zPurpleVector.png",
                    scaledSize:
                      googleLoaded && window.google.maps
                        ? new window.google.maps.Size(44, 50)
                        : undefined,
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
