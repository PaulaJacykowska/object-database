const mongoose = require("mongoose");

const bedroomSchema = new mongoose.Schema({
  bed_number: String,
});

const Bed = mongoose.model('Bed', bedroomSchema);

module.exports = Bed;
