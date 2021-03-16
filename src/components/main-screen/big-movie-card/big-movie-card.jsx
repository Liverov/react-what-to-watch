import React from 'react';
import {useHistory} from 'react-router-dom';
import {filmsPropType} from '../../../types';

import Header from "../../../layout/header";
import Avatar from "../../avatar/avatar";
import {getRandomInt} from "../../../utils/utils";
import {connect} from "react-redux";

const BigMovieCard = ({films}) => {
  const randomFilm = getRandomInt({max: films.length - 1});

  const history = useHistory();
  const {
    filmId,
    name,
    backgroundImage,
    posterImage,
    genre,
    released,
  } = films[randomFilm];

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

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{released}</span>
            </p>

            <div className="movie-card__buttons">
              <button
                onClick={() => history.push(`/player/${filmId}`)}
                className="btn btn--play movie-card__button"
                type="button"
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button
                onClick={() => history.push(`/mylist/`)}
                className="btn btn--list movie-card__button"
                type="button"
              >
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

BigMovieCard.propTypes = {
  films: filmsPropType
};

const mapStateToProps = (state) => ({
  films: state.films
});

export {BigMovieCard};
export default connect(mapStateToProps, null)(BigMovieCard);
