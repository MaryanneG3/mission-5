import React from 'react';
import styles from './PriceComparison.module.css';
import PropTypes from 'prop-types';
export const SearchAddress = () => {
  return (
    <form className={styles.searchForm}>
      <div className={styles.inputGroup}>
        <label htmlFor="address" className="visually-hidden">Enter address</label>
        <input
          type="text"
          id="address"
          className={styles.searchInput}
          placeholder="Enter address"
        />
        <button type="submit" className={styles.searchBtn}>Search</button>
      </div>
    </form>
  );
};