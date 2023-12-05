const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

const localhost='127.0.0.1';
const port = 3000;

server.listen(port, localhost, () => {
    console.log('Server running at http://localhost:3000/');
});