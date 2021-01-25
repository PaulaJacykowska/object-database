const mongoose = require("mongoose");

const therapySchema = new mongoose.Schema({
	type_therapy: String,
	start_date: Date,
	end_date: {
	  type: Date,
	  required: function(){
		return this.end_date > this.start_date;
	  },
	duration_in_hours: {
	  type: float,
	  required: function(){
		return this.duration_in_hours > 0;
	  },
	doctor: { type: Schema.Types.Doctor, ref: 'Doctor' },
	meetings: [{ type: Schema.Types.Meeting, ref: 'Meeting'}],
	referrals: [{ type: Schema.Types.Referral, ref: 'Referral'}]
});

const Therapy = mongoose.model('Therapy', therapySchema);

module.exports = Therapy;