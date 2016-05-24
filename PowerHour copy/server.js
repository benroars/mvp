// Babel ES6/JSX Compiler
require('babel-register');

var swig  = require('swig'); //templating engine used to load index.html
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var routes = require('./app/routes');
var url = require('url');

var _ = require('underscore');

//var async = require('async');
var request = require('request');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var config = require('./config');

mongoose.connect(config.database);
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});

var Character = require('./models/character');
var Challenge = require('./models/challenge');

//////////////////////////////////////////////////

var app = express();

app.set('port', 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.post('/api/characters', function(req, res, next) {
  var gender = req.body.gender;
  var characterName = req.body.name;
  var drink = req.body.drink;

  Character.findOne({ name: characterName }, function(err, character) {
    if (err) return next(err);

    if (character) {
      return res.status(409).send({ message: character.name + ' is already in the database.' });
    } else {
      var character = new Character({
        characterId: Math.random(),
        name: characterName,
        gender: gender,
        drink: drink
      });

      character.save(function(err) {
        if (err) return next(err);
        res.send({ message: characterName + ' has been added successfully!' });
      });
   
    }
  });
});

app.post('/api/challenges', function(req, res, next) {

  var name = req.body.name;
  var des = req.body.description;
  var image = req.body.image;

  Challenge.findOne({ name: name }, function(err, challenge) {
    if (err) return next(err);

    if (challenge) {
      return res.status(409).send({ message: challenge.name + ' is already in the database.' });
    } else {
      var challenge = new Challenge({
        challengeId: Math.random(),
        name: name,
        description: des,
        image: image
      });

      challenge.save(function(err) {
        if (err) return next(err);
        res.send({ message: challenge + ' has been added successfully!' });
      });
   
    }
  });
});


app.get('/api/characters', function(req, res, next) {
  Character.find({})
    .exec(function(err, challenges) {
      if (err) return next(err);
        return res.send(challenges);
      });
});

app.get('/api/challenges', function(req, res, next) {
  Challenge.find({})
    .exec(function(err, challenges) {
      if (err) return next(err);
        return res.send(challenges);
      });
});

app.get('/api/challenges/:id', function(req, res, next) {
  var name = url.parse(req.url, true);
  //console.log('THE STRING ', name.path.split('/')[3]);
  name = name.path.split('/')[3].replace(/%20/g, ' ');

  console.log('thename', name);
  
  Challenge.findOne({ name: name }, function(err, challenge) {
    if (err) return next(err);

    if (!challenge) {
      return res.status(404).send({ message: 'Challenge not found.' });
    }

    res.send(challenge);
  });
});




app.use(function(req, res) {
  Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
      var page = swig.renderFile('views/index.html', { html: html });
      res.status(200).send(page);
    } else {
      res.status(404).send('Page Not Found')
    }
  });
});


app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});