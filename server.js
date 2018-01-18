const express = require("express");
const bodyParser = require("body-parser");
const path=require('path');
const app = express();

//const port = 9000;
// Set up a default port, configure mongoose, configure our middleware
const PORT = process.env.PORT || 3001;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets if in production (running on Heroku)
// enable CORS, use:
// https://enable-cors.org/server_expressjs.html
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next();
});
var router = new express.Router();
router.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.use(router);

app.listen(PORT);
