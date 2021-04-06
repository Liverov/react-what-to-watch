import React, {useState, useEffect} from 'react';
import {useSelector} from "react-redux";
import {COUNT_MAIN_PAGE_CARDS} from '../../const';

import MovieCard from '../movie-card/movie-card';
import ShowMore from "../show-more/show-more";
import {getFilmsByGenreSelector} from "../../store/films-data/selectors";


const MovieList = () => {
  const [count, setCount] = useState(COUNT_MAIN_PAGE_CARDS);

  const genre = useSelector((state) => state.GENRE);
  const sortedFilmsByGenre = useSelector((state) => getFilmsByGenreSelector(state));

  const countCardsHandler = () => {
    setCount(count + COUNT_MAIN_PAGE_CARDS);
  };

  useEffect(() => {
    return () => {
      setCount(COUNT_MAIN_PAGE_CARDS);
    };
  }, [genre]);

  const mainMoviesList = sortedFilmsByGenre.length > COUNT_MAIN_PAGE_CARDS ? sortedFilmsByGenre.slice(0, count) : sortedFilmsByGenre;

  return (
    <>
      <div className="catalog__movies-list">
        {mainMoviesList.map((film) => <MovieCard key={film.itemId} film={film} />)}
      </div>

      {mainMoviesList.length !== sortedFilmsByGenre.length && <ShowMore countCardsHandler={countCardsHandler} />}
    </>
  );
};

export default MovieList;
