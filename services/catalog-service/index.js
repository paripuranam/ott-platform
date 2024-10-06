const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

let videos = [
  { id: 1, title: 'Movie 1', genre: 'Action', description: 'An action movie' },
  { id: 2, title: 'Movie 2', genre: 'Comedy', description: 'A comedy movie' },
];

// Get all videos
app.get('/videos', (req, res) => {
  res.status(200).json(videos);
});

// Get a video by ID
app.get('/videos/:id', (req, res) => {
  const video = videos.find(v => v.id === parseInt(req.params.id));
  if (!video) return res.status(404).json({ error: 'Video not found' });
  res.status(200).json(video);
});

// Add a new video
app.post('/videos', (req, res) => {
  const { title, genre, description } = req.body;
  const newVideo = {
    id: videos.length + 1, // simple ID generation
    title,
    genre,
    description,
  };
  videos.push(newVideo);
  res.status(201).json(newVideo);
});

// Update a video
app.put('/videos/:id', (req, res) => {
  const video = videos.find(v => v.id === parseInt(req.params.id));
  if (!video) return res.status(404).json({ error: 'Video not found' });

  const { title, genre, description } = req.body;
  video.title = title;
  video.genre = genre;
  video.description = description;

  res.status(200).json(video);
});

// Delete a video
app.delete('/videos/:id', (req, res) => {
  const videoIndex = videos.findIndex(v => v.id === parseInt(req.params.id));
  if (videoIndex === -1) return res.status(404).json({ error: 'Video not found' });

  videos.splice(videoIndex, 1);
  res.status(204).send(); // No content
});

// Start the server
app.listen(PORT, () => {
  console.log(`Catalog Service running on port ${PORT}`);
});
