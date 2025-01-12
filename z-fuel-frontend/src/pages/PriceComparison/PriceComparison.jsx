import React, { useState } from 'react';
import BaseLayout from '../../layouts/baselayout/BaseLayout';
import SearchAddress from '../../components/priceComp/SearchAddress';
import styles from './PriceComparison.module.css';
import heroBackground from '/images/priceComp/moneyBanner1.png';
import pumpImage from '/images/priceComp/pricePump.png';
import comparisonImage from '/images/priceComp/priceCompText.png';

const fetchPrices = async (address) => {
  try {
    const response = await fetch(`http://localhost:5001/api/fuel-prices?address=${encodeURIComponent(address)}`);
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Failed to fetch prices' }));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching prices:', error);
    throw error;
  }
};

const defaultPrices = [
  { fuelType: '91', price: 0.00, stationName: 'Select Location' },
  { fuelType: 'X95', price: 0.00, stationName: 'Select Location' },
  { fuelType: 'Diesel', price: 0.00, stationName: 'Select Location' }
];

const PriceComparison = () => {
  const [location1Prices, setLocation1Prices] = useState(defaultPrices);
  const [location2Prices, setLocation2Prices] = useState(defaultPrices);
  const [error1, setError1] = useState('');
  const [error2, setError2] = useState('');
  const [stationName1, setStationName1] = useState('Select Location');
  const [stationName2, setStationName2] = useState('Select Location');

  const handleAddressSelect = async (location, locIndex) => {
    const setError = locIndex === 0 ? setError1 : setError2;
    const setPrices = locIndex === 0 ? setLocation1Prices : setLocation2Prices;
    const setStationName = locIndex === 0 ? setStationName1 : setStationName2;

    if (!location || !location.address) {
      setError('Please enter a location');
      setPrices(defaultPrices);
      setStationName('Select Location');
      return;
    }

    try {
      const pricesData = await fetchPrices(location.address);
      setPrices(pricesData);
      setStationName(pricesData[0]?.stationName || 'Select Location');
      setError('');
    } catch (error) {
      setError(error.message || 'Error fetching prices. Please try a different location.');
      setPrices(defaultPrices);
      setStationName('Select Location');
    }
  };

  const displayPrices = (prices, stationName) => {
    return ['91', 'X95', 'Diesel'].map((fuelType) => {
      const price = prices.find(p => p.fuelType === fuelType) || defaultPrices.find(p => p.fuelType === fuelType);
      return (
        <div key={fuelType} className={styles.priceCard}>
          <img src={`/images/priceComp/${fuelType.toLowerCase() === 'diesel' ? 'dieselD' : fuelType.toLowerCase()}.png`} 
               alt={`${fuelType} icon`} 
               className={styles.fuelIcon} />
          <img src="/images/priceComp/logocard.png" alt="Logo Card" className={styles.logoCard} />
          <div className={styles.fuelFrameContainer}>
            <img 
              src={`/images/priceComp/${fuelType === '91' ? '91Frame' : fuelType === 'X95' ? '95Frame' : 'dieselFrame'}.png`} 
              alt={`${fuelType} frame`} 
              className={styles.fuelFrame} 
            />
            <div className={styles.priceText}>
              ${price.price.toFixed(2)} per litre
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <BaseLayout>
      <div className={styles.heroSection} style={{ backgroundImage: `url(${heroBackground})` }}>
        <img src={comparisonImage} alt="Comparison Text" className={styles.overlayText} />
      </div>

      <section className={styles.comparisonSection}>
        <div className={styles.contentContainer}>
          <div className={styles.imageArea}>
            <div className={styles.imageContainer}>
              <img src={pumpImage} alt="Fuel Pump" className={styles.pumpImage} style={{ width: '100%' }} />
            </div>
          </div>
          <h2>Compare Prices Across Stations</h2>
          <div className={styles.priceGridContainer}>
            {[0, 1].map((locIndex) => (
              <div key={locIndex} className={styles.locationSection}>
                <div className={styles.searchBarContainer}>
                  <SearchAddress
                    onAddressSelect={(location) => handleAddressSelect(location, locIndex)}
                  />
                </div>
                {locIndex === 0 && error1 && <div className={styles.error}>{error1}</div>}
                {locIndex === 1 && error2 && <div className={styles.error}>{error2}</div>}
                <div className={styles.stationName}>
                  {locIndex === 0 ? stationName1 : stationName2}
                </div>
                <div className={styles.priceGrid}>
                  {displayPrices(
                    locIndex === 0 ? location1Prices : location2Prices,
                    locIndex === 0 ? stationName1 : stationName2
                  )}
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
