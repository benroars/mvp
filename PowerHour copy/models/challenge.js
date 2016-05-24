var mongoose = require('mongoose');

var challengeSchema = new mongoose.Schema({
  challengeId: { type: String, unique: true, index: true },
  name: String,
  description: String,
  image: String
//  usersAccepted: { type : Array , "default" : [] }

});

module.exports = mongoose.model('Challenge', challengeSchema);