var Jobs = require("../models/Jobs.js");
var user =require("../models/user.js");
module.exports = {
  findjob: function(req, res) {
  console.log("Gathering saved articles from the db");
    Jobs.find({$text:{$search:req.params.search}}).limit(10).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  findall: function(req, res) {
  console.log("Gathering saved articles from the db");
    Jobs.find().then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  insertjob: function(req, res) {
    console.log(req.body);
    Jobs.create(req.body).then(function(data) {
      console.log("data:", data);
    }).catch(function(err) {
      res.json(err);
    });
  }

};