var API_KEY = "q55O1k5p1x2q5xRvOFXyBnhCum55sgMT";

var vm = new Vue({
    el: '#app',
    data: function() {
        return  {
            search : '',
            images : []
        };
    },
    methods: {
        query : function(search, callback) {
           var url = 'https://api.giphy.com/v1/gifs/search?api_key=' + API_KEY + '&q=' + search + '&limit=5&offset=0&rating=R&lang=en';
           var req = new XMLHttpRequest();

            req.onreadystatechange = function(event) {
                // XMLHttpRequest.DONE === 4
                if (this.readyState === XMLHttpRequest.DONE) {
                    if (this.status === 200) {
                        var json = JSON.parse(this.responseText);
                        callback(json);
                    } else {
                        console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
                    }
                }
            };

            req.open('GET', url, true);
            req.send(null);
        },
        reset : function() {
            this.images = [];
        }

    },
    watch : {
        search : function(val) {
            var self = this;
            if (val == 'vue') {
                alert('vue');
            }
            this.query(val, function(json) {
                var data = json.data;
                var images = [];
                console.log(data);
                for (var i = 0; i < data.length; i++) {
                    var item =  data[i];
                    var img = item.images.fixed_height;
                    images.push({
                        id : item.id,
                        src : img.url,
                        width : img.width,
                        height : img.height,
                        title : item.title
                    });
                }
                self.images = images;
            })
        }
    }
});