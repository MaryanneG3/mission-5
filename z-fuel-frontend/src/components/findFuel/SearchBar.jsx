import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.icon}>
        <img src="/images/searchIcon.png" alt="Search" />
      </div>
      <input
        type="text"
        placeholder="Enter Your Location"
        className={styles.input}
      />
    </div>
  );
}

export default SearchBar;
