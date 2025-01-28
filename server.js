const express = require('express');
const app = express();
const PORT = process.env.PORT || 4001;
const { getRandomElement } = require('./utils');

app.use(express.static('public'));

app.get('/', (req, res, next) => {
  res.status(200).send('public');
});

app.get('/api/quotes', (req, res, next) => {
  if (req.query.person) {
    // return with the author specified
  } else {
    // send back an empty array
    res.send(204).status();
  }
});

app.get('/api/quotes/random', (req, res, next) => {
  const randomQuote = getRandomElement();
  res.status(200).send(randomQuote);
});

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
