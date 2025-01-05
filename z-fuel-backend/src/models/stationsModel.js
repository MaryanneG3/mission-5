const mongoose = require("mongoose");

const stationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  suburb: { type: String, required: true },
  nearbySuburbs: [String],
  city: { type: String, required: true },
  longitude: { type: Number, required: true },
  latitude: { type: Number, required: true },
  hours: {
    //object with string values for each day
    sunday: String,
    monday: String,
    tuesday: String,
    wednesday: String,
    thursday: String,
    friday: String,
    saturday: String,
  },
  phone: { type: String, required: true },
  servicesOffered: [String], //array of strings
});

const Station = mongoose.model("Station", stationSchema);

module.exports = Station;
