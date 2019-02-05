/* Créer un formulaire d'inscription contenant les champs suivants :

Nom
Prénom
Age
Email
Créer une application Web permettant de traiter ce formulaire en appliquant les validations suivantes :

Nom : Obligatoire, taille <= 30 caractères
Prénom : Obligatoire, taille <= 30 caractères
Age : Obligatoire, > 0, < 100
Email : Obligatoire, doit respecter le format e-mail.
Si tout est valide, afficher le message "Inscription réussie". Sinon, afficher les erreurs. */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Formulaire" });
});

router.post('/form', function(req, res, next) {
  var nom = req.body.nom;
  var prenom = req.body.prenom;
  var age = req.body.age;
  var email = req.body.email;

  if(nom.length <= 0 || nom.length >= 30) {
    var message = "Le nom n'est pas valide.";
  } else if (prenom.length <= 0 || prenom.length >= 30) {
    var message = "Le prénom n'est pas valide.";
  } else if (age <= 0 || age > 100) {
    var message = "L'âge n'est pas valide.";
  } else if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
    var message = "L'adresse mail n'est pas valide.";
  } else {
    var message = "Inscription réussi."
  }

  res.render('form', { 'message': message });
});

module.exports = router;
