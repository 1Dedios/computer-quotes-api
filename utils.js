const { quotes } = require('./data');

const getRandomElement = () => {
  if (!Array.isArray(quotes)) throw new Error('Expected an array');
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getAllQuotes = (author = null, arr) => {
  if (author === null) {
    // return all quotes
  } else {
    // retrieve quotes only for that author
    // arr elements are objects
    const findAuthorQuote = quotes.filter((obj) => {
      obj.keys(author) === author;
    });
    return findAuthorQuote;
  }
};

module.exports = {
  getRandomElement,
  getAllQuotes,
};
