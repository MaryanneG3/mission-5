require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// === Middleware ===
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

console.log("\nDatabase connection info: ", process.env.MONGODB_URI);
console.log("Current connection: ", process.env.DB);
console.log("Current environment: ", process.env.NODE_ENV);

// === Database Connections ===
const connectProductsDb = require("./dbConfig/dbOrderOnline"); // Maryanne's Products DB
const connectDBFuelMap = require("./dbConfig/dbFuelMap"); // Rhya's FuelMap DB
const connectDBFuelPrices = require("./dbConfig/dbFuelPrices"); // Caitlin's Fuel Prices DB

// === Routes ===
const onlineOrderRoutes = require("./routes/orderOnlineRoutes"); // Products & Categories - Maryanne
const stationRoutes = require("./routes/stationsRoutes"); // Stations - Rhya
const fuelPriceRoutes = require("./routes/fuelPrices"); // Fuel Prices - Caitlin

// Route mounting
app.get("/", (req, res) => {
  res.send("Welcome to Z-Fuel's server!");
});

// === Error Handling Middleware ===
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

// === Start Server After DB Connection ===
const PORT = process.env.PORT || 5002;

// Choose the correct DB connection function
let connectDB;
if (process.env.DB === "products") {
  connectDB = connectProductsDb; // Maryanne's DB
} else if (process.env.DB === "fuelMap") {
  connectDB = connectDBFuelMap; // Rhya's DB
} else if (process.env.DB === "fuelPrices") {
  connectDB = connectDBFuelPrices; // Caitlin's DB
} else {
  console.error("No valid DB selected. Please set the DB in your .env file.");
  process.exit(1);
}

console.log(
  "connectDB value after choose DB connection (based off .env): ",
  connectDB,
  "\n"
);

// First connect to the database
connectDB()
  .then(() => {
    console.log("Database connection established successfully");

    // === Mount routes ONLY after the database is connected ===
    app.use("/api", stationRoutes); // Fuel Map
    app.use("/api/products", onlineOrderRoutes); // Products & Categories
    app.use("/api", fuelPriceRoutes); // Fuel Prices

    // Only seed after connection if in development
    if (process.env.NODE_ENV === "development") {
      const seedDB = require("./scripts/seedOrderOnlineData");
      seedDB();
    }

    // Finally start the server after DB connection and routes are set up
    app.listen(PORT, () => {
      console.log(`\nServer is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to database:", error);
    process.exit(1);
  });
