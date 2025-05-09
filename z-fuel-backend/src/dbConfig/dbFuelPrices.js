const mongoose = require("mongoose");

const connectDBFuelMap = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/FuelPricesDB", {});
    console.log(
      "✅ mongoDB connection successful. Now connected to: FuelPricesDB 🔌"
    );
  } catch (error) {
    console.error("❌ there was an error connecting to mongoDB:", error);
    process.exit(1);
  }
};

module.exports = connectDBFuelMap;
