import React from "react";
import PropTypes from "prop-types";
import {DEFAULT_MIN_LENGTH_COMMENT} from "../../const";

const AddReviewFormButton = ({commentLength, disabledStatus}) => {
  let innerDisabledStatus = false;
  if (commentLength < DEFAULT_MIN_LENGTH_COMMENT) {
    innerDisabledStatus = true;
  }

  return (
    <div className="add-review__submit">
      <button
        className="add-review__btn"
        type="submit"
        name="submit-button"
        disabled = {!innerDisabledStatus ? disabledStatus : innerDisabledStatus}
      >
        Post
      </button>
    </div>
  );
};

AddReviewFormButton.propTypes = {
  commentLength: PropTypes.number,
  disabledStatus: PropTypes.bool
};

export default AddReviewFormButton;
