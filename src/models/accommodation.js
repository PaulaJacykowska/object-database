const mongoose = require("mongoose");

const accommodationSchema = new mongoose.Schema({
  start_date: Date,
  end_date: Date,
  bed: { type: mongoose.Schema.Types.ObjectId, ref: 'Bed' }
});

const Accommodation = mongoose.model('Accommodation', accommodationSchema);

module.exports = Accommodation;
