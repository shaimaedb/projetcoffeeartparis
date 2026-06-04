const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  nomClient: String,
  email: String,
  atelierId: { type: mongoose.Schema.Types.ObjectId, ref: 'Atelier' },
  statut: { type: String, default: 'confirmée' }
});

module.exports = mongoose.model('Reservation', reservationSchema);