var express = require('express');
var app = express();


app.listen(3000, function () {
	console.log("Listening");

})
app.use("/:path",function (req,res,next){
	console.log(req.method + " /" + req.params.path);
	
	next();

});
app.use('/special', function(req,res,next) {
	console.log("User is special!");
	console.log(res.statusCode);
	next();
});


app.get('/', function(req,res,next){
	res.send('Hey!\n')
});

app.get('/special', function(req,res,next){
	res.send('Hi!\n');

});