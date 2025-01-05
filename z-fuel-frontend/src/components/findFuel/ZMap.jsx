import { useState, useEffect } from "react";
import styles from "./ZMap.module.css";

import MapComponent from "./MapComponent";
import StationCard from "./StationCard";
<<<<<<< HEAD
// import NavBar from "./NavBar";
=======
import SearchBar from "./searchBar";
>>>>>>> main

function ZMap() {
  const [stations, setStations] = useState([]); // stores stations data
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchStations = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/stations"); // endpoint URL to access the data
        const data = await response.json(); // parse the response object as JSON to get actual usable data
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

  const handleSearchInputChange = (input) => {
    setSearchInput(input); //updates searchInput state in ZMap
  };
  //create new ARRAY called filtered stations containing stations that  match the users input by filtering through original stations array
  const filteredStations = stations.filter((station) => {
    return station.nearbySuburbs.some((suburb) =>
      suburb.toLowerCase().includes(searchInput.toLowerCase())
    );
  });

  console.table("filtered stations", filteredStations);
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        {/* search bar section */}
        <SearchBar
          onSearchChange={handleSearchInputChange}
          stations={stations}
        />

        {/* station cards section */}
        {filteredStations.map((station, index) => (
          <StationCard key={index} station={station} />
        ))}
      </div>

      {/* map section */}
      <div className={styles.rightContainer}>
        <MapComponent stations={stations} />
      </div>
    </div>
  );
}

export default ZMap;
