const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  movieName: String,
  theaterName: String,
  time: String,
  selectedSeats: [String],
  totalAmount: Number
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
