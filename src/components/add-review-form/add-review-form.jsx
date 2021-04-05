import React, {useState, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchSetComment} from "../../store/api-actions";
import {COMMENT_LENGTH_ERROR, DEFAULT_MIN_LENGTH_COMMENT, DEFAULT_MAX_LENGTH_COMMENT} from "../../const";

import AddReviewFormTextarea from "./add-review-form-textarea";
import AddReviewFormRating from "./add-review-from-rating";
import AddReviewFormButton from "./add-review-form-button";

const AddReviewForm = () => {
  const {filmData: {itemId}} = useSelector((state) => state.FILM_DATA.film);

  const [disabledFormStatus, setDisabledFormStatus] = useState(false);
  const [comment, setComment] = useState(``);
  const [rating, setRating] = useState(10);
  const [error, setError] = useState(``);

  const dispatch = useDispatch();

  const handleSetRating = useCallback(({target}) => {
    setRating(target.value);
  }, [rating]);

  const handleSetComment = ({target}) => {
    setComment(target.value);

    if (comment.length < DEFAULT_MIN_LENGTH_COMMENT) {
      setError(COMMENT_LENGTH_ERROR);
    } else {
      setError(``);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setDisabledFormStatus(true);

    dispatch(fetchSetComment({
      id: itemId,
      rating,
      comment
    }));

    setDisabledFormStatus(false);
  };

  return (
    <div className="add-review">
      {error ? (<p>{error}</p>) : ``}
      <form onSubmit={handleSubmit} action="#" className="add-review__form">

        <AddReviewFormRating
          onChange={handleSetRating}
          disabledFormStatus={disabledFormStatus}
        />

        <div className="add-review__text">

          <AddReviewFormTextarea
            onChange = {handleSetComment}
            maxLength={DEFAULT_MAX_LENGTH_COMMENT}
            value={comment}
            disabledFormStatus={disabledFormStatus}
          />

          <AddReviewFormButton
            disabledFormStatus={disabledFormStatus}
            commentLength={comment.length}
          />

        </div>

        <small>Comment length: {comment.length}</small>

      </form>
    </div>
  );
};


export default AddReviewForm;
