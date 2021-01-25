const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    dose: String,
    frequency: String,
    treatment_time_in_days: Number,
    effective_date: Date,
    expiration_date: {
	  type: Date,
	  required: function(){
		return this.expiration_date >= this.effective_date;
	  },
    drug: {type: Schema.Types.ObjectId, ref: 'Drug'}
});

const Dosage = mongoose.model('Dosage', schema);

module.exports = Dosage;
