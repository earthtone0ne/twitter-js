var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { title: 'Twitter.js - Posts by '+name, tweets: list } );
});

router.get('/tweets/:id', function(req, res) {
	var id = parseInt(req.params.id);
	var list = tweetBank.find({"id": id});
	// tweetBank.find( {id: id});
	console.log(list);
	res.render('index', {title: "This Awesome Tweet", tweets: list} )
	});

module.exports = router;