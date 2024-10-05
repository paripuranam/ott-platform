const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let subscriptions = [{ userId: 1, plan: 'Premium', validTill: '2024-12-31' }];

app.get('/subscription/:userId', (req, res) => {
    const userId = req.params.userId;
    const subscription = subscriptions.find(sub => sub.userId == userId);
    if (subscription) {
        return res.json(subscription);
    }
    res.status(404).json({ message: 'Subscription not found' });
});

app.listen(3003, () => console.log('Subscription service running on port 3003'));
