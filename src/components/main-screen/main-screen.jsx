import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import MainScreenCard from "./main-screen-card";
import MovieList from '../movie-list/movie-list';
import GenresList from "../genres-list/genres-list";
import Footer from '../../layout/footer';
import {changeGenre} from "../../store/actions";
import {FILTER_DEFAULT} from "../../const";


const MainScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(changeGenre(FILTER_DEFAULT));
  }, []);

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
