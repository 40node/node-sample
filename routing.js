const http = require('http');
const url  = require('url');

const port = 5000;
const server = http.createServer();

server.on('request', function (req, res) {
  const uri   = url.parse(req.url, true).pathname;
  const query = url.parse(req.url, true).query;
  let status  = 200;
  let message = '';

  // URIごとに表示するメッセージを変える
  switch (uri) {
    case '/':
      message = 'Hello World!';
      break;
    case '/about':
      message = 'About page';
      break;
    case '/query':
      message = 'query: ' + query.name;
      break;   
    default:
      status = 404;
      message = 'Page not found.';
  }
  // http ステータスコードや、実際のメッセージ表示はここ
  res.writeHead(status, { 'Content-Type': 'text/plain' });
  res.write(message);
  res.end();
});

server.listen(port);