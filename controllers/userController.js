const User = require('../models/User');

// GET /api/users
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

// POST /api/users
const createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

const updateUserByPhone = async (req, res, next) => {
    try {
      const updatedUser = await User.findOneAndUpdate(
        { ph_no: req.params.ph_no }, 
        req.body,                 
        { new: true, runValidators: true } 
      );
  
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found with that phone number' });
      }
  
      res.json(updatedUser);
    } catch (err) {
      next(err);
    }
  };

module.exports = {
  getAllUsers,
  createUser,
  updateUserByPhone
};
