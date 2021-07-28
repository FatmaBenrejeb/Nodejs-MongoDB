const mongoose = require('mongoose');
var bodyParser=require("body-parser");
const express = require('express');

var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
    console.log("connection succeeded");
})
  
var app=express()

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/sign_up', function(req,res){

    var name = req.body.FirstName;
    var sname = req.body.LastName;
    var Email = req.body.email;
    var phone = req.body.phone;
    var pass= req.body.password;
    var Profession= req.body.Profession;
  
    var data = {
        "FirstName": name,
        "LastName": sname,
        "Phone": phone,
        "email":Email,
        "password":pass,
        "Profession":Profession
    }
db.collection('details').insertOne(data,function(err, collection){
        if (err) throw err;
        console.log("Record inserted Successfully");
              
    });
          
    return res.redirect('signup_success.html');
})
  
app.get('/',function(req,res){
    res.set({
        'Access-control-Allow-Origin': '*'
        });
    return res.redirect('home.html');
    }).listen(3000)
      
      
    console.log("server listening at port 3000");

 
 
