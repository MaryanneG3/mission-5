import React, { useEffect, useState } from 'react';
import BaseLayout from '../../layouts/baselayout/BaseLayout';
import styles from './PriceComparison.module.css';
import heroBackground from '/images/priceComp/moneyBanner1.png';
import pumpImage from '/images/priceComp/pricePump.png';
import comparisonImage from '/images/priceComp/priceCompText.png';

const fetchPrices = async (address) => {
  try {
    const response = await fetch(`http://localhost:5001/api/fuel-prices?address=${address}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching prices:', error);
  }
};


const fetchCoordinates = async (address) => {
  try {
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`);
    const data = await response.json();
    console.log('Geocoding API response:', data);
    if (!data.results || data.results.length === 0) throw new Error('No results found.');
    const { lat, lng } = data.results[0].geometry.location;
    return { lat, lng };
  } catch (error) {
    console.error('Error fetching coordinates:', error);
    throw error;
  }
};

const fetchNearbyPrices = async (lat, lng) => {
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

const PriceComparison = () => {
  const [prices, setPrices] = useState([
    { fuelType: '91', amount: 2.10 },
    { fuelType: 'X 95', amount: 2.50 },
    { fuelType: 'Diesel', amount: 1.80 },
  ]);
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');

  const fetchPricesAndUpdateState = async (address) => {
    const data = await fetchPrices(address);
    if (data) {
      setPrices(data);
    }
  };

  useEffect(() => {
    fetchPricesAndUpdateState(address1);
  }, [address1]);

  const handleSearch = async (locIndex) => {
    const address = locIndex === 0 ? address1 : address2;
    if (!address) return;
    try {
      const { lat, lng } = await fetchCoordinates(address);
      if (!lat || !lng) {
        alert('Invalid address. Please try again.');
        return;
      }
      const pricesData = await fetchNearbyPrices(lat, lng);
      setPrices(pricesData);
    } catch (error) {
      alert('Error fetching data. Please check your connection and try again.');
    }
  };

  const displayPrices = (prices) => {
    return ['91', 'x95', 'diesel'].map((fuelType) => {
      const price = prices.find(p => p && p.fuelType && p.fuelType.toLowerCase() === fuelType) || { price: 2.00 };
      return (
        <div key={fuelType} className={styles.priceCard}>
          <img src={`/images/priceComp/${fuelType === 'diesel' ? 'dieselD' : fuelType}.png`} alt={`${fuelType} icon`} className={styles.fuelIcon} />
          <img src="/images/priceComp/logocard.png" alt="Logo Card" className={styles.logoCard} />
          <div className={styles.fuelFrameContainer}>
            <img 
              src={`/images/priceComp/${fuelType === '91' ? '91Frame' : fuelType === 'x95' ? '95Frame' : 'dieselFrame'}.png`} 
              alt={`${fuelType} frame`} 
              className={styles.fuelFrame} 
            />
            <div className={styles.priceText}>{price ? `$${price.price} per litre` : `$2.00 per litre`}</div>
          </div>
        </div>
      );
    });
  };

  return (
    <BaseLayout>
      {/* Hero Section with Background Image and Overlay Text */}
      <div className={styles.heroSection} style={{ backgroundImage: `url(${heroBackground})` }}>
        <img src={comparisonImage} alt="Comparison Text" className={styles.overlayText} />
      </div>

      <section className={styles.comparisonSection}>
        <div className={styles.contentContainer}>
          {/* Pump Image */}
          <div className={styles.imageArea}>
            <div className={styles.imageContainer}>
              <img src={pumpImage} alt="Fuel Pump" className={styles.pumpImage} style={{ width: '100%' }} />
            </div>
          </div>
          <h2>Compare Prices Across Stations</h2>
          <div className={styles.priceGridContainer}>
            {['location1', 'location2'].map((location, locIndex) => (
              <div key={location} className={styles.locationSection}>
                <div className={styles.searchBarContainer}>
            <input 
              type="text" 
              placeholder="Enter address" 
                    value={locIndex === 0 ? address1 : address2} 
                    onChange={(e) => {
                      if (locIndex === 0) {
                        setAddress1(e.target.value);
                      } else {
                        setAddress2(e.target.value);
                      }
                    }} 
            />
                  <button onClick={() => handleSearch(locIndex)}>Search</button>
          </div>
          <div className={styles.priceGrid}>
                  {prices.length > 0 ? displayPrices(prices) : <div>No prices available</div>}
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
