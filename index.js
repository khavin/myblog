// Dependencies
var http = require('http');
var config = require('./config');
var requestHandler = require('./handler');

var server = http.createServer(function(request,response){
    requestHandler(request,response);
});

server.listen(config["port"],function(){
    console.log("starting node at "+config["port"]);
});