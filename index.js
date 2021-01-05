const http = require('http');
const fs = require('fs');
const path = require('path');
const { extname } = require('path');




const server = http.createServer((req, res) => {
    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.end(content);
    //     });
    // }
    // if (req.url === '/about') {
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.end(content);
    //     });
    // }
    // if (req.url === '/api/users') {
    //     const users = [{
    //             id: 1,
    //             name: "sufyan",
    //             city: "PAK"
    //         },
    //         {
    //             id: 2,
    //             name: "hamza",
    //             city: "USA"
    //         },
    //         {
    //             id: 3,
    //             name: "asad",
    //             city: "UAE"
    //         },
    //     ];
    //     res.writeHead(200, { 'Content-Type': 'application/json' });
    //     res.end(JSON.stringify(users));
    // }

    //  Build file path

    const filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    //  Get extension
    let extName = path.extname(filePath);

    //  init Content Type
    let ContentType = 'text/html';

    //  Check ext name and set content type

    switch (extName) {
        case '.js':
            ContentType = 'text/javascript';
            break;
        case '.css':
            ContentType = 'text/css';
            break;
        case '.json':
            ContentType = 'application/json';
            break;
        case '.png':
            ContentType = 'image/png';
            break;
        case '.jpg':
            ContentType = 'image/jpg';
            break;
    }

    //  Read File

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                // page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, { 'Content-Type': ContentType });
                    res.end(content, 'utf-8');
                })
            } else {
                // some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // success
            res.writeHead(200, { 'Content-Type': ContentType });
            res.end(content, 'utf-8');
        }
    });
});


const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`server running on ${PORT} http://localhost:5000`);
})





















// const person = require('./person');


// console.log(person[0].name);


// for class method

// const Person1 = new Person('sufyan', 20);

// Person1.greetings();

// ===============================================================

// const Logger = require('./logger');

// const logger = new Logger();

// logger.on('msg', (data) => { console.log('called listner:', data); });

// logger.log('Hello World');