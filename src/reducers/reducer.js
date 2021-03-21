import {ActionType} from "../actions/actions";
import films from '../mocks/films';
import {CountCardsOnPage, FILTER_DEFAULT} from "../const";

const initialState = {
  genre: FILTER_DEFAULT,
  films,
  countCardsOnPage: CountCardsOnPage.MAIN
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload
      };
    case ActionType.SHOW_MORE_CARDS:
      return {
        ...state,
        countCardsOnPage: state.countCardsOnPage + action.payload
      };
    case ActionType.RESET_COUNT_CARDS:
      return {
        ...state,
        countCardsOnPage: initialState.countCardsOnPage
      };

    default: return state;
  }
};

export {reducer};
