// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan"); // logs all request to the console

// Sets up Express App
const PORT = process.env.PORT || 4000;
const app = express();

app.use(morgan("dev"));

// Sets up the Express app 
app.use(express.static("public")); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// db Mongo
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout"

mongoose.connect(MONGODB_URI,{
  useNewUrlParser: true,
  useFindAndModify: false
});

// Routes
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

// Server starts listening 
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});