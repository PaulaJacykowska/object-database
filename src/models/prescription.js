const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    issue_date: Date,
    realisation_date: {
	  type: Date,
	  required: function(){
		return this.realisation_date >= this.issue_date;
	  },
    expiration_date: {
	  type: Date,
	  required: function(){
		return this.expiration_date > this.issue_date && this.expiration_date > this.realisation_date;
	  },
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
