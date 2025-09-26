const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  room_no: String,
  room_type: String,
  room_size: String,
  price: Number,
  is_available_from: Date,
  is_available_to: Date,
  hotel_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' }
});

module.exports = mongoose.model('Room', roomSchema);
