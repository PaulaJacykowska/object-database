const mongoose = require("mongoose");

const hospitalizationSchema = new mongoose.Schema({
  start_date: Date,
  end_date: {
	  type: Date,
	  required: function(){
		return this.end_date > this.start_date;
	  },
  bed: { type: mongoose.Schema.Types.ObjectId, ref: 'Bed' },
  is_voluntary: Boolean,
  accommodations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Accommodation' }]
});

const Hospitalization = mongoose.model('Hospitalization', hospitalizationSchema);

module.exports = Hospitalization;
