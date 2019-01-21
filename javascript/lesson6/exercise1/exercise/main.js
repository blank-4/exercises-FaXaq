/*
* Créez une page html contenant une balise "p" avec comme id "horloge".

* Créez une fonction "temps" qui affichera la date dans la balise "p"
et faites en sorte qu'elle se mette à jour à chaque seconde.
*/

function temps() {
    // Création d'une nouvelle date
    var date = new Date();
    // récupération du paragraphe dans lequel on insèrera l'horloge
    var p = document.getElementById("horloge");
    // insertion de l'horloge dans le paragraphe
    p.innerText = date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds();
}
// demande de l'exécution de la fonction toutes les 1000ms
setInterval(temps, 1000);