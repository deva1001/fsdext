const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const SECRET_KEY = "secret key"; // Ideally should be stored in environment variables

// Login Route to generate token
app.post('/login', (req, res) => {
    const user = {
        uname: "admin",
        age: 30
    };

    jwt.sign({ user }, SECRET_KEY, { expiresIn: '1h' }, (err, token) => {
        if (err) {
            return res.status(500).json({ message: "Error generating token" });
        }
        res.status(200).json({ token });
    });
});

// Middleware to verify token
function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(403).json({ message: 'No token provided' });
    }

    const tokenParts = authHeader.split(' ');
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
        return res.status(403).json({ message: 'Malformed token' });
    }

    const token = tokenParts[1];

    jwt.verify(token, SECRET_KEY, (err, data) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }
        req.authData = data;
        next();
    });
}

// Protected Route
app.post('/verify', verifyToken, (req, res) => {
    res.status(200).json({ message: 'Welcome', authData: req.authData });
});

// Start Server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
