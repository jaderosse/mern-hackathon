var express = require('express');
var mongoose = require('mongoose');
var User = require('../models/user');
var router = express.Router();

router.get('/', function(req, res){

	res.send('we gotcha shoes here');
	console.log('shoeslist');
});

router.post('/', function(req, res){
	// 	User.update({email: req.user.email},
	// 	{shoes: {
	// 		id: 
 //  		comfort: 
 //  		waterproof: true,
 //  		type: 'boots',
 //  		imgUrl: 'imgURL'
	// 		}
	// 	}
	// })
	res.send('post route shoes');
	console.log('put some shoes in');
	console.log(res.locals.currentUser);
});	

module.exports = router;