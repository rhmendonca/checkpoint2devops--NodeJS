const http = require('http');

const hostname = '0.0.0.0';
const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end('<h1>Implantação efetuada com sucesso. Bom Trabalho!</h1>');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});