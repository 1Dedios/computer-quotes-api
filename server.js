const express = require('express');
const app = express();
const PORT = process.env.PORT || 4001;
const { getRandomElement, getAllQuotes } = require('./utils');

app.use(express.static('public'));
// STATUS: express.json() ONLY FOR JSON REQUEST PAYLOADS IN THE BODY - great for POST & PUT

app.use('/api/quotes', (req, res, next) => {
  if (req.query.person) {
    req.query.person = req.query.person.toString().toLowerCase();
    console.log('BACKEND COMM: ', req.query.person);
  }
  next();
});

app.get('/api/quotes', (req, res, next) => {
  if (req.query.person) {
    if (getAllQuotes(req.query.person).length === 0) {
      res.status(200).send([]);
    } else {
      // STATUS: when the req.query.person value is correctly normalized (all lowercase) it does retrieve the correct info - console.log('res should send: ', getAllQuotes(req.query.person));
      res.status(200).send(getAllQuotes(req.query.person));
    }
  } else {
    res.status(200).send(getAllQuotes());
  }
});

app.get('/api/quotes/random', (req, res, next) => {
  const randomQuote = getRandomElement();
  res.status(200).send(randomQuote);
});

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
