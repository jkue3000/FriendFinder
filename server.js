// require all standard packages
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require("path");

// JSON parser
var jsonParser = bodyParser.json();

// PORT link
var PORT = process.env.PORT || 3000;

// body parse to set format
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));

// require js files to use them 
require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

app.use(function(req, res){
        res.sendFile(path.join(__dirname + '/app/public/home.html'));
    }); 

app.listen(PORT, function(){
	console.log("app listening on PORT: " + PORT);
});
