/* Créer une fonciton qui prend en paramètre un entier.
* Écrire un programme qui affiche le nombre minimum de billets et de pièces nécessaire pour atteindre la somme de l'utilisateur passé en paramètre.
* Exemples :
  * Si l'utilisateur a rentré 3, on doit lui afficher 2€ + 1€.
  * Si l'utilisateur a rentré 32, on doit lui afficher 20€ + 10€ + 2€
  * Si l'utilisateur a rentré 561€, on doit lui afficher, 500€ + 50€ + 10€ + 1€
* La fonction retournera un objet de la forme suivante :
```
{
  500: 1,
  200: 0,
  100: 0,
  50: 1,
  20: 0,
  10: 1,
  5: 0,
  2: 0,
  1: 1
} */


// création d'un objet
var obj = {};
// 1ère manière
obj.prop = 2;
// 2ème manière
obj["prop"] = 2;










function cash(entier) {
    // création du tableau des monnaies
    var money = [500, 200, 100, 50, 20, 10, 5, 2, 1];
    // création de l'objet de comptage
    var myObject = {};
    // itération sur le tableau des monnaies
    for (var i = 0; i < money.length; i++) {
        // initialisation de la propriété de l'objet comptage correspondant à la monnaie courante (money[i])
        // Par exemple : myObject[500] = 0; => { 500 : 0 }
        myObject[money[i]] = 0;
        // Tant que l'entier est supérieur à la monnaie courante (money[i])
        while (entier >= money[i]) {
            // Retirer la monnaie courante (money[i]) de l'entier
            entier = entier - money[i];
            // Ajouter un au compteur de la monnaie courante (money[i])
            myObject[money[i]] = myObject[money[i]] + 1;
            // Afficher dans la console
            console.log("je retire un billet de:" + money[i]);
        }
    }
    return myObject;
}

console.log(cash(4323));