var User = require("../models/User.js");

var emailValidator = require("email-validator");
var bcrypt = require('bcrypt');
const saltRounds = 10;

class UserController {

    create(req, res, next) {
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
              return;
            }
            var user = new User({    
              username: req.body.username, 
              firstname: req.body.firstname,
              lastname: req.body.lastname,
              email: req.body.email, 
              password: hash
            });
            user.save()
                .then(function(newUser) {
                    res.json(newUser);
                })
                .catch(function(err) {
                    res.send(err);
                });
          });
        } else {
          res.send(errors);
        }
    }

    /**
     * Checks a passowrd, passport style
     * @param {*} user the user
     * @param {*} password the password
     * @param {*} done passport-style done
     */
    verify(user, password, done) {
      bcrypt.compare(password, user.password, function(err, res) {
        if (res) {
          done(null, user);
        } else {
          done(null, false, { message: 'Incorrect password.' });
        }
      });
    }

}

module.exports = new UserController();