const mongoose = require("mongoose");

const bedroomSchema = new mongoose.Schema({
  bedNumber: String,
});

const Bed = mongoose.model('Bed', bedroomSchema);

module.exports = Bed;
