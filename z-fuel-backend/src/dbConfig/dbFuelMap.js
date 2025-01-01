const mongoose = require("mongoose");

const connectDBFuelMap = async () => {
  //async function to connect to db
  try {
    await mongoose.connect("mongodb://localhost:27017/FuelMapDB", {});
    console.log(
      "✅ mongoDB connection successful. Now connected to: FuelMapDB 🔌"
    );
  } catch (error) {
    console.error("❌ there was an error connecting to mongoDB:", error);
    process.exit(1);
  }
};

module.exports = connectDBFuelMap;
