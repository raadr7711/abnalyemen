var app = function () {
  var http = require('http');
  var express = require('express');
  var app = express();

  app.set('/', __dirname + '/views');
  app.engine('html', require('ejs').renderFile);
  app.get('/', function(req, res) {
    res.render('index.html');
  });

  return app;
}();

var fs = require('fs');

http.createServer(function (req,res){
    fs.readFile('index.html',function(err,data){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
module.exports = app;
