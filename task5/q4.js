const fs = require('fs');

// Create a readable stream
const readableStream = fs.createReadStream('input.txt', 'utf8');

// Create a writable stream
const writableStream = fs.createWriteStream('output.txt');

// Pipe the readable stream into the writable stream
readableStream.pipe(writableStream);

// Optional: Log when done
readableStream.on('end', () => {
  console.log('Streaming complete. Data written to output.txt');
});
