/* Créer une fonction `sumArray` qui prend en paramètre un tableau. Elle doit faire la somme de tous les nombres dans le tableau et la retourner.
* Déclarer une variable `sum` initialisée à 0
* Itérer dans le tableau
* À chaque itération ajouter l'élément à la variable `sum`. BONUS : Avant de l'ajouter vérifier que c'est un nombre.
* Après la boucle, retourner `sum`.
 */
var tableau = [5,8,4, "coucou"];
function sumArray(tab) {
    var sum = 0; 
    
    for (var i = 0; i < tab.length; i++){
        console.log("Somme actuelle " + sum);
        console.log("valeur à ajouter " + tab[i]);
        
        if (typeof tab[i] === "number"){
            sum = sum + tab[i]; 
        } else {
            console.log(tab[i] + " N'est pas un nombre ");
        }        
    }

    return sum;
}

console.log(sumArray(tableau));
