const commentsController = require("express").Router();
const {
  getAllComments,
  getCommentById,
  postComment,
  putComment,
  deleteComment,
} = require("../controllers/commentsController");

commentsController.route("/comments").get(getAllComments).post(postComment);
commentsController
  .route("/comments/:commentId")
  .get(getCommentById)
  .put(putComment)
  .delete(deleteComment);

module.exports = commentsController;
