
const express = require('express');
const mongoose = require('mongoose');
const { GridFSBucket } = require('mongodb');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3005;

// Connect to MongoDB
const mongoURI = 'mongodb://root:example@localhost:27017/';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true, 
}).then(() => {
  console.log('MongoDB connected successfully.');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Initialize GridFSBucket
const conn = mongoose.connection;
let bucket;

conn.once('open', () => {
  bucket = new GridFSBucket(conn.db, {
    bucketName: 'uploads' 
  });

  // Call the uploadVideo function here, after GridFSBucket is initialized
  const videoFilePath = path.join(__dirname, 'venkat.mp4'); // Replace with the actual video file name
  uploadVideo(videoFilePath);
});

// Function to upload video
const uploadVideo = (filePath) => {
  if (!bucket) {
    console.error('GridFSBucket not initialized. Cannot upload video.');
    return;
  }

  const uploadStream = bucket.openUploadStream(path.basename(filePath));
  const readStream = fs.createReadStream(filePath);

  readStream.pipe(uploadStream);

  uploadStream.on('finish', () => {
    console.log(`${path.basename(filePath)} has been uploaded successfully`);
  });

  uploadStream.on('error', (err) => {
    console.error('Error uploading video:', err);
  });
};

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
