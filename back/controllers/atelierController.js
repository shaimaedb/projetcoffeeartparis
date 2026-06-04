const Atelier = require('../models/Atelier');

exports.getAllAteliers = async (req, res) => {
  try {
    const ateliers = await Atelier.find();
    res.status(200).json(ateliers);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.createAtelier = async (req, res) => {
  const newAtelier = new Atelier(req.body);
  await newAtelier.save();
  res.status(201).json(newAtelier);
};