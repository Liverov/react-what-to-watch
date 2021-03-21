import React from 'react';
import {connect} from "react-redux";
import {showMoreCardsPropType} from '../../types';
import {ActionCreator} from "../../actions/actions";
import {CountCardsOnPage} from "../../const";

const ShowMore = ({showMoreCards}) => (
  <div className="catalog__more">
    <button
      className="catalog__button"
      type="button"
      onClick={showMoreCards}
    >
      Show more
    </button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  showMoreCards() {
    dispatch(ActionCreator.showMoreCards(CountCardsOnPage.MAIN));
  }
});

ShowMore.propTypes = {
  showMoreCards: showMoreCardsPropType
};

export {ShowMore};
export default connect(null, mapDispatchToProps)(ShowMore);
