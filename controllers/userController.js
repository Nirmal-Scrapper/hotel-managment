const { z } = require('zod');
const User = require('../models/User');

const userBodySchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  dob: z.string().optional(), // expect ISO date string
  ph_no: z.string().optional(),
  email: z.string().email(),
  aadhar_no: z.string().optional(),
  address: z.string().optional(),
});

// GET /api/users
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

// POST /api/users
const createUser = async (req, res, next) => {
  try {
    const parsedBody = userBodySchema.parse(req.body);
    const user = await User.create(parsedBody);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

const updateUserByPhone = async (req, res, next) => {
    try {
      const parsedBody = userBodySchema.partial().parse(req.body);
      const user = await User.findOne({ where: { ph_no: req.params.ph_no } });

      if (!user) {
        return res.status(404).json({ message: 'User not found with that phone number' });
      }

      await user.update(parsedBody);
      res.json(user);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ message: 'Validation error', errors: err.errors });
      }
      next(err);
    }
  };

module.exports = {
  getAllUsers,
  createUser,
  updateUserByPhone
};
