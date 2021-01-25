const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    creation_date: Date,
    content: String,
    title: String,
    doctor: {type: Schema.Types.ObjectId, ref: 'Doctor'},
    patient: {type: Schema.Types.ObjectId, ref: 'Patient'},
    meeting: {type: Schema.Types.ObjectId, ref: 'Meeting'}
});

const Note = mongoose.model('Note', schema);

module.exports = Note;
