var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({extended: false});

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm: true } );
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

router.post('/',urlencodedParser,function (req, res,next) {
	if(!req.body){res.sendStatus(400)}	
	res.render( 'index', { title: 'Twitter.js', tweets: [], showForm: true } ); //POST does not work "cannot POST /"
	console.log(req.body.name);
	next();
});

router.post('/',function (req, res,next) {
	
	next();
})

module.exports = router;