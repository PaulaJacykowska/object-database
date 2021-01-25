const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({
  name: String,
  surname: String,
  pesel: Number,
  birthdate: Date,
  telephone: String,
  address: { type: mongoose.Schema.Types.ObjectId, ref: 'Address' },
  specialization: String,
})

const Doctor = mongoose.model('Doctor', doctorSchema)

module.exports = Doctor
