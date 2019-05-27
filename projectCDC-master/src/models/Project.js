const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const ProjectSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  organizer: {
    type: String,
    required: true
  },
  thematic: {
    type: String,
    required: true
  },
  contact: {
    type: String
  },
  description: {
    type: String
  },
  document: {
    type: String
  },
  date: {
    type: String,
    default: Date.now
  }
});

module.exports = admin = mongoose.model("project", ProjectSchema);
