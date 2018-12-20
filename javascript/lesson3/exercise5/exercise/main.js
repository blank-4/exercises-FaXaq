/* Créer une fonciton qui calcule l'aire d'un cercle :
* Cette fonction prend en paramètre le rayon de ce dernier
* Elle retourne l'aire du cercle

Créer une deuxième fonciton qui calcule le périmètre d'un cercle :
* Elle prend en paramètre le rayon du cercle
* Elle retourne le périmètre

Créer une fonction qui calcule le diamètre d'un cercle :
* Elle prend en paramètre le rayon d'un cercle
* Elle retourne le diamètre
 */

function circlearea(rayon) {
    var res = Math.PI * (rayon * rayon);
    return res;
}
console.log(circlearea(6));

function circleperimeter(rayon) {
    return (Math.PI *2) * rayon;  
}
console.log(circleperimeter(5));

function circlediameter(rayon) {
    return rayon * 2;
}
console.log(circleperimeter(7));


