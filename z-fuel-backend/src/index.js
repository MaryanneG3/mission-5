const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// DB imports
// const connectDBFuelMap = require("./dbConfig/dbFuelMap"); // Import connection to FuelMap DB (Rhya's local)
const connectProductsDb = require("./dbConfig/dbOrderOnline"); // Maryanne's local - products DB connection

// Routes
const stationRoutes = require("./routes/stationsRoutes");
const productRoutes = require("./routes/productsRoutes"); // Routes for products and categories

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Choose DB to connect to (uncomment your DB and comment out all others)
// connectDBFuelMap(); // Connect to FuelMapDB (for fuel map features) **Rhya's DB
connectProductsDb(); // Connect to Online Orders DB (Maryanne's DB)

// Initial connection route
app.get("/", (req, res) => {
  res.send("Welcome to Z-Fuel's server!");
});

// Route imports
app.use("/api", stationRoutes); // Access station routes (Rhya/FuelMap)
app.use("/api/products", productRoutes); // Access product routes (Products and Categories)

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
