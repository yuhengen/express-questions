const express = require('express');

let app = express();

app.get('/correct_me', function(request,response){
    res.send("Corwin of amber");
})

app.get('/faulty', function(req,res){
    req.send("the quick brown fox jumps over the lazy dog")
})

module.exports = app;