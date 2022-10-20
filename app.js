var mongoFDico = require('mongodb').mongoFDico;
require('dotenv').config();

mongoFDico.connect("mongodb://localhost:27017/FussapDicoDB", function (err, db) {
    db.words('mots', function(err, words){

        db.words.insert({"bonjour":"hello"});
        db.words.insert({"matin":"morning"});
        db.words.insert({"oui":"yes"});
        db.words.insert({"salle":"room"});

        db.words('mots').count(function(err,count){
            if (err) throw err;
        });
    });
});
