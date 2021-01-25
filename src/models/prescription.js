const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    issue_date: Date,
    realisation_date: Date,
    expiration_date: Date,
    patient: {type: Schema.Types.ObjectId, ref: 'Patient'},
    doctor: {type: Schema.Types.ObjectId, ref: 'Doctor'},
    dosages: [{type: Schema.Types.ObjectId, ref: 'Dosage'}]
});

const Prescription = mongoose.model('Prescription', schema);

module.exports = Prescription;
