import React from 'react';
import styles from './PriceCard.module.css';

const PriceCard = ({ fuelType, price, variant = "orange" }) => {
  return (
    <div className={`${styles.priceCard} ${styles[variant]}`}>
      <div className={styles.fuelType}>
        <img 
          src={`/images/priceComp/${fuelType === 'X95' ? 'x95' : fuelType.toLowerCase()}.png`}
          className={styles.icon} 
          alt={`${fuelType} fuel`} 
        />
        <span>{fuelType}</span>
      </div>
      <img 
        src="/images/priceComp/logocard.png"
        className={styles.stationIcon} 
        alt="Z Station" 
      />
      <div className={styles.price}>${price} per liter</div>
    </div>
  );
};

export default PriceCard;