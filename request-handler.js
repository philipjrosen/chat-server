var qs = require("querystring");
var jsonStuff = [];
exports.requests = function(request, response) {
  var headers = defaultCorsheaders;
  console.log("Serving request type " + request.method + " for url " + request.url);
  headers['Content-Type'] = "application/json";
  if(request.url === 'http://127.0.0.1:8080/classes/room1'){
    if(request.method === "GET"){
      response.writeHead(200, headers);
      response.end(JSON.stringify(jsonStuff));
    }
    if (request.method === "POST"){
      response.writeHead(302, headers);
      request.on('data', function(stuff){
        jsonStuff.push(qs.parse(stuff));
      });
      request.on('end',function(){
        response.end('\n');
      });
    };
  }
  else {
    response.writeHead(404, headers);
    response.end();
  }
};

var defaultCorsheaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};