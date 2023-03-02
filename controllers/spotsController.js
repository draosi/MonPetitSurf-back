const Spots = require("../models/spots");

const getAllSpots = async (req, res) => {
  try {
    const allSpots = await Spots.find();
    res.status(200).json(allSpots);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getSpotById = async (req, res) => {
  try {
    const oneSpot = await Spots.findById(req.params.spotId);
    res.status(200).json(oneSpot);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const postSpot = async (req, res) => {
  try {
    const newSpot = await Spots.create(req.body);
    res.status(201).json(newSpot);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const putSpot = async (req, res) => {
  try {
    const updateSpot = await Spots.findOneAndUpdate(
      { _id: req.params.spotId },
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateSpot);
  } catch (err) {
    res.status(500).json({ erroe: err.message });
  }
};

const deleteSpot = async (req, res) => {
  try {
    const deleteOneSpot = await Spots.deleteOne({ _id: req.params.spotId });
    res.status(200).json(deleteOneSpot);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAllSpots, getSpotById, postSpot, putSpot, deleteSpot };
