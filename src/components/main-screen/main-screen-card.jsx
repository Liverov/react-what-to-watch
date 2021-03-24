import React from 'react';
import {connect} from "react-redux";
import {filmsPropType} from '../../types';
import {getRandomInt} from "../../utils/utils";

import Header from "../../layout/header";
import Avatar from "../avatar/avatar";
import MovieCardInfo from "../movie-card-info/movie-card-info";

const MainScreenCard = ({films}) => {
  const randomFilm = getRandomInt({max: films.length - 1});

  const {
    name,
    backgroundImage,
    posterImage
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

          <MovieCardInfo film={films[randomFilm]} />
        </div>
      </div>
    </section>
  );
};

MainScreenCard.propTypes = {
  films: filmsPropType
};

const mapStateToProps = ({films}) => ({films});

export {MainScreenCard};
export default connect(mapStateToProps, null)(MainScreenCard);
