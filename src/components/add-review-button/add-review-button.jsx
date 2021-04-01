import React from "react";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

const AddReviewButton = ({itemId}) => {
  return (
    <Link
      to={`/films/${itemId}/review`}
      className="btn movie-card__button"
    >
      Add review
    </Link>
  );
};

AddReviewButton.propTypes = {
  itemId: PropTypes.number.isRequired
};

export default AddReviewButton;
