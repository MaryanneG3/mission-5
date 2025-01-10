const mongoose = require("mongoose");
const Station = require("../models/stationsModel");
const dotenv = require("dotenv");

dotenv.config();

// seed data for stations (rhyas data)
const stations = [
  {
    _id: mongoose.Types.ObjectId("67734775db3bdb7462088c32"),
    name: "Z Kingsway Station",
    address: "26 Clevedon Road",
    suburb: "Papakura",
    city: "Auckland",
    hours: {
      Sun: "24 Hours",
      Mon: "24 Hours",
      Tue: "24 Hours",
      Wed: "24 Hours",
      Thu: "24 Hours",
      Fri: "24 Hours",
      Sat: "24 Hours",
    },
    phone: "09 2988185",
    servicesOffered: ["Restrooms", "Fuel", "Coffee", "ATM"],
    coordinates: {
      lat: -37.0648,
      lng: 174.9404,
    },
    nearbySuburbs: ["Takanini", "Drury", "Papakura", "Opaheke"],
  },
  {
    _id: mongoose.Types.ObjectId("67734782db3bdb7462088c33"),
    name: "Z Papakura North",
    address: "254 Great South Road",
    suburb: "Takanini",
    city: "Auckland",
    hours: {
      Sun: "5:00am - 10pm",
      Mon: "5:00am - 10pm",
      Tue: "5:00am - 10pm",
      Wed: "5:00am - 10pm",
      Thu: "5:00am - 10pm",
      Fri: "5:00am - 10pm",
      Sat: "5:00am - 10pm",
    },
    phone: "09 2988185",
    servicesOffered: ["Restrooms", "Fuel", "Coffee", "ATM"],
    coordinates: {
      lat: -37.0505888253282,
      lng: 174.92973951083405,
    },
    nearbySuburbs: ["Takanini", "Drury", "Papakura", "Opaheke"],
  },
];

// connect to mongodb and seed the data
const connectDBFuelMap = require("./dbConfig/dbFuelMap");

connectDBFuelMap()
  .then(() => {
    console.log("Connected to MongoDB");
    // insert seed data into the database
    Station.insertMany(stations)
      .then(() => {
        console.log("Seed data inserted!");
        process.exit();
      })
      .catch((err) => {
        console.error("Error inserting seed data:", err);
        process.exit(1);
      });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });
