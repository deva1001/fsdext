const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

// About route
app.get('/about', (req, res) => {
  res.send('<h2>This is the About Page</h2>');
});

// JSON Data route
app.get('/data', (req, res) => {
  const data = {
    name: 'Dev',
    course: 'Full Stack',
    status: 'Learning Express'
  };
  res.json(data);
});

// POST route
app.post('/submit', (req, res) => {
  const userData = req.body;
  res.send(`Data received: ${JSON.stringify(userData)}`);
});

// 404 for other routes
app.use((req, res) => {
  res.status(404).send('404 - Page not found');
});

// Start server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
