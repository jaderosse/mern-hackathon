var express = require('express');
var mongoose = require('mongoose');
var User = require('../models/user');
var router = express.Router();

router.get('/', function(req, res){
	res.send('we gotcha shoes here');
	console.log('shoeslist');
});

router.post('/', function(req, res){
	console.log('put some shoes in');
});	

module.exports = router;