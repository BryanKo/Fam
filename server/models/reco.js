const mongoose = require('mongoose');
const config = require('../config/database');

const RecoSchema = mongoose.Schema({
  username:{
    type: String,
    required: true
  },
  name:{
    type: String,
    required: true
  },
  title:{
    type: String,
    required: true
  },
  lat:{
    type: Number,
    // required: true
  },
  lng:{
    type: Number,
    // required: true
  },
  stars:{
    type: Number,
  },
  categ:{
    type: String,
    required: true
  },
  desc:{
    type: String,
    required: true
  },
  direct:{
    type:String,
  },
  review:{
    type: String,
  },
});

const Reco = module.exports = mongoose.model('Reco', RecoSchema);

module.exports.addReco = function(newReco, callback) {
  newReco.save(callback);
}

module.exports.getReco = function(callback) {
  Reco.find({}, callback);
}
