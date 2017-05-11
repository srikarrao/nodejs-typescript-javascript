var events = require('events');
const myEmitter = new events.EventEmitter();

myEmitter.on('event', (a, b) => {
  setImmediate(() => {
    console.log('this happens asynchronously '+a+" : "+b);
  });
    console.log('this happens asynchronously '+b+" : "+a);
});
myEmitter.emit('event', 'key', 'value');
console.log("Running EventEmitter");
