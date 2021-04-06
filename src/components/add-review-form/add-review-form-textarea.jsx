import React from "react";
import PropTypes from "prop-types";

const AddReviewFormTextarea = ({blockCommentForm, maxLength, onChange}) => {
  return (
    <textarea
      onFocus={(evt) => (evt.target.placeholder = ``)}
      onChange={onChange}
      maxLength={maxLength}
      className="add-review__textarea"
      name="review-text"
      id="review-text"
      placeholder="Review text"
      required
      disabled={blockCommentForm}
    >
    </textarea>
  );
};

AddReviewFormTextarea.propTypes = {
  onChange: PropTypes.func,
  blockCommentForm: PropTypes.bool,
  maxLength: PropTypes.number
};

export default AddReviewFormTextarea;
