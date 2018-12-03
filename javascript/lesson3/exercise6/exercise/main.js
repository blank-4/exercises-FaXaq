function puissance(nombre, puissance) {
    var res = 1;
    for (var i = 1; i <= puissance; i++) {
        res = res * nombre;
    }
    return res;
}
console.log(puissance(2, 7));