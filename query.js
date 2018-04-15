const http = require('http');
const url  = require('url');

http.createServer(function (req, res) {
  const query = url.parse(req.url, true).query;
  const name  = query.name ? query.name : 'World!';

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello ' + name);
}).listen(5000);