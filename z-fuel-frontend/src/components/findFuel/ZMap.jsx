import { useState, useEffect } from "react";
import styles from "./ZMap.module.css";

import MapComponent from "./MapComponent";
import StationCard from "./StationCard";
import SearchBar from "./searchBar";

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

  //SEARCH FUNCTIONALITY
  const handleSearchInputChange = (input) => {
    setSearchInput(input); //updates searchInput state with cleaned input from search array
    console.log(searchInput);
  };
  const filteredStations =
    searchInput && searchInput.length > 0
      ? stations.filter((station) => {
          return searchInput.some((term) =>
            station.nearbySuburbs.some(
              (suburb) => suburb.toLowerCase().includes(term) // check if any term matches any suburb (case-insensitive)
            )
          );
        })
      : stations; // if no input, return all stations
      
  // display results or message if no matches
  const content =
    filteredStations.length > 0 ? (
      filteredStations.map((station, index) => (
        <StationCard key={index} station={station} />
      ))
    ) : (
      <div className={styles.noResultsMsg}>
        Sorry, no results found.
        <br /> Please try again
      </div> // message when no matches are found
    );
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        {/* search bar section */}
        <SearchBar
          onSearchChange={handleSearchInputChange}
          stations={stations}
        />

        {/* station cards section */}
        {content}
      </div>

      {/* map section */}
      <div className={styles.rightContainer}>
        <MapComponent stations={stations} />
      </div>
    </div>
  );
}

export default ZMap;
