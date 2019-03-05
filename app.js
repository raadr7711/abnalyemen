var app = function () {
  var http = require('http');
  var express = require('express');
  var app = express();
  var fs = require('fs')

  app.set('/', __dirname + 'views');
http.createServer(function (req,res){
    fs.readFile('index.html',function(err,data){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });

  return app;
}();

module.exports = app;
