import React, {useState} from 'react';
import {connect} from "react-redux";
import {setComment} from "../../api-actions";
import {filmPropType, onSetCommentPropType} from "../../types";
import {LimitCommentLength, CommentFormTextErrorMessage} from "../../const";

const AddReviewForm = ({film, onSetComment}) => {
  const {filmData: {itemId}} = film;

  const [reviewForm, setReviewFrom] = useState({
    'rating': 10,
    'review-text': ``
  });

  const [errorMessage, setErrorMessage] = useState(CommentFormTextErrorMessage.MIN_CHARS);

  const toggleDisabled = (element, status) => {
    for (const target of element) {
      target.disabled = status;
    }
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();

    toggleDisabled(evt.target[`rating`], true);
    evt.target[`review-text`].disabled = true;
    evt.target[`submit-button`].disabled = true;

    onSetComment({
      id: itemId,
      rating: reviewForm.rating,
      comment: reviewForm[`review-text`]
    });

    toggleDisabled(evt.target[`rating`], false);
    evt.target[`review-text`].disabled = false;
    evt.target[`submit-button`].disabled = false;
  };

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;

    setReviewFrom({
      ...reviewForm,
      [name]: value
    });

    if (name === `review-text`) {
      if (value.length < LimitCommentLength.MIN) {
        setErrorMessage(CommentFormTextErrorMessage.MIN_CHARS);
      } else if (value.length > LimitCommentLength.MAX) {
        setErrorMessage(CommentFormTextErrorMessage.MAX_CHARS);
      } else {
        setErrorMessage(``);
      }
    }
  };

  return (
    <div className="add-review">
      <p>{errorMessage}</p>
      <form onSubmit={handleSubmit} action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            <input onChange={handleFieldChange} className="rating__input" id="star-1" type="radio" name="rating" value="1"/>
            <label className="rating__label" htmlFor="star-1">Rating 1</label>

            <input onChange={handleFieldChange} className="rating__input" id="star-2" type="radio" name="rating" value="2" />
            <label className="rating__label" htmlFor="star-2">Rating 2</label>

            <input onChange={handleFieldChange} className="rating__input" id="star-3" type="radio" name="rating" value="3" />
            <label className="rating__label" htmlFor="star-3">Rating 3</label>

            <input onChange={handleFieldChange} className="rating__input" id="star-4" type="radio" name="rating" value="4" />
            <label className="rating__label" htmlFor="star-4">Rating 4</label>

            <input onChange={handleFieldChange} className="rating__input" id="star-5" type="radio" name="rating" value="5" />
            <label className="rating__label" htmlFor="star-5">Rating 5</label>

            <input onChange={handleFieldChange} className="rating__input" id="star-6" type="radio" name="rating" value="6"/>
            <label className="rating__label" htmlFor="star-6">Rating 6</label>

            <input onChange={handleFieldChange} className="rating__input" id="star-7" type="radio" name="rating" value="7" />
            <label className="rating__label" htmlFor="star-7">Rating 7</label>

            <input onChange={handleFieldChange} className="rating__input" id="star-8" type="radio" name="rating" value="8" />
            <label className="rating__label" htmlFor="star-8">Rating 8</label>

            <input onChange={handleFieldChange} className="rating__input" id="star-9" type="radio" name="rating" value="9" />
            <label className="rating__label" htmlFor="star-9">Rating 9</label>

            <input onChange={handleFieldChange} className="rating__input" id="star-10" type="radio" name="rating" value="10" />
            <label className="rating__label" htmlFor="star-10">Rating 10</label>
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            onFocus={(evt) => (evt.target.placeholder = ``)}
            onChange={handleFieldChange}
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text">
          </textarea>
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              name="submit-button"
            >
              Post
            </button>
          </div>
        </div>
        <small>Characters counter: {reviewForm[`review-text`].length}</small>
      </form>
    </div>
  );
};

AddReviewForm.propTypes = {
  film: filmPropType,
  onSetComment: onSetCommentPropType
};

const mapStateToProps = ({film}) => ({film});
const mapDispatchToProps = (dispatch) => ({
  onSetComment(commentData) {
    dispatch(setComment(commentData));
  }
});

export {AddReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(AddReviewForm);
