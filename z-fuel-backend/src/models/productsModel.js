const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  inStock: { type: Boolean, required: true },
  imageSource: { type: String, required: true },
});

module.exports = mongoose.model("Products", productSchema);
