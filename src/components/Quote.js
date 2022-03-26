import React, { useEffect, useState } from 'react';
import quotes from './quotes';
import './Quote.css';

function Quote() {
  const [quote, setQuote] = useState(quotes[0]);
  const randomQuote = (quotes) => quotes[Math.floor(Math.random() * quotes.length)];

  useEffect(() => {
    setQuote(randomQuote(quotes));
  }, []);

  return (
    <div id="quote_container">
      <h1>
        {' '}
        {quote.quote}
        {' '}
      </h1>
      <strong>
        --
        {quote.author}
      </strong>
    </div>
  );
}

export default Quote;
