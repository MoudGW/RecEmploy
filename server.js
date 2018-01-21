const express = require("express");
const mongoose = require("mongoose");
const bluebird = require("bluebird");
const bodyParser = require("body-parser");
const path=require('path');
const app = express();

//const port = 9000;
// Set up a default port, configure mongoose, configure our middleware
const PORT = process.env.PORT || 3001;
mongoose.Promise = bluebird;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/client/build"));
} else {
  app.use(express.static(__dirname + "/client/public"));
}
// Serve up static assets if in production (running on Heroku)
// enable CORS, use:
// https://enable-cors.org/server_expressjs.html
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next();
});
var jobsController = require("./controllers/routes.js");
var router = new express.Router();
router.get("/data/:search", jobsController.findjob);
router.get("/data/", jobsController.findall);
router.get("/init", jobsController.init);
const db = process.env.MONGODB_URI || "mongodb://localhost/rec";
mongoose.connect(db, function(error) {
  // Log any errors connecting with mongoose
  if (error) {
    console.error(error);
  }
  // Or log a success message
  else {
    console.log("mongoose connection is successful");
  }
});


app.use(router);

app.listen(PORT);
