import React, { useEffect, useState } from 'react';
import BaseLayout from '../../layouts/baselayout/BaseLayout';
import styles from './PriceComparison.module.css';
import heroBackground from '/images/priceComp/moneyBanner1.png';
import pumpImage from '/images/priceComp/pricePump.png';
import comparisonImage from '/images/priceComp/priceCompText.png';

const fetchPrices = async () => {
  const response = await fetch('http://localhost:3000/api/fuel-prices');
  return response.json();
};

const PriceComparison = () => {
  const [prices, setPrices] = useState([
    { fuelType: '91', amount: 2.10 },
    { fuelType: 'X 95', amount: 2.50 },
    { fuelType: 'Diesel', amount: 1.80 },
  ]);
  const [address, setAddress] = useState('');

  useEffect(() => {
    const getPrices = async () => {
      const data = await fetchPrices();
      setPrices(data);
    };
    getPrices();
  }, []);

  const handleSearch = () => {
    console.log('Searching for address:', address);
    // Implement search logic here
  };

  return (
    <BaseLayout>
      {/* Hero Section with Background Image and Overlay Text */}
      <div className={styles.heroSection} style={{ backgroundImage: `url(${heroBackground})` }}>
        <img src={comparisonImage} alt="Comparison Text" className={styles.overlayText} />
      </div>

      <section className={styles.comparisonSection}>
        <div className={styles.contentContainer}>
          <h2>Compare Prices Across Stations</h2>
          {/* Pump Image */}
          <div className={styles.imageArea}>
            <div className={styles.imageContainer}>
              <img src={pumpImage} alt="Fuel Pump" className={styles.pumpImage} style={{ maxWidth: '50%' }} />
            </div>
          </div>
          <div className={styles.priceGridContainer}>
            {['location1', 'location2'].map((location, locIndex) => (
              <div key={location} className={styles.locationSection}>
                <div className={styles.searchBarContainer}>
                  <input type="text" placeholder="Enter address" value={address} onChange={(e) => setAddress(e.target.value)} />
                  <button onClick={handleSearch}>Search</button>
                </div>
                <div className={styles.priceGrid}>
                  {['91', 'x95', 'diesel'].map((fuelType) => (
                    <div key={fuelType} className={styles.priceCard}>
                      <img src={`/images/priceComp/${fuelType === 'diesel' ? 'dieselD' : fuelType}.png`} alt={`${fuelType} icon`} className={styles.fuelIcon} />
                      <img src="/images/priceComp/logocard.png" alt="Logo Card" className={styles.logoCard} />
                      <div className={styles.fuelFrameContainer}>
                        <img 
                          src={`/images/priceComp/${fuelType === '91' ? '91Frame' : fuelType === 'x95' ? '95Frame' : 'dieselFrame'}.png`} 
                          alt={`${fuelType} frame`} 
                          className={styles.fuelFrame} 
                        />
                        <div className={styles.priceText}>
                          ${prices.find(price => price.fuelType === fuelType)?.amount} per litre
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default PriceComparison;
