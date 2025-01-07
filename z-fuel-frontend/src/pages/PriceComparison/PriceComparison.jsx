import React from 'react';
import BaseLayout from '../../layouts/baselayout/BaseLayout';
import Titlebar from '../../common/titlebar/Titlebar';
import styles from './PriceComparison.module.css'; 
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

function PriceComparison() {
  return (
    <BaseLayout variant="default">
      <Titlebar
        variant="default"
        backgroundImage="priceComparison"
        title="Fuel Your Savings - Compare Prices Now!"
      />
      <div className={styles.wrapper}>
        <Header />
        <main className={styles.mainContent}>
          <SearchAddress />
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
    </BaseLayout>
  );
}

export default PriceComparison;
