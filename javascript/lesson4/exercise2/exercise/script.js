/* * Créer une fonction qui porte le nom `exercice2`, elle contiendra le code pour les consignes suivantes :

* Créer une variable `exemple` de type objet.
* Lui définir une propriété `firstname` qui a pour valeur votre prénom.
* Afficher la valeur dela propriété dans la console.

* Changer la valeur de `firstname` par celui de votre voisin.
* Affichez la nouvelle valeur dans la console.

* Rajouter une propriété `lastname` avec comme valeur le nom de votre voisin.
* Afficher sa valeur dans la console.

* Afficher l'objet dans la console.

* Créer une autre fonction qui prendra en paramètre l'objet.
* Elle doit afficher de manière itérative le nom des propriétés et leur valeur.
 */

 function exercice2() {
     var exemple = {
         firstname : "rebecca"
     };
     console.log(exemple.firstname);
     exemple.firstname = "Erwan";
     console.log(exemple.firstname);
     exemple.lastname = "Osouf";
     console.log(exemple);
     deuxieme(exemple);
 }

 function deuxieme(obj) {
    for (var i in obj) {
        console.log(i + " -> " + obj[i]);
    }
 }
 exercice2();
