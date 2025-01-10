const Products = require("../models/productsModel");
const Categories = require("../models/categoryModel");

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Products.find();
    res.status(200).json(products);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching products", error: error.message });
  }
};

// Get unique categories
const getUniqueCategories = async (req, res) => {
  try {
    const categories = await Categories.find();
    res.status(200).json(categories);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching categories", error: error.message });
  }
};

module.exports = {
  getAllProducts,
  getUniqueCategories,
};
