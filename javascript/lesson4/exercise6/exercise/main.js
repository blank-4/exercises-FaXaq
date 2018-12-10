/*
### CHIFFREMENT DE CÉSAR

* Avant tout, aller regarder ce qu'est le chiffre de César, ou chiffrement par décallage : [https://fr.wikipedia.org/wiki/Chiffrement_par_d%C3%A9calage](https://fr.wikipedia.org/wiki/Chiffrement_par_d%C3%A9calage)

* Créer une fonction `chiffrer`. Elle prendra deux paramètres,  le premier est une String qui sera la phrase à encoder. Le second est le décalage pour le code de César :
  * Cette fonction doit encoder le message et retourner le message encodé.
  * Pour vous aider: voici l'alphabet sous forme de tableau :
  ```js
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  ```
* Créer une fonction `dechiffrer` qui prendra les deux mêmes paramètres que la fonction chiffrer.
  * Cette fonction doit déchiffrer le message passé en paramètre avec la clé, elle aussi passée en paramètre.
  
* Bonus : le programme doit laisser tel quel les charactères non présents dans 
        l'alphabet.
*/

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

// doit encoder bienenue
console.log(chiffrer("bienenue", 5));

// doit encoder Bienenue avec une majuscule 
console.log(chiffrer("Bienenue", 5));

// doit encoder bienenue, avec une virgule
console.log(chiffrer("bienenue,   t%!:", 5));

// doit encoder bienenue avec une clé de 31
console.log(chiffrer("bienenue", 31));

// doit encoder bienenue avec une clé inférieure à 0
console.log(chiffrer("bienenue", -21));

// doit encoder bienenue avec une clé inférieure à 0
console.log(chiffrer("bienenue", -47));

console.log(dechiffrer("gnjsjszj", -47));