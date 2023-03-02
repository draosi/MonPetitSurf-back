const jwt = require("jsonwebtoken");

// Protecttion of the authentification route - Verify if the user is registered
const verify = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(400).send("Accessed denied");

  try {
    const verified = jwt.verify(token, process.env.SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.json(err);
  }
};

module.exports = { verify };
