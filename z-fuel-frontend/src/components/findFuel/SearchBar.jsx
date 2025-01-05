import styles from "./SearchBar.module.css";
import { useState } from "react";

function SearchBar({ station, onSearchChange }) {
  const [userInput, setUserInput] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value; //gets current inpiut value
    setUserInput(value); //updates user input for search as the user types in their location
    onSearchChange(value); //call prop funcition to pass the input to zMao file
  };
  return (
    <div className={styles.searchContainer}>
      <div className={styles.icon}>
        <img src="/images/searchIcon.png" alt="Search" />
      </div>
      <input
        type="text"
        placeholder="Enter Your Location"
        className={styles.input}
        value={userInput}
        onChange={handleSearchChange} //updat state when input changes (each letter = update)
      />
    </div>
  );
}

export default SearchBar;
