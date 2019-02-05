/* 
Créer une application Web affichant les données reçues en GET et en POST, dans un tableau.

Pour les données reçues via POST, il faudra ajouter le middleware body-parser pour récupérer les données du formulaire (se reporter à la documentation).*/

var express = require('express');
var router = express.Router(); 

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/form', function(req, res, next) {
  var tableau = [];
  tableau.push(req.body.user, req.body.pass);
  console.log(tableau);
  res.json(tableau);
});

router.get('/form', function(req, res, next) {
  var tableau = [];
  tableau.push(req.query.user, req.query.pass);
  console.log(tableau);
  res.json(tableau);
});

module.exports = router;
