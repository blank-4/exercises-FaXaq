var express = require('express');
var router = express.Router();

function mymiddle(req, res) {
  res.render('index', {
    myip: req.ip,
    domain: req.hostname,
    path: req.path,
    host: req.get("Host"),
    contentt: req.get("Content-Type"),
    usera: req.get("User-Agent"),
    referer: req.get("Referer"),
    date: req.get("Date")
  });
}

/* GET home page. */
router.get('/', mymiddle)

module.exports = router;
