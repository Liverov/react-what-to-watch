import React from 'react';
import PropTypes from 'prop-types';
import Homepage from '../homepage/homepage';

const App = (props) => {
  const {movie} = props;

  return (
    <Homepage movie={movie} />
  );
};

App.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string,
    promoDate: PropTypes.number
  }),
};

export default App;

