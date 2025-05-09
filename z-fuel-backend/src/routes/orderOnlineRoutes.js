const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getUniqueCategories,
} = require("../controllers/orderOnlineControllers");

router.get("/all-products", getAllProducts);
router.get("/categories", getUniqueCategories);

module.exports = router;
