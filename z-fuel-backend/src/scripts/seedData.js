const mongoose = require('mongoose');
const FuelPrice = require('../models/FuelPrice');

const sampleData = [
  {
    stationName: 'Z Energy Papakura',
    location: {
      type: 'Point',
      coordinates: [174.9436, -37.0675] // [longitude, latitude]
    },
    address: '198 Great South Road, Papakura, Auckland',
    prices: [
      { fuelType: '91', price: 2.959 },
      { fuelType: 'X95', price: 3.149 },
      { fuelType: 'Diesel', price: 2.299 }
    ]
  },
  {
    stationName: 'Z Energy Takanini',
    location: {
      type: 'Point',
      coordinates: [174.9247, -37.0482]
    },
    address: '304 Great South Road, Takanini, Auckland',
    prices: [
      { fuelType: '91', price: 2.949 },
      { fuelType: 'X95', price: 3.139 },
      { fuelType: 'Diesel', price: 2.289 }
    ]
  },
  {
    stationName: 'Z Energy Papakura Service Centre',
    location: {
      type: 'Point',
      coordinates: [174.9517, -37.0683]
    },
    address: '25 East Street, Papakura, Auckland',
    prices: [
      { fuelType: '91', price: 2.969 },
      { fuelType: 'X95', price: 3.159 },
      { fuelType: 'Diesel', price: 2.309 }
    ]
  },
  {
    stationName: 'Z Energy Takanini Motorway',
    location: {
      type: 'Point',
      coordinates: [174.9332, -37.0397]
    },
    address: 'Southern Motorway, Takanini, Auckland',
    prices: [
      { fuelType: '91', price: 2.989 },
      { fuelType: 'X95', price: 3.179 },
      { fuelType: 'Diesel', price: 2.329 }
    ]
  },
  {
    stationName: 'Z Energy Drury',
    location: {
      type: 'Point',
      coordinates: [174.9647, -37.1039]
    },
    address: '230 Great South Road, Drury, Auckland',
    prices: [
      { fuelType: '91', price: 2.939 },
      { fuelType: 'X95', price: 3.129 },
      { fuelType: 'Diesel', price: 2.279 }
    ]
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/zfuel', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');

    // Clear existing data
    await FuelPrice.deleteMany({});
    console.log('Cleared existing data');

    // Insert new data
    await FuelPrice.insertMany(sampleData);
    console.log('Inserted sample data');

    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
