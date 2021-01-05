const http = require('http');

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    res.writeHead(200, 'text/html')
    res.write("<h1>Hello World</h1>");
    res.end();
})

server.listen(PORT, () => console.log("server is strated on ", PORT, " http://localhost:5000"))