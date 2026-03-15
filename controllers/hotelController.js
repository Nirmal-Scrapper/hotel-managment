const { z } = require('zod');
const Hotel = require('../models/Hotel');

const hotelBodySchema = z.object({
  hotel_name: z.string(),
  address: z.string().optional(),
  timezone: z.string().optional(),
});

// GET /api/hotels
const getAllHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.findAll();
    res.json(hotels);
  } catch (err) {
    next(err);
  }
};

// POST /api/hotels
const createHotel = async (req, res, next) => {
  try {
    const parsedBody = hotelBodySchema.parse(req.body);
    const hotel = await Hotel.create(parsedBody);
    res.status(201).json(hotel);
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ message: 'Validation error', errors: err.errors });
    }
    next(err);
  }
};

module.exports = {
  getAllHotels,
  createHotel
};
