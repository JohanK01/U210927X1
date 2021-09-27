'using strict'

const http = require('http');
var fs = require('fs');
const server = http.createServer((req, res)=> {
  
    fs.readFile('index.html', (err, data) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();   
    });
 
  });

  const PORT = process.env.PORT || 8042;
  server.listen(PORT);