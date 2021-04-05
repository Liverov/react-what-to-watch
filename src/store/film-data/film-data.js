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
    case ActionType.UPDATE_FAVORITE:
      const {status, isPromo} = action.payload;
      return ({
        ...state,
        film: {
          filmData: {
            ...state.film.filmData,
            isFavorite: status
          },
          isFilmLoaded: true,
          isPromo
        }
      });
    default:
      return state;
  }
};

export {filmData};
