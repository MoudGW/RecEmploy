var Jobs = require("../models/Jobs.js");
var user =require("../models/user.js");
var Apli =require("../models/Applications.js");
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
  },
  findbyid: function(req, res) {
  console.log("Gathering saved articles from the db");
    Jobs.find({_id:req.params.id}).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  findApli: function(req, res) {
    Apli.find({jobsid:req.params.jobid}).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  insertApli:function(req, res) {
    Apli.create(req.body).then(function(data) {
      console.log("data:", data);
    }).catch(function(err) {
      res.json(err);
    });
  },
  findbyrecruiter: function(req, res) {
    Jobs.find({Recruiter:req.params.recruiter}).then(function(doc) {
      console.log(req.params.recruiter)
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  findbyApplibyApplicant: function(req, res) {
  console.log("Gathering saved articles from the db");
    Apli.find({Applicant_id:req.params.applicant}).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  } 


};