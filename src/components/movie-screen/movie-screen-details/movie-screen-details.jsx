import React from 'react';
import {connect} from "react-redux";
import {filmPropType} from '../../../types';
import {getFilmRunTime, getStarring} from '../../../utils/utils';

const MovieScreenDetails = ({film}) => {
  const {filmData: {
    director,
    starring,
    runTime,
    genre,
    released,
  }} = film;

  return (
    <>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {getStarring(starring)}
            </span>
          </p>
        </div>

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{getFilmRunTime(runTime)}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{released}</span>
          </p>
        </div>
      </div>
    </>
  );
};

MovieScreenDetails.propTypes = {
  film: filmPropType
};

const mapStateToProps = ({film}) => ({film});

export {MovieScreenDetails};
export default connect(mapStateToProps, null)(MovieScreenDetails);
