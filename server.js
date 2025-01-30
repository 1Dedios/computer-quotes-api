const express = require('express');
const app = express();
const PORT = process.env.PORT || 4001;
const { getRandomElement, getAllQuotes } = require('./utils');

app.use(express.static('public'));

app.get('/api/quotes', (req, res, next) => {
  if (req.query.person) {
    const getAuthorQuotes = getAllQuotes(req.query.person);
    if (getAuthorQuotes.length === 0) res.status(200).send([]);
    res.status(200).send(getAuthorQuotes);
  } else {
    res.status(200).send(getAllQuotes());
  }
  next();
});

app.get('/api/quotes/random', (req, res, next) => {
  const randomQuote = getRandomElement();
  res.status(200).send(randomQuote);
  next();
});

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
