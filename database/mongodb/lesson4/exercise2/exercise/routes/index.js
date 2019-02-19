var UserController = require("../controllers/UserController.js");

var express = require('express');
var emailValidator = require("email-validator");
var bcrypt = require('bcrypt');
const saltRounds = 10;
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', UserController.create);

module.exports = router;
