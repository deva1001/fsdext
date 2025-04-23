const os = require('os');

console.log(os.platform());
console.log(os.cpus());
console.log(os.freemem());


const path = require('path');

console.log(path.join('/users', 'john', 'documents'));
console.log(path.basename('/users/john/documents/file.txt'));
console.log(path.dirname('/users/john/documents/file.txt'));
console.log(path.extname('/users/john/documents/file.txt')); 


const util = require('util');


const name = 'Dev';
const age = 25;
const formatted = util.format('Name: %s, Age: %d', name, age);
console.log(formatted);


console.log(util.types.isPromise(Promise.resolve())); // true
console.log(util.types.isDate(new Date())); //

const wait = util.promisify(setTimeout);
wait(1000).then(() => console.log('1 second passed'));



const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('greet', (name) => {
  console.log(`Hello, ${name}`);
});

emitter.emit('greet', 'Alice');
