const mongoose = require("mongoose");

const therapySchema = new mongoose.Schema({
	type_therapy: String,
	start_date: Date,
	end_date: Date,
	duration_in_hours: float,
	doctor: { type: Schema.Types.Doctor, ref: 'Doctor' },
	meetings: [{ type: Schema.Types.Meeting, ref: 'Meeting'}],
	referrals: [{ type: Schema.Types.Referral, ref: 'Referral'}]
});

const Therapy = mongoose.model('Therapy', therapySchema);

module.exports = Therapy;