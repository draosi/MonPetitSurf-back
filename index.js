const express = require("express");
const app = express();
app.use(express.json());
require("./db/client");

// Parse the incoming request data
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to MonPetitSurf API");
});

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
