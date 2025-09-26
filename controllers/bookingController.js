const Booking = require('../models/Booking');

// GET /api/bookings
const getAllBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find()
      .populate('user_id', 'first_name last_name')
      .populate('hotel_id', 'hotel_name')
      .populate('room_id', 'room_no room_type');
    
    res.json(bookings);
  } catch (err) {
    next(err);
  }
};

// POST /api/bookings
const createBooking = async (req, res, next) => {
  try {
    const booking = await Booking.create(req.body);
    res.status(201).json(booking);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllBookings,
  createBooking
};
