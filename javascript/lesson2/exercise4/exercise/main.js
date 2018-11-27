/* * On va déclarer une une variable "position"
et lui donner comme valeur "Belleville".

* On va maintenant créer notre structure de contrôle "switch". on va lui donner en expression ( entre les parenthèses ) notre variable "position".


* Maintenant comme premier cas possible nous allons lui dire que si position vaut 'Belleville' elle doit afficher dans la console "  ".
( N'oubliez pas le "break" à la fin de chaque instruction. )

* En deuxième cas possible nous allons lui dire que si position vaut 'mairie des Lilas' elle doit afficher dans la console "  ".

* En troisième cas possible nous allons lui dire que position vaut 'père Lachaise' elle doit afficher dans la console "tu est sur la ligne 3 ou 2".

* Enfin si aucun de ces cas n'est rempli on veut lire "Je ne sais pas ou tu es.".

* Maintenant amusez vous a remplacer la valeur de la variable position par celles des différents cas pour voir si tout cela fonctionne bien.
 */

var position = "Belleville";

switch (position) {
    case "Belleville" : 
        console.log("tu est sur la ligne 11 ou la ligne 2");
        break;

    case "Mairie des Lilas" :
        console.log("tu est sur la ligne 11");
        break;

    case "Pere Lachaise" :
        console.log("tu est sur la ligne 3 ou 2");
        break;

    default :
        console.log("Je ne sais pas ou tu es.");
}
 
