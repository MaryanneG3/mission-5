const mongoose = require("mongoose");
require("dotenv").config();
const { MONGODB_URI } = process.env;

const connectProductsDb = async () => {
  try {
    const connection = await mongoose.connect(MONGODB_URI, {});
    console.log("Successfully connected to:", connection.connection.name);
  } catch (error) {
    console.error("Error connecting to database:", error);
    process.exit(1);
  }
};

module.exports = connectProductsDb;
