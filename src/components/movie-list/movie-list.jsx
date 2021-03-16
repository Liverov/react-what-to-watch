import React from 'react';
import {connect} from "react-redux";
import {filmsPropType, genrePropType} from '../../types';
import {CountCardsOnPage, FILTER_DEFAULT} from '../../const';

import MovieCard from '../movie-card/movie-card';

const MovieList = ({films, genre}) => {
  let mainPageList = films.slice(0, CountCardsOnPage.MAIN);
  mainPageList = genre !== FILTER_DEFAULT ? mainPageList.filter((item) => item.genre === genre) : mainPageList;

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

const mapStateToProps = ({genre, films}) => ({genre, films});
export {MovieList};
export default connect(mapStateToProps, null)(MovieList);
