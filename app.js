var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('landing');
});

app.get('/myresume', function(req, res){
    var data = [
        {firstName: 'Ridwan', lastName: 'Raji'}
    ]

    res.render('myresume', {data: data});
})

app.listen(3000, function(){
    console.log('resume-bulder server has started!');
});