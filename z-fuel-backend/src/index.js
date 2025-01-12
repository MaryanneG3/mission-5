require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

// DB imports
// const connectDBFuelMap = require("./dbConfig/dbFuelMap"); // Import connection to FuelMap DB (Rhya's local)
const connectProductsDb = require("./dbConfig/dbOrderOnline"); // Maryanne's local - products DB connection

// Routes
const productRoutes = require("./routes/productsRoutes"); // Routes for products and categories
const stationRoutes = require("./routes/stationsRoutes");
const fuelPriceRoutes = require("./routes/fuelPrices");

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5179", // Your frontend origin
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());

// MongoDB connection for ZFuel database
mongoose
  .connect("mongodb://localhost:27017/zfuel", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB zfuel database"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Initial connection welcome message
app.get("/", (req, res) => {
  res.send("Welcome to Z-Fuel's server!");
});

// Route imports
app.use("/api", stationRoutes); // Access station routes
app.use("/api/products", productRoutes); // Access product routes (Products and Categories)
app.use("/api", fuelPriceRoutes); // Access fuel price routes

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
