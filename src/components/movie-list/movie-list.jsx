import React from 'react';
import {filmsPropType} from '../../props';
import {CountCardsOnPage} from '../../const';

import MovieCard from '../movie-card/movie-card';

const MovieList = ({films}) => {
  films.length = CountCardsOnPage.MAIN;

  return (
    <>
      {films.map((film) => <MovieCard key={film.id} film={film} />)}
    </>
  );
};

MovieList.propTypes = {
  films: filmsPropType
};

export default MovieList;
