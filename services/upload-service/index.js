const express = require('express');
const multer = require('multer');
const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

const app = express();

// Setup AWS S3
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'your-region',
});

const upload = multer({ storage: multer.memoryStorage() });

app.post('/upload', upload.single('video'), async (req, res) => {
    try {
        const file = req.file;
        const fileName = `${uuidv4()}-${file.originalname}`;

        // Upload video to S3
        const params = {
            Bucket: 'your-s3-bucket-name',
            Key: fileName,
            Body: file.buffer,
            ContentType: file.mimetype,
        };

        const data = await s3.upload(params).promise();
        res.json({
            message: 'Video uploaded successfully!',
            videoUrl: data.Location,  // S3 URL of the uploaded video
        });
    } catch (error) {
        console.error('Error uploading video: ', error);
        res.status(500).json({ message: 'Failed to upload video' });
    }
});

app.listen(3004, () => console.log('Upload service running on port 3004'));
