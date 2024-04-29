const express = require('express');
const Booking = require('../Models/booking');

const router = express.Router();

// Route to save booking details
router.post('/bookings', async (req, res) => {
  try {
    const { movieName, theaterName, time, selectedSeats, totalAmount } = req.body;
    
    // Create a new booking document
    const booking = new Booking({
      movieName,
      theaterName,
      time,
      selectedSeats,
      totalAmount
    });
    
    // Save the booking to the database
    await booking.save();
    
    res.status(200).json({ message: 'Booking saved successfully' });
  } catch (error) {
    console.error('Error saving booking:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Route to fetch booking details
router.get('/bookings', async (req, res) => {
  try {
    // Fetch all booking details from the database
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;
