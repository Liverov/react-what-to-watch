import React from 'react';
import {connect} from "react-redux";
import {filmsPropType, genrePropType} from '../../types';
import {CountCardsOnPage} from '../../const';
import {prepareFilmsByGenre} from '../../utils/utils';

import MovieCard from '../movie-card/movie-card';

const MovieList = ({films}) => {
  let mainPageList = films.slice(0, CountCardsOnPage.MAIN);

  return (
    <>
      {mainPageList.map((film) => <MovieCard key={film.filmId} film={film} />)}
    </>
  );
};

MovieList.propTypes = {
  films: filmsPropType,
  genre: genrePropType
};

const mapStateToProps = ({films, genre}) => {
  return {
    films: prepareFilmsByGenre({films, genre}),
    genre
  };
};
export {MovieList};
export default connect(mapStateToProps, null)(MovieList);
