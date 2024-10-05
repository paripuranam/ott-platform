const express = require('express');
const app = express();

let catalog = [
    { id: 1, title: 'Movie 1', genre: 'Action' },
    { id: 2, title: 'Movie 2', genre: 'Drama' },
];

app.get('/catalog', (req, res) => {
    res.json(catalog);
});

app.listen(3001, () => console.log('Catalog service running on port 3001'));
