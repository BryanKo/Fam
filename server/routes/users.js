/*
Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

Each route can have one or more handler functions, which are executed when the route is matched.

Route definition takes the following structure: router.METHOD(PATH, HANDLER)

router is an instance of express.
METHOD is an HTTP request method, in lowercase.
PATH is a path on the server.
HANDLER is the function executed when the route is matched.

(req, res) => {
  ...
}

is the ES6 way of writing,

function(req, res) {
  ...
}
*/

const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

const router = express.Router();

// Register
router.post('/register', (req, res) => {

  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    loggedin: req.body.loggedin
  });

  // The callback is called in user.js after save() is called
  User.addUser(newUser, (err, user) => {
    if(err) {
      res.json({success: false, msg: 'Failed to register user'});
    } else {
      res.json({success: true, msg: 'User registered'});
    }
  });
});

// Authenticate
router.post('/authenticate', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if(err) {
      throw err;
    }
    if(!user) {
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) {
        throw err;
      }
      if(isMatch) {
        const token = jwt.sign(user, config.secret, {
          expiresIn: 604800
        });
        res.json({
          success: true,
          msg: 'Logged in!',
          token: 'JWT ' + token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      } else {
        return res.json({success: false, msg: 'Invalid password'});
      }
    });
  });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res) => {
  // User.findOne({loggedin: true}, (err, user) => {
  //   if(err) {
  //     console.log(err);
  //   } else {
  //     console.log(user);
  //     res.json(user);
  //   }
  // });
  console.log("Success");
  res.json({user: req.user});
});

module.exports = router;
