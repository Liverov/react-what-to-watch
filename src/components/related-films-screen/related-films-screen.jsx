import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {COUNT_RELATED_CARDS} from "../../const";
import {fetchFilms} from "../../store/api-actions";

import MovieCard from "../movie-card/movie-card";
import Loader from "../loader/loader";


const RelatedFilmsScreen = () => {
  const {filmsData, isFilmsLoaded} = useSelector((state) => state.FILMS_DATA.films);
  const {filmData: {genre}} = useSelector((state) => state.FILM_DATA.film);

  const getRelatedFilms = filmsData.filter((film) => film.genre === genre).slice(0, COUNT_RELATED_CARDS);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isFilmsLoaded) {
      dispatch(fetchFilms());
    }
  }, [isFilmsLoaded]);

  if (!isFilmsLoaded) {
    return (
      <Loader />
    );
  }

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__movies-list">
        {
          getRelatedFilms.map((film) => <MovieCard key={film.itemId} film={film} />)
        }
      </div>
    </section>
  );
};

export default RelatedFilmsScreen;
