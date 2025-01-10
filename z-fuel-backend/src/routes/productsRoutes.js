const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getUniqueCategories,
} = require("../controllers/productControllers");

router.get("/all-products", getAllProducts);
router.get("/categories", getUniqueCategories);

module.exports = router;
