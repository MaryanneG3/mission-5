const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  category: { type: String, required: true },
  imageSource: { type: String, required: true },
});

module.exports = mongoose.model("Categories", categorySchema);
