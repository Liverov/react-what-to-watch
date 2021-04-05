import React from 'react';
import {useSelector} from "react-redux";
import {getStarring, ratingToText} from '../../../utils';

const MovieScreenOverview = () => {
  const {filmData} = useSelector((state) => state.FILM_DATA.film);

  const {
    rating,
    scoresCount,
    director,
    starring,
    description
  } = filmData;

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingToText(rating)}</span>
          <span className="movie-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {getStarring(starring)}</strong></p>

      </div>
    </>
  );
};

export default MovieScreenOverview;
