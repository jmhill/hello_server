var http = require('http');

var server = http.createServer(function(request, response) {
  if (request.url == '/headers') {
    response.setHeader('Content-Type', 'application/json');	
    response.write(JSON.stringify(request.headers));
  }
  
  response.end();
});

server.listen(8080);