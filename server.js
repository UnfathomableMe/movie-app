const express = require('express');
const path = require('path');
const axios = require('axios'); // Make sure to install axios using: npm install axios

const app = express();

const publicPath = path.join(__dirname, 'build'); // Adjust the path based on your project structure

app.use(express.static(publicPath));

// Proxy route for OMDB API
app.get('/movie/details/:imdbID', async (req, res) => {
  const imdbID = req.params.imdbID;
  const omdbApiUrl = `http://www.omdbapi.com/?i=${imdbID}&apikey=4845c445`;

  try {
    const response = await axios.get(omdbApiUrl);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
