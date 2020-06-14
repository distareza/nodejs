var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var pathname = q.pathname;
  console.log ("pathname = " + pathname);
  if (pathname == "/") {
    pathname = "/demo_filesystem.html";
  }

  if (pathname.startsWith("/scripts/")) {
    var filename = "." + pathname;
    readFile(res, filename, "text/javascript");
  } else if (pathname.endsWith(".html")) {
    var filename = "." + pathname;
    readFile(res, filename, "text/html");
  }
  console.log("test");
}).listen(8080);

function readFile(res, filename, contentType) {
  console.log("filename : " + filename);

  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }

    res.writeHead(200, {'Content-Type': contentType});
    res.write(data);
    return res.end();
  });
}
