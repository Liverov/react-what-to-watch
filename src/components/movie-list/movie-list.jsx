import React from 'react';
import {filmsPropType} from '../../props';
import {ShowCardsOnPage} from '../../const';

import MovieCard from '../movie-card/movie-card';

const MovieList = ({films}) => {
  return (
    <>
      {films.map((film, i) => i < ShowCardsOnPage.MAIN ? <MovieCard key={film.id} film={film} /> : ``)}
    </>
  );
};

MovieList.propTypes = {
  films: filmsPropType
};

export default MovieList;
