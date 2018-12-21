new Vue({
    el: "#app",
    data: function (){
        return {
        source : "",
        offset:0, 
        result: "",
        }
    },
    watch: {
        source: function (texte){
            this.result= chiffrer(texte,this.offset); 
        },
        offset: function (chiffre){
                this.result= chiffrer(this.source,chiffre);
        },
        result : function(texte){
            this.source= dechiffrer(texte, this.offset);
        }  

    }   
})