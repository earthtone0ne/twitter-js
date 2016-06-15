var express = require('express');
var app = express();
var swig = require('swig')

app.engine("html", swig.renderFile);
app.set("view engine", "html");
app.set("views", __dirname + "/views");
swig.setDefaults({ cache: false });

app.listen(3000, function () {
	console.log("Listening");

})

var routes = require('./routes/');
app.use('/', routes);

// app.use("/:path",function (req,res,next){
// 	console.log(req.method + " /" + req.params.path);
// 	next();
// });

// app.use('/special', function(req,res,next) {
// 	console.log("User is special!");
// 	console.log(res.statusCode);
// 	next();
// });
app.use(express.static('public'));





// app.get('/', function(req,res,next){
// 	var people = [{name: "Zaphod"}, {name: "Arthur"}, {name: "Trillian"}]
// 	res.render("index", {title: "Home Sweet Home", people: people})
// });

// app.get('/special', function(req,res,next){
// 	res.send('Hi!\n');

// });