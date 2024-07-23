const axios = require('axios');
const express = require('express');
const app = express();
const port = 3000;

const options = {
  method: 'GET',
  url: 'https://free-football-live-score.p.rapidapi.com/api/v2/all-live-stream',
  headers: {
    'X-RapidAPI-Key': '73238a6593msh93ac3c06e466b5fp11a7a9jsn99c4160e588a',  // Substitua por sua nova chave da API
    'X-RapidAPI-Host': 'free-football-live-score.p.rapidapi.com'
  }
};

app.get('/games', async (req, res) => {
  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching games:', error);
    res.status(500).send('Error fetching games');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});