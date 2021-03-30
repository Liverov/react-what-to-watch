import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchFilms} from "../../api-actions";
import {filmsPropType, onLoadDataPropType} from "../../types";

import Loader from '../loader/loader';
import MainScreenCard from "./main-screen-card";
import MovieList from '../movie-list/movie-list';
import GenresList from "../genres-list/genres-list";
import Footer from '../../layout/footer';


const MainScreen = ({films, onLoadData}) => {
  const {isFilmsLoaded} = films;

  useEffect(() => {
    if (!isFilmsLoaded) {
      onLoadData();
    }
  }, [isFilmsLoaded]);

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

MainScreen.propTypes = {
  films: filmsPropType,
  onLoadData: onLoadDataPropType
};

const mapStateToProps = ({films}) => ({films});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchFilms());
  },
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
