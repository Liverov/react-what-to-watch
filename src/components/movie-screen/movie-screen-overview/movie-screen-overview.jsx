import React from 'react';
import {connect} from "react-redux";
import {filmPropType} from '../../../types';
import {getStarring} from '../../../utils/utils';

const MovieScreenOverview = ({film}) => {
  const {filmData: {
    rating,
    scoresCount,
    director,
    starring,
    description
  }} = film;

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">Very good</span>
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

MovieScreenOverview.propTypes = {
  film: filmPropType
};

const mapStateToProps = ({film}) => ({film});

export {MovieScreenOverview};
export default connect(mapStateToProps, null)(MovieScreenOverview);
