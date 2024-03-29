var requestListener = function (request, response) {

  console.log("Serving request type " + request.method
              + " for url " + request.url);
  var statusCode = 200;
  var headers = defaultCorsheaders;
  var defaultCorsheaders = {
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
    "access-control-allow-headers": "content-type, accept",
    "access-control-max-age": 10 // Seconds.
  };
  headers['Content-Type'] = "text/plain";
  response.writeHead(statusCode, headers);
  response.end("Hello, World!");
};

exports = requestListener;