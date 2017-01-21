var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
//app.set('view engine', 'html');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/db', function(request, response) {

	var drinks = [
        { name: 'Bloody Mary', id: 3 },
        { name: 'Martini', id: 5 },
        { name: 'Scotch', id: 10 }
    ];	
	
  response.render('pages/db',{results:drinks});
});

// Start the Server
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


