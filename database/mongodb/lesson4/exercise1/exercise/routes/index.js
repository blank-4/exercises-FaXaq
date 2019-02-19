var express = require('express');
var emailValidator = require("email-validator");
var bcrypt = require('bcrypt');
const saltRounds = 10;
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  var errors = [];
  if (req.body.email == "" || emailValidator.validate(req.body.email) == false) {
    errors.push("Votre adresse email n'est pas valide !");
  }
  if (req.body.firstname.length > 0 && (req.body.firstname.length < 2 || req.body.firstname.length > 25)) {
    errors.push("Votre prénom doit être compris entre 2 et 25 caractères");
  }
  if (req.body.lastname.length > 0 && (req.body.lastname.length < 2 || req.body.lastname.length > 25)) {
    errors.push("Votre nom doit être compris entre 2 et 25 caractères");
  }
  if (req.body.password == "") {
    errors.push("Veuillez entrer un mot de passe.");
  }
  if (req.body.passwordConfirmation == "") {
    errors.push("Veuillez entrer un mot de passe.");
  }
  if (req.body.password != req.body.passwordConfirmation) {
    errors.push("Vos mots de passe ne correspondent pas !");
  }
  if (errors.length == 0) {
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
      if (err) {
        res.send(err);
      } else {
        res.send(hash);
      }
    });
  } else {
    res.send(errors);
  }
})

module.exports = router;
