var app = function () {
  var http = require('http');
  var express = require('express');
  var app = express();

  app.set('/', __dirname + '/');
  app.engine('html', require('ejs').renderFile);
  app.get('/', function(req, res) {
    res.render('views/index.html');
  });

  return app;
}();

module.exports = app;
