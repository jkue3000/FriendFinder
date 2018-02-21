// PATH require to get and create routes
var path = require('path');

module.exports = function(app){

	// make routes so it can be HTML can be displayed
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });

    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

}
