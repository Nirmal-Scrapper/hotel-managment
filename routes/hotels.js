const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotelController');

// Route → Controller
router.get('/', hotelController.getAllHotels);
router.post('/', hotelController.createHotel);

module.exports = router;
