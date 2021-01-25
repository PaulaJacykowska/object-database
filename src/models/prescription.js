const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    issue_date: Date,
    realisation_date: Date,
    expiration_date: Date,
    patient: {type: Schema.Types.ObjectId, ref: 'Patient'},
    doctor: {type: Schema.Types.ObjectId, ref: 'Doctor'},
    dosages: [{type: Schema.Types.ObjectId, ref: 'Dosage'}]
});

schema.statics.prolongate = function(newDate) {
    if (newDate > this.expiration_date)
        this.expiration_date = newDate
  };

const Prescription = mongoose.model('Prescription', schema);

module.exports = Prescription;
