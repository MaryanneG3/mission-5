import { useState, useEffect } from "react";
import {
  APIProvider,
  Map,
  Marker,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import styles from "./ZMap.module.css";

import StationCard from "./StationCard";
import NavBar from "./NavBar";

function ZMap() {
  //   const [open, setOpen] = useState(false);
  const [googleLoaded, setGoogleLoaded] = useState(false); // track if Google Maps is loaded
  const [stations, setStations] = useState([]); // stores stations data
  const [selectedStation, setSelectedStation] = useState(null); // set the selected station for info windows
  //   const [zoom, setZoom] = useState({ lat: -37.05, lng: 174.93 });

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
    
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <NavBar/>
      {/* station cards */}

      <div>
        {stations.map(
          (
            station,
            index //go through stations array and render each station as a card, give an index for key use
          ) => (
            <StationCard key={index} station={station} />
          )
        )}
      </div>
      <div style={{ height: "100vh", width: "50%" }}>
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
          {/* {selectedStation && (
            <InfoWindow position={selectedStation.coordinates}>
              <div>
                <h1>{selectedStation.name}</h1>
                <h3>
                  {selectedStation.address}, {selectedStation.suburb}
                </h3>
                <h4>{selectedStation.hours.sunday}</h4>
                <p>Pre-order Coffee Pay in app</p>
              </div>
            </InfoWindow> */}
          {/* )} */}
        </Map>
      </div>
    </APIProvider>
  );
}

export default ZMap;
