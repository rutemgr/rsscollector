var express = require('express');
var app = express();

// Set static files location to public folder
app.use(express.static('./public'));

// Routes
require('./routes')(app);

app.listen(3000, function() {
	console.log('Server running!');
});