require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

// DB imports
// const connectDBFuelMap = require("./dbConfig/dbFuelMap"); // Import connection to FuelMap DB (Rhya's local)
const connectProductsDb = require("./dbConfig/dbOrderOnline"); // Maryanne's local - products DB connection

// Routes
const productRoutes = require("./routes/productsRoutes"); // Routes for products and categories - Maryanne
const stationRoutes = require("./routes/stationsRoutes"); // Routes to stations - Rhya
const fuelPriceRoutes = require("./routes/fuelPrices"); // Routes to fuel prices - Caitlin

const app = express();

// Middleware
app.use(cors());

app.use(bodyParser.json());
app.use(express.json());

// Choose DB to connect to (uncomment your DB and comment out all others) <------------------------------------------ IMPORTANT!

// connectDBFuelMap(); // Connect to FuelMapDB (for fuel map features) **Rhya's DB
connectProductsDb(); // Connect to Online Orders DB (Maryanne's DB)

// MongoDB connection for fuel prices - Caitlin's DB
// mongoose.connect('mongodb://localhost:27017/zfuel', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch(err => console.error('MongoDB connection error:', err));

// Initial connection
app.get("/", (req, res) => {
  res.send("Welcome to Z-Fuel's server!");
});

// Route imports
app.use("/api", stationRoutes); // Access station routes (Rhya/FuelMap)
app.use("/api/products", productRoutes); // Access product routes (Products and Categories)
app.use("/api", fuelPriceRoutes); // access fuel price routes

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

// Start the server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
