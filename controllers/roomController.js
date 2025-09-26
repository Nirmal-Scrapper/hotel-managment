const Room = require('../models/Room');

// GET /api/rooms
const getAllRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find().populate('hotel_id', 'hotel_name');
    res.json(rooms);
  } catch (err) {
    next(err);
  }
};

// POST /api/rooms
const createRoom = async (req, res, next) => {
  try {
    const room = await Room.create(req.body);
    res.status(201).json(room);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllRooms,
  createRoom
};
