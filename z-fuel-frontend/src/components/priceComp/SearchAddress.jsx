import React, { useEffect, useRef } from 'react';
import styles from './SearchAddress.module.css';

const SearchAddress = ({ onAddressSelect }) => {
  const inputRef = useRef(null);
  const autocompleteRef = useRef(null);

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initAutocomplete;
      document.head.appendChild(script);
    };

    loadGoogleMapsScript();
  }, []);

  const initAutocomplete = () => {
    if (!window.google || !inputRef.current) return;

    autocompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      {
        componentRestrictions: { country: 'nz' },
        fields: ['geometry', 'formatted_address'],
      }
    );

    autocompleteRef.current.addListener('place_changed', handlePlaceSelect);
  };

  const handlePlaceSelect = () => {
    const place = autocompleteRef.current.getPlace();
    
    if (!place.geometry) {
      console.error('No location data available');
      return;
    }

    const location = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
      address: place.formatted_address
    };

    onAddressSelect(location);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // The form submission is handled by the Google Places Autocomplete
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <div className={styles.searchContainer}>
        <div className={styles.inputWrapper}>
          <img 
            src="/images/priceComp/Enter box.png" 
            alt="" 
            className={styles.searchIcon}
          />
          <input
            ref={inputRef}
            type="text"
            className={styles.searchInput}
            placeholder="Enter your address"
            aria-label="Enter your address"
          />
          {inputRef.current?.value && (
            <img 
              src="/images/priceComp/confAddress.png"
              alt=""
              className={styles.confirmIcon}
            />
          )}
        </div>
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchAddress;