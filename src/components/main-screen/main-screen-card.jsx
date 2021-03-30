import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {filmPropType, onLoadDataPropType} from '../../types';
import {fetchPromoFilm} from "../../api-actions";

import Header from "../../layout/header";
import Avatar from "../avatar/avatar";
import MovieCardInfo from "../movie-card-info/movie-card-info";
import Spinner from "../spinner/spinner";

const MainScreenCard = ({promoFilm, onLoadData}) => {
  const {isPromoFilmLoaded, promoFilmData} = promoFilm;

  useEffect(() => {
    if (!isPromoFilmLoaded) {
      onLoadData();
    }
  }, [isPromoFilmLoaded]);

  if (!isPromoFilmLoaded) {
    return (
      <Spinner />
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
        <Avatar />
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
  onLoadData: onLoadDataPropType
};

const mapStateToProps = ({promoFilm}) => ({promoFilm});
const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchPromoFilm());
  }
});
export {MainScreenCard};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreenCard);
