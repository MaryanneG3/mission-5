const Products = require("../models/productsModel");
const Category = require("../models/categoryModel");

const getAllProducts = async (req, res) => {
  console.log("Fetching all products...");
  try {
    const products = await Products.find();
    res.status(200).json(products);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching products", error: error.message });
  }
};

const getUniqueCategories = async (req, res) => {
  console.log("Fetching unique categories...");
  try {
    const categories = await Category.find();
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
