var UserController = require("../controllers/UserController.js");

var express = require('express');
var router = express.Router();

var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', UserController.create);

router.post('/login', 
  passport.authenticate('local', { 
    successRedirect: '/',
    failureRedirect: '/login'
  })
);

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Express' });
});



module.exports = router;
