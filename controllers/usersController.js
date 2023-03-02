const Users = require("../models/users");

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await Users.find();
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const oneUser = await Users.findById(req.params.userId);
    res.status(200).json(oneUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const postUser = async (req, res) => {
  try {
    const newUser = await Users.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const putUser = async (req, res) => {
  try {
    const updateUser = await Users.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const deleteOneUser = await Users.deleteOne({ _id: req.params.userId });
    res.status(200).json(deleteOneUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAllUsers, getUserById, postUser, putUser, deleteUser };
