// * Créer une variable globale `etage`
// * Créer une fonction `elevator` qui accepte 3 arguments : `etage1`, `etage2` et `goTo`.
// * Les deux premiers arguments sont des nombres (qui correspondent à des étages), le 3e est une fonction `goTo`.

// Voici les consignes :
// * L'ascenseur commence à l'étage 0
// * Il va d'abord à l'étage le plus proche du 0 à l'aide de la fonction `goTo`
// * Il va ensuite de l'étage le plus proche du 0 à l'étage suivant à l'aide de la fonction `goTo`
// * À chaque étage parcouru la fonction `goTo` l'affiche
// * Une fois terminé, l'ascenseur retourne à l'étage 0 et affiche le nombre d'étages parcouru

// BONUS :
// * Laissez les mêmes nombres mais modifiez la fonction `goTo`

var etage = 0;
var parcour = 0;

function elevator(etage1, etage2, goTo) {
    if (etage1 < etage2) {
        goTo(etage1);
        goTo(etage2);
    } else {
        goTo(etage2);
        goTo(etage1);
    }
    goTo(0);
    console.log(parcour);
}

function goToCB(etage1) {
    if (etage1 > etage) {
        for (var i = etage; i < etage1; i++) {
            console.log(etage);
            parcour++;
        }
        console.log(etage, "vous êtes arrivé");
    } else {
        for (var i = etage; i > etage1; i--) {
            console.log(etage);
            parcour++;
        }
        console.log(etage, "vous êtes arrivé");
    }
}

elevator(2, 6, goToCB);