// const mongoose = require("mongoose");

// const connectProductsDb = async () => {
//   try {
//     await mongoose.connect("mongodb://localhost:27017/products", {});
//     console.log("Successfully connected to Online Orders DB");
//   } catch (error) {
//     console.error("Error connecting to Online Orders DB ", error);
//     process.exit(1);
//   }
// };

// module.exports = connectProductsDb;

const mongoose = require("mongoose");

const connectProductsDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/products", {});

    console.log("Successfully connected to Online Orders DB");
  } catch (error) {
    console.error("Error connecting to Online Orders DB:", error);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectProductsDb;
