const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
  street: String,
  house_number: String,
  apartment_number: String,
  zip_code: String,
  city: String,
  country: String,
})

const Address = mongoose.model('Address', addressSchema)

module.exports = Address
