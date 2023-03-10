const express = require("express");
const app = express();
app.use(express.json());
require('dotenv').config()
require("./db/client");

// Parse the incoming request data
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Link the back-end and the front-end
const cors = require('cors')
app.use(cors())

// Import routers
const usersRouter = require('./routes/usersRouter')
const spotsRouter = require('./routes/spotsRouter')
const commentsRouter = require('./routes/commentsRouter')
const authRouter = require('./routes/authRouter')

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to MonPetitSurf API");
});

app.use('/api', usersRouter, spotsRouter, commentsRouter)
app.use('/auth', authRouter)

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
