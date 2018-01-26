var mongoose = require('mongoose');
// Create a Schema Class
var Schema = mongoose.Schema;

var ApSchema = new Schema({

  jobsid:{
  type: Number,
  required: true
  },
  Applicant_id: {
  type: Number,
  required: true
  },
  URL_Video: {
  type: String
  }

});
// Create the Recruiter  model with Mongoose
var Aplication  = mongoose.model('ApSchem', ApSchema);

// Export the Model
module.exports = Aplication  ;