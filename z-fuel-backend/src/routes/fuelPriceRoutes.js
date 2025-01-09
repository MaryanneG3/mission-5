const express = require('express');
const router = express.Router();
const FuelPrice = require('../models/FuelPrice');

// Get all fuel prices with optional nearby search
router.get('/fuel-prices', async (req, res) => {
    const { lat, lng, radius = 10 } = req.query; // radius in km
    try {
        const query = lat && lng ? {
            location: {
                $near: {
                    $geometry: { type: "Point", coordinates: [parseFloat(lng), parseFloat(lat)] },
                    $maxDistance: radius * 1000 // Convert km to meters
                }
            }
        } : {};

        const stations = await FuelPrice.find(query);
        const formattedPrices = stations.map(station => ({
            stationName: station.stationName,
            address: station.address,
            prices: station.prices.map(price => ({
                fuelType: price.fuelType,
                price: price.price,
                lastUpdated: price.lastUpdated,
                distance: lat && lng ? calculateDistance(lat, lng, station.location.coordinates[1], station.location.coordinates[0]) : null
            }))
        }));
        res.json(formattedPrices);
    } catch (error) {
        console.error('Error in getFuelPrices:', error);
        res.status(500).json({ message: error.message });
    }
});

// Add or update fuel prices
router.post('/fuel-prices', async (req, res) => {
    const { stationName, address, lat, lng, prices } = req.body;
    try {
        if (!prices || !Array.isArray(prices)) {
            return res.status(400).json({ message: 'Prices must be an array.' });
        }
        const station = await FuelPrice.findOneAndUpdate(
            { stationName: stationName },
            { stationName, address, location: { type: 'Point', coordinates: [parseFloat(lng), parseFloat(lat)] }, prices },
            { upsert: true, new: true }
        );
        res.json(station);
    } catch (error) {
        console.error('Error in addFuelPrice:', error);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
