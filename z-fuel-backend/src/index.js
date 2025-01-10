require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const fuelPricesRoutes = require('./routes/fuelPrices');
const stationRoutes = require('./routes/stationsRoutes');

const app = express();

// Middleware setup
app.use(cors({
  origin: (origin, callback) => {
    const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175', 'http://localhost:5176'];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
app.use(express.json());

// MongoDB connection setup
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/FuelMapDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/stations', stationRoutes);
app.use('/api/fuelPrices', fuelPricesRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', details: err.message });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
Temporary merge branch 1
});



Temporary merge branch 2
