const EventEmitter = require('events');


// create event class
class MyEmitter extends EventEmitter {};

//  init object
const myemitter = new MyEmitter();

//  Event listner
myemitter.on('event', () => {
    console.log("event fired!");
});

//  init event
myemitter.emit('event');