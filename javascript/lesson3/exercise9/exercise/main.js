// Créer deux fonctions qui prennent un paramètre de type nombre.

// La première fonction doit :
// * Additionner tous les nombres entre 0 et le paramètre.
// * Retourner la valeur de la somme finale.

// La seconde fonction doit faire exactement pareil mais utiliser le principe de récursivité.

function add(number) {
    var res = 0;
    for (var i = 0; i <= number; i++) {
        res = res + i;
    }
    return res;
}

console.log(add(10));


// récursivité


function addR(number) {
    if (number == 0) return 0;
    return addR(number - 1) + number;
}

console.log(addR(4));


// récursivité puissance

function puissanceR(number, puissance) {
    if (puissance == 0) return 1;
    return puissanceR(number, puissance - 1) * number;
}

/*
    puissance(2, 3);
    => return puissance(2, 2) * 2;
    => return puissance(2, 1) * 2 * 2;
    => return puissance(2, 0) * 2 * 2 * 2;
    => return 1 * 2 * 2 * 2;
*/

console.log(puissanceR(2, 3));