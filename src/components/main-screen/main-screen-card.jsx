import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {fetchPromoFilm} from "../../store/api-actions";

import Header from "../../layout/header";
import CheckAuth from "../check-auth/check-auth";
import MovieCardInfo from "../movie-card-info/movie-card-info";
import Loader from "../loader/loader";

const MainScreenCard = () => {
  const {isFilmLoaded, isPromo, filmData} = useSelector((state) => state.FILM_DATA.film);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isFilmLoaded || !isPromo) {
      dispatch(fetchPromoFilm());
    }
  }, [!isFilmLoaded]);

  if (!isFilmLoaded) {
    return (
      <Loader />
    );
  }
  const {
    name,
    backgroundImage,
    posterImage,
  } = filmData;

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header setClassName="movie-card__head">
        <CheckAuth />
      </Header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
          </div>

          <MovieCardInfo film={filmData} />
        </div>
      </div>
    </section>
  );
};

export default React.memo(MainScreenCard);
