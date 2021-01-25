const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  room_number: String,
  max_beds_count: Number,
  rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bed' }]
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
