var express = require('express');
var router = express.Router();
const testFolder = './public/images';
  const fs = require('fs');
  
/* GET home page. */
router.get('/', function(req, res, next) {
  var files = [];

  fs.readdirSync(testFolder).forEach(function(file) {
    files.push(req.get("Host") + "/images/" + file)
  });

  res.json({
    files: files
  })
});

module.exports = router;
