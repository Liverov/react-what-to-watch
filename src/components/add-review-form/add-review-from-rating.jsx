import React from "react";
import PropTypes from "prop-types";

const AddReviewFormRating = ({disabledStatus, onChange}) => {
  return (
    <div className="rating">
      <div className="rating__stars">
        <input onChange={onChange} className="rating__input" id="star-1" type="radio" name="rating" value="1" disabled={disabledStatus} />
        <label className="rating__label" htmlFor="star-1">Rating 1</label>

        <input onChange={onChange} className="rating__input" id="star-2" type="radio" name="rating" value="2" disabled={disabledStatus} />
        <label className="rating__label" htmlFor="star-2">Rating 2</label>

        <input onChange={onChange} className="rating__input" id="star-3" type="radio" name="rating" value="3" disabled={disabledStatus} />
        <label className="rating__label" htmlFor="star-3">Rating 3</label>

        <input onChange={onChange} className="rating__input" id="star-4" type="radio" name="rating" value="4" disabled={disabledStatus} />
        <label className="rating__label" htmlFor="star-4">Rating 4</label>

        <input onChange={onChange} className="rating__input" id="star-5" type="radio" name="rating" value="5" disabled={disabledStatus} />
        <label className="rating__label" htmlFor="star-5">Rating 5</label>

        <input onChange={onChange} className="rating__input" id="star-6" type="radio" name="rating" value="6" disabled={disabledStatus} />
        <label className="rating__label" htmlFor="star-6">Rating 6</label>

        <input onChange={onChange} className="rating__input" id="star-7" type="radio" name="rating" value="7" disabled={disabledStatus} />
        <label className="rating__label" htmlFor="star-7">Rating 7</label>

        <input onChange={onChange} className="rating__input" id="star-8" type="radio" name="rating" value="8" disabled={disabledStatus} />
        <label className="rating__label" htmlFor="star-8">Rating 8</label>

        <input onChange={onChange} className="rating__input" id="star-9" type="radio" name="rating" value="9" disabled={disabledStatus} />
        <label className="rating__label" htmlFor="star-9">Rating 9</label>

        <input onChange={onChange} className="rating__input" id="star-10" type="radio" name="rating" value="10" disabled={disabledStatus} />
        <label className="rating__label" htmlFor="star-10">Rating 10</label>
      </div>
    </div>
  );
};

AddReviewFormRating.propTypes = {
  onChange: PropTypes.func,
  disabledStatus: PropTypes.bool
};

export default React.memo(AddReviewFormRating);
