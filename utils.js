const getRandomElement = (arr) => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr[Math.floor(Math.random() * arr.length)];
};

const getAllQuotes = (author = null, arr) => {
  if (author === null) {
    // return all quotes
  } else {
    // retrieve quotes only for that author
    // arr elements are objects
    const findAuthorQuote = arr.filter((obj) => {
      obj.keys(author) === author;
    });
    return findAuthorQuote;
  }
};

module.exports = {
  getRandomElement,
  getAllQuotes,
};
