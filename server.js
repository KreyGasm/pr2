const express = require('express');
const path = require('path');

const app = express();
const port = 3000;


app.use(express.json());

const staticPath = path.resolve(__dirname);

app.use(express.static(staticPath));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    if (username && email && password) {
        res.json({ message: 'Registration successful' });
    } else {
        res.status(400).json({ error: 'Missing username, email, or password' });
    }
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        res.json({ message: 'Login successful' });
        
    } else {
        res.status(400).json({ error: 'Missing username or password' });
    }
});
