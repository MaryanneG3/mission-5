const express = require('express');
const router = express.Router();
const FuelPrice = require('../models/FuelPrice');

// Get all fuel prices
router.get('/api/fuel-prices', async (req, res) => {
  try {
    const fuelPrices = await FuelPrice.find();
    
    // Format the response to match frontend expectations
    const formattedPrices = fuelPrices.flatMap(station => 
      station.prices.map(price => ({
        stationName: station.stationName,
        fuelType: price.fuelType,
        price: price.price,
        address: station.address,
        location: station.location
      }))
    );
    
    res.json(formattedPrices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get nearby fuel prices
router.post('/api/fuel-prices/nearby', async (req, res) => {
  try {
    const { latitude, longitude, radius = 10 } = req.body;

    // Convert radius from km to meters
    const radiusInMeters = radius * 1000;

    const nearbyStations = await FuelPrice.find({
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude] // MongoDB uses [longitude, latitude]
          },
          $maxDistance: radiusInMeters
        }
      }
    });

    // Calculate distances and format response
    const formattedPrices = nearbyStations.flatMap(station => {
      // Calculate distance in kilometers
      const distance = calculateDistance(
        latitude,
        longitude,
        station.location.coordinates[1],
        station.location.coordinates[0]
      );

      return station.prices.map(price => ({
        stationName: station.stationName,
        fuelType: price.fuelType,
        price: price.price,
        address: station.address,
        distance,
        location: station.location
      }));
    });

    res.json(formattedPrices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Helper function to calculate distance between two points
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in kilometers
}

function toRad(degrees) {
  return degrees * (Math.PI / 180);
}

module.exports = router;
