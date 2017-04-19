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

  User.addUser(newUser, (err, user) => {
    if(err) {
      res.json({success: false, msg: 'Failed to register user'});
    } else {
      res.json({success: true, msg: 'User registered'});
    }
  });
});

// Profile
router.get('/profile', (req, res) => {
  User.findOne({loggedin: true}, (err, user) => {
    if(err) {
      console.log(err);
    } else {
      console.log(user);
      res.json(user);
    }
  });
});

module.exports = router;
