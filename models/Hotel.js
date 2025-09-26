const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  hotel_name: String,
  address: String,
  timezone: String
});

module.exports = mongoose.model('Hotel', hotelSchema);
