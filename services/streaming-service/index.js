// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

// Video schema and model
const videoSchema = new mongoose.Schema({
  length: Number,
  chunkSize: Number,
  uploadDate: Date,
  filename: String,
});

// Use GridFS to store and retrieve videos
const Video = mongoose.model('uploads.files', videoSchema, 'uploads.files');

const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret';

// Middleware to verify token
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ error: 'No token provided' });

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(500).json({ error: 'Failed to authenticate token' });
    req.userId = decoded.userId;
    next();
  });
};

// Route to generate a JWT 
app.post('/api/login', (req, res) => {
  const userId = req.body.userId; 
  const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// Search route
app.post('/api/search', verifyToken, async (req, res) => {
  try {
    const { filename } = req.body;
    const videos = await Video.find({ filename: { $regex: filename, $options: 'i' } });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Video streaming route
app.get('/db/test/uploads.files/:id', (req, res) => {
    const videoId = req.params.id;
    
    const gfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db);
    
    const downloadStream = gfs.openDownloadStream(mongoose.Types.ObjectId(videoId));
    
    downloadStream.on('error', (err) => {
        res.status(404).send('Video not found');
    });

    res.set('Content-Type', 'video/mp4'); 
    downloadStream.pipe(res); 
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
