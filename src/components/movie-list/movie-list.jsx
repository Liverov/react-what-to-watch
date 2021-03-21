import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {
  filmsPropType,
  genrePropType,
  countCardsOnPagePropType,
  resetCountCardsPropType
} from '../../types';
import {CountCardsOnPage} from '../../const';
import {prepareFilmsByGenre} from '../../utils/utils';

import MovieCardSmall from '../movie-card/movie-card-small';
import ShowMore from "../show-more/show-more";
import {ActionCreator} from "../../actions/actions";

const MovieList = ({films, countCardsOnPage, resetCountCards}) => {
  let mainPageList = films.length > CountCardsOnPage.MAIN ? films.slice(0, countCardsOnPage) : films;

  useEffect(() => {
    return () => {
      resetCountCards();
    };
  }, []);

  return (
    <>
      <div className="catalog__movies-list">
        {mainPageList.map((film) => <MovieCardSmall key={film.filmId} film={film} />)}
      </div>

      {mainPageList.length !== films.length && <ShowMore />}
    </>
  );
};

MovieList.propTypes = {
  films: filmsPropType,
  genre: genrePropType,
  countCardsOnPage: countCardsOnPagePropType,
  resetCountCards: resetCountCardsPropType
};

const mapStateToProps = ({films, genre, countCardsOnPage}) => {
  return {
    films: prepareFilmsByGenre({films, genre}),
    genre,
    countCardsOnPage
  };
};

const mapDispatchToProps = (dispatch) => ({
  resetCountCards() {
    dispatch(ActionCreator.resetCountCards());
  }
});

export {MovieList};
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
