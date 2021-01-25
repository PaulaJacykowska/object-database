const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
  name: String,
  surname: String,
  pesel: Number,
  birthdate: Date,
  telephone: String,
  address: { type: mongoose.Schema.Types.ObjectId, ref: 'Address' },
  insurance_number: String,
  contact_person_number: String,
  disease_cases: [{ type: mongoose.Schema.Types.ObjectId, ref: 'DiseaseCase'}],
  hospitalizations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Hospitalization'}],
})

const Patient = mongoose.model('Patient', patientSchema)

module.exports = Patient
