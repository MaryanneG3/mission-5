import React, { useEffect, useState } from 'react';
import BaseLayout from '../../layouts/baselayout/BaseLayout';
import styles from './PriceComparison.module.css';
import heroBackground from '/images/priceComp/moneyBanner1.png';
import pumpImage from '/images/priceComp/pricePump.png';
import comparisonImage from '/images/priceComp/priceCompText.png';

const fetchPrices = async (lat, lng) => {
  try {
    const response = await fetch(`http://localhost:5001/api/fuel-prices/nearby`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ latitude: lat, longitude: lng })
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch nearby prices: ${errorText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching nearby prices:', error);
    throw error;
  }
};

const fetchCoordinates = async (address) => {
  try {
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`);
    const data = await response.json();
    if (!data.results || data.results.length === 0) throw new Error('No results found.');
    return data.results[0].geometry.location;
  } catch (error) {
    console.error('Error fetching coordinates:', error);
    throw error;
  }
};

const PriceComparison = () => {
  const [prices, setPrices] = useState([]);
  const [firstAddress, setFirstAddress] = useState('');
  const [secondAddress, setSecondAddress] = useState('');

  useEffect(() => {
    if (!firstAddress) return;
    const fetchAndSetPrices = async () => {
      try {
        const { lat, lng } = await fetchCoordinates(firstAddress);
        const pricesData = await fetchPrices(lat, lng);
        setPrices(pricesData);
        // Optionally update second address based on nearby logic or additional API call
        setSecondAddress("Second nearby address"); // Placeholder for second address logic
      } catch (error) {
        alert('Error fetching data. Please check your connection and try again.');
      }
    };
    fetchAndSetPrices();
  }, [firstAddress]);

  const displayPrices = () => {
    return prices.map((priceInfo, index) => (
      <div key={index} className={styles.priceCard}>
        <img src={`/images/priceComp/${priceInfo.fuelType}.png`} alt={`${priceInfo.fuelType} icon`} className={styles.fuelIcon} />
        <div className={styles.fuelFrameContainer}>
          <div className={styles.priceText}>${priceInfo.price} per litre</div>
        </div>
      </div>
    ));
  };

  return (
    <BaseLayout>
      <div className={styles.heroSection} style={{ backgroundImage: `url(${heroBackground})` }}>
        <img src={comparisonImage} alt="Comparison Text" className={styles.overlayText} />
      </div>

      <section className={styles.comparisonSection}>
        <div className={styles.contentContainer}>
          <img src={pumpImage} alt="Fuel Pump" className={styles.pumpImage} />
          <h2>Compare Prices Across Stations</h2>
          <input 
            type="text" 
            placeholder="Enter first address" 
            value={firstAddress} 
            onChange={(e) => setFirstAddress(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder="Second nearby address" 
            value={secondAddress} 
            readOnly 
          />
          <div className={styles.priceGrid}>
            {prices.length > 0 ? displayPrices() : <div>No prices available</div>}
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default PriceComparison;
