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
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
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

// Encapsulates mongoose's findById() method
module.exports.getUserById = function(id, callback) {
  User.findById(id, callback);
}

// Encapsulates mongoose's findOne() method
module.exports.getUserByUsername = function(username, callback) {
  const query = {username: username}
  User.findOne(query, callback);
}


// Encapsulates mongoose's save() method with callback to hash password
module.exports.addUser = function(newUser, callback){
  // bcrypt used for encryption of password
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) {
        throw err;
      } else {
        newUser.password = hash;
        // This calls mongoose method to save newUser to db
        newUser.save(callback);
      }
    });
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) {
      throw error;
    }
    callback(null, isMatch);
  });
}
