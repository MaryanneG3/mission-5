import styles from "./SearchBar.module.css";
import { useState } from "react";

function SearchBar({ onSearchChange }) {
  const [userInput, setUserInput] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value; //gets current inpiut value
    const cleanedValue = value
      .replace(/[^\w\s]/gi, "") // step 1: remove punctuation
      .toLowerCase() //step 2: change all to lowercase letters
      .split(" ") //step 4: split by space
      .filter((word) => word.trim() !== ""); // step 3: remove double spaces

    setUserInput(value); //updates user input for search as the user types in their location
    onSearchChange(cleanedValue); //call prop funcition to pass the input to zMao file
    console.log(cleanedValue);
  };
  return (
    <div className={styles.searchContainer}>
      <div className={styles.icon}>
        <img src="/images/icons/searchIcon.png" alt="Search" />
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
