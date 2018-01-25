require('dotenv').config();
var express = require('express');
var mongoose = require('mongoose');
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var router = express.Router();

router.get('/', function(req, res){

	res.send('we gotcha shoes here');
	console.log('shoeslist');
});

// router.post('/', function(req, res){
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
	// res.send('post route shoes');
	// console.log('put some shoes in');
	// console.log(res.locals.currentUser);
// });	
	router.post('/', function(req, res, next) {
    console.log('user:', req.body.user);
    res.send('post');
  // check header or url parameters or post parameters for token
  // var token = req.body.token || req.query.token;
  // if (!token) {
  //   return res.status(401).send({error: true, message: 'You Must Pass a Token!'});
  // }

  // // get current user from token
  // jwt.verify(token, process.env.JWT_SECRET, function(err, user) {
  // 	console.log(user._id);
  //   if (err){
  //     return res.status(500).send({ error: true, message: 'JWT Verification Error - ' + err});
  //   }
  //   //return user using the id from w/in JWT
  //   User.findById({
  //     '_id': user._id
  //   }, function(err, user) {
  //     if (err){
  //       console.log('DB error', err);
  //       return res.status(500).send({error: true, message: 'Database Error - ' + err.message});
  //     }
  //     else if(!user){
  //       console.log('User not found error');
  //       return res.status(400).json({error: true, message: 'User Not Found!'});
  //     }
  //     //Note: you can renew token by creating new token(i.e.
  //     //refresh it) w/ new expiration time at this point, but I’m
  //     //passing the old token back.
  //     var token = jwt.sign(user.toObject(), process.env.JWT_SECRET, {
  //       expiresIn: 60 * 60 * 24 // expires in 24 hours
  //     });
  //     res.json({
  //       user: user,
  //       token: token
  //     });
  //   });
  // });
});

	

module.exports = router;