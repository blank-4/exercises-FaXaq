/* Exercice 5
Affichez un console.log pour chacune des étapes de vie de votre instance Vue. */

var app = new Vue({
    el: "#app",
    data: () => {
        return {
            message:''
        }
    },
    beforeCreate: () => {
        console.log("beforeCreate");
    },
    created: (e) => {
        console.log("created", e, this);
    },
    beforeMount: (e) => {
        console.log("beforeMount", e, this);
    },
    mounted: (e) => {
        console.log("mounted", e, this);
    },
    beforeUpdate: (e) => {
        console.log("beforeUpdate", e, this);
    },
    updated: (e) => {
        console.log("updated", e, this);
    },
    beforeDestroy: (e) => {
        console.log("beforeDestroy", e, this);
    },
    destroyed: (e) => {
        console.log("destroyed", e, this);
    }
})