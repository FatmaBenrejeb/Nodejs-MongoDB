# Nodejs-MongoDB
Login 

var mongo = require('mongodb'); 
var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/mydb"; //Create a database named "mydb"

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  //Create Collection__customers
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
