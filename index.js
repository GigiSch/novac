const http = require('http');
const port = 5000;

const requestHandler = (request, response) => {
  console.log(request.url);
  response.end('<h2>Hello Node Server!</h2>');
}

const server = http.createServer(requestHandler)

server.listen(port, error => {
  if(error) {
    return console.log('evo nesta nece: ' + error);
  }
  console.log('\nServer is listenning on port ' + port + '\n');
});