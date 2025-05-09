const mongoose = require("mongoose");
const OnlineOrderCategories = require("../models/categoryModel");
const OnlineOrderProducts = require("../models/productsModel");
const categories = require("../../data/categories.js");
const products = require("../../data/products.js");

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await OnlineOrderCategories.deleteMany({});
    await OnlineOrderProducts.deleteMany({});
    await OnlineOrderCategories.insertMany(categories);
    await OnlineOrderProducts.insertMany(products);
    console.log("Database seeded!");
  } catch (err) {
    console.error("Seeding error:", err);
  }
};

module.exports = seedDB;
