new Vue({
    el: "#app",
    data: function() {
        return {
            voltaire: ""
        }
    },
    watch: {
        voltaire: function(newValue) {
            console.log(newValue);
            if (newValue == "vue") {
                alert("vue");
            }
        }
    }
})