const os = require('os');

console.log(os.platform());
console.log(os.cpus());
console.log(os.freemem());


const path = require('path');

console.log(path.basename(__filename));
console.log(path.join(__dirname, 'files', 'test.txt'));


const util = require('util');

const wait = util.promisify(setTimeout);
wait(1000).then(() => console.log('1 second passed'));



const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('greet', (name) => {
  console.log(`Hello, ${name}`);
});

emitter.emit('greet', 'Alice');
