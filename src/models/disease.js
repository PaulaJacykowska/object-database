const mongoose = require("mongoose");

const diseaseSchema = new mongoose.Schema({
	name_disease: String
});

const Disease = mongoose.model('Disease', diseaseSchema);

module.exports = Disease;
