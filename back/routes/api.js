// routes/api.js
const express = require('express');
const router = express.Router();
const atelierCtrl = require('../controllers/atelierController');
const resCtrl = require('../controllers/reservationController');

// Routes Ateliers
router.get('/ateliers', atelierCtrl.getAllAteliers);
router.post('/ateliers', atelierCtrl.createAtelier);

// Routes Réservations
router.post('/reservations', resCtrl.createReservation);

module.exports = router;