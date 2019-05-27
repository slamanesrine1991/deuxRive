const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const CollaboraterSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  photo: {
    type: String
  },
  chief: {
    type: String,
    default: "false"
  },
  bio: {
    type: String,
    required: true
  },
  date: {
    type: String,
    default: Date.now
  }
});

module.exports = admin = mongoose.model("collaborater", CollaboraterSchema);
