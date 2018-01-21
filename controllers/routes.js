var Jobs = require("../models/Jobs.js");
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
  init: function(req, res) {
  	console.log('initiat data');
  for (var i = 0; i < data.length; i++) {
    Jobs.create(data[i]).then(function(doc) {
      res.json(doc);
      console.log("doc: ", doc);
    }).catch(function(err) {
      res.json(err);
    });
  }
  }

};
var data=[
{
"title":"Full stack sevelloper",
"description": "Thank you for your interest in working with U.S. Security Associates, Inc. (USA). Before taking the time to complete the application and interview process, we request that you read the following information so you will have a clear understanding of what USA requires of all security officers, as well as what your duties would include if you were hired.",
"type": "Full time",
"locations": "Washington DC",
"classification": "IT"
},
{
"title":"Full stack sevelloper",
"description": "Thank you for your interest in working with U.S. Security Associates, Inc. (USA). Before taking the time to complete the application and interview process, we request that you read the following information so you will have a clear understanding of what USA requires of all security officers, as well as what your duties would include if you were hired.",
"type": "Full time",
"locations": "Washington DC",
"classification": "IT"
},
{
"title":"Full stack sevelloper",
"description": "Thank you for your interest in working with U.S. Security Associates, Inc. (USA). Before taking the time to complete the application and interview process, we request that you read the following information so you will have a clear understanding of what USA requires of all security officers, as well as what your duties would include if you were hired.",
"type": "Full time",
"locations": "Washington DC",
"classification": "IT"
},
{
"title":"Full ",
"description": "Thank you for your interest in working with U.S. Security Associates, Inc. (USA). Before taking the time to complete the application and interview process, we request that you read the following information so you will have a clear understanding of what USA requires of all security officers, as well as what your duties would include if you were hired.",
"type": "Full time",
"locations": "Washington DC",
"classification": "IT"
},
{
"title":"Full stack ",
"description": "Thank you for your interest in working with U.S. Security Associates, Inc. (USA). Before taking the time to complete the application and interview process, we request that you read the following information so you will have a clear understanding of what USA requires of all security officers, as well as what your duties would include if you were hired.",
"type": "Full time",
"locations": "Washington DC",
"classification": "IT"
},
{
"title":"developer web",
"description": "Thank you for your interest in working with U.S. Security Associates, Inc. (USA). Before taking the time to complete the application and interview process, we request that you read the following information so you will have a clear understanding of what USA requires of all security officers, as well as what your duties would include if you were hired.",
"type": "Full time",
"locations": "Washington DC",
"classification": "IT"
}
]