import React from "react";
import PropTypes from "prop-types";
import {DefaultLengthComment} from "../../const";

const AddReviewFormButton = ({commentLength, blockCommentForm}) => {
  let blockButtonStatus = false;
  if (commentLength < DefaultLengthComment.MIN) {
    blockButtonStatus = true;
  }

  return (
    <div className="add-review__submit">
      <button
        className="add-review__btn"
        type="submit"
        name="submit-button"
        disabled = {!blockButtonStatus ? blockCommentForm : blockButtonStatus}
      >
        Post
      </button>
    </div>
  );
};

AddReviewFormButton.propTypes = {
  commentLength: PropTypes.number,
  blockCommentForm: PropTypes.bool
};

export default AddReviewFormButton;
