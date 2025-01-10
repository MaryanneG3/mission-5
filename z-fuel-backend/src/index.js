require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Choose DB to connect to (uncomment your DB and comment out all others)
// DB imports
const connectDBFuelMap = require("./dbConfig/dbFuelMap"); // Import connection to FuelMap DB (Rhya's local)
// const connectProductsDb = require("./dbConfig/dbOrderOnline"); // Maryanne's local - products DB connection

// Routes
const productRoutes = require("./routes/productsRoutes"); // Routes for products and categories
const stationRoutes = require("./routes/stationsRoutes");
const fuelPriceRoutes = require("./routes/fuelPriceRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Initial connection route
// Connect to databases
connectDBFuelMap(); // connect to FuelMapDB (for fuel map features)

// // MongoDB connection for fuel prices
// mongoose
//   .connect("mongodb://localhost:27017/zfuel", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("MongoDB connection error:", err));

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
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});