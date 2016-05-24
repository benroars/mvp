var mongoose = require('mongoose');

var characterSchema = new mongoose.Schema({
  characterId: { type: String, unique: true, index: true },
  name: String,
  gender: String,
  drink: String

});

module.exports = mongoose.model('Character', characterSchema);