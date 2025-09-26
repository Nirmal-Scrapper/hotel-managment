const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  hotel_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' },
  room_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
  booking_date: { type: Date, default: Date.now },
  check_in_date: Date,
  check_out_date: Date,
  price: Number,
  no_of_guest: Number
});

module.exports = mongoose.model('Booking', bookingSchema);
