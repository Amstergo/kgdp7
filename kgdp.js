'use strict';

var express = require('express');

var app = express();

var handlebars = require('express-handlebars')
  .create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(function(req, res, next){
  res.locals.showTests = app.get('env') !== 'production' &&
    req.query.test === '1';
  next();
});

app.use(express.static(__dirname + '/public') );

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
  res.render('home');
});
app.get('/about', function(req, res){
  res.render('about');
});

// users 404

app.use(function(req, res){
  res.status(404);
  res.render('404');
});

// users 500

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});
app.listen(app.get('port'), function(){

  console.log( 'Express start for http://127.0.0.1:' + app.get('port') );
});
