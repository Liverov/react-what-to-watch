import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchFilms} from "../../store/api-actions";
import {getRelatedFilmsSelector} from "../../store/films-data/selectors";

import MovieCard from "../movie-card/movie-card";
import Loader from "../loader/loader";


const RelatedFilmsScreen = () => {
  const {isFilmsLoaded} = useSelector((state) => state.FILMS_DATA.films);

  const getRelatedFilms = useSelector((state) => getRelatedFilmsSelector(state));

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
