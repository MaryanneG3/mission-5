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
  const [stations, setStations] = useState([]); // stores stations data

  const position = { lat: -37.05587893945348, lng: 174.92683621422697 };

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

  // Fetch the Z-stations data from the backend to be used dynamically
  useEffect(() => {
    const fetchStations = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/stations"); // Endpoint URL to access the data
        const data = await response.json(); // Parse the response object as JSON to get actual data
        setStations(data); // Update the stations state with DB data from BE
      } catch (error) {
        console.error(
          "An error occurred while fetching station data from the backend: ",
          error
        );
      }
    };

    fetchStations(); // Call fetchStations to trigger the data fetch
  }, []);

  useEffect(() => {
    console.log(stations); // Log updated state
  }, [stations]);

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div style={{ height: "50vh", width: "50%" }}>
        <Map
          defaultZoom={12}
          defaultCenter={position}
          mapId={import.meta.env.VITE_MAP_ID}
        >
          {googleLoaded &&
            stations.map((station, index) => {
              console.log(station.coordinates); // log the coordinates object for each station (lng and lats)
              return (
                <Marker
                  key={index}
                  position={station.coordinates}
                  onClick={() => setOpen(true)}
                  icon={{
                    url: "/images/zPurpleVector.png", // Custom pin image URL
                    scaledSize:
                      googleLoaded && window.google.maps
                        ? new window.google.maps.Size(30, 30)
                        : undefined, // only access google.maps when it's loaded, otherwise leave as undefind
                  }}
                />
              );
            })}
          {open && (
            <InfoWindow position={position}>
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
