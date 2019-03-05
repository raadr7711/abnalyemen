
var app = function () {
  var http = require('http');
  var express = require('express');
  var app = express();
  

  app.set('views', __dirname + '/views');
  app.engine('html', require('ejs').renderFile);
  app.get('/', function(req, res) {
    res.render('index.html');
  });

  return app;
}();
const io = require('socket.io')(http);
module.exports = app;
