const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let users = [{ id: 1, username: 'user1', password: 'password1', role: 'subscriber' }];

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        return res.status(200).json({ message: 'Login successful', user });
    }
    return res.status(401).json({ message: 'Login failed' });
});

app.listen(3000, () => console.log('Auth service running on port 3000'));
