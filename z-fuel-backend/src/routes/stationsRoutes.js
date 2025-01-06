const express = require("express");
const router = express.Router();
const Station = require("../models/stationsModel"); //

// get route to retrieve stationss
router.get("/stations", async (req, res) => {
  try {
    // fetch ALL
    const stations = await Station.find();
    res.json(stations); // send station data back to the frontend to display
  } catch (error) {
    res.status(500).json({
      message: "an error occured while fetching stations:",
      error: error.message,
    });
  }
});

module.exports = router;
