var http = require('http');

var server = http.createServer(function(request, response) {
  response.setHeader('Content-Type', 'application/json');	

  if (request.url == '/headers') {
    response.write(JSON.stringify(request.headers));
  } else if (request.url == '/version') {
  	response.write("The HTTP version of the request: " + request.httpVersion);
  } else {
  	var urlArray = request.url.split('/');
  	var headerKey = urlArray[2];
  	var headerValue = request.headers[headerKey];
  	response.write(headerKey + ": " + headerValue);
  }
  
  response.end();
});

server.listen(8080);