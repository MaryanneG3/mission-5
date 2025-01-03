import { useState, useEffect } from "react";
import styles from "./ZMap.module.css";

import MapComponent from "./MapComponent";
import StationCard from "./StationCard";
import SearchBar from "./searchBar";

function ZMap() {
  const [stations, setStations] = useState([]); // stores stations data

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
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <SearchBar />
        {/* station cards render */}
        {stations.map(
          (
            station,
            index //go through stations array and render each station as a card, give an index for key use
          ) => (
            <StationCard key={index} station={station} />
          )
        )}
      </div>

      {/* map section */}
      <div        className={styles.rightContainer}
>
        <MapComponent />
      </div>
    </div>
  );
}

export default ZMap;
