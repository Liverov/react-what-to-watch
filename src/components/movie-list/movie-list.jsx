import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {filmsPropType, genrePropType, getFilmsByGenrePropType} from '../../props';
import {CountCardsOnPage} from '../../const';
import * as actions from "../../actions/actions";

import MovieCard from '../movie-card/movie-card';

const MovieList = ({films, sortedFilms, genre, getFilmsByGenre}) => {
  const mainPageList = sortedFilms.slice(0, CountCardsOnPage.MAIN);

  useEffect(() => {
    getFilmsByGenre(films, genre);
  }, [genre]);

  return (
    <>
      {mainPageList.map((film) => <MovieCard key={film.filmId} film={film} />)}
    </>
  );
};

MovieList.propTypes = {
  films: filmsPropType,
  sortedFilms: filmsPropType,
  genre: genrePropType,
  getFilmsByGenre: getFilmsByGenrePropType
};

const mapStateToProps = (state) => ({
  genre: state.genre,
  films: state.films,
  sortedFilms: state.sortedFilms
});

export {MovieList};
export default connect(mapStateToProps, actions)(MovieList);
