import React from "react";
import PropTypes from "prop-types";

const AddReviewFormTextarea = ({disabledFormStatus, maxLength, onChange}) => {
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
      disabled={disabledFormStatus}
    >
    </textarea>
  );
};

AddReviewFormTextarea.propTypes = {
  onChange: PropTypes.func,
  disabledFormStatus: PropTypes.bool,
  maxLength: PropTypes.number
};

export default AddReviewFormTextarea;
