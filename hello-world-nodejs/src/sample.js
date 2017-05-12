var events = require('events');
const myEmitter = new events.EventEmitter();

myEmitter.on('fire', (a, b) => {
  setImmediate(() => {
    console.log('this happens asynchronously '+a+" : "+b);
  });
    console.log('this happens asynchronously '+b+" : "+a);
});
myEmitter.emit('fire', 'key', 'value');
console.log("Running EventEmitter");
