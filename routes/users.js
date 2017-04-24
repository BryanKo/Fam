var express = require('express');
var router = express.Router();

// Register
router.get('/', function(req, res){
	res.render('register');;
});

// Login
router.get('/login', function(req, res){
	res.render('login');
});

module.exports = router;