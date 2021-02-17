import React from 'react';
import {filmPropType} from '../../props';

const MovieScreenOverview = ({film}) => {
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{film.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">Very good</span>
          <span className="movie-rating__count">{film.scores_count}</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{film.description}</p>

        <p className="movie-card__director"><strong>Director: {film.director}</strong></p>

        <p className="movie-card__starring"><strong>{film.starring.map((item) => `${item}, `)}</strong></p>
      </div>
    </>
  );
};

MovieScreenOverview.propTypes = {
  film: filmPropType
};

export default MovieScreenOverview;
