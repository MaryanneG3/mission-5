import React, { useState } from 'react';
import styles from './SearchAddress.module.css';

const SearchAddress = ({ onAddressSelect }) => {
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (address.trim()) {
      onAddressSelect({ address: address.trim() });
    }
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter location (e.g., Takanini, Albany)"
        className={styles.searchInput}
      />
      <button type="submit" className={styles.searchButton}>
        Search
      </button>
    </form>
  );
};

export default SearchAddress;