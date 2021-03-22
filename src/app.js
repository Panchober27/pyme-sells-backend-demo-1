const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

// S
const port = process.env.PORT || 3000;
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middlewares
app.use(morgan("dev"));


// Routes
app.use(require('./routes/index'))

// Static files.
app.use(express.static(path.join(__dirname, "public")));

// LS
app.listen(port, () => {
  console.log(`Started on port ${port}`);
});
