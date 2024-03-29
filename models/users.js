const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default: "user" },
  level: { type: Number, default: 1 },
});

module.exports = mongoose.model("Users", usersSchema);