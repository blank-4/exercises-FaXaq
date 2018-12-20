var app = new Vue({
    el: '#app',
    data: function() {
        return {
            compteur: 0
        }
    },
    methods: {
        increment() {
            this.compteur++;
        },
        decrement() {
            this.compteur--;
        }
    }

}) 

