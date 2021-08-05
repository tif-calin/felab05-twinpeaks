import { useState, useEffect } from 'react';
import { fetchQuote } from '../services/twinPeaksApi.js';

export const useQuote = () => {
  const [quote, setQuote] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) fetchQuote()
      .then(data => setQuote(data))
      .finally(() => setLoading(false))
    ;
  }, [loading]);

  return [quote, loading, setLoading];
};
