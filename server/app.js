/*
Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

Middleware functions can perform the following tasks:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.
If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

An Express application can use the following types of middleware:

- Application-level middleware
- Router-level middleware
- Error-handling middleware
- Built-in middleware
- Third-party middleware
*/

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const users = require('./routes/users');
const port = 8080;

const app = express();

// Without this you get Mongoose: mPromise deprecation warning
mongoose.Promise = require('bluebird');

// Connect to database
mongoose.connect(config.database);

// On connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database ' + config.database);
});

// On error
mongoose.connection.on('error', (err) => {
  console.log('Database error: ' + err);
});

/*
express.static(root, [options])
This is the only built-in middleware function in Express. The root argument refers to the root directory from which the static assets are to be served. The file to serve will be determined by combining  req.url with the provided root directory. When a file is not found, instead of sending a 404 response, this module will instead call next() to move on to the next middleware, allowing for stacking and fall-backs.
*/
app.use(express.static(path.join(__dirname, 'public')));

// Cors: Third-party middleware
app.use(cors());

// Body-parser: Third-party middleware
// Parse requests of form application/json
app.use(bodyParser.json());

// Passport: Third-party middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// Built-in middleware
app.use('/users', users);

/*
'*' catches all routes and points to public/index.html which is going to be the html file that will be rendered after building our application using 'ng build'
*/
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.listen(port, () => {
  console.log('Server running on port ' + port);
});
