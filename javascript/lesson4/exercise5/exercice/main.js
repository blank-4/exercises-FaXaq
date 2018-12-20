/*
* Créer une fonction qui porte le nom `exercice5`, elle contiendra le code pour les consignes suivantes :

* Créer une variable `maString` contenant une chaîne de caractères de votre choix.
* Utiliser une méthode permettant d'afficher uniquement la moitié de la chaîne de caractères dans la console.

* Utiliser une méthode permettant d'afficher cette moitié de string en inversant l'ordre des mots dans la console.
*/
function exercise5() {
    var maString = "coucou c'est moi";
    var maSubStr = maString.substr(0, maString.length / 2);
    console.log(maSubStr);
    console.log(maSubStr.split(" ").reverse().join(" "));
}