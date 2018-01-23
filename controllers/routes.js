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
    user.find().then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  insertjob: function(req, res) {
    Jobs.create(req.body).then(function(data) {
      console.log("data:", data);
    }).catch(function(err) {
      res.json(err);
    });
  },
  insertuser: function(req, res) {
    user.create(req.body).then(function(data) {
      console.log("data:", data);
    }).catch(function(err) {
      res.json(err);
    });
  },
  finduser: function(req,res){
    user.find({Email:req.params.email,Pwd:req.params.pwd}).then(function(user) {
        console.log(user);
      res.json(user);
    }).catch(function(err) {
      res.json(err);
    });
  }


};