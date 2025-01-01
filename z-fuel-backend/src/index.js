const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDBFuelMap = require("./dbConfig/dbFuelMap"); //import connection to FuelMap DB (rhyas local)

const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/api", stationRoutes); //access station routes (rhya/fuelmap)

//Choose DB you want to connect to (uncooment your db and comment out all others)
connectDBFuelMap(); //connect to FuelMapDB (for fuel map features) **rhya's db

//initial route
app.get("/", (req, res) => {
  res.send("Welcome to Z-Fuel's server!");
});

//fuelmap data (FuelMapDB)
// app.get("/stations", async (req,res) => {

// })

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
