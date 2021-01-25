const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  roomNumber: String,
  maxBedsCount: Number,
  rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bed' }]
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
