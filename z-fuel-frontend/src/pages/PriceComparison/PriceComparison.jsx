import React, { useState } from 'react';
import BaseLayout from '../../layouts/baselayout/BaseLayout';
import styles from './PriceComparison.module.css';
import SearchAddress from '../../components/priceComp/SearchAddress';

const PriceComparison = () => {
  const [userLocation, setUserLocation] = useState(null);

  const handleAddressSelect = (location) => {
    setUserLocation(location);
  };

  return (
    <BaseLayout>
      <nav className={styles.navigation}>
        <div className={styles.navContainer}>
          <img src="/images/z-logo.svg" alt="Z Energy" className={styles.logo} />
          <div className={styles.navLinks}>
            <button className={styles.personalBtn}>For Personal</button>
            <div className={styles.dropdownLinks}>
              <span>How to enjoy Z station ↓</span>
              <span>Rewards and Promotions ↓</span>
              <span>Location ↓</span>
            </div>
          </div>
          <div className={styles.rightNav}>
            <span>Z App</span>
            <span>About Z</span>
            <button className={styles.loginBtn}>Login →</button>
          </div>
        </div>
      </nav>

      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Fuel Your Savings - Compare Prices Now!</h1>
        </div>
      </div>

      <section className={styles.comparisonSection}>
        <div className={styles.contentContainer}>
          <div className={styles.titleWithImages}>
            <div className={styles.titleArea}>
              <h2 className={styles.sectionTitle}>
                Compare Prices<br />
                Across Stations
              </h2>
            </div>
            <div className={styles.imageArea}>
              <img src="/images/fuel-pump-1.jpg" alt="" className={styles.pumpImage} />
              <img src="/images/fuel-pump-2.jpg" alt="" className={styles.pumpImage} />
            </div>
          </div>
          
          <div className={styles.searchContainer}>
            <div className={styles.searchBox}>
              <SearchAddress onAddressSelect={handleAddressSelect} placeholder="Enter your address" />
            </div>
            <button className={styles.searchButton}>
              Search
            </button>
          </div>

          <div className={styles.priceGrid}>
            <div className={styles.priceCard}>
              <div className={styles.cardHeader}>
                <span className={styles.fuelBadge}>91</span>
                <img src="/images/z-logo-white.png" alt="Z Energy" className={styles.cardLogo} />
              </div>
              <div className={styles.priceTag}>
                <span className={styles.price}>$297.9</span>
                <span className={styles.unit}>per liter</span>
              </div>
            </div>

            <div className={styles.priceCard}>
              <div className={styles.cardHeader}>
                <span className={styles.fuelBadge}>X95</span>
                <img src="/images/z-logo-white.png" alt="Z Energy" className={styles.cardLogo} />
              </div>
              <div className={styles.priceTag}>
                <span className={styles.price}>$316.9</span>
                <span className={styles.unit}>per liter</span>
              </div>
            </div>

            <div className={styles.priceCard}>
              <div className={styles.cardHeader}>
                <span className={styles.fuelBadge}>D</span>
                <img src="/images/z-logo-white.png" alt="Z Energy" className={styles.cardLogo} />
              </div>
              <div className={styles.priceTag}>
                <span className={styles.price}>$231.9</span>
                <span className={styles.unit}>per liter</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default PriceComparison;
