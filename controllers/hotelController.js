const Hotel = require('../models/Hotel');

// GET /api/hotels
const getAllHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (err) {
    next(err);
  }
};

// POST /api/hotels
const createHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.create(req.body);
    res.status(201).json(hotel);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllHotels,
  createHotel
};
