import React from "react";
import PropTypes from "prop-types";

const AddReviewFormTextarea = ({disabledStatus, maxLength, onChange}) => {
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
      disabled={disabledStatus}
    >
    </textarea>
  );
};

AddReviewFormTextarea.propTypes = {
  onChange: PropTypes.func,
  disabledStatus: PropTypes.bool,
  maxLength: PropTypes.number
};

export default AddReviewFormTextarea;
