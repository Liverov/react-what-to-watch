import React from 'react';
import {filmsPropType} from '../../types';

import Header from '../../layout/header';
import Avatar from '../avatar/avatar';
import MovieCardSmall from '../movie-card/movie-card-small';
import Footer from '../../layout/footer';

const MyListScreen = ({films}) => (
  <div className="user-page">
    <Header setClassName="user-page__head">
      <h1 className="page-title user-page__title">My list</h1>
      <Avatar />
    </Header>

    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <div className="catalog__movies-list">
        {films.map((film, i) => film.isFavorite ? <MovieCardSmall key={film.filmId + i} film={film} /> : ``)}
      </div>
    </section>

    <Footer />
  </div>
);

MyListScreen.propTypes = {
  films: filmsPropType
};

export default MyListScreen;
