const fs = require('fs');
const path = require('path');

// Create directory
fs.mkdirSync(path.join(__dirname, 'output'), { recursive: true });

// Create text file
fs.writeFileSync(path.join(__dirname, 'output', 'note.txt'), 'This is a text file.');

// Create JSON file
const data = { name: 'Node', type: 'runtime' };
fs.writeFileSync(path.join(__dirname, 'output', 'data.json'), JSON.stringify(data, null, 2));
