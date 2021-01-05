const fs = require('fs');
const path = require('path');

//  create a folder / Directory
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw (err);
//     console.log("Folder created");
// });

//  create a File and wite into file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello world!', err => {
//     if (err) throw (err);
//     console.log("File created and witten");
// });

//  Add data in file
// fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' Hello nodejs!', err => {
//     if (err) throw (err);
//     console.log("Data witten successfully!");
// });

//  Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf-8', (err, data) => {
//     if (err) throw (err);
//     console.log(data);
// });

//  Read file
// fs.rename(
//     path.join(__dirname, '/test', 'hello.txt'),
//     path.join(__dirname, '/test', 'hi.txt'),
//     (err) => {
//         if (err) throw (err);
//         console.log("File renamed");
//     });