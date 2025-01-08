const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fuelPricesRouter = require('./routes/fuelPrices');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/', fuelPricesRouter);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/zfuel', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
