import React from 'react';

import BigMovieCard from "../movie-card/movie-card-big";
import MovieList from '../movie-list/movie-list';
import GenresList from "../genres-list/genres-list";
import Footer from '../../layout/footer';

const MainScreen = () => {

  return (
    <>
      <BigMovieCard />

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
