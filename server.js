var express = require("express");
var mongoose = require("mongoose");

var PORT = process.env.PORT || 8080;

var db = require("./models");
var app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Connect to Mongo
mongoose.connect(
  process.env.ATLAS_URI,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
  },
  () => {
    console.log("Connected to Mongo");
  }
);
// Use/require routes files
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
