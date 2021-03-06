var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pinsSchema = new Schema({
  longitude:  Number,
  latitude:   Number,
  place:      String,
  memory:     String,
  activity:   String,
  rating:     Number,
  date:       { type: Date },
  imageurl:   String,
  userFbId:   Number
});

module.exports = mongoose.model('pins', pinsSchema)
