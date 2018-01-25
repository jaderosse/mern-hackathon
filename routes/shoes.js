require('dotenv').config();
var express = require('express');
var mongoose = require('mongoose');
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var router = express.Router();

router.get('/', function (req, res) {

  res.send('we gotcha shoes here');
  console.log('shoeslist');
});

router.post('/', function (req, res, next) {
  console.log('user:', req.body.user.email);

  User.updateOne(
    { email: req.body.user.email },
    {
      $push: {
        shoes:
          {
            imgUrl: req.body.imgUrl,
          }
        
          
      }
    }
  ).then((result) => {
    console.log(result);
  }).catch(err => console.log(err));
});



module.exports = router;