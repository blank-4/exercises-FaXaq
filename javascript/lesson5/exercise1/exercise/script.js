var p = document.getElementById("texte");
p.innerHTML = "lorem ipsum";

function afficher(){
    var color = generateColor();
    console.log(color);
    p.style.color = color;
    p.style.display = "block";
}

function masquer(){
    p.style.display = "none";
}

function generateColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}



