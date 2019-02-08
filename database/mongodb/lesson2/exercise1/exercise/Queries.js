// Lister tous les documents.
db.exercise1.find({})
// Trouver tous les documents ayant pour id 1
db.exercise1.find({ _id : 1 })
// Trouver toutes les personnes dont le prénom est John.
db.exercise1.find({ "name.first" : "John"})
// Trouver toutes les personnes qui sont mortes.
db.exercise1.find({ death : { $exists : true }})
// Trouver toutes les personnes qui ne sont pas mortes.
db.exercise1.find({
	death : { $exists : false }, 
	birth : { $exists : true }
})
// Trouver toutes les personnes nées après le 01 Janvier 1941.
db.exercise1.find({ 
	birth : { $gt : ISODate("1941-01-01") }
})
// Trouver toutes les personnes qui n'ont pas eu de récompenses (attribut awards).
db.exercise1.find({
	$or : [
		{ awards : { $size : 0  } },
		{ awards : { $exists : false } } 
	]
})
// Trouver toutes les personnes qui ont eu une récompense de la "Free Software Foundation" (attribut awards).
db.exercise1.find({ "awards.by" : "Free Software Foundation" })
// Donner une date de naissance à Martin Odersky
db.exercise1.findOneAndUpdate({ 
	"name.first" : "Martin",
	"name.last" : "Odersky"
}, { 
	$set : { 
		birth : ISODate("1958-09-05") 
	}
})
// Créer une nouvelle personne appelée "Linus Torvalds", renseignez le maximum d'informations à son sujet.
db.exercise1.insertOne({
	name : {
		first : "Linus",
		last : "Torvalds"
	},
	birth : ISODate("1969-12-18"),
 	"contribs" : [
        	"Linux",
		"git"
	],
	awards : [{
            "award" : "Computer Pioneer Award",
            "year" : 2014,
            "by" : "IEEE Computer Society"
        },
        {
            "award" : "Prix Millennium Technology",
            "year" : 2012,
            "by" : "Technology Academy Finland"
	}]
})
// Créer une nouvelle personne appelée "Steve Jobs"
db.exercise1.insertOne({
	name : {
		first : "Steve",
		last : "Jobs"
	}
}
// Ah ouais en fait non, supprimez la
db.exercise1.findOneAndDelete({ name : { first : "Steve", last : "Jobs" } } )
