var mongoose = require('mongoose');

var challengeSchema = new mongoose.Schema({
  challengeId: { type: String, unique: true, index: true },
  name: String,
  image: String,
  shots: String,
  time: String,
  typeAlcohol: String,
  description: {type: String, default: 'None'}
//  usersAccepted: { type : Array , "default" : [] }

});

module.exports = mongoose.model('Challenge', challengeSchema);