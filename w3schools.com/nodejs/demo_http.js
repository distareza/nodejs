var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  // If the response from the HTTP server is supposed to be displayed as HTML,
  // you should include an HTTP header with the correct content type:
  res.writeHead(200, {'Content-Type': 'text/html'});

  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
