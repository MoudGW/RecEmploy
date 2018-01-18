// Require Mongoose
var mongoose = require('mongoose');

// Create a Schema Class
var Schema = mongoose.Schema;

// Create Article Schema
var JobSeeker = new Schema({


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
  
  JobsApplied:{
   type :job, 
   required: true
  } 
});

// Create the JobSeeker model with Mongoose
var JobSeeker = mongoose.model('JobSeeker', ArticleSchema);

// Export the Model
module.exports = JobSeeker;