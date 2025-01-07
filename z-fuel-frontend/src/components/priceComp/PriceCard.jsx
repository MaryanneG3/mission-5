import React from 'react';
import styles from './PriceComparison.module.css';

export const PriceCard = ({ fuelType, price, icon }) => {
  return (
    <div className={styles.priceCard}>
      <button className={styles.fuelTypeBtn}>
        <img
          loading="lazy"
          src={`/images/${icon}`}
          className={styles.fuelIcon}
          alt=""
        />
        <span>{fuelType}</span>
      </button>
      <img
        loading="lazy"
        src="/images/station-logo.png"
        className={styles.stationLogo}
        alt="Station logo"
      />
      <div className={styles.priceTag}>${price} per liter</div>
    </div>
  );
};