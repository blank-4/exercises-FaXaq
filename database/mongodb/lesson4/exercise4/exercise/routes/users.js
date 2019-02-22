var express = require('express');
var router = express.Router();

var isLoggedIn = function(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.redirect('/login');
  }
};

/* GET users listing. */
router.get('/me', isLoggedIn, function(req, res, next) {
  res.render('profile');
});

module.exports = router;
