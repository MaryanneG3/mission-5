import React from 'react';
import styles from './PriceComparison.module.css'; // Ensure this file exists in the same directory
import SearchAddress from '../../components/priceComp/SearchAddress';
import PriceCard from '../../components/priceComp/PriceCard';
import Header from '../../common/header/Header';

const priceData = [
  { fuelType: '91', price: '297.9', icon: '/images/91PL.png' }, 
  { fuelType: '91', price: '264.9', icon: '/images/91PL.png' },
  { fuelType: 'X 95', price: '316.9', icon: '/images/X95PL.png' },
  { fuelType: 'D', price: '231.9', icon: '/images/DPL.png' },
  { fuelType: 'X 95', price: '282.9', icon: '/images/X95PL.png' },
  { fuelType: 'D', price: '196.9', icon: '/images/DPL.png' }
];

export const PriceComparison = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.mainContent}>
        <h1 className={styles.title}>Fuel Your Savings - Compare Prices Now!</h1>
        <SearchAddress/>
        <div className={styles.priceGrid}>
          {priceData.map((item, index) => (
            <PriceCard
              key={index}
              fuelType={item.fuelType}
              price={item.price}
              icon={item.icon}
            />
          ))}
        </div>
      </main>
    </div>
  );
};