var express = require('express'),
// exphbs = require('express-handlebars'),
  http = require('http'),
// mongoose = require('mongoose'),
// twitter = require('ntwitter'),
  routes = require('./routes');
// streamHandler = require('./utils/streamHandler');

var app = express();
var port = process.env.PORT || 8080;

app.get('/', routes.index)

var server = http.createServer(app).listen(port, function () {
  console.log('Express server listening on port ' + port);
});