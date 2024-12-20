const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to Z-Fuel's server!");
});

const PORT = 5000; // to do: shift to env
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
