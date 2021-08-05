import React from 'react';
import { useQuote } from '../../state/quotes.js';
import Load from './Load';

const Quote = () => {
  const [quote, loading, setLoading] = useQuote();

  return <>
    <p>{loading ? 'loading...' : quote}</p>
    <Load useQuote={() => setLoading(true)}/>
  </>;
};

export default Quote;
