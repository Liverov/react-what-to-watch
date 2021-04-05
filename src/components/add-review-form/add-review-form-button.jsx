import React from "react";
import PropTypes from "prop-types";
import {DEFAULT_MIN_LENGTH_COMMENT} from "../../const";

const AddReviewFormButton = ({commentLength, disabledFormStatus}) => {
  let disabledButtonStatus = false;
  if (commentLength < DEFAULT_MIN_LENGTH_COMMENT) {
    disabledButtonStatus = true;
  }

  return (
    <div className="add-review__submit">
      <button
        className="add-review__btn"
        type="submit"
        name="submit-button"
        disabled = {!disabledButtonStatus ? disabledFormStatus : disabledButtonStatus}
      >
        Post
      </button>
    </div>
  );
};

AddReviewFormButton.propTypes = {
  commentLength: PropTypes.number,
  disabledFormStatus: PropTypes.bool
};

export default AddReviewFormButton;
