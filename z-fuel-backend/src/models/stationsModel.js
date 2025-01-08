const mongoose = require("mongoose");

const stationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  suburb: { type: String, required: true },
  nearbySuburbs: [String],
  city: { type: String, required: true },
  coordinates: {
    lat: { type: Number, required: true }, // latitude
    lng: { type: Number, required: true }, // longitude
  },
  hours: {
    Sun: String,
    Mon: String,
    Tue: String,
    Wed: String,
    Thurs: String,
    Fri: String,
    Sat: String,
  },
  phone: { type: String, required: false },
  servicesOffered: [String],
});

const Station = mongoose.model("Station", stationSchema);

module.exports = Station;
