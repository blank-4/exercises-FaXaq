var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', checkAuth, function(req, res) {
  res.render('index', { title: 'Success'})
})

function checkAuth(req, res, next) {
  if(req.body.firstname == "") {
    res.render('index', { errormsg: "Entrez votre prénom" });
  } else if(req.body.lastname == "") {
    res.render('index', { errormsg: "Entrez votre nom" });
  } else if(req.body.age == "") {
    res.render('index', { errormsg: "Entrez votre âge" });
  } else if(req.body.email == "") {
    res.render('index', { errormsg: "Entrez votre adresse mail" });
  } else {
    req.session.user = {
      u_firstname: req.body.firstname,
      u_lastname: req.body.lastname,
      u_age: req.body.age,
      u_email: req.body.email
    }
    var name = 'userMail';
    var value = req.body.email;
    var options = {
      expires: new Date(Date.now() + 900000),
      httpOnly: true
    }
    res.cookie(name, value, options);
    res.render('index', { user: JSON.stringify(req.session.user) })
  }
}

module.exports = router;
