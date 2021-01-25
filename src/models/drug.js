const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name_drug: Number,
    active_substance: String,
    package_size: String
});

const Drug = mongoose.model('Drug', schema);

module.exports = Drug;
