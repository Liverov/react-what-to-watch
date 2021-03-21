import React from 'react';
import {filmsPropType} from '../../types';

import Header from "../../layout/header";
import Avatar from "../avatar/avatar";
import {getRandomInt} from "../../utils/utils";
import {connect} from "react-redux";
import MovieCardDesc from "./movie-card-desc";

const MovieCardBig = ({films}) => {
  const randomFilm = getRandomInt({max: films.length - 1});

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

          <MovieCardDesc genre={genre} name={name} released={released} filmId={filmId} />
        </div>
      </div>
    </section>
  );
};

MovieCardBig.propTypes = {
  films: filmsPropType
};

const mapStateToProps = ({films}) => ({films});

export {MovieCardBig};
export default connect(mapStateToProps, null)(MovieCardBig);
