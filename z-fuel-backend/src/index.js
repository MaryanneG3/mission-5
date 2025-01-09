require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');

const stationRoutes = require("./routes/stationsRoutes");
const fuelPriceRoutes = require("./routes/fuelPriceRoutes");

const app = express();

// Middleware setup
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5001',
  credentials: true
}));
app.use(express.json());

// MongoDB connection setup
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/FuelMapDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use("/api", stationRoutes);
app.use("/api", fuelPriceRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', details: err.message });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
