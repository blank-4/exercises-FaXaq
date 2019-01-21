/* # Le traitement des requetes AJAX

## Construisons d'abord notre mini serveur

Pour effectuer une requete AJAX, on a besoin d'un serveur. En effet, les navigateurs nous interdisent de faire des requetes entre fichiers statiques et serveurs.

* Placez vous dans le dossier de votre exercice à l'aide du terminal. Rappel : Pour se déplacer dans un dossier, utilisez la commande `cd`
* Vérifiez que vous etes dans le bon dossier avec la commande `pwd`
* Créez un fichier `index.html`
* Démarrez votre serveur avec la commande : `python -m SimpleHTTPServer`
* Vérifiez que votre serveur est accessible à l'adresse suivante : `http://localhost:8000`

## Téléchargeons les données

Pour effectuer une requete AJAX, on a besoin de données !
* Créez un fichier `data.json` dans le dossier de votre projet
* Mettez y le texte que vous trouverez ici : [http://blank.bellevillecitoyenne.fr/courses/javascript/lesson6/sample-data.json](http://blank.bellevillecitoyenne.fr/courses/javascript/lesson6/sample-data.json)
* Arretez votre serveur avec `CTRL + C`
* Relancez votre serveur
* Vérifiez que vos données sont accessibles à [http://localhost:8000/data.json](http://localhost:8000/data.json)


## Passons à l'exercice

* Créez un fichier `script.js` et incluez le dans votre page HTML
* Effectuez une requete AJAX sur l'addresse suivante : [http://localhost:8000/data.json](http://localhost:8000/data.json)
* Récupérez la réponse de votre requete avec `this.responseText`. Pour le "parser" et le transformer en objet JavaScript vous pouvez utiliser la méthode `parse` de l'objet `JSON` : `JSON.parse(this.responseText)`. Voir la doc ici : [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
* Interprétez les données en javascript pour générer un HTML cohérant (sous forme de carte ?)
*/

// Création d'une requête AJAX
var request = new XMLHttpRequest();
// spécifier la fonction qui va être exécutée à chaque changement d'état de la requête
request.onreadystatechange = function() {
    // Vérification que la requête est terminée (request.readyState == 4)
    // Vérification que la requête s'est bien déroulée (request.status == 200)
    if (request.readyState == 4 && request.status == 200) {
        var data = JSON.parse(this.responseText).records;
        console.log(JSON.parse(this.responseText));
        for (var i = 0; i < data.length; i++) {
            if (data[i].fields.ap_cp == "75020") {
                var p = document.createElement("p");
                p.innerText = data[i].fields.designation_longue + ", " + data[i].fields.ap_cp;
                document.body.appendChild(p);
            }
        }

        /* 
        for (var i in data) {}
        */
    }
};
// Ouverture de la requête
request.open("GET", "https://opendata.paris.fr/api/records/1.0/search/?dataset=equipements_de_proximite&rows=20&facet=mairie_gestionnaire&facet=type_d_equipement&facet=ap_cp&refine.type_d_equipement=Piscine", true);
// Envoi de la requête
request.send();