import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {filmPropType, onLoadDataPropType, authorizationStatusPropType} from '../../types';
import {fetchPromoFilm} from "../../api-actions";

import Header from "../../layout/header";
import Avatar from "../avatar/avatar";
import MovieCardInfo from "../movie-card-info/movie-card-info";
import Loader from "../loader/loader";
import {AuthorizationStatus} from "../../const";
import LoginButton from "../login-button/login-button";

const MainScreenCard = ({promoFilm, onLoadData, authorizationStatus}) => {
  const {isPromoFilmLoaded, promoFilmData} = promoFilm;

  useEffect(() => {
    if (!isPromoFilmLoaded) {
      onLoadData();
    }
  }, [isPromoFilmLoaded]);

  if (!isPromoFilmLoaded) {
    return (
      <Loader />
    );
  }

  const {
    name,
    backgroundImage,
    posterImage
  } = promoFilmData;


  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header setClassName="movie-card__head">
        {authorizationStatus === AuthorizationStatus.AUTH ? <Avatar /> : <LoginButton />}
      </Header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
          </div>

          <MovieCardInfo film={promoFilmData} />
        </div>
      </div>
    </section>
  );
};

MainScreenCard.propTypes = {
  promoFilm: filmPropType,
  onLoadData: onLoadDataPropType,
  authorizationStatus: authorizationStatusPropType
};

const mapStateToProps = ({promoFilm, authorizationStatus}) => ({promoFilm, authorizationStatus});
const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchPromoFilm());
  }
});
export {MainScreenCard};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreenCard);
