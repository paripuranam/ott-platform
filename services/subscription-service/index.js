const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3003;

app.use(cors());

const subscriptions = [
  { id: 1, name: 'Basic', price: '9.99' },
  { id: 2, name: 'Premium', price: '14.99' }
];

app.get('/subscriptions', (req, res) => {
  res.status(200).json(subscriptions);
});

app.listen(PORT, () => {
  console.log(`Subscription Service running on port ${PORT}`);
});
