// Require Mongoose
var mongoose = require('mongoose');

// Create a Schema Class
var Schema = mongoose.Schema;

var Recruiter = new Schema({

 
First: {
    type: String,
    required: true
  },

  Last: {
    type: String,
    required: true
  },
  
  Email: {
    type: String,
    required: true
  }

  Pwd: {
    type: String,
    required: true
  }

  Photo: {
    type: String,
    required: true
  }
   
  resume: {
    type: String,
    required: true
  }
  JobUsed:{
   type :job, 
   required: true

  } 
});


// Create the Recruiter  model with Mongoose
var Recruiter  = mongoose.model('Recruiter ', ArticleSchema);

// Export the Model
module.exports = Recruiter ;