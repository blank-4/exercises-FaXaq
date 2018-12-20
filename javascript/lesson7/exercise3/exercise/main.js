/* Créez une checkbox, lorsqu'elle est cochée, un champ texte et un bouton doivent apparaitre. Ce champ texte doit etre modifiable. Lorsque l'on clique sur le bouton, une fonction que vous avez définit dans votre instance de Vue doit se déclancher et afficher une alerte contenant le texte modifié. */

var app = new Vue({
    el: "#app",
    data: () => {
        return {
            afficher: false,
            message: ""
        }
    },
    methods: {
        afficherText: function() {
            alert(this.message);
        }
    }
})