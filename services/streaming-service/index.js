const express = require('express');
const app = express();

app.get('/stream/:contentId', (req, res) => {
    const contentId = req.params.contentId;
    res.send(`Streaming content with ID: ${contentId}`);
});

app.listen(3002, () => console.log('Streaming service running on port 3002'));
