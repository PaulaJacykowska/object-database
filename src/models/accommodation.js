const mongoose = require("mongoose");

const accommodationSchema = new mongoose.Schema({
  start_date: {
    type: Date,
    required: function() {
      return this.start_date < this.end_date;
    }
  },
  end_date: Date,
  bed: { type: mongoose.Schema.Types.ObjectId, ref: 'Bed' }
});

const Accommodation = mongoose.model('Accommodation', accommodationSchema);

module.exports = Accommodation;
