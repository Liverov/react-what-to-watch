import React, {useState, useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {fetchSetComment} from "../../store/api-actions";
import {SetErrors, DefaultLengthComment, APIRoutes} from "../../const";
import {setError} from "../../store/actions";

import AddReviewFormTextarea from "./add-review-form-textarea";
import AddReviewFormRating from "./add-review-from-rating";
import AddReviewFormButton from "./add-review-form-button";

const AddReviewForm = () => {
  const {filmData: {itemId}} = useSelector((state) => state.FILM_DATA.film);
  const {blockCommentForm, isErrorCommentForm} = useSelector((state) => state.COMMENTS_DATA.comments);
  const {error} = useSelector((state) => state.ERROR);

  const [comment, setComment] = useState(``);
  const [rating, setRating] = useState(10);
  const [submit, setSubmit] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSetRating = useCallback(({target}) => {
    setRating(target.value);
  }, [rating]);

  const handleSetComment = ({target}) => {
    setComment(target.value);

    if (comment.length < DefaultLengthComment.MIN) {
      dispatch(setError(SetErrors.COMMENT_LENGTH_ERROR));
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setSubmit(true);
    dispatch(fetchSetComment({
      id: itemId,
      rating,
      comment
    }));
  };

  useEffect(() => {
    if (submit && !blockCommentForm && !isErrorCommentForm) {
      history.push(`${APIRoutes.FILMS}/${itemId}`);
    }
  }, [blockCommentForm, isErrorCommentForm]);

  return (
    <div className="add-review">
      {error ? (<p>{error}</p>) : ``}
      <form onSubmit={handleSubmit} action="#" className="add-review__form">

        <AddReviewFormRating
          onChange={handleSetRating}
          blockCommentForm={blockCommentForm}
        />

        <div className="add-review__text">

          <AddReviewFormTextarea
            onChange = {handleSetComment}
            maxLength={DefaultLengthComment.MAX}
            value={comment}
            blockCommentForm={blockCommentForm}
          />

          <AddReviewFormButton
            blockCommentForm={blockCommentForm}
            commentLength={comment.length}
          />

        </div>

        <small>Comment length: {comment.length}</small>

      </form>
    </div>
  );
};


export default AddReviewForm;
