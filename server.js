//Table Tennis, Canoe/Kayak, Archery, Taekwondo, Modern Pentathlon
var express = require('express');

//create route variables
var index = require('./routes/index.js');
var olympics = require('./routes/olympics.js')

var app = express();

//static files
app.use(express.static('public'));

//Routers
app.use('/', index);
app.use('/olympics', olympics)

//Server Listener
var server = app.listen(process.env.PORT || 3000, function() {
  var port = server.address().port;
  console.log('Listening on port:', port);
})
