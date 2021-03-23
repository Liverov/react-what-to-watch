import React from 'react';

import {countCardsHandlerPropType} from '../../types';

const ShowMore = ({countCardsHandler}) => (
  <div className="catalog__more">
    <button
      className="catalog__button"
      type="button"
      onClick={countCardsHandler}
    >
      Show more
    </button>
  </div>
);

ShowMore.propTypes = {
  countCardsHandler: countCardsHandlerPropType
};

export default ShowMore;
