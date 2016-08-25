'use strict';

var express = require('express');

var app = express();

var handlebars = require('express-handlebars')
  .create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
  res.type('text/plain');
  res.send('kgdp7');
});
app.get('/about', function(req, res){
  res.type('text/plain');
  res.send('O kgdp7');
});

// users 404

app.use(function(req, res){
  res.type('text-plain');
  res.status(404);
  res.send('404 page not found');
});

// users 500

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('text/plain');
  res.status(500);
  res.send('500 - error server');
});
app.listen(app.get('port'), function(){

  console.log( 'Express start for http://127.0.0.1:' + app.get('port') );
});
