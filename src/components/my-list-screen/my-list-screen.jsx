import React from 'react';
import {connect} from "react-redux";
import {filmsPropType} from '../../types';

import Header from '../../layout/header';
import Avatar from '../avatar/avatar';
import MovieCard from '../movie-card/movie-card';
import Footer from '../../layout/footer';

const MyListScreen = ({films}) => {
  const {filmsData} = films;

  return (
    <div className="user-page">
      <Header setClassName="user-page__head">
        <h1 className="page-title user-page__title">My list</h1>
        <Avatar/>
      </Header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__movies-list">
          {filmsData.map((film) => film.isFavorite ? <MovieCard key={film.id} film={film}/> : ``)}
        </div>
      </section>
      <Footer/>
    </div>
  );
};

MyListScreen.propTypes = {
  films: filmsPropType
};

const mapStateToProps = ({films}) => ({films});

export {MyListScreen};
export default connect(mapStateToProps, null)(MyListScreen);
