const quotes = require('./data');
const mockData = require('./tests/data.mock');

const getRandomElement = () => {
  if (!Array.isArray(quotes)) throw new Error('Expected an array');
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getAllQuotes = (author = null, arr = quotes) => {
  if (!Array.isArray(arr)) {
    throw new Error('The second argument must be an array');
  }
  if (author === null) return arr;
  return arr.filter((obj) => obj.person === author);
};

module.exports = { getRandomElement, getAllQuotes };
