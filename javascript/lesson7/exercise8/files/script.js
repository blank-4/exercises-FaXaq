new Vue({
    el: "#app",
    data: function() {
        return {
            monText: "",
            monTablo: []
        }
    },
    methods: {
        reQuete() {
            var key = "qT17YCQzs7Ejj0CRWpYLkQ7GU8AhRt3B";
            var query = this.monText;
            var self = this;

            var request = new XMLHttpRequest();
            request.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) { 
                    var jsonData = JSON.parse(request.responseText)
                    if (jsonData) {
                        console.log(jsonData);
                        self.monTablo = jsonData.data;
                        console.log(self.monTablo)
                    }
                }
            };
            request.open("GET", "http://api.giphy.com/v1/gifs/search?q="+query+"&api_key="+key+"&limit=5", true);
            console.log("Request is : " + "http://api.giphy.com/v1/gifs/search?q="+query+"&api_key="+key+"&limit=5")
            request.send(); 

        }
    }
})




