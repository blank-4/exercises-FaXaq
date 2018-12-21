function chiffrer(str, key) {
    // déclare une variable alphabet qui est un tableau contenant les lettres de l'alphabet
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // déclare une variable res, qui est une string vide
    var res = "";

    // On passe le paramètre str (qui est une string) en minuscules
    str = str.toLowerCase();

    // On fait une boucle for pour itérer sur lettres du paramètre str
    for (var i = 0; i < str.length; i++) {
        // récupérer de la lettre à l'index i
        var l = str[i];
        // récupérer l'index de la lettre dans l'alphabet
        var index = alphabet.indexOf(l);
        // si index est supérieur à -1, ma lettre va pouvoir être chiffrée parce qu'elle est contenue dans l'alphabet
        if (index > -1) {
            // décaler l'index de "key" pour avoir une nouvelle lettre
            index = index + (key % alphabet.length) + alphabet.length;
            // trouver la lettre qui est située au nouvel index
            var nouvelleLettre = alphabet[index % alphabet.length];
            // ajout de la nouvelle lettre à la fin du résultat
            res = res + nouvelleLettre;
            // ma lettre ne doit pas être chiffrée
        } else {
            // je rajoute ma lettre non chiffrée
            res = res + l;
        }
    }
    return res;
}

function dechiffrer(str, key) {
    return chiffrer(str, -key);
}