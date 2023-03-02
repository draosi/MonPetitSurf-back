const Users = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    // Check if the email exist in the database
    const emailExist = await Users.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send("Email already taken");

    // Encrypt the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user with the info provided by the user during registration
    const user = new Users({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,
      role: req.body.role,
      level: req.body.level,
    });
    user.save();
    res.send(`Welcome ${user.username} to MonPetitSurf`);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const login = async (req, res) => {
  try {
    // Check if the email provided by the user matches an email in our database
    const user = await Users.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Email not found, please register");

    // Compare if the password provided by the user matches the one we have in our database - compare req.body.password & user.password
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass)
      return res.status(400).send("invalid password, please try again");

    const token = jwt.sign({ user }, process.env.SECRET);
    res.header("auth-token", token);
    res.json(token);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { register, login };
