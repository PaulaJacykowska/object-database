const mongoose = require("mongoose");

const diseaseCaseSchema = new mongoose.Schema({
  description: String,
  diagnosis_date: Date,
  disease: { type: mongoose.Schema.Types.ObjectId, ref: 'Disease' },
});

const DiseaseCase = mongoose.model('DiseaseCase', diseaseCaseSchema);

module.exports = DiseaseCase;
