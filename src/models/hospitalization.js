const mongoose = require("mongoose");

const hospitalizationSchema = new mongoose.Schema({
  startDate: Date,
  endDate: Date,
  bed: { type: mongoose.Schema.Types.ObjectId, ref: 'Bed' },
  isVoluntary: Boolean,
  accommodations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Accommodation' }]
});

const Hospitalization = mongoose.model('Hospitalization', hospitalizationSchema);

module.exports = Hospitalization;
