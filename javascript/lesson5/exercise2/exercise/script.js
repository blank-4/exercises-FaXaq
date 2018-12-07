var div = document.createElement("div");
document.body.appendChild(div);

function divStyle() {
    div.style.width = "200px";
    div.style.height = "300px";
    div.style.backgroundColor = "blue";
    div.onmouseover = function() {
        div.style.backgroundColor = "red";
    }
    div.onmouseout = function() {
        div.style.backgroundColor = "blue";
    }
}

divStyle();