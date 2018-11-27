/* Pour commencer on veut que vous affichiez dans la console tout les nombres compris entre 1 et un nombre de votre choix avec une boucle for.

* Ensuite on veut que vous vous arrangiez pour que "fizz" s'affiche dans la console a la place de tout multiples de 7 et que les multiples de 5 soient remplacés par "buzz" . (Pensez qu'il est possible d'utiliser un "if else" dans une boucle for) .*/


// correction exercice
for (var toto = 1; toto <= 37; toto++) {
    if (toto % 7 == 0){
        console.log("fizz");  
    } else if (toto % 5 == 0){
        console.log("buzz");
    } else {
        console.log(toto);
    }
}

console.log("----");

//correction exercice ++ (avec fizzbuzz pour les multiples de 5 ET 7)
for (var toto = 1; toto <= 37; toto++) {
    if (toto % 5 == 0 && toto % 7 == 0) {
        console.log("fizzbuzz");
    } else if (toto % 7 == 0) {
        console.log("fizz");
    } else if (toto % 5 == 0) {
        console.log("buzz");
    } else {
        console.log(toto);
    }
}

console.log("----");

//correction exercice ++ "optimisé"
for (var toto = 1; toto <= 37; toto++) {
    var str = "";
    if (toto % 7 == 0) {
        str = str + "fizz";
    }
    if (toto % 5 == 0) {
        str = str + "buzz";
    }
    if (str == "") {
        str = toto;
    }

    console.log(str);
}