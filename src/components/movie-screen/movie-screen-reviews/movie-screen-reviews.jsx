import React, {useEffect} from 'react';
import {connect} from "react-redux";

import {getNormalizeDate} from "../../../utils/utils";
import {filmPropType, commentsPropType, onLoadDataPropType, onResetDataPropType} from '../../../types';
import {fetchComments} from "../../../api-actions";
import {ActionCreator} from "../../../actions/actions";

import Spinner from "../../spinner/spinner";

const MovieScreenReviews = ({film, comments, onLoadData, onResetData}) => {
  const {filmData: {itemId}} = film;
  const {commentsData, isCommentsLoaded} = comments;

  useEffect(() => {
    if (!isCommentsLoaded) {
      onLoadData(itemId);
    }
  }, [isCommentsLoaded]);

  useEffect(() => {
    return onResetData();
  }, [itemId]);

  if (!isCommentsLoaded) {
    return (
      <Spinner />
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
  onLoadData: onLoadDataPropType,
  onResetData: onResetDataPropType
};

const mapStateToProps = ({film, comments}) => ({film, comments});
const mapDispatchToProps = (dispatch) => ({
  onLoadData(id) {
    dispatch(fetchComments(id));
  },
  onResetData() {
    dispatch(ActionCreator.resetComments());
  }
});
export {MovieScreenReviews};
export default connect(mapStateToProps, mapDispatchToProps)(MovieScreenReviews);
