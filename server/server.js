const express = require('express'); //Like import Component from 'react'
const app = express(); // make an instance of express (boilerplate)
const port = 3005;

//tried using const on each app.get statement. It worked!

app.get('/', function(req,res){
    res.sendFile(__dirname+'/index.html');
})

app.listen(port, ()=> {
    console.log("server 3005");
})