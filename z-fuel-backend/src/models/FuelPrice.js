const mongoose = require('mongoose');

const fuelPriceSchema = new mongoose.Schema({
  stationName: {
    type: String,
    required: true
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true
    }
  },
  address: {
    type: String,
    required: true
  },
  prices: [{
    fuelType: {
      type: String,
      enum: ['91', 'X95', 'Diesel'],
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    lastUpdated: {
      type: Date,
      default: Date.now
    }
  }]
}, {
  timestamps: true
});

// Create a geospatial index for location-based queries
fuelPriceSchema.index({ location: '2dsphere' });

const FuelPrice = mongoose.model('FuelPrice', fuelPriceSchema);

module.exports = FuelPrice;
