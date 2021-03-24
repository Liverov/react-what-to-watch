import React from 'react';

import MainScreenCard from "./main-screen-card";
import MovieList from '../movie-list/movie-list';
import GenresList from "../genres-list/genres-list";
import Footer from '../../layout/footer';

const MainScreen = () => {

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
