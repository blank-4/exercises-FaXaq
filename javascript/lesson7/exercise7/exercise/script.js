
var vm = new Vue({
    el: '#app',
    data: function() {
        return  {
            input : '',
            offset : 1,
            output: ''
        };
    },
    methods: {
        cipher : chiffrer,
        decipher: dechiffrer
    },
    watch : {
        input : function(val) {
            this.output = this.cipher(val, this.offset);
        },
        output : function(val) {
            this.input = this.decipher(val, this.offset);
        },
        offset : function(val) {
            this.output = this.cipher(this.input, val);
        }
    }
});
