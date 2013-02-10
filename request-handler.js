/* You should implement your request handler function in this file.
 * But you need to pass the function to http.createServer() in
 * basic-server.js.  So you must figure out how to export the function
 * from this file and include it in basic-server.js. Check out the
 * node module documentation at http://nodejs.org/api/modules.html. */
exports.requests = function(request, response) {
  var headers = defaultCorsheaders;
  console.log("Serving request type " + request.method + " for url " + request.url);
  response.writeHead(200, headers);
  headers['Content-Type'] = "text/plain";
  response.write("handle request logged");
  response.end("request handled");
};

var defaultCorsheaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};