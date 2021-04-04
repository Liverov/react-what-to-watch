import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";

import Header from '../../layout/header';
import Avatar from '../avatar/avatar';
import MovieCard from '../movie-card/movie-card';
import Footer from '../../layout/footer';
import {fetchFavorites} from "../../store/api-actions";

const MyListScreen = () => {
  const {favoriteData} = useSelector((state) => state.FAVORITE_DATA.favorite);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());
  }, []);

  return (
    <div className="user-page">
      <Header setClassName="user-page__head">
        <h1 className="page-title user-page__title">My list</h1>
        <Avatar/>
      </Header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__movies-list">
          {favoriteData.map((film) => film.isFavorite ? <MovieCard key={film.itemId} film={film}/> : ``)}
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default MyListScreen;
