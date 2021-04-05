import React, {Fragment} from "react";
import PropTypes from "prop-types";

const ratingList = [...Array(10).keys()];

const AddReviewFormRating = ({disabledFormStatus, onChange}) => {
  return (
    <div className="rating">
      <div className="rating__stars">
        {
          ratingList.map((item) => {
            return (
              <Fragment key={item}>
                <input onChange={onChange} className="rating__input" id={`star-${item + 1}`} type="radio" name="rating" value={item + 1} disabled={disabledFormStatus}/>
                <label className="rating__label" htmlFor={`star-${item + 1}`}>Rating {item + 1}</label>
              </Fragment>
            );
          })
        }
      </div>
    </div>
  );
};

AddReviewFormRating.propTypes = {
  onChange: PropTypes.func,
  disabledFormStatus: PropTypes.bool
};

export default React.memo(AddReviewFormRating);
