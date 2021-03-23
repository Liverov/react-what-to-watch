import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import {filmsPropType, genrePropType} from '../../types';
import {COUNT_MAIN_PAGE_CARDS} from '../../const';
import {prepareFilmsByGenre} from '../../utils/utils';

import MovieCard from '../movie-card/movie-card';
import ShowMore from "../show-more/show-more";

const MovieList = ({films, genre}) => {
  const [count, setCount] = useState(COUNT_MAIN_PAGE_CARDS);

  const countCardsHandler = () => {
    setCount(count + COUNT_MAIN_PAGE_CARDS);
  };

  useEffect(() => {
    return () => {
      setCount(COUNT_MAIN_PAGE_CARDS);
    };
  }, [genre]);

  const mainPageList = films.length > COUNT_MAIN_PAGE_CARDS ? films.slice(0, count) : films;

  return (
    <>
      <div className="catalog__movies-list">
        {mainPageList.map((film) => <MovieCard key={film.filmId} film={film} />)}
      </div>

      {mainPageList.length !== films.length && <ShowMore countCardsHandler={countCardsHandler} />}
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
