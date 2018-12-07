
(function() {
    // Immediately Invoked Function Expression
    var items = ["Riri","Fifi","Loulou","Donald"];

    var ul = document.createElement('ul');
    for (var i in items) {
        var li = document.createElement('li');
        li.textContent = items[i];
        ul.appendChild(li);
    }
    
    document.body.appendChild(ul);

})();
