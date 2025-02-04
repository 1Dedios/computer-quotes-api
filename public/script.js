const fetchAllButton = document.getElementById('fetch-quotes');
const fetchRandomButton = document.getElementById('fetch-random');
const fetchByAuthorButton = document.getElementById('fetch-by-author');

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.querySelector('.quote');
const attributionText = document.querySelector('.attribution');

// TODO: all render and reset functions should be their own module
const resetQuotes = () => {
  quoteContainer.innerHTML = '';
};

const renderError = (response) => {
  quoteContainer.innerHTML = `<p>Your request returned an error from the server: </p>
<p>Code: ${response.status}</p>
<p>${response.statusText}</p>`;
};

// TODO: created renderOneQuote for the random quote button response but might refactor after implementing the use of renderQuotes function
const renderOneQuote = (quote) => {
  const newQuote = document.createElement('div');
  newQuote.className = 'single-quote';
  newQuote.innerHTML = `<div class="quote-text">${quote.quote}</div> <div class="attribution">- ${quote.person}</div>`;
  quoteContainer.appendChild(newQuote);
};

const renderQuotes = (quotes = []) => {
  resetQuotes();
  if (quotes.length > 0) {
    quotes.forEach((quote) => {
      const newQuote = document.createElement('div');
      newQuote.className = 'single-quote';
      newQuote.innerHTML = `<div class="quote-text">${quote.quote}</div> <div class="attribution">- ${quote.person}</div>`;
      quoteContainer.appendChild(newQuote);
    });
  } else {
    quoteContainer.innerHTML = '<p>Your request returned no quotes.</p>';
  }
};

// TODO: implement fetch by author

fetchByAuthorButton.addEventListener('click', () => {
  const userSearch = document.getElementById('author')?.value;
  let url;

  if (userSearch) {
    console.log('user search not empty: ', userSearch);
    const searchQuery = new URLSearchParams({
      person: userSearch.toString().trim(),
    });
    url = `/api/quotes?${searchQuery}`;
  } else {
    url = '/api/quotes';
  }

  console.log('url:', url);

  fetch(url)
    .then((response) => {
      console.log(response);
      if (response.ok) {
        renderQuotes(response.quotes);
      }
    })
    .catch((e) => renderError(e));
});

fetchRandomButton.addEventListener('click', () => {
  fetch('/api/quotes/random')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        renderError(response);
      }
    })
    .then((response) => {
      renderOneQuote(response);
    });
});

fetchAllButton.addEventListener('click', () => {
  fetch('/api/quotes')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        renderError(response);
      }
    })
    .then((response) => {
      renderQuotes(response);
    });
});
