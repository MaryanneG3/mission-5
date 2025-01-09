const FuelPrice = require('../models/FuelPrice');

// Get all fuel prices
exports.getFuelPrices = async (req, res) => {
  try {
    const { lat, lng, radius = 10 } = req.query; // radius in km

    let query = {};
    
    if (lat && lng) {
      query.location = {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [parseFloat(lng), parseFloat(lat)]
          },
          $maxDistance: radius * 1000 // Convert km to meters
        }
      };
    }

    const stations = await FuelPrice.find(query);
    
    // Format response
    const formattedPrices = stations.flatMap(station => {
      const distance = lat && lng ? 
        calculateDistance(
          parseFloat(lat),
          parseFloat(lng),
          station.location.coordinates[1],
          station.location.coordinates[0]
        ) : null;

      return station.prices.map(price => ({
        stationName: station.stationName,
        address: station.address,
        fuelType: price.fuelType,
        price: price.price,
        lastUpdated: price.lastUpdated,
        distance: distance ? parseFloat(distance.toFixed(1)) : null,
        location: {
          lat: station.location.coordinates[1],
          lng: station.location.coordinates[0]
        }
      }));
    });

    res.json(formattedPrices);
  } catch (error) {
    console.error('Error in getFuelPrices:', error);
    res.status(500).json({ message: error.message });
  }
};

// Add or update fuel prices
exports.addFuelPrice = async (req, res) => {
  try {
    const { stationName, address, lat, lng, prices } = req.body;

    if (!prices || !Array.isArray(prices)) {
      return res.status(400).json({ message: 'Prices must be an array.' });
    }

    const station = await FuelPrice.findOneAndUpdate(
      { stationName },
      {
        stationName,
        address,
        location: {
          type: 'Point',
          coordinates: [parseFloat(lng), parseFloat(lat)]
        },
        prices: prices.map(price => ({
          ...price,
          lastUpdated: new Date()
        }))
      },
      { upsert: true, new: true }
    );

    res.json(station);
  } catch (error) {
    console.error('Error in addFuelPrice:', error);
    res.status(500).json({ message: error.message });
  }
};

// Helper function to calculate distance between two points
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in kilometers
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}
