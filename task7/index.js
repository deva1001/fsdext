const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Route to fetch users and render table
app.get('/users', async (req, res) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    res.render('users', { users });
  } catch (err) {
    res.status(500).send('Failed to fetch data');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
