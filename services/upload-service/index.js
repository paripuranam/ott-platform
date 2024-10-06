const express = require('express');
const multer = require('multer');
const AWS = require('aws-sdk');

const app = express();
const PORT = process.env.PORT || 3004;

// Configure AWS S3
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('video'), (req, res) => {
  const file = req.file;
  
  const params = {
    Bucket: process.env.AWS_S3_BUCKET,
    Key: file.originalname,
    Body: file.buffer
  };

  s3.upload(params, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.status(200).send(`File uploaded successfully. ${data.Location}`);
  });
});

app.listen(PORT, () => {
  console.log(`Upload Service running on port ${PORT}`);
});
