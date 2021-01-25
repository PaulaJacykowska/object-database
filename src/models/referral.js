const mongoose = require("mongoose");

const referralSchema = new mongoose.Schema({
	issue_date: Date,
	duration_in_hours: float,
	doctor: { type: Schema.Types.Doctor, ref: 'Doctor' },
	therapy: { type: Schema.Types.Therapy, ref: 'Therapy'},
	patient: { type: Schema.Types.Patient, ref: 'Patient'}
});

const Referral = mongoose.model('Referral', referralSchema);

module.exports = Referral;