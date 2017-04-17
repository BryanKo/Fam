const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const users = require('./routes/users');
const port = 3000;

const app = express();

// Connect to database
mongoose.Promise = require('bluebird');
mongoose.connect(config.database);

// On connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database ' + config.database);
});

// On error
mongoose.connection.on('error', (err) => {
  console.log('Database error: ' + err);
});

// Cors middleware
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body-parser middleware
app.use(bodyParser.json());

// Passport middleware
// app.use(passport.initialize());
// app.use(passport.session());

// require('./config/passport')(passport);

// app.use('/users', users);

app.get('/', (req, res) => {
  res.send('Index Page');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.listen(port, () => {
  console.log('Server running on port ' + port);
});
