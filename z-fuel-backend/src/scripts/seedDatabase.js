require('dotenv').config();
const mongoose = require('mongoose');
const FuelPrice = require('../models/FuelPrice');

const seedData = [
  {
    stationId: 'Z001',
    stationName: 'Z Newmarket',
    location: {
      type: 'Point',
      coordinates: [174.7770, -36.8685] // Auckland coordinates
    },
    prices: [
      { fuelType: '91', price: 2.979 },
      { fuelType: '95', price: 3.169 },
      { fuelType: 'Diesel', price: 2.319 }
    ]
  },
  {
    stationId: 'Z002',
    stationName: 'Z Mt Eden',
    location: {
      type: 'Point',
      coordinates: [174.7645, -36.8745]
    },
    prices: [
      { fuelType: '91', price: 2.649 },
      { fuelType: '95', price: 2.829 },
      { fuelType: 'Diesel', price: 1.969 }
    ]
  },
  {
    stationId: 'Z003',
    stationName: 'Z Ponsonby',
    location: {
      type: 'Point',
      coordinates: [174.7474, -36.8485]
    },
    prices: [
      { fuelType: '91', price: 2.899 },
      { fuelType: '95', price: 3.099 },
      { fuelType: 'Diesel', price: 2.259 }
    ]
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');

    // Clear existing data
    await FuelPrice.deleteMany({});
    console.log('Cleared existing data');

    // Insert seed data
    await FuelPrice.insertMany(seedData);
    console.log('Inserted seed data');

    console.log('Database seeding completed successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Close the connection
    await mongoose.connection.close();
    console.log('Database connection closed');
  }
}

// Run the seeding function
seedDatabase();
