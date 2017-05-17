const mongoose = require('mongoose');
const config = require('../config/database');

const RecoSchema = mongoose.Schema({
  name:{
    type: String
  },
  lat:{
    type: Number,
    required: true
  },
  lng:{
    type: Number,
    required: true
  },
  reviews:{
    type: []
  }
});

const Reco = module.exports = mongoose.model('Reco', RecoSchema);

module.exports.addReco = function(newReco, callback) {
  newReco.save(callback);
}

module.exports.getReco = function(callback) {
  Reco.find({}, callback);
}
