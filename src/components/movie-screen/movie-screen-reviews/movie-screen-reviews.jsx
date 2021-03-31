import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {useParams} from "react-router-dom";

import {getNormalizeDate} from "../../../utils/utils";
import {filmPropType, commentsPropType, onLoadDataPropType} from '../../../types';
import {fetchComments} from "../../../api-actions";

import Loader from "../../loader/loader";

const MovieScreenReviews = ({film, comments, onLoadData}) => {
  const {id} = useParams();
  const {filmData: {itemId}} = film;
  const {commentsData, isCommentsLoaded} = comments;

  useEffect(() => {
    if (!isCommentsLoaded || itemId !== commentsData.itemId || id !== commentsData.itemId) {
      onLoadData(itemId);
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

MovieScreenReviews.propTypes = {
  film: filmPropType,
  comments: commentsPropType,
  onLoadData: onLoadDataPropType
};

const mapStateToProps = ({film, comments}) => ({film, comments});
const mapDispatchToProps = (dispatch) => ({
  onLoadData(id) {
    dispatch(fetchComments(id));
  }
});
export {MovieScreenReviews};
export default connect(mapStateToProps, mapDispatchToProps)(MovieScreenReviews);
