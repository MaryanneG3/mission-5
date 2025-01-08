const express = require('express');
const router = express.Router();
const fuelPriceController = require('../controllers/fuelPriceController');

// Get fuel prices
router.get('/fuel-prices', fuelPriceController.getFuelPrices);

// Add new fuel price
router.post('/fuel-prices', fuelPriceController.addFuelPrice);

module.exports = router;
