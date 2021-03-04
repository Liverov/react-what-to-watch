import React from 'react';
import {filmPropType} from '../../../props';

const MovieScreenOverview = ({film}) => {

  const {
    rating,
    scoresCount,
    director,
    starring
  } = film;

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">Very good</span>
          <span className="movie-rating__count">{scoresCount}</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{film.description}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>{starring.map((item) => `${item}, `)}</strong></p>
      </div>
    </>
  );
};

MovieScreenOverview.propTypes = {
  film: filmPropType
};

export default MovieScreenOverview;
