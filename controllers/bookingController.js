const { z } = require('zod');
const Booking = require('../models/Booking');

const bookingBodySchema = z.object({
  user_id: z.number(),
  hotel_id: z.number(),
  room_id: z.number(),
  booking_date: z.string().optional(), // ISO date string
  check_in_date: z.string(),
  check_out_date: z.string(),
  price: z.number(),
  no_of_guest: z.number().int().positive(),
});

// GET /api/bookings
const getAllBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.findAll();

    res.json(bookings);
  } catch (err) {
    next(err);
  }
};

// POST /api/bookings
const createBooking = async (req, res, next) => {
  try {
    const parsedBody = bookingBodySchema.parse(req.body);
    const booking = await Booking.create(parsedBody);
    res.status(201).json(booking);
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ message: 'Validation error', errors: err.errors });
    }
    next(err);
  }
};

module.exports = {
  getAllBookings,
  createBooking
};
