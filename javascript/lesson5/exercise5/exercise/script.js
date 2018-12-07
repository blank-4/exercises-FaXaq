
var a = document.getElementsByTagName('a')[0];
a.addEventListener('click', function(event) {
    window.print();
    event.preventDefault();
});

