const Comments = require("../models/comments");

const getAllComments = async (req, res) => {
  try {
    const allComments = await Comments.find();
    res.status(200).json(allComments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getCommentById = async (req, res) => {
  try {
    const oneComment = await Comments.findById(req.params.commentId);
    res.status(200).json(oneComment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const postComment = async (req, res) => {
  try {
    const newComment = Comments.create(req.body);
    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const putComment = async (req, res) => {
  try {
    const updateComment = Comments.findOneAndUpdate(
      { _id: req.params.commentId },
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateComment);
  } catch (err) {
    res.status(500).json({ erroe: err.message });
  }
};

const deleteComment = async (req, res) => {
  try {
    const deleteOneComment = Comments.deleteOne({ _id: req.params.commentId });
    res.status(200).json(deleteOneComment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllComments,
  getCommentById,
  postComment,
  putComment,
  deleteComment,
};
