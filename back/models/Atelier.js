const mongoose = require('mongoose');

const atelierSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  description: String,
  date: { type: Date, required: true },
  prix: Number,
  placesDisponibles: Number
});

module.exports = mongoose.model('Atelier', atelierSchema);