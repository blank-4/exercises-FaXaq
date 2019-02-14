var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(!req.session.visitNumber){
    req.session.visitNumber= 1;
    /* res.send(req.session.visitNumber) */
  } else {
    req.session.visitNumber++;
    /* res.send(req.session.visitNumber) */
  }
    res.render('index', { title: req.session.visitNumber });
});

module.exports = router;
