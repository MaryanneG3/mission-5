require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose');

// DB imports
const connectDBFuelMap = require("./dbConfig/dbFuelMap");
const stationRoutes = require("./routes/stationsRoutes");
const fuelPriceRoutes = require("./routes/fuelPriceRoutes");

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
}));
app.use(bodyParser.json());
app.use(express.json());

// Connect to databases
connectDBFuelMap(); // connect to FuelMapDB (for fuel map features)

// MongoDB connection for fuel prices
mongoose.connect('mongodb://localhost:27017/zfuel', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Initial connection
app.get("/", (req, res) => {
  res.send("Welcome to Z-Fuel's server!");
});

// Routes
app.use("/api", stationRoutes); // access station routes (rhya/fuelmap)
app.use("/api", fuelPriceRoutes); // access fuel price routes

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});