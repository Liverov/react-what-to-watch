import React from 'react';
import {filmPropType, reviewsPropType} from '../../props';
import {getRandomInt} from '../../utils';
import reviews from '../../mocks/reviews';

const MovieScreenReviews = ({film}) => (
  <div className="movie-card__reviews movie-card__row">
    <div className="movie-card__reviews-col">
      {reviews.filter((review) => review.id === film.id).map((review) => (
        <div key={getRandomInt(0, 100)} className="review">
          <blockquote className="review__quote">
            <p className="review__text">{review.comment}</p>
            <footer className="review__details">
              <cite className="review__author">{review.user.name}</cite>
              <time className="review__date" dateTime="2016-12-24">{review.date}</time>
            </footer>
          </blockquote>
          <div className="review__rating">{review.rating}</div>
        </div>
      ))}
    </div>
  </div>
);

MovieScreenReviews.propTypes = {
  film: filmPropType,
  reviews: reviewsPropType
};

export default MovieScreenReviews;
