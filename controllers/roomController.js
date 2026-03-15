const { z } = require('zod');
const Room = require('../models/Room');

const roomBodySchema = z.object({
  room_no: z.string(),
  room_type: z.string().optional(),
  room_size: z.string().optional(),
  price: z.number(),
  is_available_from: z.string().optional(), // ISO date string
  is_available_to: z.string().optional(),   // ISO date string
  hotel_id: z.number(),
});

// GET /api/rooms
const getAllRooms = async (req, res, next) => {
  try {
    const rooms = await Room.findAll();
    res.json(rooms);
  } catch (err) {
    next(err);
  }
};

// POST /api/rooms
const createRoom = async (req, res, next) => {
  try {
    const parsedBody = roomBodySchema.parse(req.body);
    const room = await Room.create(parsedBody);
    res.status(201).json(room);
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ message: 'Validation error', errors: err.errors });
    }
    next(err);
  }
};

module.exports = {
  getAllRooms,
  createRoom
};
