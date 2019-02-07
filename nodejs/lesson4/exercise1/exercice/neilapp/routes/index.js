var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var name = 'CookyDate';
  var value = returnDate();
  var options = {
    expires: new Date(Date.now() + 900000),
    httpOnly: true
  };

  res.cookie(name, value, options);
  var reCooky = req.cookies['CookyDate'];
  console.log(reCooky);
  if (reCooky){
    res.send(reCooky)
  } else {
    res.send("Never")
  }
  /* res.render('index', { title: reCooky }); */
});

function returnDate() {
  var d = new Date();
  return d.getDate() + "/" + d.getMonth()+1 + "/" + d.getFullYear()
}

module.exports = router;
