const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

/*
Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
*/
const UserSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  loggedin: {
    type: Boolean,
    required: false
  }
});

/*
To use our schema definition, we need to convert our blogSchema into a Model we can work with. To do so, we pass it into mongoose.model(modelName, schema)
*/
const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback) {
  User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback) {
  const query = {username: username}
  User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
  // bcrypt.genSalt(10, (err, salt) => {
  //   bcrypt.hash(newUser.password, salt, (err, hash) => {
  //     if(err) throw err;
  //     newUser.password = hash;
  //     newUser.save(callback);
  //   })
  // });
  newUser.save(callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw error;
    callback(null, isMatch);
  });
}
