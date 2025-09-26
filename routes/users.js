const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Routes
router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.put('/:ph_no', userController.updateUserByPhone);
module.exports = router;
