/*
This module lets you authenticate endpoints using a JSON web token. It is intended to be used to secure RESTful endpoints. We’re going to send the jwt with every request, meaning that we don’t rely on sessions, but simply put the token on every request we make to the API. This way you don’t have to worry about cookies, but you can save it in localStorage or other places on the frontend.
*/

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const config = require('../config/database');

/*
passport.js works with the concept of strategies. They basically are a middleware function that a requests runs through before getting to the actual route.
*/

module.exports = function(passport){
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
  opts.secretOrKey = config.secret;
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    User.getUserById(jwt_payload._doc._id, (err, user) => {
      if(err) {
        return done(err, false);
      }
      if(user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  }));
}
