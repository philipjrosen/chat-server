var http = require("http");
var handleRequest = require('./request-handler');
var port = 8080;
var ip = "127.0.0.1";
var server = http.createServer(handleRequest.requests);
console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);

