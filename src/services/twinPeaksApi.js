export const fetchQuote = () => {
  return fetch('https://damp-cove-34137.herokuapp.com/api/quotes/random')
    .then(resp => resp.json())
    .then(json => json.quoteText)
  ;
};
