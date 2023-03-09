const usersRouter = require("express").Router();
const {
  getAllUsers,
  getUserById,
  postUser,
  putUser,
  deleteUser,
} = require("../controllers/usersController");
const { verify } = require("../middlewares/verify");

usersRouter.route("/users", verify).get(getAllUsers).post(postUser);
usersRouter
  .route("/users/:userId")
  .get(getUserById)
  .put(putUser)
  .delete(deleteUser);

module.exports = usersRouter;
