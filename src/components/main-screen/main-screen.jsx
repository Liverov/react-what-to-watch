import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchFilms} from "../../store/api-actions";

import Loader from '../loader/loader';
import MainScreenCard from "./main-screen-card";
import MovieList from '../movie-list/movie-list';
import GenresList from "../genres-list/genres-list";
import Footer from '../../layout/footer';
import {changeGenre} from "../../store/actions";
import {FILTER_DEFAULT} from "../../const";


const MainScreen = () => {
  const {isFilmsLoaded} = useSelector((state) => state.FILMS_DATA.films);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isFilmsLoaded) {
      dispatch(fetchFilms());
    }
  }, [isFilmsLoaded]);

  useEffect(() => {
    return () => dispatch(changeGenre(FILTER_DEFAULT));
  }, []);

  if (!isFilmsLoaded) {
    return (
      <Loader />
    );
  }

  return (
    <>
      <MainScreenCard />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList />
          <MovieList />

        </section>

        <Footer />
      </div>
    </>
  );
};


export default MainScreen;
