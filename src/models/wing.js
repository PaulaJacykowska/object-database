const mongoose = require("mongoose");

const wingSchema = new mongoose.Schema({
  name: String,
  type: String,
  rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Wing' }]
});

const Wing = mongoose.model('Wing', wingSchema);

module.exports = Wing;
