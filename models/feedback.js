const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  course: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  rating: {
    type: String, 
    required: true
 },
content: {
    type: String, 
    required: true
},

comments: {
    type: String, 
    required: true},
    

});

module.exports = mongoose.model("feedback", feedbackSchema);