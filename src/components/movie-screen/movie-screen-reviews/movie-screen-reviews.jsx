import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {getNormalizeDate} from "../../../utils";
import {fetchComments} from "../../../store/api-actions";

import Loader from "../../loader/loader";

const MovieScreenReviews = () => {
  const {id} = useParams();
  const {filmData: {itemId}} = useSelector((state) => state.FILM_DATA.film);
  const {commentsData, isCommentsLoaded} = useSelector((state) => state.COMMENTS_DATA.comments);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isCommentsLoaded || itemId !== commentsData.itemId || id !== commentsData.itemId) {
      dispatch(fetchComments(itemId));
    }
  }, [itemId]);

  if (!isCommentsLoaded) {
    return (
      <Loader />
    );
  }

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {commentsData.map((comment) => (
          <div key={comment.itemId} className="review">
            <blockquote className="review__quote">
              <p className="review__text">{comment.comment}</p>
              <footer className="review__details">
                <cite className="review__author">{comment.user.name}</cite>
                <time
                  className="review__date"
                  dateTime={getNormalizeDate(comment.date, {year: `numeric`, month: `numeric`, day: `numeric`})}
                >
                  {getNormalizeDate(comment.date, {year: `numeric`, month: `long`, day: `numeric`})}
                </time>
              </footer>
            </blockquote>
            <div className="review__rating">{comment.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieScreenReviews;
