const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();
const userRoutes = require('./routes/users')
const hotelRoutes = require('./routes/hotels')
const roomRoutes = require('./routes/rooms')
const bookingRoutes = require('./routes/bookings')
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

//Server Health

app.get('/health', (req, res) => {
  res.send("Hello from Express");
});

// Routes

app.use('/api/users', userRoutes);
app.use('/api/hotels', hotelRoutes);
app.use('/api/rooms', roomRoutes);
app.use('/api/bookings', bookingRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use((err, req, res, next) => {
  console.error(err.stack);
  const status = err.status || 500;
  res.status(status).json({ error: err.message });
});


