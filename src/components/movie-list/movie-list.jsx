import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import {filmsPropType, genrePropType} from '../../types';
import {COUNT_MAIN_PAGE_CARDS} from '../../const';
import {prepareFilmsByGenre} from '../../utils/utils';


import MovieCard from '../movie-card/movie-card';
import ShowMore from "../show-more/show-more";


const MovieList = ({films, genre}) => {
  const [count, setCount] = useState(COUNT_MAIN_PAGE_CARDS);
  const {filmsData} = films;

  const countCardsHandler = () => {
    setCount(count + COUNT_MAIN_PAGE_CARDS);
  };

  useEffect(() => {
    return () => {
      setCount(COUNT_MAIN_PAGE_CARDS);
    };
  }, [genre]);

  const mainPageList = filmsData.length > COUNT_MAIN_PAGE_CARDS ? filmsData.slice(0, count) : filmsData;

  return (
    <>
      <div className="catalog__movies-list">
        {mainPageList.map((film) => <MovieCard key={film.itemId} film={film} />)}
      </div>

      {mainPageList.length !== filmsData.length && <ShowMore countCardsHandler={countCardsHandler} />}
    </>
  );
};

MovieList.propTypes = {
  films: filmsPropType,
  genre: genrePropType
};

const mapStateToProps = ({films, genre}) => ({
  films: {
    filmsData: prepareFilmsByGenre({films, genre})
  },
  genre
});

export {MovieList};
export default connect(mapStateToProps, null)(MovieList);
