const express = require("express");
const router = express.Router();
const FuelPrice = require("../models/FuelPrice");

// Get fuel prices by address (partial match)
router.get("/fuel-prices", async (req, res) => {
  const { address } = req.query;
  console.log("Searching for address:", address);

  try {
    // If no address provided, return error
    if (!address) {
      return res.status(400).json({ message: "Address is required" });
    }

    // Find stations by partial address match (case-insensitive)
    const stations = await FuelPrice.find({
      address: { $regex: address, $options: 'i' }
    });

    if (!stations || stations.length === 0) {
      return res.status(404).json({ 
        message: "No stations found matching this location. Try a different search term." 
      });
    }

    // If multiple stations found, use the first one
    const station = stations[0];

    // Format the response
    const formattedPrices = station.prices.map(price => ({
      stationName: station.stationName,
      fuelType: price.fuelType,
      price: price.price,
      address: station.address
    }));

    console.log("Found prices for station:", formattedPrices);
    res.json(formattedPrices);
  } catch (error) {
    console.error("Error fetching fuel prices:", error);
    res.status(500).json({ message: "Error fetching fuel prices" });
  }
});

// Get nearby fuel prices
router.post("/fuel-prices/nearby", async (req, res) => {
  try {
    const { latitude, longitude, radius = 10 } = req.body;
    if (!latitude || !longitude) {
      return res
        .status(400)
        .json({ message: "Latitude and longitude are required." });
    }
    console.log(
      `Received request for nearby prices with lat: ${latitude}, lng: ${longitude}, radius: ${radius}`
    );
    // Convert radius from km to meters
    const radiusInMeters = radius * 1000;
    const nearbyStations = await FuelPrice.find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude], // MongoDB uses [longitude, latitude]
          },
          $maxDistance: radiusInMeters,
        },
      },
    });
    if (nearbyStations.length === 0) {
      console.log("No nearby stations found.");
    }
    // Calculate distances and format response
    const formattedPrices = nearbyStations.flatMap((station) => {
      // Calculate distance in kilometers
      const distance = calculateDistance(
        latitude,
        longitude,
        station.location.coordinates[1],
        station.location.coordinates[0]
      );
      return station.prices.map((price) => ({
        stationName: station.stationName,
        fuelType: price.fuelType,
        price: price.price,
        address: station.address,
        distance,
        location: station.location,
      }));
    });
    res.json(formattedPrices);
  } catch (error) {
    console.error("Error fetching nearby prices:", error);
    res.status(500).json({ message: error.message });
  }
});

// Get fuel prices by address search
router.get("/fuel-prices/search", async (req, res) => {
  console.log(
    "GET /fuel-prices/search route hit with query:",
    req.query.address
  );
  try {
    const searchTerm = req.query.address;
    if (!searchTerm) {
      return res
        .status(400)
        .json({ message: "Address search term is required" });
    }
    // Create a case-insensitive regex for the search term
    const searchRegex = new RegExp(searchTerm, "i");
    const stations = await FuelPrice.find({
      $or: [{ address: searchRegex }, { stationName: searchRegex }],
    });
    if (!stations || stations.length === 0) {
      return res.status(404).json({
        message: "No stations found matching the search term",
      });
    }
    // Format the response
    const formattedPrices = stations.map((station) => ({
      stationName: station.stationName,
      address: station.address,
      location: station.location,
      prices: station.prices,
    }));
    console.log("Found stations:", JSON.stringify(formattedPrices, null, 2));
    res.json(formattedPrices);
  } catch (error) {
    console.error("Error searching stations:", error);
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
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in kilometers
}

function toRad(degrees) {
  return degrees * (Math.PI / 180);
}

module.exports = router;
