import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {connect} from "react-redux";

import {authorizationStatusPropType, filmPropType, onLoadDataPropType} from '../../types';
import {fetchFilm} from "../../api-actions";
import {SetAuthStatus} from "../../const";

import Header from '../../layout/header';
import CheckAuth from "../check-auth/check-auth";
import Tabs from './movie-screen-tabs';
import MovieCardInfo from '../movie-card-info/movie-card-info';
import RelatedFilmsScreen from "../related-films-screen/related-films-screen";
import Footer from '../../layout/footer';
import Loader from "../loader/loader";
import AddReviewButton from "../add-review-button/add-review-button";

const MovieScreen = ({film, authorizationStatus, onLoadData}) => {
  const {id} = useParams();

  const {isFilmLoaded, filmData} = film;
  const {
    itemId,
    name,
    genre,
    posterImage,
    backgroundImage
  } = filmData;

  useEffect(() => {
    if (!isFilmLoaded || itemId !== id) {
      onLoadData(id);
    }
  }, [id]);

  if (!isFilmLoaded) {
    return (
      <Loader />
    );
  }

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header setClassName="movie-card__head">
            <CheckAuth />
          </Header>

          <div className="movie-card__wrap">
            <MovieCardInfo film={filmData}>
              {authorizationStatus === SetAuthStatus.AUTH ? <AddReviewButton itemId={itemId} /> : null}
            </MovieCardInfo>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>

            <Tabs />
          </div>
        </div>
      </section>

      <div className="page-content">
        <RelatedFilmsScreen genre={genre} />

        <Footer />
      </div>
    </>
  );
};

MovieScreen.propTypes = {
  film: filmPropType,
  onLoadData: onLoadDataPropType,
  authorizationStatus: authorizationStatusPropType
};

const mapStateToProps = ({film, authorizationStatus}) => ({film, authorizationStatus});

const mapDispatchToProps = (dispatch) => ({
  onLoadData(id) {
    dispatch(fetchFilm(id));
  }
});

export {MovieScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MovieScreen);
