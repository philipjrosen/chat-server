var qs = require("querystring");
var fs = require("fs");

var jsonStuff = [];
exports.requests = function(request, response) {
  var headers= {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
  };

  console.log('request starting...');
  if(request.url === '/stuff'){
    stuff();
  }else if(request.url === '/'){
    fs.readFile('./chat-client/index.html', function(error, content){
      if(error){
        response.writeHead(500);
        response.end();
      }
      else{
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(content, 'utf-8');
      }
    });
  }else{
    response.writeHead(404, headers);
    response.end('yo lost bro');
  }

  function stuff(){
    response.writeHead(200, headers);
    if(request.method === "GET"){
      response.end(JSON.stringify(jsonStuff));
    }
    else if (request.method === "POST"){
      request.on('data', function(stuff){
        jsonStuff.push(JSON.parse(stuff));
      });
      response.end();
    }
    else if(request.method === 'OPTIONS'){
      response.end();
    }
  }



  // console.log("Serving request type " + request.method + " for url " + request.url);
  // headers['Content-Type'] = "application/json";
  
  // if(request.url === '/'){
  // }
  // else {
  //   response.writeHead(404, headers);
  //   response.end();
  // }

};
