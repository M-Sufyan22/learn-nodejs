const path = require('path');

// Base file name
console.log(path.basename(__filename));

// Base Directory/folder name
console.log(path.basename(__dirname));

// File extension
console.log(path.extname(__filename));

//  Create path object
console.log(path.parse(__filename).base);

//  Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));