const Reservation = require('../models/Reservation');

exports.createReservation = async (req, res) => {
  try {
    const newRes = new Reservation(req.body);
    await newRes.save();
    res.status(201).json(newRes);
  } catch (err) { res.status(400).json({ error: err.message }); }
};