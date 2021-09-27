'using strict'

const http = require('http');
var fs = require('fs');
http.createServer((req, res)=> {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('im alive!');
    res.end();
  }).listen(8080);