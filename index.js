app.use(express.json());

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json()); // This line is super important

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('AI Image Generator Backend is running!');
});

app.post('/generate', async (req, res) => {
  const { prompt, style, size, count } = req.body;

  // Placeholder response — we’ll plug in real AI later
  res.json({
    success: true,
    images: [
      "https://example.com/image1.png",
      "https://example.com/image2.png"
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
