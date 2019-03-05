var express = require('express');
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/views'));


app.get('/', function (req, res) {
    res.sendfile('index.html');
});
module.exports = app;
