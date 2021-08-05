import React from 'react';
import propTypes from 'prop-types';

const Load = props => (
  <button onClick={() => props.useQuote()}>
    click here for quote
  </button>
);

Load.propTypes = {
  useQuote: propTypes.func.isRequired
};

export default Load;
