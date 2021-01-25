const mongoose = require("mongoose");

const meetingSchema = new mongoose.Schema({
	date: DATE,
	office: String
});

const Meeting = mongoose.model('Meeting', meetingSchema);

module.exports = Meeting;
