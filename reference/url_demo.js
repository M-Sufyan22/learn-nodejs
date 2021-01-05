const { uptime } = require('os');
const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// serialize URl
console.log(myUrl.href);

// serialize URl
console.log(myUrl.href.toString());

// Host and Domain name
console.log(myUrl.host);

// Host and Domain name does not get portname
console.log(myUrl.hostname);

//  pathname
console.log(myUrl.pathname);

//  serialize query
console.log(myUrl.search);

// params object
console.log(myUrl.searchParams);

//  Add custom params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((val, name) => {
    console.log(` ${name} : ${val}`)
});