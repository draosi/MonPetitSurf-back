const authRouter = require("express").Router();
const { register, login } = require("../controllers/authController");

authRouter.route("/register").post(register);
authRouter.route("/login").post(login);

module.exports = authRouter;
