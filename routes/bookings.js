const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Route → Controller
router.get('/', bookingController.getAllBookings);
router.post('/', bookingController.createBooking);

module.exports = router;
