/*
* Créer une fonction qui porte le nom `exercice3`, elle contiendra le code pour les consignes suivantes :

* Déclarer une variable à laquelle vous donnerez le nom de votre choix, elle sera de type objet.

* Donner lui une propriété `date` qui sera une fonction permettant d'afficher la date dans ce format : "nous sommes le 02 01 2018" avec un console.log.

* Appeler la propriété (méthode) pour afficher la date dans la console.

*/

function exercice3() {
    var test = {
        date : function() {
            var now = new Date();
            var date = now.getDate();
            var month = now.getMonth() + 1;
            var year = now.getFullYear();
            console.log("Nous sommes le " + date + "/" + month + "/" + year);
        },
        // BONUS : pas dans l'exo
        hour : function(){
            var now = new Date();
            var hours = now.getHours();
            var minutes = now.getMinutes();
            var seconds = now.getSeconds();
            console.log("Il est " + hours + ":" + minutes + ":" + seconds);
        }
    };

    test.date();
    test.hour();
}

exercice3();
