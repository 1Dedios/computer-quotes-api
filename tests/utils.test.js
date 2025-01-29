const { getRandomElement, getAllQuotes } = require('../utils');
const mockData = require('./data.mock');

describe('getAllQuotes() function tests', () => {
  test('no array arg will return an array', () => {
    expect(Array.isArray(getAllQuotes())).toBe(true);
  });

  test('array arg will return an array', () => {
    expect(Array.isArray(getAllQuotes(mockData))).toBe(true);
  });

  test('author arg (with a single quote in the data) will return an array with a single quote from that author', () => {
    let result = getAllQuotes('get it', mockData);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(1);
  });

  test('author arg (with multiple quotes in the data) will return an array with multiple quotes from that author', () => {
    const resultMultiple = getAllQuotes('someones name', mockData);
    expect(Array.isArray(resultMultiple)).toBe(true);
    expect(resultMultiple.length).toBeGreaterThanOrEqual(1);
  });
});
