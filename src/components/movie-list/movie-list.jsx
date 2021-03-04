import React from 'react';
import {filmsPropType} from '../../props';
import {CountCardsOnPage} from '../../const';

import MovieCard from '../movie-card/movie-card';

const MovieList = ({films}) => {
  const shortFilms = films.slice(0, CountCardsOnPage.MAIN);
  return (
    <>
      {shortFilms.map((film) => <MovieCard key={film.filmId} film={film} />)}
    </>
  );
};

MovieList.propTypes = {
  films: filmsPropType
};

export default MovieList;
