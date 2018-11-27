/* Créez un compteur.

* Il doit compter de 0 à 100. (afficher le nombre à chacune des itérations).
* Maintenant, transformez le pour qu'il compte de deux en deux.
* Inversez le pour qu'il décompte de 2 en 2 de 100 à 0.
 */


/*  for (var compteur = 0; compteur <= 100; compteur++) {
     console.log(compteur);
 }
 */

/*  for (var compteur = 0; compteur <= 100; compteur = compteur + 2) {
     console.log(compteur);
 } */

for (var compteur = 100; compteur >= 0; compteur -= 2) {
    console.log(compteur);
}