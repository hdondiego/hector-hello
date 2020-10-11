let http = require('http');

let server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.close('<h5>Hello World!</h5>');
});

const port = process.env.port || 8080;
server.listen(port);