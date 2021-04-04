import {ActionType} from "../actions";

const initialState = {
  film: {
    filmData: {},
    isFilmLoaded: false,
    isPromo: false
  },
};

const filmData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FILM:
      return {
        ...state,
        film: action.payload
      };
    default:
      return state;
  }
};

export {filmData};
