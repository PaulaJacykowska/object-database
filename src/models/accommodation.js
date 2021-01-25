const mongoose = require("mongoose");

const accommodationSchema = new mongoose.Schema({
  startDate: Date,
  endDate: Date,
  bed: { type: mongoose.Schema.Types.ObjectId, ref: 'Bed' }
});

const Accommodation = mongoose.model('Accommodation', accommodationSchema);

module.exports = Accommodation;
